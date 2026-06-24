import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  CONFIRMED_CONTACT,
  SOURCE_PAGES,
  HOMEPAGE_FRAGMENTS,
  PROJECT_RECORDS,
  PRINTS_FACTS,
  BOOK_RECORDS,
  CV_RECORDS,
  REDIRECT_MAP,
  MISSING_CONTENT_CHECKLIST,
  MAPPING_TABLE,
} from "@/data/migration";

const setMeta = (name, content) => {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const statusColor = (s) => {
  if (s === "confirmed" || s === "confirmed-from-source") return "text-ki-gold/90";
  if (s === "needs-review" || s === "needs review") return "text-amber-300/90";
  if (s === "duplicate") return "text-ki-muted";
  return "text-ki-fg/75";
};

function Section({ id, title, children, count }) {
  return (
    <section className="mt-16" data-testid={`migration-section-${id}`}>
      <div className="overline">{id.replace(/-/g, " · ")}</div>
      <h2
        data-testid={`migration-heading-${id}`}
        className="mt-4 font-serif text-3xl sm:text-4xl tracking-tight text-ki-fg"
      >
        {title}
        {count !== undefined && (
          <span className="ml-3 text-base text-ki-muted">· {count} items</span>
        )}
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

export default function MigrationReview() {
  useEffect(() => {
    const prev = document.title;
    document.title = "Migration Review | Kobi Israel";
    setMeta(
      "description",
      "Internal Wix-to-new-site migration review for the Kobi Israel website."
    );
    setMeta("robots", "noindex, nofollow");
    window.scrollTo(0, 0);
    return () => {
      document.title = prev;
    };
  }, []);

  const cvTotal =
    CV_RECORDS.education.length +
    CV_RECORDS.solo_exhibitions.length +
    CV_RECORDS.group_exhibitions.length +
    CV_RECORDS.catalogues.length +
    CV_RECORDS.monographs.length +
    CV_RECORDS.anthologies.length +
    CV_RECORDS.awards.length +
    CV_RECORDS.film.length;

  return (
    <article data-testid="migration-review-page" className="pt-40 pb-32">
      <header className="container-ki max-w-4xl">
        <div className="overline">Internal · Pre-launch · Content migration</div>
        <h1
          data-testid="migration-review-title"
          className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl tracking-tight text-ki-fg"
        >
          Migration Review
        </h1>
        <p className="mt-6 text-base md:text-lg leading-relaxed text-ki-fg/80 max-w-2xl">
          Working dashboard for the move from the existing Wix site into the new
          KOBIISRAEL.COM structure. All entries below are extracted from the artist&rsquo;s
          existing public Wix pages on 24 June 2026. Nothing on this page is published
          publicly until the artist signs off each item.
        </p>
        <p className="mt-6 text-xs uppercase tracking-[0.28em] text-ki-muted">
          Internal page · noindex, nofollow · robots.txt disallowed
        </p>
      </header>

      <div className="container-ki max-w-5xl">
        {/* Confirmed contact */}
        <Section id="confirmed-contact" title="Confirmed Contact (now safe to publish)">
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3 text-sm border border-ki-border p-6">
            <div className="flex justify-between gap-4 border-b border-ki-border/60 pb-2">
              <dt className="uppercase tracking-[0.22em] text-[10px] text-ki-muted">Email</dt>
              <dd data-testid="migration-email" className="text-ki-fg/85 text-right">
                {CONFIRMED_CONTACT.email}
              </dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-ki-border/60 pb-2">
              <dt className="uppercase tracking-[0.22em] text-[10px] text-ki-muted">
                Copyright line
              </dt>
              <dd className="text-ki-fg/85 text-right">{CONFIRMED_CONTACT.copyright}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-ki-border/60 pb-2">
              <dt className="uppercase tracking-[0.22em] text-[10px] text-ki-muted">
                Birth year source
              </dt>
              <dd className="text-ki-fg/85 text-right">{CONFIRMED_CONTACT.birth_year_source}</dd>
            </div>
          </dl>
          <p className="mt-4 text-xs text-ki-muted">
            Recommended action: replace &ldquo;To be confirmed by artist&rdquo; placeholders in the
            footer and Contact Details section with the confirmed email above.
          </p>
        </Section>

        {/* Source pages */}
        <Section id="source-pages" title="Source pages crawled" count={SOURCE_PAGES.length}>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ki-border border border-ki-border">
            {SOURCE_PAGES.map((p) => (
              <li
                key={p.slug}
                data-testid={`migration-source-${p.slug}`}
                className="bg-ki-bg p-5"
              >
                <div className="text-[10px] uppercase tracking-[0.26em] text-ki-gold/90">
                  {p.slug}
                </div>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-sm text-ki-fg/85 hover:text-ki-gold transition-colors break-all"
                >
                  {p.url}
                </a>
                <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-ki-muted">
                  → {p.target}
                </div>
              </li>
            ))}
          </ul>
        </Section>

        {/* Homepage fragments */}
        <Section id="homepage-fragments" title="Homepage fragments to preserve verbatim" count={HOMEPAGE_FRAGMENTS.length}>
          <ul className="space-y-4">
            {HOMEPAGE_FRAGMENTS.map((f, i) => (
              <li
                key={`hp-${i}`}
                data-testid={`migration-hp-${i}`}
                className="border border-ki-border p-5"
              >
                <div className="flex justify-between gap-4">
                  <div className="text-[10px] uppercase tracking-[0.26em] text-ki-gold/90">
                    {f.type}
                  </div>
                  <div className={`text-[10px] uppercase tracking-[0.22em] ${statusColor(f.status)}`}>
                    {f.status}
                  </div>
                </div>
                <p className="mt-3 text-base text-ki-fg/85 leading-relaxed">{f.text}</p>
                <div className="mt-3 text-[10px] uppercase tracking-[0.22em] text-ki-muted">
                  Target · {f.target}
                </div>
                {f.note && (
                  <div className="mt-2 text-[11px] text-ki-muted/90 italic">{f.note}</div>
                )}
              </li>
            ))}
          </ul>
        </Section>

        {/* Project records */}
        <Section id="project-records" title="Project records (verbatim from Wix)" count={PROJECT_RECORDS.length}>
          <ul className="space-y-4">
            {PROJECT_RECORDS.map((p) => (
              <li
                key={p.slug}
                data-testid={`migration-project-${p.slug}`}
                className="border border-ki-border p-5"
              >
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="font-serif text-xl text-ki-fg tracking-tight">{p.title}</h3>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-ki-muted">
                    {p.year_range}
                  </span>
                  <span className={`text-[10px] uppercase tracking-[0.22em] ${statusColor(p.status)}`}>
                    {p.status}
                  </span>
                </div>
                <dl className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-2 text-[12px]">
                  <div>
                    <dt className="text-ki-muted uppercase tracking-[0.22em] text-[10px]">Medium</dt>
                    <dd className="text-ki-fg/85">{p.medium}</dd>
                  </div>
                  {p.location && (
                    <div>
                      <dt className="text-ki-muted uppercase tracking-[0.22em] text-[10px]">Location</dt>
                      <dd className="text-ki-fg/85">{p.location}</dd>
                    </div>
                  )}
                  {p.duration && (
                    <div>
                      <dt className="text-ki-muted uppercase tracking-[0.22em] text-[10px]">Duration</dt>
                      <dd className="text-ki-fg/85">{p.duration}</dd>
                    </div>
                  )}
                </dl>
                <p className="mt-3 text-sm text-ki-fg/80 leading-relaxed">{p.description}</p>
                {p.related_film && (
                  <p className="mt-2 text-sm text-ki-fg/75 italic">{p.related_film}</p>
                )}
                {p.note && (
                  <p className="mt-2 text-[11px] text-amber-300/80 italic">Note · {p.note}</p>
                )}
                <div className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-ki-muted">
                  <span>Source · {p.source}</span>
                  <Link to={p.target} className="text-ki-fg/85 hover:text-ki-gold transition-colors">
                    {p.target} →
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        {/* Prints */}
        <Section id="prints-facts" title="Limited Edition Prints — confirmed facts">
          <dl className="text-sm border border-ki-border p-6 space-y-3">
            <div>
              <dt className="text-ki-muted uppercase tracking-[0.22em] text-[10px]">Print type</dt>
              <dd className="text-ki-fg/85 mt-1">{PRINTS_FACTS.print_type}</dd>
            </div>
            <div>
              <dt className="text-ki-muted uppercase tracking-[0.22em] text-[10px]">Medium size</dt>
              <dd className="text-ki-fg/85 mt-1">
                {PRINTS_FACTS.medium_size.dimensions} · Edition of {PRINTS_FACTS.medium_size.edition_size}
              </dd>
            </div>
            <div>
              <dt className="text-ki-muted uppercase tracking-[0.22em] text-[10px]">Small size</dt>
              <dd className="text-ki-fg/85 mt-1">
                {PRINTS_FACTS.small_size.dimensions} · Edition of {PRINTS_FACTS.small_size.edition_size}
              </dd>
            </div>
            <div>
              <dt className="text-ki-muted uppercase tracking-[0.22em] text-[10px]">Patron offer (legacy)</dt>
              <dd className="text-ki-fg/85 mt-1">{PRINTS_FACTS.patron_offer}</dd>
            </div>
            <div>
              <dt className="text-ki-muted uppercase tracking-[0.22em] text-[10px]">
                Public collections (claimed on Wix)
              </dt>
              <dd className="text-ki-fg/85 mt-1">
                <ul className="space-y-1">
                  {PRINTS_FACTS.public_collections.map((c) => (
                    <li key={c}>· {c}</li>
                  ))}
                </ul>
              </dd>
            </div>
            <div>
              <dt className="text-ki-muted uppercase tracking-[0.22em] text-[10px]">
                Private collections (claimed on Wix — artist sign-off required)
              </dt>
              <dd className="text-ki-fg/85 mt-1">
                <ul className="space-y-1">
                  {PRINTS_FACTS.private_collections_claimed_on_wix.map((c) => (
                    <li key={c}>· {c}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
          <p className="mt-3 text-[11px] text-amber-300/80 italic">{PRINTS_FACTS.note}</p>
        </Section>

        {/* Books */}
        <Section id="book-records" title="Book records" count={BOOK_RECORDS.length}>
          <ul className="space-y-3">
            {BOOK_RECORDS.map((b) => (
              <li
                key={b.slug}
                data-testid={`migration-book-${b.slug}`}
                className="border border-ki-border p-4"
              >
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="font-serif text-lg text-ki-fg tracking-tight">{b.title}</h3>
                  <span className={`text-[10px] uppercase tracking-[0.22em] ${statusColor(b.status)}`}>
                    {b.status}
                  </span>
                </div>
                <dl className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-1 text-[11px]">
                  {b.format && (
                    <div>
                      <dt className="text-ki-muted uppercase tracking-[0.22em] text-[9px]">Format</dt>
                      <dd className="text-ki-fg/85">{b.format}</dd>
                    </div>
                  )}
                  {b.publisher && (
                    <div>
                      <dt className="text-ki-muted uppercase tracking-[0.22em] text-[9px]">Publisher</dt>
                      <dd className="text-ki-fg/85">{b.publisher}</dd>
                    </div>
                  )}
                  {b.isbn_13 && (
                    <div>
                      <dt className="text-ki-muted uppercase tracking-[0.22em] text-[9px]">ISBN-13</dt>
                      <dd className="text-ki-fg/85">{b.isbn_13}</dd>
                    </div>
                  )}
                  {b.dimensions && (
                    <div>
                      <dt className="text-ki-muted uppercase tracking-[0.22em] text-[9px]">Dimensions</dt>
                      <dd className="text-ki-fg/85">{b.dimensions}</dd>
                    </div>
                  )}
                </dl>
                {b.editions && (
                  <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-[11px]">
                    {b.editions.map((e) => (
                      <li key={e.name} className="text-ki-fg/85">
                        <span className="text-ki-muted">{e.name}:</span> {e.price}
                      </li>
                    ))}
                  </ul>
                )}
                {b.note && (
                  <p className="mt-2 text-[11px] text-ki-muted italic">Note · {b.note}</p>
                )}
              </li>
            ))}
          </ul>
        </Section>

        {/* CV preview */}
        <Section id="cv-records" title="CV — recovered entries" count={cvTotal}>
          <div className="border border-ki-border p-6 space-y-6 text-sm">
            <div data-testid="migration-cv-biography">
              <h3 className="font-serif text-lg text-ki-fg tracking-tight">Biography</h3>
              <p className="mt-2 text-ki-fg/85">{CV_RECORDS.biography.born}</p>
              <p className="text-ki-fg/85">{CV_RECORDS.biography.lives}</p>
            </div>
            {[
              ["Education", CV_RECORDS.education],
              ["Solo Exhibitions", CV_RECORDS.solo_exhibitions],
              ["Group Exhibitions", CV_RECORDS.group_exhibitions],
              ["Catalogues", CV_RECORDS.catalogues],
              ["Monographs", CV_RECORDS.monographs],
              ["Anthologies", CV_RECORDS.anthologies],
              ["Awards", CV_RECORDS.awards],
              ["Film", CV_RECORDS.film],
            ].map(([label, arr]) => (
              <div key={label} data-testid={`migration-cv-${label.toLowerCase().replace(/\s+/g, "-")}`}>
                <h3 className="font-serif text-lg text-ki-fg tracking-tight">
                  {label} <span className="text-[10px] uppercase tracking-[0.22em] text-ki-muted">· {arr.length}</span>
                </h3>
                <ul className="mt-2 space-y-1.5">
                  {arr.map((e, i) => (
                    <li key={`${label}-${i}`} className="text-ki-fg/85 leading-relaxed">
                      <span className="text-ki-muted mr-3">{e.year}</span>
                      {e.entry}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Mapping table */}
        <Section id="mapping-table" title="Source → target mapping" count={MAPPING_TABLE.length}>
          <div className="overflow-x-auto -mx-6 md:mx-0">
            <table className="w-full text-sm" data-testid="migration-mapping-table">
              <thead>
                <tr className="text-[10px] uppercase tracking-[0.22em] text-ki-muted">
                  <th className="text-left p-3 border-b border-ki-border">Source</th>
                  <th className="text-left p-3 border-b border-ki-border">Item</th>
                  <th className="text-left p-3 border-b border-ki-border">Type</th>
                  <th className="text-left p-3 border-b border-ki-border">Target</th>
                  <th className="text-left p-3 border-b border-ki-border">Action</th>
                  <th className="text-left p-3 border-b border-ki-border">Status</th>
                </tr>
              </thead>
              <tbody>
                {MAPPING_TABLE.map((row, i) => (
                  <tr key={`map-${i}`} className="border-b border-ki-border/40">
                    <td className="p-3 text-ki-muted text-[11px] align-top">{row.src}</td>
                    <td className="p-3 text-ki-fg/85 text-[12px] align-top">{row.item}</td>
                    <td className="p-3 text-ki-fg/70 text-[11px] align-top">{row.type}</td>
                    <td className="p-3 text-ki-fg/85 text-[11px] align-top">
                      {row.target}
                      <div className="text-ki-muted text-[10px] mt-1">{row.section}</div>
                    </td>
                    <td className="p-3 text-ki-fg/70 text-[11px] align-top">{row.action}</td>
                    <td className={`p-3 text-[10px] uppercase tracking-[0.22em] align-top ${statusColor(row.status)}`}>
                      {row.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Redirect map */}
        <Section id="redirect-map" title="Wix → new site redirect map" count={REDIRECT_MAP.length}>
          <ul className="grid grid-cols-1 gap-px bg-ki-border border border-ki-border">
            {REDIRECT_MAP.map((r, i) => (
              <li
                key={`redirect-${i}`}
                data-testid={`migration-redirect-${i}`}
                className="bg-ki-bg p-4 grid grid-cols-1 md:grid-cols-12 gap-3 items-start text-[12px]"
              >
                <div className="md:col-span-7 text-ki-muted break-all">{r.from}</div>
                <div className="md:col-span-1 text-center text-ki-gold/80">→</div>
                <div className="md:col-span-4 text-ki-fg/85">{r.to}</div>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-ki-muted">
            Implement redirects only after the production domain is finalised. If
            kobiisrael.com differs from kobiisrael.life, decide canonical first.
          </p>
        </Section>

        {/* Missing content checklist */}
        <Section
          id="missing-content"
          title="Missing content checklist (for the artist)"
          count={MISSING_CONTENT_CHECKLIST.length}
        >
          <ul className="space-y-2">
            {MISSING_CONTENT_CHECKLIST.map((m, i) => (
              <li
                key={`missing-${i}`}
                data-testid={`migration-missing-${i}`}
                className="flex items-start gap-3 border border-ki-border/60 p-4"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 inline-block w-3 h-3 border border-ki-gold/60 shrink-0"
                />
                <div className="flex-1">
                  <div className="text-sm text-ki-fg/85">{m.item}</div>
                  <div className="mt-1 text-[11px] text-ki-muted">{m.action}</div>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        {/* Quality check */}
        <Section id="quality-check" title="Migration quality check">
          <ul className="space-y-2 text-sm text-ki-fg/85">
            {[
              "No important Wix text has been lost — all 6 source pages captured and stored verbatim",
              "All 8 known project names preserved with real descriptions and year ranges",
              "All 5 solo exhibitions and 24 group exhibitions preserved with year + venue + city",
              "All 6 book records preserved with ISBN, publisher, dimensions and price tiers (artist to confirm current pricing)",
              "Print specs (sizes + edition counts) preserved verbatim — prices still 'on request'",
              "Image references retained as Wix URLs in the source pages; final images to be uploaded by artist",
              "Video references retained: A Cuban Love Story (12 ep), Parisian Postcards, Investigating Things Past, Boulevards of Broken Dreams",
              "All links retained in the source crawl above; broken-link audit to be run before launch",
              "No false claims added — all collection claims (Madonna, Elton John etc.) carry an 'artist review required' tag",
              "No prices invented — print prices remain 'Price on request' until artist confirms",
              "No availability invented — all artwork-record pages use 'Availability to be confirmed'",
              "Uncertain content (Promised Lands trilogy, Views Postcard Book, patron memberships) marked needs-review",
            ].map((line) => (
              <li
                key={line}
                className="flex items-start gap-3 border-l-2 border-ki-gold/60 pl-4 py-1"
              >
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </Section>
      </div>

      <section className="container-ki max-w-3xl mt-20">
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/launch-checklist"
            className="inline-flex items-center justify-center border border-ki-fg/30 text-ki-fg hover:border-ki-gold hover:text-ki-gold px-8 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300"
          >
            → Launch Checklist
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg px-8 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300"
          >
            Return Home
          </Link>
        </div>
      </section>
    </article>
  );
}
