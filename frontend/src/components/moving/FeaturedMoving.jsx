import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { FEATURED_MOVING } from "@/data/site";
import { MOVING } from "@/constants/testIds";

export default function FeaturedMoving() {
  return (
    <section className="py-24 md:py-36 border-b border-ki-border">
      <div className="container-ki grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7 order-1">
          <div className="relative aspect-video w-full overflow-hidden bg-ki-elevated border border-ki-border group">
            <img
              src={FEATURED_MOVING.image}
              alt={FEATURED_MOVING.alt}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ki-bg/55 via-transparent to-ki-bg/20" />
            <div className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.3em] text-ki-fg/80 flex items-center gap-3">
              <span className="inline-block w-2 h-2 rounded-full bg-ki-gold" />
              Featured Moving · Video Still
            </div>
            {/* Static play indicator */}
            <button
              type="button"
              aria-label="Excerpt placeholder — to be supplied by artist"
              disabled
              className="absolute inset-0 m-auto w-20 h-20 md:w-24 md:h-24 rounded-full border border-ki-fg/35 bg-ki-bg/30 backdrop-blur-sm flex items-center justify-center transition-colors group-hover:border-ki-gold"
            >
              <Play size={22} className="text-ki-fg/85 ml-1 group-hover:text-ki-gold transition-colors" strokeWidth={1} />
            </button>
            <div className="absolute bottom-5 left-5 right-5 flex justify-between text-[10px] uppercase tracking-[0.28em] text-ki-fg/70">
              <span>Excerpt · Placeholder</span>
              <span>No autoplay · No sound</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 order-2">
          <div className="overline">Featured Moving Work</div>
          <h2
            data-testid={MOVING.featuredHeading}
            className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg"
          >
            {FEATURED_MOVING.title}
          </h2>
          <p className="mt-6 text-base md:text-lg text-ki-fg/80 leading-relaxed max-w-xl">
            {FEATURED_MOVING.description}
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 max-w-md">
            {[
              ["Duration", FEATURED_MOVING.duration],
              ["Format", FEATURED_MOVING.format],
              ["Language / subtitles", FEATURED_MOVING.language],
              ["Screening status", FEATURED_MOVING.screening_status],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="text-[10px] uppercase tracking-[0.26em] text-ki-gold/90">{label}</dt>
                <dd className="mt-2 text-sm text-ki-fg/85 leading-snug">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-col gap-3 max-w-md">
            <Link
              to={`/projects/${FEATURED_MOVING.slug}#film`}
              data-testid={MOVING.featuredWatchCta}
              className="inline-flex items-center justify-between border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg px-6 py-4 text-xs uppercase tracking-[0.26em] transition-colors duration-300"
            >
              Watch Excerpt <span aria-hidden>→</span>
            </Link>
            <Link
              to={`/projects/${FEATURED_MOVING.slug}`}
              data-testid={MOVING.featuredPhotographyCta}
              className="inline-flex items-center justify-between border border-ki-fg/30 text-ki-fg hover:border-ki-fg px-6 py-4 text-xs uppercase tracking-[0.26em] transition-colors duration-300"
            >
              View Related Photography <span aria-hidden>→</span>
            </Link>
            <a
              href="#moving-curator"
              data-testid={MOVING.featuredCuratorCta}
              className="inline-flex items-center justify-between border border-[#8B1C1C] text-[#d97a7a] hover:bg-[#8B1C1C] hover:text-white px-6 py-4 text-xs uppercase tracking-[0.26em] transition-colors duration-300"
            >
              Film / Curator Inquiry <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
