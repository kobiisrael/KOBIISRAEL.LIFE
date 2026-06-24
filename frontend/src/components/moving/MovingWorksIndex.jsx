import { useMemo, useState } from "react";
import { MOVING_FILTERS, MOVING_WORKS } from "@/data/site";
import MovingProjectCard from "@/components/moving/MovingProjectCard";
import { MOVING } from "@/constants/testIds";

export default function MovingWorksIndex() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    if (active === "all") return MOVING_WORKS;
    return MOVING_WORKS.filter((w) => w.tags?.includes(active));
  }, [active]);

  return (
    <section
      id="moving-works"
      className="py-24 md:py-32 border-b border-ki-border"
    >
      <div className="container-ki">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="overline">Moving Works</div>
            <h2
              data-testid={MOVING.worksHeading}
              className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg"
            >
              Moving Image Works
            </h2>
          </div>
          <p className="text-sm text-ki-muted max-w-sm leading-relaxed">
            Twelve moving-image projects. Years, durations, formats and screening status to be
            confirmed by the artist.
          </p>
        </div>

        <div
          data-testid={MOVING.filtersBar}
          role="tablist"
          aria-label="Moving-image filters"
          className="-mx-6 md:-mx-12 lg:-mx-20 px-6 md:px-12 lg:px-20 mb-12 md:mb-16 overflow-x-auto no-scrollbar"
        >
          <div className="flex gap-2 md:gap-3 min-w-max">
            {MOVING_FILTERS.map((f) => {
              const isActive = active === f.slug;
              return (
                <button
                  key={f.slug}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  data-testid={MOVING.filterBtn(f.slug)}
                  onClick={() => setActive(f.slug)}
                  className={`whitespace-nowrap border px-4 md:px-5 py-2.5 text-[11px] uppercase tracking-[0.24em] transition-colors duration-300 ${
                    isActive
                      ? "border-ki-gold text-ki-gold bg-ki-gold/5"
                      : "border-ki-border text-ki-fg/70 hover:border-ki-fg/40 hover:text-ki-fg"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div
            data-testid={MOVING.emptyState}
            className="border border-ki-border p-12 text-center"
          >
            <p className="text-sm text-ki-fg/70">
              No moving works match this filter yet. Final categorisation to be confirmed by the
              artist.
            </p>
          </div>
        ) : (
          <div
            data-testid={MOVING.grid}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12"
          >
            {filtered.map((w, i) => (
              <MovingProjectCard key={w.slug} work={w} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
