import { CV_COLLECTIONS } from "@/data/site";
import { CV } from "@/constants/testIds";

export default function Collections() {
  return (
    <section className="py-24 md:py-32 border-b border-ki-border bg-ki-surface">
      <div className="container-ki">
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="overline">Provenance</div>
          <h2 data-testid={CV.collectionsHeading}
            className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg">
            Collections
          </h2>
          <p className="mt-6 text-sm text-ki-muted leading-relaxed">
            No collection, collector, holding or acquisition is claimed unless confirmed in writing
            by the artist.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-ki-border border border-ki-border">
          {CV_COLLECTIONS.map((group) => (
            <div key={group.slug} data-testid={CV.collectionsBlock(group.slug)}
              className="bg-ki-surface p-7">
              <div className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">
                {group.heading}
              </div>
              <ul className="mt-5 divide-y divide-ki-border/60">
                {group.entries.map((e) => (
                  <li key={e.slug} className="py-4">
                    <div className="font-serif text-lg text-ki-fg tracking-tight">{e.name}</div>
                    <div className="mt-1 text-sm text-ki-fg/75">{e.city}, {e.country}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-ki-muted">
                      Work · {e.work} &middot; Acquired · {e.acquired}
                    </div>
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
