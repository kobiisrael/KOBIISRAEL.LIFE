import { Play } from "lucide-react";
import { MOVING_HERO } from "@/data/site";
import { MOVING } from "@/constants/testIds";

export default function MovingHero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden grain">
      <img
        src={MOVING_HERO.image}
        alt={MOVING_HERO.alt}
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        loading="eager"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ki-bg/85 via-ki-bg/55 to-ki-bg" />
      <div className="absolute inset-0 bg-gradient-to-r from-ki-bg/70 via-transparent to-transparent" />

      {/* Static "play" cue indicator — purely visual, no autoplay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="border border-ki-fg/25 w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center backdrop-blur-sm bg-ki-bg/10">
          <Play size={28} className="text-ki-fg/70 ml-1" strokeWidth={1} />
        </div>
      </div>

      <div className="relative container-ki min-h-[92vh] flex flex-col justify-end pb-20 md:pb-28 pt-40">
        <div className="max-w-3xl">
          <div className="overline animate-fade-up" style={{ animationDelay: "0.05s" }}>
            Archive · Volume 02
          </div>
          <h1
            data-testid={MOVING.heroTitle}
            className="mt-6 font-serif text-6xl sm:text-7xl lg:text-[9rem] leading-[0.92] tracking-tight text-ki-fg animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            Moving
          </h1>
          <p
            data-testid={MOVING.heroSubtitle}
            className="mt-6 font-serif italic text-xl sm:text-2xl text-ki-beige/90 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Film fragments, video works and moving-image diaries
          </p>
          <p
            data-testid={MOVING.heroIntro}
            className="mt-6 max-w-2xl text-base sm:text-lg text-ki-fg/80 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            Moving images, visual diaries and cinematic fragments exploring memory, masculinity,
            desire, exile, time and the unstable border between stillness and motion.
          </p>
          <div
            className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5 animate-fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            <a
              href="#moving-works"
              data-testid={MOVING.heroCtaWorks}
              className="inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg transition-colors duration-300 px-8 py-4 text-xs uppercase tracking-[0.24em]"
            >
              View Moving Works
            </a>
            <a
              href="#moving-curator"
              data-testid={MOVING.heroCtaCurator}
              className="inline-flex items-center justify-center border border-[#8B1C1C] text-[#d97a7a] hover:bg-[#8B1C1C] hover:text-white transition-colors duration-300 px-8 py-4 text-xs uppercase tracking-[0.24em]"
            >
              Film / Curator Inquiries
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
