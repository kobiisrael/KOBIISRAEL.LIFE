import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { HOME } from "@/constants/testIds";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <article
      data-testid={HOME.worksCard(project.slug)}
      className="group flex flex-col"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-ki-elevated border border-ki-border/60">
        {/* Plain block placeholder as per user choice for project cards */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <div className="text-[10px] uppercase tracking-[0.3em] text-ki-muted/70">
              Image · 0{index + 1}
            </div>
            <div className="mt-3 font-serif text-lg text-ki-fg/45 leading-snug">
              {project.title}
            </div>
            <div className="mt-3 text-[10px] uppercase tracking-[0.28em] text-ki-muted/60">
              Placeholder
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ki-bg/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
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
          <div className="text-[11px] uppercase tracking-[0.22em] text-ki-gold/90">
            {project.medium}
          </div>
        </div>
        <p className="mt-2 text-sm text-ki-fg/70 leading-relaxed line-clamp-3">
          {project.description}
        </p>
        <Link
          to={`/projects/${project.slug}`}
          data-testid={HOME.worksCardCta(project.slug)}
          className="mt-4 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-ki-fg/80 hover:text-ki-gold transition-colors duration-300 self-start"
        >
          Enter Project
          <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}
