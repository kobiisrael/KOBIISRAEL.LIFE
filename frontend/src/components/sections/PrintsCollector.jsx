import { PRINT_DETAILS } from "@/data/site";
import { HOME } from "@/constants/testIds";

export default function PrintsCollector() {
  return (
    <section className="py-28 md:py-40 bg-ki-surface border-y border-ki-border">
      <div className="container-ki grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="overline">Collector Edition</div>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg">
            Signed Limited Edition Prints
          </h2>
          <p className="mt-6 text-base text-ki-fg/75 leading-relaxed max-w-md">
            Archival pigment prints, produced in tightly limited editions and hand-signed by the
            artist. All editions accompanied by a numbered certificate of authenticity.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            data-testid={HOME.printsRequestCta}
            className="mt-10 inline-flex items-center justify-center border border-ki-gold bg-ki-gold/0 text-ki-gold hover:bg-ki-gold hover:text-ki-bg transition-colors duration-300 px-8 py-4 text-xs uppercase tracking-[0.26em]"
          >
            Request Print Availability →
          </a>
        </div>

        <div className="lg:col-span-7">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-ki-border border border-ki-border">
            {PRINT_DETAILS.map((d) => (
              <div key={d.label} className="bg-ki-surface p-6 md:p-8">
                <dt className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">
                  {d.label}
                </dt>
                <dd className="mt-3 font-serif text-lg md:text-xl text-ki-fg/90 leading-snug">
                  {d.value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-xs uppercase tracking-[0.24em] text-ki-muted">
            Final pricing and availability — to be confirmed by the artist
          </p>
        </div>
      </div>
    </section>
  );
}
