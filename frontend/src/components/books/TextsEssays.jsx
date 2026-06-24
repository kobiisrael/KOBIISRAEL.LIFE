import { Link } from "react-router-dom";
import { TEXTS_ESSAYS } from "@/data/site";
import { BOOKS } from "@/constants/testIds";

export default function TextsEssays() {
  return (
    <section className="py-24 md:py-32 border-b border-ki-border bg-ki-bg">
      <div className="container-ki">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="overline">Writing</div>
            <h2 data-testid={BOOKS.textsHeading}
              className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg">
              Texts, Essays and Notes
            </h2>
          </div>
          <p className="text-sm text-ki-muted max-w-sm leading-relaxed">
            Future-ready categories for writing connected to the photographic and moving-image
            archive. Final essays to be supplied by the artist.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-ki-border border border-ki-border">
          {TEXTS_ESSAYS.map((t, i) => (
            <li key={t.slug} data-testid={BOOKS.textCard(t.slug)}
              className="group bg-ki-bg p-6 min-h-[240px] flex flex-col justify-between transition-colors duration-500 hover:bg-ki-surface">
              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">
                  {t.category} · {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 font-serif text-xl text-ki-fg tracking-tight">{t.title}</h3>
                <p className="mt-3 text-sm text-ki-fg/70 leading-relaxed">{t.description}</p>
              </div>
              <div className="mt-4 flex items-center justify-between gap-3">
                <span className="text-[10px] uppercase tracking-[0.22em] text-ki-muted">{t.date}</span>
                <Link to="/journal" data-testid={BOOKS.textCta(t.slug)}
                  className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.26em] text-ki-fg/85 hover:text-ki-gold transition-colors duration-300">
                  Read Text →
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
