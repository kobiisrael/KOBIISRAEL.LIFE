import { CV_BIOGRAPHY, CV_POSITIONING } from "@/data/site";
import { CV } from "@/constants/testIds";

export default function BiographyAndPositioning() {
  return (
    <>
      <section id="cv-biography" className="py-24 md:py-32 border-b border-ki-border">
        <div className="container-ki max-w-3xl">
          <div className="overline">Biography</div>
          <h2 data-testid={CV.bioHeading}
            className="mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ki-fg text-balance">
            Biography
          </h2>
          <p className="mt-8 text-base md:text-lg leading-relaxed text-ki-fg/85 text-balance">
            {CV_BIOGRAPHY}
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.28em] text-ki-muted">
            Final artist-approved biography to be supplied
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 border-b border-ki-border bg-ki-surface">
        <div className="container-ki">
          <div className="overline">Positioning</div>
          <h2 data-testid={CV.positioningHeading}
            className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ki-fg">
            Artist Positioning
          </h2>
          <ul className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-ki-border border border-ki-border">
            {CV_POSITIONING.map((p, i) => (
              <li key={p.slug} data-testid={CV.positioningCard(p.slug)}
                className="bg-ki-surface p-7 min-h-[200px] flex flex-col">
                <div className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">
                  0{i + 1}
                </div>
                <h3 className="mt-4 font-serif text-2xl text-ki-fg tracking-tight">{p.title}</h3>
                <p className="mt-4 text-sm text-ki-fg/80 leading-relaxed">{p.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
