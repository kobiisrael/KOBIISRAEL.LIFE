import { PRINTS_AVAILABLE_WORKS } from "@/data/site";
import { PRINTS } from "@/constants/testIds";

export default function AvailableWorks({ onInquire }) {
  return (
    <section
      id="prints-available"
      className="py-24 md:py-32 border-b border-ki-border"
    >
      <div className="container-ki">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="overline">Inquiry Only</div>
            <h2
              data-testid={PRINTS.availableHeading}
              className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg"
            >
              Works Available by Inquiry
            </h2>
          </div>
          <p className="text-sm text-ki-muted max-w-sm leading-relaxed">
            Each work below is a placeholder artwork entry. Final titles, years, dimensions,
            editions and prices to be confirmed by the artist on inquiry.
          </p>
        </div>

        <div
          data-testid={PRINTS.availableGrid}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10"
        >
          {PRINTS_AVAILABLE_WORKS.map((w, i) => (
            <article
              key={w.slug}
              data-testid={PRINTS.availableCard(w.slug)}
              className="group flex flex-col"
              aria-label={`${w.title} — artwork by inquiry`}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-ki-elevated border border-ki-border/60">
                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-ki-muted/70">
                      Artwork · {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-3 font-serif text-base text-ki-fg/45 leading-snug">
                      {w.series}
                    </div>
                    <div className="mt-3 text-[10px] uppercase tracking-[0.28em] text-ki-muted/60">
                      Placeholder
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 border border-ki-gold/0 group-hover:border-ki-gold/30 transition-colors duration-500" />
              </div>

              <div className="mt-5 flex flex-col gap-2">
                <h3 className="font-serif text-lg text-ki-fg tracking-tight leading-snug">
                  {w.title}
                </h3>
                <dl className="text-[10px] uppercase tracking-[0.22em] text-ki-muted grid grid-cols-1 gap-y-1">
                  <div className="flex justify-between gap-3"><dt>Series</dt><dd className="text-ki-fg/75 text-right">{w.series}</dd></div>
                  <div className="flex justify-between gap-3"><dt>Year</dt><dd className="text-ki-fg/75 text-right">{w.year}</dd></div>
                  <div className="flex justify-between gap-3"><dt>Medium</dt><dd className="text-ki-fg/75 text-right">{w.medium}</dd></div>
                  <div className="flex justify-between gap-3"><dt>Dimensions</dt><dd className="text-ki-fg/75 text-right">{w.dimensions}</dd></div>
                  <div className="flex justify-between gap-3"><dt>Edition</dt><dd className="text-ki-fg/75 text-right">{w.edition}</dd></div>
                  <div className="flex justify-between gap-3"><dt>Availability</dt><dd className="text-ki-gold/85 text-right">{w.availability}</dd></div>
                  <div className="flex justify-between gap-3"><dt>Price</dt><dd className="text-ki-fg/85 text-right">{w.price}</dd></div>
                </dl>
                <button
                  type="button"
                  data-testid={PRINTS.availableRequest(w.slug)}
                  onClick={() => onInquire?.({ artwork: w.title, series: w.series })}
                  className="mt-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-ki-fg/85 hover:text-ki-gold transition-colors duration-300 self-start"
                >
                  Request Details →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
