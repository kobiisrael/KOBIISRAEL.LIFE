import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { STILL } from "@/constants/testIds";

export default function StillProjectCard({ project, index = 0 }) {
  return (
    <article
      data-testid={STILL.card(project.slug)}
      className="group flex flex-col"
      aria-label={`${project.title} — photographic project`}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-ki-elevated border border-ki-border/60">
        {project.image ? (
          <img
            src={project.image}
            alt={project.image_alt || `${project.title} by Kobi Israel, details to be confirmed.`}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6">
              <div className="text-[10px] uppercase tracking-[0.3em] text-ki-muted/70">
                Image · {String(index + 1).padStart(2, "0")}
              </div>
              <div className="mt-3 font-serif text-lg text-ki-fg/45 leading-snug">
                {project.title}
              </div>
              <div className="mt-3 text-[10px] uppercase tracking-[0.28em] text-ki-muted/60">
                Placeholder
              </div>
            </div>
          </div>
        )}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-ki-fg/55">
          <span className="bg-ki-bg/70 backdrop-blur-sm px-2 py-1 border border-ki-border/40">
            {project.status}
          </span>
        </div>
        <div className="absolute inset-0 border border-ki-gold/0 group-hover:border-ki-gold/30 transition-colors duration-500" />
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <h3 className="font-serif text-xl md:text-2xl text-ki-fg tracking-tight leading-tight">
          {project.title}
        </h3>
        <div className="flex flex-col gap-1">
          <div className="text-[10px] uppercase tracking-[0.24em] text-ki-muted">
            {project.year_range}
          </div>
          <div className="text-[10px] uppercase tracking-[0.24em] text-ki-muted/80">
            {project.location}
          </div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-ki-gold/90">
            {project.medium}
          </div>
        </div>
        <p className="mt-2 text-sm text-ki-fg/70 leading-relaxed line-clamp-3">
          {project.description}
        </p>
        <Link
          to={`/projects/${project.slug}`}
          data-testid={STILL.cardCta(project.slug)}
          className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-ki-fg/80 hover:text-ki-gold transition-colors duration-300 self-start"
        >
          Enter Project
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </article>
  );
}
