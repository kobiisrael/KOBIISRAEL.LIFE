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

export default function NotFound({ slug }) {
  useEffect(() => {
    document.title = "Page Not Found | Kobi Israel";
    setMeta(
      "description",
      "The page you are looking for may have moved, changed title or returned to the archive."
    );
  }, []);

  return (
    <section
      className="relative min-h-screen pt-40 pb-32 grain"
      data-testid="not-found-page"
      data-testid-alias="project-not-found"
    >
      <div data-testid="project-not-found" className="sr-only" />
      {/* Quiet archive image placeholder */}
      <div className="absolute inset-x-0 top-0 h-[60vh] overflow-hidden -z-10">
        <div className="absolute inset-0 bg-ki-elevated" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ki-bg/60 to-ki-bg" />
      </div>

      <div className="container-ki max-w-3xl">
        <div className="overline">404 · Archive</div>
        <h1
          data-testid="not-found-title"
          className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl tracking-tight text-ki-fg"
        >
          Page Not Found
        </h1>
        <p className="mt-8 text-lg text-ki-fg/80 leading-relaxed max-w-2xl">
          The page you are looking for may have moved, changed title or returned to the archive.
        </p>
        {slug && (
          <p
            data-testid="not-found-slug"
            className="mt-6 text-xs uppercase tracking-[0.28em] text-ki-muted"
          >
            Requested · {slug}
          </p>
        )}
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link
            to="/"
            data-testid="not-found-cta-home"
            className="inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg px-8 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300"
          >
            Return Home
          </Link>
          <Link
            to="/archive"
            data-testid="not-found-cta-archive"
            className="inline-flex items-center justify-center border border-ki-fg/30 text-ki-fg hover:border-ki-gold hover:text-ki-gold px-8 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300"
          >
            Explore Archive
          </Link>
          <Link
            to="/contact"
            data-testid="not-found-cta-contact"
            className="inline-flex items-center justify-center border border-ki-fg/30 text-ki-fg hover:border-ki-fg px-8 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
        <p className="mt-12 text-[11px] uppercase tracking-[0.3em] text-ki-muted">
          Final archive image to be selected by artist
        </p>
      </div>
    </section>
  );
}
