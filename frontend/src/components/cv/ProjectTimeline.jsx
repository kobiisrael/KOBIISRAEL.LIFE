import { Link } from "react-router-dom";
import { CV_TIMELINE } from "@/data/site";
import { CV } from "@/constants/testIds";

export default function ProjectTimeline() {
  return (
    <section className="py-24 md:py-32 border-b border-ki-border bg-ki-bg">
      <div className="container-ki">
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="overline">Timeline</div>
          <h2 data-testid={CV.timelineHeading}
            className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg">
            Selected Project Timeline
          </h2>
          <p className="mt-6 text-sm text-ki-muted leading-relaxed">
            Years to be confirmed by the artist per project.
          </p>
        </div>

        <ol className="relative border-l border-ki-border ml-4">
          {CV_TIMELINE.map((t, i) => (
            <li key={t.slug} data-testid={CV.timelineEntry(t.slug)} className="pl-8 py-5 relative">
              <span className="absolute -left-[7px] top-7 w-3 h-3 rounded-full bg-ki-gold/70 border border-ki-gold" />
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-3 text-[11px] uppercase tracking-[0.22em] text-ki-muted">
                  {t.year_range}
                </div>
                <div className="col-span-12 md:col-span-9">
                  <div className="flex items-baseline justify-between gap-3 flex-wrap">
                    <h3 className="font-serif text-xl md:text-2xl text-ki-fg tracking-tight">
                      {String(i + 1).padStart(2, "0")} · {t.title}
                    </h3>
                    <Link to={`/projects/${t.slug}`} data-testid={CV.timelineCta(t.slug)}
                      className="text-[11px] uppercase tracking-[0.26em] text-ki-fg/85 hover:text-ki-gold transition-colors">
                      View Project →
                    </Link>
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-ki-gold/90">
                    {t.medium}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-ki-muted">
                    {t.location}
                  </div>
                  <p className="mt-2 text-sm text-ki-fg/75 leading-relaxed">{t.note}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
