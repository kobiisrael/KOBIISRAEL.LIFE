import { Link } from "react-router-dom";
import { STILL_HERO } from "@/data/site";
import { STILL } from "@/constants/testIds";

export default function StillHero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden grain">
      <img
        src={STILL_HERO.image}
        alt={STILL_HERO.alt}
        className="absolute inset-0 w-full h-full object-cover opacity-65"
        loading="eager"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ki-bg/85 via-ki-bg/55 to-ki-bg" />
      <div className="absolute inset-0 bg-gradient-to-r from-ki-bg/70 via-transparent to-transparent" />

      <div className="relative container-ki min-h-[92vh] flex flex-col justify-end pb-20 md:pb-28 pt-40">
        <div className="max-w-3xl">
          <div className="overline animate-fade-up" style={{ animationDelay: "0.05s" }}>
            Archive · Volume 01
          </div>
          <h1
            data-testid={STILL.heroTitle}
            className="mt-6 font-serif text-6xl sm:text-7xl lg:text-[9rem] leading-[0.92] tracking-tight text-ki-fg animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            Still
          </h1>
          <p
            data-testid={STILL.heroSubtitle}
            className="mt-6 font-serif italic text-xl sm:text-2xl text-ki-beige/90 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Photography, fragments and autobiographical archives
          </p>
          <p
            data-testid={STILL.heroIntro}
            className="mt-6 max-w-2xl text-base sm:text-lg text-ki-fg/80 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            A photographic archive of masculinity, desire, exile, memory, travel, strangers,
            landscapes and the unstable theatre of identity.
          </p>
          <div
            className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5 animate-fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            <a
              href="#still-projects"
              data-testid={STILL.heroCtaProjects}
              className="inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg transition-colors duration-300 px-8 py-4 text-xs uppercase tracking-[0.24em]"
            >
              View Projects
            </a>
            <Link
              to="/#contact"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              data-testid={STILL.heroCtaCollector}
              className="inline-flex items-center justify-center border border-ki-fg/40 text-ki-fg hover:border-ki-fg transition-colors duration-300 px-8 py-4 text-xs uppercase tracking-[0.24em]"
            >
              Collector Inquiries
            </Link>
          </div>
          <p
            className="mt-12 text-[11px] uppercase tracking-[0.3em] text-ki-muted animate-fade-up"
            style={{ animationDelay: "0.7s" }}
          >
            Final hero image to be selected by artist
          </p>
        </div>
      </div>
    </section>
  );
}
