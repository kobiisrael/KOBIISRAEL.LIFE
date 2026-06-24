import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { toast } from "sonner";
import { subscribeNewsletter } from "@/lib/api";
import {
  JOURNAL_HERO,
  JOURNAL_EDITORIAL_IMAGE,
  JOURNAL_FEATURED_NOTES,
  JOURNAL_CATEGORIES,
  JOURNAL_FILTERS,
  JOURNAL_NOTES,
  JOURNAL_PROJECT_NOTES,
  JOURNAL_MOTIFS,
  JOURNAL_VOICE_FILM_CARDS,
  JOURNAL_NEWSLETTER_INTERESTS,
  JOURNAL_RELATED_LINKS,
} from "@/data/site";
import { JOURNAL } from "@/constants/testIds";

const setMeta = (name, content) => {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("artist-notes");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      await subscribeNewsletter({ email, source: "journal", interest });
      setSubmitted(true);
      setEmail("");
      toast.success("Thank you. You will receive occasional archive notes and project updates.");
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Could not subscribe. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls =
    "w-full bg-transparent border-b border-ki-border focus:border-ki-gold outline-none text-ki-fg placeholder:text-ki-muted py-3 transition-colors";
  const labelCls = "text-[10px] uppercase tracking-[0.28em] text-ki-muted";

  return (
    <form
      data-testid={JOURNAL.newsletterForm}
      onSubmit={submit}
      noValidate
      className="flex flex-col gap-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-journal-email" className={labelCls}>
            Email address
          </label>
          <input
            id="ki-journal-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            data-testid={JOURNAL.newsletterEmail}
            className={inputCls}
            placeholder="you@studio.com"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ki-journal-interest" className={labelCls}>
            Interest type
          </label>
          <select
            id="ki-journal-interest"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            data-testid={JOURNAL.newsletterInterest}
            className={`${inputCls} appearance-none`}
          >
            {JOURNAL_NEWSLETTER_INTERESTS.map((o) => (
              <option key={o.value} value={o.value} className="bg-ki-bg text-ki-fg">
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-6">
        <button
          type="submit"
          disabled={submitting}
          data-testid={JOURNAL.newsletterSubmit}
          className="inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg disabled:opacity-50 px-10 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300"
        >
          {submitting ? "Subscribing…" : "Subscribe"}
        </button>
        {submitted && (
          <span
            data-testid={JOURNAL.newsletterSuccess}
            className="text-sm text-ki-gold/90 max-w-md"
          >
            Thank you. You will receive occasional archive notes and project updates.
          </span>
        )}
      </div>
      <p className="text-[11px] uppercase tracking-[0.24em] text-ki-muted/80">
        Occasional dispatches only. No frequent updates, no marketing language.
      </p>
    </form>
  );
}

export default function Journal() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const prev = document.title;
    document.title = "Journal and Archive Notes | Kobi Israel";
    setMeta(
      "description",
      "Archive notes, artist texts, visual diary fragments and reflections by Kobi Israel on photography, moving image, masculinity, desire, exile, memory, books and personal mythology."
    );
    setMeta(
      "keywords",
      "Kobi Israel journal, Kobi Israel archive notes, Kobi Israel artist writing, Kobi Israel essays, photography and memory writing, artist visual diary, queer photography writing, autobiographical photography notes, moving image artist notes, photography archive essays, Kobi Israel artist statement, Kobi Israel personal mythology"
    );
    window.scrollTo(0, 0);
    return () => {
      document.title = prev;
    };
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return JOURNAL_NOTES.filter((n) => {
      const matchFilter = filter === "all" || (n.tags || []).includes(filter);
      const matchQuery =
        !q ||
        [
          n.title,
          n.subtitle,
          n.category,
          n.related_project,
          n.medium,
          n.excerpt,
          ...(n.tags || []),
        ]
          .join(" ")
          .toLowerCase()
          .includes(q);
      return matchFilter && matchQuery;
    });
  }, [query, filter]);

  return (
    <div data-testid={JOURNAL.page}>
      {/* HERO */}
      <section className="relative min-h-[80vh] w-full overflow-hidden grain">
        <img
          src={JOURNAL_HERO.image}
          alt={JOURNAL_HERO.alt}
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ki-bg/85 via-ki-bg/55 to-ki-bg" />
        <div className="relative container-ki min-h-[80vh] flex flex-col justify-end pb-20 pt-40">
          <div className="max-w-3xl">
            <div className="overline">Journal · Archive Notes</div>
            <h1
              data-testid={JOURNAL.heroTitle}
              className="mt-6 font-serif text-6xl sm:text-7xl lg:text-[9rem] leading-[0.92] tracking-tight text-ki-fg"
            >
              Journal
            </h1>
            <p
              data-testid={JOURNAL.heroSubtitle}
              className="mt-6 font-serif italic text-xl sm:text-2xl text-ki-beige/90"
            >
              Archive notes, artist texts and visual diary fragments
            </p>
            <p
              data-testid={JOURNAL.heroIntro}
              className="mt-6 max-w-2xl text-base sm:text-lg text-ki-fg/80 leading-relaxed"
            >
              Short texts, notes and reflections from the archive, where images become memory,
              voice, desire, place and time.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a
                href="#journal-index"
                data-testid={JOURNAL.heroCtaNotes}
                className="inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg transition-colors duration-300 px-8 py-4 text-xs uppercase tracking-[0.24em]"
              >
                Read Archive Notes
              </a>
              <Link
                to="/projects"
                data-testid={JOURNAL.heroCtaProjects}
                className="inline-flex items-center justify-center border border-ki-fg/40 text-ki-fg hover:border-ki-fg px-8 py-4 text-xs uppercase tracking-[0.24em]"
              >
                Explore Projects
              </Link>
            </div>
            <p className="mt-12 text-[11px] uppercase tracking-[0.3em] text-ki-muted">
              Final hero image to be selected by artist
            </p>
          </div>
        </div>
      </section>

      {/* EDITORIAL INTRO */}
      <section className="py-24 md:py-32 border-b border-ki-border">
        <div className="container-ki grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-7 max-w-2xl">
            <div className="overline">Introduction</div>
            <h2
              data-testid={JOURNAL.introHeading}
              className="mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ki-fg text-balance"
            >
              Writing as an Extension of the Image
            </h2>
            <p className="mt-8 text-base md:text-lg leading-relaxed text-ki-fg/85 text-balance">
              These notes gather fragments of memory, travel, desire, identity, masculinity, exile,
              photography, moving image and the self as witness. They are not explanations of the
              work, but companion pieces: traces left beside the images.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.28em] text-ki-muted">
              Final artist-approved introduction to be supplied
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] bg-ki-elevated border border-ki-border/60 overflow-hidden">
              <img
                src={JOURNAL_EDITORIAL_IMAGE.image}
                alt={JOURNAL_EDITORIAL_IMAGE.alt}
                loading="lazy"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED NOTES */}
      <section className="py-24 md:py-32 border-b border-ki-border bg-ki-surface">
        <div className="container-ki">
          <div className="overline">Featured</div>
          <h2
            data-testid={JOURNAL.featuredHeading}
            className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg"
          >
            Featured Notes
          </h2>
          <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ki-border border border-ki-border">
            {JOURNAL_FEATURED_NOTES.map((n, i) => (
              <li
                key={n.slug}
                data-testid={JOURNAL.featuredCard(n.slug)}
                className="bg-ki-surface p-6 min-h-[320px] flex flex-col"
              >
                <div className="relative aspect-[4/3] bg-ki-elevated border border-ki-border/60 mb-4 flex items-center justify-center text-[10px] uppercase tracking-[0.28em] text-ki-muted/70">
                  Note · {String(i + 1).padStart(2, "0")}
                </div>
                <div className="text-[10px] uppercase tracking-[0.26em] text-ki-gold/90">
                  {n.category}
                </div>
                <h3 className="mt-3 font-serif text-xl text-ki-fg tracking-tight">{n.title}</h3>
                <p className="mt-3 text-sm text-ki-fg/70 leading-relaxed flex-1">{n.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.22em]">
                  <span className="text-ki-muted">{n.date}</span>
                  <Link
                    to={`/journal/${n.slug}`}
                    data-testid={JOURNAL.featuredCta(n.slug)}
                    className="text-ki-fg/85 hover:text-ki-gold transition-colors"
                  >
                    Read Note →
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-24 md:py-32 border-b border-ki-border">
        <div className="container-ki">
          <div className="overline">Categories</div>
          <h2
            data-testid={JOURNAL.categoriesHeading}
            className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg"
          >
            Categories
          </h2>
          <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-ki-border border border-ki-border">
            {JOURNAL_CATEGORIES.map((c) => (
              <li
                key={c.slug}
                data-testid={JOURNAL.categoryCard(c.slug)}
                className="bg-ki-bg p-6 min-h-[180px] flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-serif text-lg text-ki-fg tracking-tight">{c.title}</h3>
                  <p className="mt-3 text-sm text-ki-fg/70 leading-relaxed">{c.note}</p>
                </div>
                <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.22em]">
                  <span className="text-ki-muted">Entries · To be confirmed</span>
                  <Link
                    to={`/journal#journal-index`}
                    data-testid={JOURNAL.categoryCta(c.slug)}
                    className="text-ki-fg/85 hover:text-ki-gold transition-colors"
                  >
                    View Category →
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* JOURNAL INDEX */}
      <section id="journal-index" className="py-24 md:py-32 border-b border-ki-border bg-ki-surface">
        <div className="container-ki">
          <div className="overline">All Notes</div>
          <h2
            data-testid={JOURNAL.indexHeading}
            className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg"
          >
            All Notes
          </h2>

          <div className="mt-10 max-w-2xl">
            <label
              htmlFor="journal-search-input"
              className="text-[10px] uppercase tracking-[0.28em] text-ki-muted"
            >
              Search
            </label>
            <div className="mt-3 flex items-center gap-3 border-b border-ki-border focus-within:border-ki-gold transition-colors">
              <Search size={16} className="text-ki-muted" strokeWidth={1.4} />
              <input
                id="journal-search-input"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                data-testid={JOURNAL.search}
                className="flex-1 bg-transparent outline-none text-ki-fg placeholder:text-ki-muted py-3"
                placeholder="Search notes by title, theme, project or place"
              />
            </div>
          </div>

          <div
            data-testid={JOURNAL.filtersBar}
            role="tablist"
            aria-label="Journal filters"
            className="-mx-6 md:-mx-12 lg:-mx-20 px-6 md:px-12 lg:px-20 mt-8 mb-10 overflow-x-auto no-scrollbar"
          >
            <div className="flex gap-2 md:gap-3 min-w-max">
              {JOURNAL_FILTERS.map((f) => {
                const active = filter === f.slug;
                return (
                  <button
                    key={f.slug}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    data-testid={JOURNAL.filterBtn(f.slug)}
                    onClick={() => setFilter(f.slug)}
                    className={`whitespace-nowrap border px-4 md:px-5 py-2.5 text-[11px] uppercase tracking-[0.24em] transition-colors duration-300 ${
                      active
                        ? "border-ki-gold text-ki-gold bg-ki-gold/5"
                        : "border-ki-border text-ki-fg/70 hover:border-ki-fg/40 hover:text-ki-fg"
                    }`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div
              data-testid={JOURNAL.emptyState}
              className="border border-ki-border p-12 text-center"
            >
              <p className="text-sm text-ki-fg/70">
                No matching note found. Try another theme, project or keyword.
              </p>
            </div>
          ) : (
            <div
              data-testid={JOURNAL.indexGrid}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ki-border border border-ki-border"
            >
              {filtered.map((n) => (
                <article
                  key={n.slug}
                  data-testid={JOURNAL.indexCard(n.slug)}
                  className="bg-ki-bg p-6 flex flex-col"
                >
                  <div className="relative aspect-[4/3] bg-ki-elevated border border-ki-border/60 mb-4 flex items-center justify-center text-[10px] uppercase tracking-[0.28em] text-ki-muted/70">
                    Thumbnail · placeholder
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.26em] text-ki-gold/90">
                    {n.category}
                  </div>
                  <h3 className="mt-3 font-serif text-xl text-ki-fg tracking-tight">{n.title}</h3>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-ki-muted">
                    {n.subtitle}
                  </div>
                  <dl className="mt-3 text-[10px] uppercase tracking-[0.22em] text-ki-muted space-y-1">
                    <div className="flex justify-between gap-3">
                      <dt>Date</dt>
                      <dd className="text-ki-fg/75 text-right">{n.date}</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt>Medium</dt>
                      <dd className="text-ki-fg/75 text-right capitalize">{n.medium}</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt>Project</dt>
                      <dd className="text-ki-fg/75 text-right line-clamp-1">{n.related_project}</dd>
                    </div>
                  </dl>
                  <p className="mt-3 text-sm text-ki-fg/70 leading-relaxed line-clamp-3 flex-1">
                    {n.excerpt}
                  </p>
                  <Link
                    to={`/journal/${n.slug}`}
                    data-testid={JOURNAL.indexCta(n.slug)}
                    className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-ki-fg/85 hover:text-ki-gold transition-colors self-start"
                  >
                    Read →
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* PROJECT-LINKED NOTES */}
      <section className="py-24 md:py-32 border-b border-ki-border">
        <div className="container-ki">
          <div className="overline">By Project</div>
          <h2
            data-testid={JOURNAL.projectNotesHeading}
            className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg"
          >
            Notes by Project
          </h2>
          <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ki-border border border-ki-border">
            {JOURNAL_PROJECT_NOTES.map((p) => (
              <li
                key={p.slug}
                data-testid={JOURNAL.projectNoteCard(p.slug)}
                className="bg-ki-bg p-6 min-h-[200px] flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">
                    Project
                  </div>
                  <h3 className="mt-3 font-serif text-xl text-ki-fg tracking-tight">{p.title}</h3>
                  <p className="mt-3 text-sm text-ki-fg/70 leading-relaxed">{p.note}</p>
                </div>
                <div className="mt-5 flex items-center justify-between text-[10px] uppercase tracking-[0.22em]">
                  <span className="text-ki-muted">{p.count}</span>
                  <Link
                    to={`/projects/${p.slug}`}
                    data-testid={JOURNAL.projectNoteCta(p.slug)}
                    className="text-ki-fg/85 hover:text-ki-gold transition-colors"
                  >
                    View Notes →
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* MOTIFS */}
      <section className="py-24 md:py-32 border-b border-ki-border bg-ki-surface">
        <div className="container-ki">
          <div className="overline">Motifs</div>
          <h2
            data-testid={JOURNAL.motifsHeading}
            className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg"
          >
            Recurring Motifs
          </h2>
          <ul className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-ki-border border border-ki-border">
            {JOURNAL_MOTIFS.map((m) => (
              <li
                key={m.slug}
                data-testid={JOURNAL.motifCard(m.slug)}
                className="bg-ki-bg p-5 min-h-[180px] flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] uppercase tracking-[0.26em] text-ki-gold/90">
                    Motif
                  </div>
                  <h3 className="mt-3 font-serif text-xl text-ki-fg tracking-tight">{m.title}</h3>
                  <p className="mt-3 text-sm text-ki-fg/70 leading-relaxed">{m.note}</p>
                </div>
                <Link
                  to={`/journal#journal-index`}
                  data-testid={JOURNAL.motifCta(m.slug)}
                  className="mt-4 inline-flex text-[11px] uppercase tracking-[0.26em] text-ki-fg/85 hover:text-ki-gold transition-colors"
                >
                  Explore Motif →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* VOICE / FILM / SOUND */}
      <section className="py-24 md:py-32 border-b border-ki-border">
        <div className="container-ki">
          <div className="overline">Voice and Time</div>
          <h2
            data-testid={JOURNAL.voiceHeading}
            className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg"
          >
            Voice, Film and Time
          </h2>
          <p className="mt-6 max-w-2xl text-base text-ki-fg/75 leading-relaxed">
            A space for future film voice-over fragments, moving-image notes, spoken texts and
            sound-related writing.
          </p>
          <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ki-border border border-ki-border">
            {JOURNAL_VOICE_FILM_CARDS.map((v) => (
              <li
                key={v.slug}
                data-testid={JOURNAL.voiceCard(v.slug)}
                className="bg-ki-bg p-6 min-h-[200px] flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">
                    Voice / Film
                  </div>
                  <h3 className="mt-3 font-serif text-xl text-ki-fg tracking-tight">{v.title}</h3>
                  <p className="mt-3 text-sm text-ki-fg/70 leading-relaxed">{v.note}</p>
                </div>
                <div className="mt-5 flex items-center justify-between text-[10px] uppercase tracking-[0.22em]">
                  <span className="text-ki-muted line-clamp-1">{v.related}</span>
                  <Link
                    to="/moving"
                    data-testid={JOURNAL.voiceCta(v.slug)}
                    className="text-ki-fg/85 hover:text-ki-gold transition-colors"
                  >
                    View →
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section id="journal-newsletter" className="py-28 md:py-36 border-b border-ki-border bg-ki-surface">
        <div className="container-ki grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <div className="overline">Receive Notes</div>
            <h2
              data-testid={JOURNAL.newsletterHeading}
              className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg"
            >
              Receive Archive Notes
            </h2>
            <p className="mt-6 text-base text-ki-fg/75 leading-relaxed max-w-md">
              An optional reader connection point for those interested in future notes, books,
              prints, screenings and archive updates.
            </p>
          </div>
          <div className="lg:col-span-8">
            <NewsletterForm />
          </div>
        </div>
      </section>

      {/* RELATED ARCHIVE */}
      <section className="py-24 md:py-32 border-b border-ki-border">
        <div className="container-ki">
          <div className="overline">Continue Browsing</div>
          <h2
            data-testid={JOURNAL.relatedHeading}
            className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg"
          >
            Explore More
          </h2>
          <ul className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-px bg-ki-border border border-ki-border">
            {JOURNAL_RELATED_LINKS.map((l) => (
              <li key={l.slug} className="bg-ki-bg">
                <Link
                  to={l.to}
                  data-testid={JOURNAL.relatedLink(l.slug)}
                  className="group block p-6 min-h-[120px] flex flex-col justify-between transition-colors hover:bg-ki-surface"
                >
                  <div className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">
                    Section
                  </div>
                  <div className="mt-3 font-serif text-lg text-ki-fg tracking-tight group-hover:text-ki-gold transition-colors">
                    {l.label}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
