import { Link } from "react-router-dom";
import { FEATURED_BOOK } from "@/data/site";
import { BOOKS } from "@/constants/testIds";

export default function FeaturedBook({ onCollectorInquire }) {
  return (
    <section className="py-24 md:py-36 border-b border-ki-border">
      <div className="container-ki grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="overline">Featured Publication</div>
          <h2 data-testid={BOOKS.featuredHeading}
            className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg">
            {FEATURED_BOOK.title}
          </h2>
          <p className="mt-6 text-base md:text-lg text-ki-fg/80 leading-relaxed max-w-xl">
            {FEATURED_BOOK.description}
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 max-w-md">
            {FEATURED_BOOK.metadata.map(([label, value]) => (
              <div key={label}>
                <dt className="text-[10px] uppercase tracking-[0.26em] text-ki-gold/90">{label}</dt>
                <dd className="mt-2 text-sm text-ki-fg/85 leading-snug">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-col gap-3 max-w-md">
            <Link to={`/projects/${FEATURED_BOOK.related_project}`}
              data-testid={BOOKS.featuredRelatedProject}
              className="inline-flex items-center justify-between border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg px-6 py-4 text-xs uppercase tracking-[0.26em] transition-colors duration-300">
              View Related Project <span aria-hidden>→</span>
            </Link>
            <button type="button"
              data-testid={BOOKS.featuredRequest}
              onClick={() => onCollectorInquire?.("purchase")}
              className="inline-flex items-center justify-between border border-ki-fg/30 text-ki-fg hover:border-ki-fg px-6 py-4 text-xs uppercase tracking-[0.26em] transition-colors duration-300">
              Request Book Availability <span aria-hidden>→</span>
            </button>
            <button type="button"
              data-testid={BOOKS.featuredCollector}
              onClick={() => onCollectorInquire?.("collector")}
              className="inline-flex items-center justify-between border border-[#8B1C1C] text-[#d97a7a] hover:bg-[#8B1C1C] hover:text-white px-6 py-4 text-xs uppercase tracking-[0.26em] transition-colors duration-300">
              Collector Inquiry <span aria-hidden>→</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-ki-elevated border border-ki-border">
            <div className="absolute inset-0 flex items-center justify-center text-center px-6">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-ki-muted/70">
                  Featured Cover · Placeholder
                </div>
                <div className="mt-4 font-serif text-2xl text-ki-fg/55 leading-snug">
                  {FEATURED_BOOK.title}
                </div>
                <div className="mt-3 text-[10px] uppercase tracking-[0.28em] text-ki-muted/60">
                  Final cover to be supplied
                </div>
              </div>
            </div>
          </div>

          {/* Book-spread thumbnail strip */}
          <div className="mt-3 grid grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i}
                className="relative aspect-[3/2] bg-ki-elevated border border-ki-border/60 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-[0.28em] text-ki-muted/70">
                  Spread · {String(i).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
