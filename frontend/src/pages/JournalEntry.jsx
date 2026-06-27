import { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { JOURNAL_NOTES } from "@/data/site";
import { KOBI_NOTE_BY_SLUG } from "@/data/journalNotes";
import { JOURNAL } from "@/constants/testIds";
import NotFound from "@/pages/NotFound";
import { applyPageSeo, breadcrumbSchema, articleSchema } from "@/lib/seo";

export default function JournalEntry() {
  const { slug } = useParams();
  const note = useMemo(() => {
    const authored = KOBI_NOTE_BY_SLUG[slug];
    if (authored) return authored;
    return JOURNAL_NOTES.find((n) => n.slug === slug);
  }, [slug]);

  useEffect(() => {
    if (!note) return undefined;
    const prev = document.title;
    const path = `/journal/${slug}`;
    applyPageSeo({
      title: note.seo_title || `${note.title} | Journal | Kobi Israel`,
      description: (note.meta_description || note.excerpt || `${note.title} — archive note by Kobi Israel.`).slice(0, 200),
      path,
      ogType: "article",
      image: note.hero_image || undefined,
      imageAlt:
        note.hero_alt ||
        `Image accompanying the archive note "${note.title}" by Kobi Israel.`,
      jsonLd: [
        {
          id: "entry-breadcrumb",
          data: breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Journal", path: "/journal" },
            { name: note.title, path },
          ]),
        },
        {
          id: "entry-article",
          data: articleSchema({
            name: note.title,
            description: note.excerpt,
            path,
            category: note.category,
          }),
        },
      ],
    });
    window.scrollTo(0, 0);
    return () => {
      document.title = prev;
    };
  }, [note, slug]);

  if (!note) {
    return (
      <div data-testid={JOURNAL.entryNotFound}>
        <NotFound />
      </div>
    );
  }

  return (
    <article data-testid={JOURNAL.entryPage} className="bg-ki-bg">
      {/* HERO IMAGE */}
      <section className="relative aspect-[16/8] w-full overflow-hidden border-b border-ki-border">
        {note.hero_image ? (
          <img
            src={note.hero_image}
            alt={note.hero_alt || `Hero image — ${note.title} by Kobi Israel`}
            loading="eager"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
        ) : (
          <div className="absolute inset-0 bg-ki-elevated flex items-center justify-center">
            <span className="text-[10px] uppercase tracking-[0.28em] text-ki-muted/70">
              Hero image · to be confirmed by artist
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-ki-bg/30 via-ki-bg/0 to-ki-bg" />
      </section>

      {/* TITLE BLOCK */}
      <section className="pt-24 md:pt-32 pb-10 border-b border-ki-border">
        <div className="container-ki max-w-3xl">
          {(note.theme || note.number) && (
            <p className="overline">
              {note.number ? `Note · ${note.number}` : "Journal"}
              {note.theme ? ` · ${note.theme}` : null}
            </p>
          )}
          <h1
            data-testid={JOURNAL.entryTitle}
            className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg leading-[0.98]"
          >
            {note.title}
          </h1>
          {note.subtitle && (
            <p
              data-testid={JOURNAL.entrySubtitle}
              className="mt-6 font-serif italic text-lg sm:text-xl text-ki-beige/90"
            >
              {note.subtitle}
            </p>
          )}
          {note.epigraph && (
            <p
              data-testid="journal-entry-epigraph"
              className="mt-8 font-serif italic text-base sm:text-lg text-ki-fg/70 border-l border-ki-gold/60 pl-5"
            >
              ‘{note.epigraph}’
            </p>
          )}
          <div className="mt-8 flex flex-col gap-1 text-[11px] uppercase tracking-[0.22em] text-ki-muted">
            {note.date_location && (
              <span data-testid="journal-entry-date-location" className="text-ki-fg/85">
                {note.date_location}
              </span>
            )}
            <span data-testid="journal-entry-byline">By Kobi Israel</span>
          </div>
        </div>
      </section>

      {/* BODY TEXT */}
      <section className="py-20 md:py-28 border-b border-ki-border">
        <div data-testid={JOURNAL.entryBody} className="container-ki max-w-2xl">
          {Array.isArray(note.body) && note.body.length > 0 ? (
            note.body.map((para, idx) => (
              <p
                key={idx}
                className={`${idx === 0 ? "" : "mt-6"} text-base md:text-lg leading-relaxed text-ki-fg/85`}
              >
                {para}
              </p>
            ))
          ) : (
            <>
              <p className="text-base md:text-lg leading-relaxed text-ki-fg/85">
                {note.excerpt}
              </p>
              <p className="mt-6 text-base md:text-lg leading-relaxed text-ki-fg/85">
                Final text to be supplied by the artist.
              </p>
            </>
          )}

          {/* INTERNAL LINKS */}
          {Array.isArray(note.internal_links) && note.internal_links.length > 0 && (
            <nav
              data-testid="journal-entry-related"
              className="mt-16 pt-10 border-t border-ki-border"
              aria-label="Related work"
            >
              <p className="overline mb-5">Related</p>
              <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
                {note.internal_links.map((lnk) => (
                  <li key={lnk.to}>
                    <Link
                      to={lnk.to}
                      className="text-ki-fg/85 hover:text-ki-gold underline-offset-4 hover:underline transition-colors"
                    >
                      {lnk.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* TAGS */}
          {Array.isArray(note.tags) && note.tags.length > 0 && (
            <div
              data-testid="journal-entry-tags"
              className="mt-10 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.22em] text-ki-muted"
            >
              {note.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-ki-border px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* RELATED LINKS */}
      <section className="py-20 md:py-28 border-b border-ki-border bg-ki-surface">
        <div className="container-ki">
          <div className="overline">Related</div>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ki-fg">
            Connected to this note
          </h2>
          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-ki-border border border-ki-border">
            <li
              data-testid={JOURNAL.entryRelatedStill}
              className="bg-ki-surface p-6 min-h-[160px] flex flex-col justify-between"
            >
              <div className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">
                Related still
              </div>
              <Link
                to={`/projects/${note.related_project}`}
                className="mt-3 font-serif text-lg text-ki-fg hover:text-ki-gold transition-colors"
              >
                {note.related_project} →
              </Link>
            </li>
            <li
              data-testid={JOURNAL.entryRelatedMoving}
              className="bg-ki-surface p-6 min-h-[160px] flex flex-col justify-between"
            >
              <div className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">
                Related moving
              </div>
              <Link
                to="/moving"
                className="mt-3 font-serif text-lg text-ki-fg hover:text-ki-gold transition-colors"
              >
                Moving image archive →
              </Link>
            </li>
            <li
              data-testid={JOURNAL.entryRelatedBook}
              className="bg-ki-surface p-6 min-h-[160px] flex flex-col justify-between"
            >
              <div className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">
                Related book
              </div>
              <Link
                to="/books"
                className="mt-3 font-serif text-lg text-ki-fg hover:text-ki-gold transition-colors"
              >
                Books and publications →
              </Link>
            </li>
            <li
              data-testid={JOURNAL.entryRelatedPrint}
              className="bg-ki-surface p-6 min-h-[160px] flex flex-col justify-between"
            >
              <div className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">
                Related print
              </div>
              <Link
                to="/prints"
                className="mt-3 font-serif text-lg text-ki-fg hover:text-ki-gold transition-colors"
              >
                Limited edition prints →
              </Link>
            </li>
            <li
              data-testid={JOURNAL.entryRelatedNote}
              className="bg-ki-surface p-6 min-h-[160px] flex flex-col justify-between"
            >
              <div className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">
                Related archive note
              </div>
              <Link
                to="/archive"
                className="mt-3 font-serif text-lg text-ki-fg hover:text-ki-gold transition-colors"
              >
                Archive →
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* FOOTER ACTIONS */}
      <section className="py-20 md:py-28">
        <div className="container-ki flex flex-col sm:flex-row gap-4 sm:gap-6">
          <Link
            to="/journal"
            data-testid={JOURNAL.entryBack}
            className="inline-flex items-center justify-center border border-ki-fg/40 text-ki-fg hover:border-ki-fg px-8 py-4 text-xs uppercase tracking-[0.24em]"
          >
            ← Back to Journal
          </Link>
          <Link
            to="/archive#archive-inquiry"
            data-testid={JOURNAL.entryInquiry}
            className="inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg px-8 py-4 text-xs uppercase tracking-[0.24em] transition-colors duration-300"
          >
            Send an Inquiry
          </Link>
        </div>
      </section>
    </article>
  );
}
