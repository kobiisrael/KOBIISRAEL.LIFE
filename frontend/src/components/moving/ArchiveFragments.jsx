import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { MOVING_FRAGMENTS } from "@/data/site";
import { MOVING } from "@/constants/testIds";

export default function ArchiveFragments() {
  return (
    <section className="py-24 md:py-32 border-b border-ki-border bg-ki-bg">
      <div className="container-ki">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="overline">Fragments</div>
            <h2
              data-testid={MOVING.fragmentsHeading}
              className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg"
            >
              Archive Fragments
            </h2>
          </div>
          <p className="text-sm text-ki-muted max-w-sm leading-relaxed">
            Short, unfinished and diary-like video fragments. All durations, formats and status to
            be confirmed by the artist.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-ki-border border border-ki-border">
          {MOVING_FRAGMENTS.map((f, i) => (
            <li
              key={f.slug}
              data-testid={MOVING.fragmentCard(f.slug)}
              className="group bg-ki-bg flex flex-col transition-colors duration-500 hover:bg-ki-surface"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-ki-elevated border-b border-ki-border/60">
                <div className="absolute inset-0 flex items-center justify-center text-center px-3">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-ki-muted/70">
                      Fragment · {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-2 text-[10px] uppercase tracking-[0.28em] text-ki-muted/60">
                      Placeholder
                    </div>
                  </div>
                </div>
                <div className="absolute top-2 right-2 border border-ki-fg/30 w-8 h-8 rounded-full flex items-center justify-center bg-ki-bg/30 backdrop-blur-sm group-hover:border-ki-gold transition-colors">
                  <Play size={10} className="text-ki-fg/80 ml-0.5 group-hover:text-ki-gold transition-colors" strokeWidth={1.4} />
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1 justify-between gap-5">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.26em] text-ki-gold/90">
                    {f.status}
                  </div>
                  <h3 className="mt-3 font-serif text-xl text-ki-fg tracking-tight">{f.title}</h3>
                  <p className="mt-3 text-sm text-ki-fg/70 leading-relaxed">{f.note}</p>
                </div>
                <Link
                  to="/journal"
                  data-testid={MOVING.fragmentCta(f.slug)}
                  className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-ki-fg/80 hover:text-ki-gold transition-colors duration-300"
                >
                  View Fragment →
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
