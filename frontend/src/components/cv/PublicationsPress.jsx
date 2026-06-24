import { CV_PUBLICATIONS_PRESS } from "@/data/site";
import { CV } from "@/constants/testIds";

export default function PublicationsPress() {
  return (
    <section className="py-24 md:py-32 border-b border-ki-border bg-ki-surface">
      <div className="container-ki">
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="overline">Publications · Press</div>
          <h2 data-testid={CV.pubsHeading}
            className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg">
            Publications and Press
          </h2>
          <p className="mt-6 text-sm text-ki-muted leading-relaxed">
            Books, catalogues, press features, interviews, essays, anthologies and academic
            references. All entries to be confirmed by the artist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-ki-border border border-ki-border">
          {CV_PUBLICATIONS_PRESS.map((group) => (
            <div key={group.slug} data-testid={CV.pubsBlock(group.slug)}
              className="bg-ki-surface p-7">
              <div className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">
                {group.heading}
              </div>
              <ul className="mt-5 divide-y divide-ki-border/60">
                {group.entries.map((e) => (
                  <li key={e.slug} className="py-4">
                    <div className="grid grid-cols-12 gap-3">
                      <div className="col-span-3 text-[11px] uppercase tracking-[0.22em] text-ki-muted">{e.year}</div>
                      <div className="col-span-9">
                        <div className="font-serif text-base text-ki-fg tracking-tight">{e.title}</div>
                        <div className="mt-1 text-xs text-ki-fg/75">{e.publication} · {e.publisher}</div>
                        <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-ki-muted">
                          {e.author} &middot; Related · {e.related}
                        </div>
                      </div>
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
