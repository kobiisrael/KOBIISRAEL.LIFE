import { PRINT_INFO_BLOCKS } from "@/data/site";
import { PRINTS } from "@/constants/testIds";

export default function PrintInformation() {
  return (
    <section className="py-24 md:py-32 border-b border-ki-border bg-ki-surface">
      <div className="container-ki">
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="overline">For Collectors</div>
          <h2
            data-testid={PRINTS.infoHeading}
            className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg"
          >
            Print Information
          </h2>
          <p className="mt-6 text-sm text-ki-muted leading-relaxed">
            Standard collector information. Final specifications, edition sizes, framing options,
            shipping and pricing are confirmed per work by the artist or representative on inquiry.
          </p>
        </div>

        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-ki-border border border-ki-border">
          {PRINT_INFO_BLOCKS.map((b) => (
            <div key={b.slug} className="bg-ki-surface p-6 md:p-7 min-h-[200px] flex flex-col">
              <dt className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">
                {b.label}
              </dt>
              <dd className="mt-4 text-sm text-ki-fg/85 leading-relaxed">{b.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
