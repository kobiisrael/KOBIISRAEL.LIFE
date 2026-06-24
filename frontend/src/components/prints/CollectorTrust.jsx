import { COLLECTOR_TRUST } from "@/data/site";
import { PRINTS } from "@/constants/testIds";

export default function CollectorTrust() {
  return (
    <section className="py-24 md:py-32 border-b border-ki-border bg-ki-bg">
      <div className="container-ki">
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="overline">Provenance</div>
          <h2
            data-testid={PRINTS.trustHeading}
            className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg"
          >
            Artist, Archive and Provenance
          </h2>
          <p className="mt-6 text-sm text-ki-muted leading-relaxed">
            Selected context for collectors. All entries to be supplied by the artist; no exhibitions,
            collections, awards, publications or representation are claimed unless confirmed.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ki-border border border-ki-border">
          {COLLECTOR_TRUST.map((g) => (
            <div key={g.heading} className="bg-ki-bg p-6 md:p-7 min-h-[160px]">
              <div className="text-[10px] uppercase tracking-[0.26em] text-ki-gold/90 leading-relaxed">
                {g.heading}
              </div>
              <ul className="mt-4 space-y-1.5">
                {g.items.map((it) => (
                  <li key={it} className="text-sm text-ki-fg/75 leading-snug">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
