import { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { JOURNAL_NOTES } from "@/data/site";
import { JOURNAL } from "@/constants/testIds";
import NotFound from "@/pages/NotFound";
import { applyPageSeo, breadcrumbSchema, articleSchema } from "@/lib/seo";

export default function JournalEntry() {
  const { slug } = useParams();
  const note = useMemo(() => JOURNAL_NOTES.find((n) => n.slug === slug), [slug]);

  useEffect(() => {
    if (!note) return undefined;
    const prev = document.title;
    const path = `/journal/${slug}`;
    applyPageSeo({
      title: `${note.title} | Journal | Kobi Israel`,
      description: (note.excerpt || `${note.title} — archive note by Kobi Israel.`).slice(0, 155),
      path,
      ogType: "article",
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
        <div className="absolute inset-0 bg-ki-elevated flex items-center justify-center">
          <span className="text-[10px] uppercase tracking-[0.28em] text-ki-muted/70">
            Hero image · placeholder
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ki-bg/0 via-ki-bg/0 to-ki-bg" />
      </section>

      {/* TITLE BLOCK */}
      <section className="pt-24 md:pt-32 pb-12 border-b border-ki-border">
        <div className="container-ki max-w-3xl">
          <div className="overline">Journal · {note.category}</div>
          <h1
            data-testid={JOURNAL.entryTitle}
            className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg leading-[0.98]"
          >
            {note.title}
          </h1>
          <p
            data-testid={JOURNAL.entrySubtitle}
            className="mt-6 font-serif italic text-lg sm:text-xl text-ki-beige/90"
          >
            {note.subtitle}
          </p>
          <dl
            data-testid={JOURNAL.entryMeta}
            className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-[10px] uppercase tracking-[0.22em]"
          >
            <div>
              <dt className="text-ki-muted">Date</dt>
              <dd className="mt-2 text-ki-fg/85">{note.date}</dd>
            </div>
            <div>
              <dt className="text-ki-muted">Category</dt>
              <dd className="mt-2 text-ki-fg/85">{note.category}</dd>
            </div>
            <div>
              <dt className="text-ki-muted">Medium</dt>
              <dd className="mt-2 text-ki-fg/85 capitalize">{note.medium}</dd>
            </div>
            <div>
              <dt className="text-ki-muted">Project</dt>
              <dd className="mt-2 text-ki-fg/85">{note.related_project}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* BODY TEXT */}
      <section className="py-20 md:py-28 border-b border-ki-border">
        <div data-testid={JOURNAL.entryBody} className="container-ki max-w-2xl">
          <p className="text-base md:text-lg leading-relaxed text-ki-fg/85">
            {note.excerpt}
          </p>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-ki-fg/85">
            Final text to be supplied by the artist. The full essay, note or fragment will be
            placed here, with quiet typography and adequate breathing room.
          </p>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-ki-fg/85">
            To be confirmed by artist. Additional paragraphs, images, captions and pull quotes
            will accompany the body text as the writing develops.
          </p>

          {/* PULL QUOTE */}
          <blockquote
            data-testid={JOURNAL.entryPullquote}
            className="my-16 border-l-2 border-ki-gold pl-8 py-2"
          >
            <p className="font-serif italic text-2xl md:text-3xl text-ki-fg leading-snug">
              Pull quote placeholder — final text to be supplied by the artist.
            </p>
            <footer className="mt-4 text-[10px] uppercase tracking-[0.28em] text-ki-muted">
              — Kobi Israel, archive note
            </footer>
          </blockquote>

          {/* IMAGE INSERT PLACEHOLDER */}
          <figure className="my-12">
            <div className="relative aspect-[4/3] bg-ki-elevated border border-ki-border/60 flex items-center justify-center">
              <span className="text-[10px] uppercase tracking-[0.28em] text-ki-muted/70">
                Image insert · placeholder
              </span>
            </div>
            <figcaption className="mt-3 text-[11px] uppercase tracking-[0.22em] text-ki-muted">
              Caption to be supplied by artist
            </figcaption>
          </figure>

          <p className="text-base md:text-lg leading-relaxed text-ki-fg/85">
            Closing paragraph placeholder. Final closing text to be supplied by the artist.
          </p>
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
