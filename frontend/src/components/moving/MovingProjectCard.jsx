import { Link } from "react-router-dom";
import { Play, ArrowUpRight } from "lucide-react";
import { MOVING } from "@/constants/testIds";

export default function MovingProjectCard({ work, index = 0 }) {
  return (
    <article
      data-testid={MOVING.card(work.slug)}
      className="group flex flex-col"
      aria-label={`${work.title} — moving-image work`}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-ki-elevated border border-ki-border/60">
        {/* Static video-still placeholder. No autoplay, no embedded video on this card. */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <div className="text-[10px] uppercase tracking-[0.3em] text-ki-muted/70">
              Video Still · {String(index + 1).padStart(2, "0")}
            </div>
            <div className="mt-3 font-serif text-lg text-ki-fg/45 leading-snug">
              {work.title}
            </div>
            <div className="mt-3 text-[10px] uppercase tracking-[0.28em] text-ki-muted/60">
              Placeholder
            </div>
          </div>
        </div>
        <div className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.24em] bg-ki-bg/70 backdrop-blur-sm px-2 py-1 border border-ki-border/40 text-ki-fg/70">
          {work.status}
        </div>
        <div className="absolute top-3 right-3 border border-ki-fg/30 w-9 h-9 rounded-full flex items-center justify-center bg-ki-bg/30 backdrop-blur-sm transition-colors group-hover:border-ki-gold">
          <Play size={12} className="text-ki-fg/80 ml-0.5 group-hover:text-ki-gold transition-colors" strokeWidth={1.4} />
        </div>
        <div className="absolute inset-0 border border-ki-gold/0 group-hover:border-ki-gold/30 transition-colors duration-500" />
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <h3 className="font-serif text-xl md:text-2xl text-ki-fg tracking-tight leading-tight">
          {work.title}
        </h3>
        <div className="flex flex-col gap-1 text-[10px] uppercase tracking-[0.24em] text-ki-muted">
          <span>{work.year_range}</span>
          <span>Duration · {work.duration}</span>
          <span className="text-ki-muted/85">{work.format}</span>
        </div>
        <p className="mt-2 text-sm text-ki-fg/70 leading-relaxed line-clamp-3">
          {work.synopsis}
        </p>
        <Link
          to={`/projects/${work.slug}`}
          data-testid={MOVING.cardCta(work.slug)}
          className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-ki-fg/80 hover:text-ki-gold transition-colors duration-300 self-start"
        >
          View Work
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </article>
  );
}
