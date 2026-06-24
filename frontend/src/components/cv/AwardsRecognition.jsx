import { CV_AWARDS } from "@/data/site";
import { CV } from "@/constants/testIds";

export default function AwardsRecognition() {
  return (
    <section className="py-24 md:py-32 border-b border-ki-border">
      <div className="container-ki">
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="overline">Recognition</div>
          <h2 data-testid={CV.awardsHeading}
            className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg">
            Awards and Recognition
          </h2>
          <p className="mt-6 text-sm text-ki-muted leading-relaxed">
            No award or recognition is claimed unless confirmed by the artist.
          </p>
        </div>

        <ul className="divide-y divide-ki-border border-y border-ki-border">
          {CV_AWARDS.map((a) => (
            <li key={a.slug} className="grid grid-cols-12 gap-4 py-6">
              <div className="col-span-3 md:col-span-2 text-[11px] uppercase tracking-[0.22em] text-ki-muted">
                {a.year}
              </div>
              <div className="col-span-9 md:col-span-10">
                <div className="font-serif text-xl text-ki-fg tracking-tight">{a.name}</div>
                <div className="mt-1 text-sm text-ki-fg/75">{a.body} · {a.category}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-ki-muted">
                  Project · {a.project} &middot; Notes · {a.notes}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
