import { Link } from "react-router-dom";
import { HERO } from "@/data/site";
import { HOME } from "@/constants/testIds";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden grain">
      <img
        src={HERO.image}
        alt={HERO.alt}
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        loading="eager"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ki-bg/85 via-ki-bg/55 to-ki-bg" />
      <div className="absolute inset-0 bg-gradient-to-r from-ki-bg/70 via-transparent to-transparent" />

      <div className="relative container-ki min-h-screen flex flex-col justify-end pb-20 md:pb-28 pt-40">
        <div className="max-w-3xl">
          <div className="overline animate-fade-up" style={{ animationDelay: "0.05s" }}>
            Still &amp; Moving Diaries
          </div>
          <h1
            data-testid={HOME.heroTitle}
            className="mt-6 font-serif text-5xl sm:text-6xl lg:text-8xl leading-[0.95] tracking-tight text-ki-fg animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            Kobi&nbsp;Israel
          </h1>
          <p
            data-testid={HOME.heroSubtitle}
            className="mt-6 font-serif italic text-xl sm:text-2xl text-ki-beige/90 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Photography, moving images and autobiographical archives of masculinity, desire, exile and memory.
          </p>
          <div
            className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5 animate-fade-up"
            style={{ animationDelay: "0.45s" }}
          >
            <a
              href="#selected-works"
              data-testid={HOME.heroCtaSelected}
              className="inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg transition-colors duration-300 px-8 py-4 text-xs uppercase tracking-[0.24em]"
            >
              View Selected Works
            </a>
            <Link
              to="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              data-testid={HOME.heroCtaCollector}
              className="inline-flex items-center justify-center border border-ki-fg/40 text-ki-fg hover:border-ki-fg hover:text-ki-fg transition-colors duration-300 px-8 py-4 text-xs uppercase tracking-[0.24em]"
            >
              Collector Inquiries
            </Link>
          </div>
        </div>

        <div className="mt-16 flex items-end justify-between text-[10px] uppercase tracking-[0.3em] text-ki-fg/40 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <span>Archive&nbsp;—&nbsp;Vol. 01</span>
          <span className="hidden sm:inline">Scroll&nbsp;↓</span>
        </div>
      </div>
    </section>
  );
}
