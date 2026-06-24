import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { STILL_MOVING_BRIDGE } from "@/data/site";
import { MOVING } from "@/constants/testIds";

const BRIDGE_LINKS = {
  "photography-into-film": "/still",
  "memory-into-sequence": "/projects/investigating-things-past",
  "archive-into-voice": "/projects/music-sound-works",
};

export default function StillMovingBridge() {
  return (
    <section className="py-24 md:py-32 border-b border-ki-border">
      <div className="container-ki">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="overline">Still · Moving</div>
            <h2
              data-testid={MOVING.bridgeHeading}
              className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg"
            >
              Still Images, Moving Time
            </h2>
          </div>
          <p className="text-sm text-ki-muted max-w-sm leading-relaxed">
            The moving-image work is not separate from the photography. They belong to the same
            artistic archive.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ki-border border border-ki-border">
          {STILL_MOVING_BRIDGE.map((c, i) => (
            <li
              key={c.slug}
              data-testid={MOVING.bridgeCard(c.slug)}
              className="group bg-ki-bg p-7 min-h-[320px] flex flex-col justify-between transition-colors duration-500 hover:bg-ki-surface"
            >
              <div>
                <div className="relative aspect-video w-full overflow-hidden bg-ki-elevated border border-ki-border/60 mb-6">
                  <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-ki-muted/70">
                        Visual · {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="mt-2 text-[10px] uppercase tracking-[0.28em] text-ki-muted/60">
                        Placeholder
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">
                  Connection · {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 font-serif text-2xl text-ki-fg tracking-tight">{c.title}</h3>
                <p className="mt-4 text-sm text-ki-fg/70 leading-relaxed">{c.note}</p>
              </div>
              <Link
                to={BRIDGE_LINKS[c.slug] || "/still"}
                data-testid={MOVING.bridgeCta(c.slug)}
                className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-ki-fg/80 hover:text-ki-gold transition-colors duration-300"
              >
                Explore Connection <ArrowUpRight size={14} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
