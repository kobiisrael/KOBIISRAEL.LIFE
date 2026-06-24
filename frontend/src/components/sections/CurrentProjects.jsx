import { CURRENT_PROJECTS } from "@/data/site";

export default function CurrentProjects() {
  return (
    <section className="py-24 md:py-32 border-b border-ki-border bg-ki-surface/40">
      <div className="container-ki">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="overline">In the Studio</div>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg">
              Current Projects
            </h2>
          </div>
          <p className="text-sm text-ki-muted max-w-sm leading-relaxed">
            Work in progress across image, sound, writing and the working archive.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-ki-border border border-ki-border">
          {CURRENT_PROJECTS.map((c, i) => (
            <li key={c.slug} className="group bg-ki-bg p-8 min-h-[220px] flex flex-col justify-between transition-colors duration-500 hover:bg-ki-surface">
              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">
                  0{i + 1}
                </div>
                <h3 className="mt-4 font-serif text-2xl text-ki-fg tracking-tight">
                  {c.title}
                </h3>
              </div>
              <p className="mt-6 text-sm text-ki-fg/70 leading-relaxed">{c.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
