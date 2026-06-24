import { Link } from "react-router-dom";
import { FEATURED_PROJECT } from "@/data/site";
import { HOME } from "@/constants/testIds";

export default function FeaturedProject() {
  return (
    <section className="py-24 md:py-36 border-b border-ki-border">
      <div className="container-ki grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7 relative">
          <div className="relative aspect-[4/5] md:aspect-[5/6] w-full overflow-hidden bg-ki-elevated border border-ki-border">
            <img
              src={FEATURED_PROJECT.image}
              alt={FEATURED_PROJECT.alt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ki-bg/40 to-transparent" />
            <div className="absolute top-6 left-6 text-[10px] uppercase tracking-[0.3em] text-ki-fg/70">
              Featured Project
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="overline">Long-form Series</div>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg">
            {FEATURED_PROJECT.title}
          </h2>
          <p className="mt-6 text-base md:text-lg text-ki-fg/80 leading-relaxed max-w-lg">
            {FEATURED_PROJECT.description}
          </p>
          <div className="mt-10 flex flex-col gap-3">
            <Link
              to={`/projects/${FEATURED_PROJECT.slug}`}
              data-testid={HOME.featuredViewCta}
              className="inline-flex items-center justify-between border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg px-6 py-4 text-xs uppercase tracking-[0.26em] transition-colors duration-300"
            >
              View Project <span aria-hidden>→</span>
            </Link>
            <Link
              to={`/projects/${FEATURED_PROJECT.slug}#film`}
              data-testid={HOME.featuredWatchCta}
              className="inline-flex items-center justify-between border border-ki-fg/30 text-ki-fg hover:border-ki-fg px-6 py-4 text-xs uppercase tracking-[0.26em] transition-colors duration-300"
            >
              Watch Moving Image Excerpt <span aria-hidden>→</span>
            </Link>
            <a
              href="#contact"
              data-testid={HOME.featuredInquireCta}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-between border border-[#8B1C1C] text-[#d97a7a] hover:bg-[#8B1C1C] hover:text-white px-6 py-4 text-xs uppercase tracking-[0.26em] transition-colors duration-300"
            >
              Inquire About Prints <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
