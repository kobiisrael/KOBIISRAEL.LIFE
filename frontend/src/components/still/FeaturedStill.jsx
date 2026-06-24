import { Link } from "react-router-dom";
import { FEATURED_STILL } from "@/data/site";
import { STILL } from "@/constants/testIds";

export default function FeaturedStill() {
  return (
    <section className="py-24 md:py-36 border-b border-ki-border">
      <div className="container-ki grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7 order-2 lg:order-1">
          <div className="overline">Featured Project</div>
          <h2
            data-testid={STILL.featuredHeading}
            className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg"
          >
            {FEATURED_STILL.title}
          </h2>
          <p className="mt-6 text-base md:text-lg text-ki-fg/80 leading-relaxed max-w-xl">
            {FEATURED_STILL.description}
          </p>
          <div className="mt-10 flex flex-col gap-3 max-w-md">
            <Link
              to={`/projects/${FEATURED_STILL.slug}`}
              data-testid={STILL.featuredViewCta}
              className="inline-flex items-center justify-between border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg px-6 py-4 text-xs uppercase tracking-[0.26em] transition-colors duration-300"
            >
              View Project <span aria-hidden>→</span>
            </Link>
            <Link
              to="/#contact"
              data-testid={STILL.featuredPrintCta}
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-flex items-center justify-between border border-[#8B1C1C] text-[#d97a7a] hover:bg-[#8B1C1C] hover:text-white px-6 py-4 text-xs uppercase tracking-[0.26em] transition-colors duration-300"
            >
              Request Print Availability <span aria-hidden>→</span>
            </Link>
            <Link
              to="/books"
              data-testid={STILL.featuredBookCta}
              className="inline-flex items-center justify-between border border-ki-fg/30 text-ki-fg hover:border-ki-fg px-6 py-4 text-xs uppercase tracking-[0.26em] transition-colors duration-300"
            >
              View Related Book <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2">
          <div className="relative aspect-[4/5] md:aspect-[5/6] w-full overflow-hidden bg-ki-elevated border border-ki-border">
            <img
              src={FEATURED_STILL.image}
              alt={FEATURED_STILL.alt}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ki-bg/40 to-transparent" />
            <div className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.3em] text-ki-fg/75">
              Featured Still
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
