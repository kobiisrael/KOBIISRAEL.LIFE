import { useEffect } from "react";
import { Link } from "react-router-dom";

const setMeta = (name, content) => {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const SECTIONS = [
  {
    slug: "domain-technical",
    title: "Domain and Technical",
    items: [
      "kobiisrael.com resolves correctly",
      "www.kobiisrael.com resolves correctly",
      "SSL certificate active",
      "Wix redirects checked if needed",
      "404 page created",
      "Sitemap generated",
      "robots.txt checked",
      "Analytics placeholder installed",
      "Search Console placeholder added",
    ],
  },
  {
    slug: "content",
    title: "Content",
    items: [
      "Homepage copy checked",
      "Artist biography confirmed",
      "CV checked",
      "Exhibitions confirmed",
      "Collections confirmed",
      "Publications confirmed",
      "Print details confirmed",
      "Book details confirmed",
      "Contact details confirmed",
      "Legal pages reviewed",
    ],
  },
  {
    slug: "seo",
    title: "SEO",
    items: [
      "Page titles checked",
      "Meta descriptions checked",
      "H1 and H2 structure checked",
      "Image alt-text placeholders checked",
      "URLs checked",
      "Internal links checked",
      "Broken links checked",
    ],
  },
  {
    slug: "design",
    title: "Design",
    items: [
      "Desktop checked",
      "Tablet checked",
      "Mobile checked",
      "Navigation checked",
      "Footer checked",
      "Forms checked",
      "Gallery checked",
      "Lightbox checked",
      "Accessibility checked",
    ],
  },
  {
    slug: "commercial",
    title: "Commercial",
    items: [
      "Collector inquiry tested",
      "Contact form tested",
      "Book inquiry tested",
      "Artwork inquiry tested",
      "Licensing inquiry tested",
      "No false prices",
      "No false availability",
      "No unsupported collector claims",
    ],
  },
];

export default function LaunchChecklist() {
  useEffect(() => {
    const prev = document.title;
    document.title = "Launch Checklist | Kobi Israel";
    setMeta(
      "description",
      "Internal launch checklist for the Kobi Israel website — domain, content, SEO, design and commercial review items."
    );
    setMeta("robots", "noindex, nofollow");
    window.scrollTo(0, 0);
    return () => {
      document.title = prev;
    };
  }, []);

  const totalItems = SECTIONS.reduce((n, s) => n + s.items.length, 0);

  return (
    <article data-testid="launch-checklist-page" className="pt-40 pb-32">
      <header className="container-ki max-w-4xl">
        <div className="overline">Internal · Pre-launch</div>
        <h1
          data-testid="launch-checklist-title"
          className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl tracking-tight text-ki-fg"
        >
          Launch Checklist
        </h1>
        <p className="mt-6 text-base md:text-lg leading-relaxed text-ki-fg/80 max-w-2xl">
          An internal pre-launch review checklist for the KOBIISRAEL.COM upgrade. Items are tracked
          here so nothing is published before it has been reviewed and confirmed by the artist.
        </p>
        <p className="mt-6 text-xs uppercase tracking-[0.28em] text-ki-muted">
          Internal page · {totalItems} items across {SECTIONS.length} sections · noindex, nofollow
        </p>
      </header>

      <section className="container-ki mt-16 grid grid-cols-1 lg:grid-cols-2 gap-px bg-ki-border border border-ki-border">
        {SECTIONS.map((s) => (
          <div
            key={s.slug}
            data-testid={`launch-section-${s.slug}`}
            className="bg-ki-bg p-8"
          >
            <div className="overline">{s.slug.replace(/-/g, " · ")}</div>
            <h2
              data-testid={`launch-heading-${s.slug}`}
              className="mt-4 font-serif text-3xl tracking-tight text-ki-fg"
            >
              {s.title}
            </h2>
            <ul className="mt-6 space-y-3">
              {s.items.map((item, i) => (
                <li
                  key={`${s.slug}-${i}`}
                  data-testid={`launch-item-${s.slug}-${i}`}
                  className="flex items-start gap-3 text-sm text-ki-fg/85 leading-relaxed"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1.5 inline-block w-3 h-3 border border-ki-gold/60 shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="container-ki max-w-3xl mt-16">
        <div className="overline">After review</div>
        <h2 className="mt-4 font-serif text-2xl sm:text-3xl tracking-tight text-ki-fg">
          Do not publish until all items are reviewed
        </h2>
        <p className="mt-5 text-base text-ki-fg/80 leading-relaxed">
          Placeholder text marked &ldquo;To be confirmed by artist&rdquo; must be replaced with artist-approved
          content before launch. A clean placeholder is better than a false claim &mdash; but no claim
          should reach production unreviewed.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-ki-fg/30 text-ki-fg hover:border-ki-gold hover:text-ki-gold px-8 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300"
          >
            ← Return Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg px-8 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300"
          >
            Contact Studio →
          </Link>
        </div>
      </section>
    </article>
  );
}
