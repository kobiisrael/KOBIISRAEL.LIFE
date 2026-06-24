import { useEffect } from "react";
import { Link } from "react-router-dom";
import { applyPageSeo, breadcrumbSchema } from "@/lib/seo";

export default function Placeholder({ title, intro }) {
  useEffect(() => {
    applyPageSeo({
      title: `${title} | Kobi Israel`,
      description: `${title} — Kobi Israel artist archive. ${intro || ""}`.slice(0, 155),
      path: `/${title.toLowerCase()}`,
      jsonLd: [
        {
          id: "placeholder-breadcrumb",
          data: breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: title, path: `/${title.toLowerCase()}` },
          ]),
        },
      ],
    });
  }, [title, intro]);

  return (
    <section className="min-h-screen pt-40 pb-32">
      <div className="container-ki max-w-3xl">
        <div className="overline">Section</div>
        <h1 className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl tracking-tight text-ki-fg">
          {title}
        </h1>
        <p className="mt-8 text-lg text-ki-fg/75 leading-relaxed">{intro}</p>
        <p className="mt-4 text-xs uppercase tracking-[0.28em] text-ki-muted">
          Content to be confirmed by artist
        </p>
        <Link
          to="/"
          className="mt-12 inline-flex items-center gap-3 border border-ki-fg/30 text-ki-fg hover:border-ki-gold hover:text-ki-gold px-8 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300"
        >
          ← Return Home
        </Link>
      </div>
    </section>
  );
}
