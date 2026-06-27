import { CV_HERO } from "@/data/site";
import { CV } from "@/constants/testIds";
import { toast } from "sonner";

export default function CVHero() {
  const onDownload = (e) => {
    e.preventDefault();
    toast.message("CV PDF placeholder — file to be supplied by artist.");
  };
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden grain">
      <img src={CV_HERO.image} alt={CV_HERO.alt} loading="eager" decoding="async"
        className="absolute inset-0 w-full h-full object-cover opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-ki-bg/85 via-ki-bg/60 to-ki-bg" />
      <div className="absolute inset-0 bg-gradient-to-r from-ki-bg/70 via-transparent to-transparent" />
      <div className="relative container-ki min-h-[88vh] flex flex-col justify-end pb-20 md:pb-28 pt-40">
        <div className="max-w-3xl">
          <div className="overline animate-fade-up" style={{ animationDelay: "0.05s" }}>
            Archive · Curriculum Vitae
          </div>
          <h1 data-testid={CV.heroTitle}
            className="mt-6 font-serif text-6xl sm:text-7xl lg:text-[9rem] leading-[0.92] tracking-tight text-ki-fg animate-fade-up"
            style={{ animationDelay: "0.15s" }}>
            CV
          </h1>
          <p data-testid={CV.heroSubtitle}
            className="mt-6 font-serif italic text-xl sm:text-2xl text-ki-beige/90 animate-fade-up"
            style={{ animationDelay: "0.3s" }}>
            Biography, exhibitions, collections and selected history
          </p>
          <p data-testid={CV.heroIntro}
            className="mt-6 max-w-2xl text-base sm:text-lg text-ki-fg/80 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.4s" }}>
            A concise record of the artist&apos;s work across photography, moving image, books,
            exhibitions, collections and publications.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-5 animate-fade-up"
            style={{ animationDelay: "0.55s" }}>
            <a href="#cv-biography" data-testid={CV.heroCtaRead}
              className="inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg transition-colors duration-300 px-8 py-4 text-xs uppercase tracking-[0.24em]">
              Read Biography
            </a>
            <button type="button" onClick={onDownload} data-testid={CV.heroCtaDownload}
              className="inline-flex items-center justify-center border border-ki-fg/40 text-ki-fg hover:border-ki-fg transition-colors duration-300 px-8 py-4 text-xs uppercase tracking-[0.24em]">
              Download CV
            </button>
          </div>
          <p className="mt-12 text-[11px] uppercase tracking-[0.3em] text-ki-muted animate-fade-up"
            style={{ animationDelay: "0.7s" }}>
            Download CV placeholder · file to be supplied by artist
          </p>
        </div>
      </div>
    </section>
  );
}
