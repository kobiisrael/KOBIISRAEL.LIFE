import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFound({ slug }) {
  useEffect(() => {
    document.title = "Not found | Kobi Israel";
  }, []);

  return (
    <section
      className="min-h-screen pt-40 pb-32"
      data-testid="project-not-found"
    >
      <div className="container-ki max-w-3xl">
        <div className="overline">404</div>
        <h1 className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl tracking-tight text-ki-fg">
          Project not found
        </h1>
        {slug && (
          <p className="mt-6 text-xs uppercase tracking-[0.28em] text-ki-muted">
            Requested slug · {slug}
          </p>
        )}
        <p className="mt-8 text-lg text-ki-fg/75 leading-relaxed">
          The project you are looking for is not part of the current archive. It may be in
          preparation, or the link may be outdated. Browse the Still and Moving archives below to
          find the work you were looking for.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link
            to="/still"
            className="inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg px-8 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300"
          >
            Browse Still Archive →
          </Link>
          <Link
            to="/moving"
            className="inline-flex items-center justify-center border border-ki-fg/30 text-ki-fg hover:border-ki-gold hover:text-ki-gold px-8 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300"
          >
            Browse Moving Archive →
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-ki-fg/30 text-ki-fg hover:border-ki-fg px-8 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300"
          >
            ← Return Home
          </Link>
        </div>
      </div>
    </section>
  );
}
