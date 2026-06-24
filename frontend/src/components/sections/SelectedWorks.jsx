import { SELECTED_PROJECTS } from "@/data/site";
import ProjectCard from "@/components/sections/ProjectCard";
import { HOME } from "@/constants/testIds";

export default function SelectedWorks() {
  return (
    <section id="selected-works" className="py-24 md:py-32 border-b border-ki-border">
      <div className="container-ki">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <div className="max-w-2xl">
            <div className="overline">Selected Works</div>
            <h2
              data-testid={HOME.worksHeading}
              className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg"
            >
              A connected body of work
            </h2>
          </div>
          <p className="text-sm text-ki-muted max-w-sm leading-relaxed">
            Seven ongoing investigations across still and moving image. Years, mediums and final
            descriptions to be confirmed by the artist.
          </p>
        </div>

        <div
          data-testid={HOME.worksGrid}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-12"
        >
          {SELECTED_PROJECTS.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
