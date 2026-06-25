import { PRINTS_HERO } from "@/data/site";
import { PRINTS } from "@/constants/testIds";

export default function PrintsHero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden grain">
      <img
        src={PRINTS_HERO.image}
        alt={PRINTS_HERO.alt}
        className="absolute inset-0 w-full h-full object-cover opacity-65"
        loading="eager"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ki-bg/85 via-ki-bg/55 to-ki-bg" />
      <div className="absolute inset-0 bg-gradient-to-r from-ki-bg/70 via-transparent to-transparent" />

      <div className="relative container-ki min-h-[92vh] flex flex-col justify-end pb-20 md:pb-28 pt-40">
        <div className="max-w-3xl">
          <div className="overline animate-fade-up" style={{ animationDelay: "0.05s" }}>
            Collector Edition · Volume 03
          </div>
          <h1
            data-testid={PRINTS.heroTitle}
            className="mt-6 font-serif text-5xl sm:text-6xl lg:text-[7rem] leading-[0.95] tracking-tight text-ki-fg animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            Limited Edition Prints
          </h1>
          <p
            data-testid={PRINTS.heroSubtitle}
            className="mt-6 font-serif italic text-xl sm:text-2xl text-ki-beige/90 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Signed fine art photography prints from the Kobi Israel archive
          </p>
          <p
            data-testid={PRINTS.heroIntro}
            className="mt-6 max-w-2xl text-base sm:text-lg text-ki-fg/80 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Selected photographic works available as signed limited edition prints, subject to
            confirmation of edition status, size, availability and condition.
          </p>
          <div
            className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5 animate-fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            <a
              href="#prints-available"
              data-testid={PRINTS.heroCtaWorks}
              className="inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg transition-colors duration-300 px-8 py-4 text-xs uppercase tracking-[0.24em]"
            >
              View Available Works
            </a>
            <a
              href="#prints-inquiry"
              data-testid={PRINTS.heroCtaInquire}
              className="inline-flex items-center justify-center border border-[#8B1C1C] text-[#d97a7a] hover:bg-[#8B1C1C] hover:text-white transition-colors duration-300 px-8 py-4 text-xs uppercase tracking-[0.24em]"
            >
              Request Print Availability
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
