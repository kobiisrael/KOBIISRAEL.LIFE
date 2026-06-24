import { Link } from "react-router-dom";
import { PRINT_COLLECTIONS } from "@/data/site";
import { PRINTS } from "@/constants/testIds";

export default function PrintCollections() {
  return (
    <section className="py-24 md:py-32 border-b border-ki-border">
      <div className="container-ki">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="overline">Collections</div>
            <h2
              data-testid={PRINTS.collectionsHeading}
              className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg"
            >
              Selected Print Collections
            </h2>
          </div>
          <p className="text-sm text-ki-muted max-w-sm leading-relaxed">
            Ten print collections, each linked to a wider photographic project. Final edition
            details, sizes and availability to be confirmed by the artist.
          </p>
        </div>

        <div
          data-testid={PRINTS.collectionsGrid}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 md:gap-10"
        >
          {PRINT_COLLECTIONS.map((c, i) => (
            <article
              key={c.slug}
              data-testid={PRINTS.collectionCard(c.slug)}
              className="group flex flex-col"
              aria-label={`${c.title} — print collection`}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-ki-elevated border border-ki-border/60">
                <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-ki-muted/70">
                      Print · {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-3 font-serif text-base text-ki-fg/45 leading-snug">
                      {c.title}
                    </div>
                    <div className="mt-3 text-[10px] uppercase tracking-[0.28em] text-ki-muted/60">
                      Placeholder
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 border border-ki-gold/0 group-hover:border-ki-gold/30 transition-colors duration-500" />
              </div>
              <div className="mt-5 flex flex-col gap-2">
                <h3 className="font-serif text-lg md:text-xl text-ki-fg tracking-tight leading-tight">
                  {c.title}
                </h3>
                <p className="text-sm text-ki-fg/70 leading-relaxed line-clamp-3">
                  {c.description}
                </p>
                <div className="mt-1 flex flex-col gap-1 text-[10px] uppercase tracking-[0.22em] text-ki-muted">
                  <span className="text-ki-gold/90">{c.availability}</span>
                  <span>{c.edition_status}</span>
                </div>
                <div className="mt-3 flex flex-col gap-2">
                  <Link
                    to={`/projects/${c.slug}`}
                    data-testid={PRINTS.collectionView(c.slug)}
                    className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.26em] text-ki-fg/85 hover:text-ki-gold transition-colors duration-300"
                  >
                    View Works →
                  </Link>
                  <a
                    href={`#prints-inquiry`}
                    data-testid={PRINTS.collectionInquire(c.slug)}
                    className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.26em] text-[#d97a7a] hover:text-[#ef9090] transition-colors duration-300"
                  >
                    Inquire →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
