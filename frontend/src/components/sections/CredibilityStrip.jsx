import { CREDIBILITY_GROUPS } from "@/data/site";

export default function CredibilityStrip() {
  return (
    <section className="py-20 md:py-28 border-b border-ki-border bg-ki-bg">
      <div className="container-ki">
        <div className="overline text-center">Recognition · Archive</div>
        <h2 className="sr-only">Selected exhibitions, collections, awards and publications</h2>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-ki-border border border-ki-border">
          {CREDIBILITY_GROUPS.map((g) => (
            <div key={g.heading} className="bg-ki-bg p-6 md:p-8 min-h-[140px]">
              <div className="text-[10px] uppercase tracking-[0.26em] text-ki-gold/90 leading-relaxed">
                {g.heading}
              </div>
              <ul className="mt-4 space-y-1.5">
                {g.items.map((it) => (
                  <li key={it} className="text-sm text-ki-fg/70 leading-snug">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs uppercase tracking-[0.28em] text-ki-muted">
          Confirmed content to be supplied by the artist
        </p>
      </div>
    </section>
  );
}
