import { Link } from "react-router-dom";
import { PUBLICATIONS } from "@/data/site";
import { BOOKS } from "@/constants/testIds";

export default function PublicationsIndex({ onInquire }) {
  return (
    <section id="books-index" className="py-24 md:py-32 border-b border-ki-border">
      <div className="container-ki">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="overline">Publications</div>
            <h2 data-testid={BOOKS.indexHeading}
              className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg">
              Publications
            </h2>
          </div>
          <p className="text-sm text-ki-muted max-w-sm leading-relaxed">
            Ten publications and publication groupings. Years, publishers, ISBNs, prices and
            availability to be confirmed by the artist.
          </p>
        </div>

        <div data-testid={BOOKS.indexGrid}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 md:gap-10">
          {PUBLICATIONS.map((b, i) => (
            <article key={b.slug} data-testid={BOOKS.card(b.slug)}
              className="group flex flex-col" aria-label={`${b.title} — publication`}>
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-ki-elevated border border-ki-border/60">
                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-ki-muted/70">
                      Cover · {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-3 font-serif text-base text-ki-fg/45 leading-snug">
                      {b.title}
                    </div>
                    <div className="mt-3 text-[10px] uppercase tracking-[0.28em] text-ki-muted/60">
                      Placeholder
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 border border-ki-gold/0 group-hover:border-ki-gold/30 transition-colors duration-500" />
              </div>

              <div className="mt-5 flex flex-col gap-2">
                <h3 className="font-serif text-lg md:text-xl text-ki-fg tracking-tight leading-tight">
                  {b.title}
                </h3>
                <div className="text-[10px] uppercase tracking-[0.22em] text-ki-gold/85">
                  {b.subtitle}
                </div>
                <dl className="mt-1 text-[10px] uppercase tracking-[0.22em] text-ki-muted grid grid-cols-1 gap-y-1">
                  <div className="flex justify-between gap-3"><dt>Year</dt><dd className="text-ki-fg/75 text-right">{b.year}</dd></div>
                  <div className="flex justify-between gap-3"><dt>Publisher</dt><dd className="text-ki-fg/75 text-right line-clamp-1">{b.publisher}</dd></div>
                  <div className="flex justify-between gap-3"><dt>Format</dt><dd className="text-ki-fg/75 text-right line-clamp-1">{b.format}</dd></div>
                  <div className="flex justify-between gap-3"><dt>ISBN</dt><dd className="text-ki-fg/75 text-right line-clamp-1">{b.isbn}</dd></div>
                  <div className="flex justify-between gap-3"><dt>Price</dt><dd className="text-ki-fg/85 text-right">{b.price}</dd></div>
                  <div className="flex justify-between gap-3"><dt>Availability</dt><dd className="text-ki-gold/85 text-right line-clamp-1">{b.availability}</dd></div>
                </dl>
                <p className="mt-2 text-sm text-ki-fg/70 leading-relaxed line-clamp-3">
                  {b.description}
                </p>
                <div className="mt-3 flex flex-col gap-2">
                  {b.related_project ? (
                    <Link to={`/projects/${b.related_project}`}
                      data-testid={BOOKS.cardView(b.slug)}
                      className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.26em] text-ki-fg/85 hover:text-ki-gold transition-colors duration-300">
                      View Publication →
                    </Link>
                  ) : (
                    <span data-testid={BOOKS.cardView(b.slug)}
                      className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.26em] text-ki-muted">
                      Details to be confirmed
                    </span>
                  )}
                  <button type="button"
                    data-testid={BOOKS.cardInquire(b.slug)}
                    onClick={() => onInquire?.({ book: b.title })}
                    className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.26em] text-[#d97a7a] hover:text-[#ef9090] transition-colors duration-300 self-start">
                    Purchase / Inquire →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
