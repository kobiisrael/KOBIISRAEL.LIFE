import { Link } from "react-router-dom";
import { STILL_COLLECTOR } from "@/data/site";
import { STILL } from "@/constants/testIds";

export default function CollectorPathway() {
  return (
    <section className="py-28 md:py-40 bg-ki-surface border-y border-ki-border">
      <div className="container-ki grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="overline">Collector</div>
          <h2
            data-testid={STILL.collectorHeading}
            className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg"
          >
            Collector Information
          </h2>
          <p className="mt-6 text-base text-ki-fg/75 leading-relaxed max-w-md">
            A clear, understated path for collectors interested in signed limited edition prints
            from the photographic archive. All works produced to archival standards, hand-signed
            and accompanied by a numbered certificate of authenticity.
          </p>
          <Link
            to="/#contact"
            data-testid={STILL.collectorRequestCta}
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="mt-10 inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg transition-colors duration-300 px-8 py-4 text-xs uppercase tracking-[0.26em]"
          >
            Request Print Availability →
          </Link>
          <p className="mt-6 text-xs uppercase tracking-[0.24em] text-ki-muted">
            All collector information to be confirmed by artist
          </p>
        </div>

        <div className="lg:col-span-7">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-ki-border border border-ki-border">
            {STILL_COLLECTOR.map((d) => (
              <div key={d.label} className="bg-ki-surface p-6 md:p-7">
                <dt className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">
                  {d.label}
                </dt>
                <dd className="mt-3 font-serif text-base md:text-lg text-ki-fg/90 leading-snug">
                  {d.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
