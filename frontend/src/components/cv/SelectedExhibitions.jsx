import { CV_EXHIBITIONS_SOLO, CV_EXHIBITIONS_GROUP } from "@/data/site";
import { CV } from "@/constants/testIds";

function Block({ heading, entries, testId }) {
  return (
    <div data-testid={testId}>
      <div className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">{heading}</div>
      <ul className="mt-6 divide-y divide-ki-border border-y border-ki-border">
        {entries.map((e) => (
          <li key={e.slug} className="grid grid-cols-12 gap-4 py-5">
            <div className="col-span-3 md:col-span-2 text-[11px] uppercase tracking-[0.22em] text-ki-muted">
              {e.year}
            </div>
            <div className="col-span-9 md:col-span-10">
              <div className="font-serif text-lg text-ki-fg tracking-tight">{e.title}</div>
              <div className="mt-1 text-sm text-ki-fg/75">{e.venue} · {e.city}, {e.country}</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-ki-muted">
                Curator · {e.curator} &middot; Project · {e.project}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SelectedExhibitions() {
  return (
    <section className="py-24 md:py-32 border-b border-ki-border">
      <div className="container-ki">
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="overline">Exhibitions</div>
          <h2 data-testid={CV.exhibitionsHeading}
            className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg">
            Selected Exhibitions
          </h2>
          <p className="mt-6 text-sm text-ki-muted leading-relaxed">
            All exhibition entries to be confirmed by the artist. No exhibition history is claimed
            unless supplied.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <Block heading="Solo Exhibitions" entries={CV_EXHIBITIONS_SOLO} testId={CV.exhibitionsSolo} />
          <Block heading="Group Exhibitions" entries={CV_EXHIBITIONS_GROUP} testId={CV.exhibitionsGroup} />
        </div>
      </div>
    </section>
  );
}
