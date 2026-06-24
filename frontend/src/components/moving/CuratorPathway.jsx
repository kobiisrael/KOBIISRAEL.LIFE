import { Link } from "react-router-dom";
import { CURATOR_PATHWAY } from "@/data/site";
import { MOVING } from "@/constants/testIds";

export default function CuratorPathway() {
  return (
    <section
      id="moving-curator"
      className="py-28 md:py-40 bg-ki-surface border-y border-ki-border"
    >
      <div className="container-ki grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="overline">Curators · Festivals · Programmers</div>
          <h2
            data-testid={MOVING.curatorHeading}
            className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg"
          >
            Screenings, Installations and Curator Inquiries
          </h2>
          <p className="mt-6 text-base text-ki-fg/75 leading-relaxed max-w-md">
            A clear, serious pathway for curators, festivals, galleries, museums, universities and
            cultural programmers interested in the moving-image work. Screening copies, technical
            specifications and press materials available on request.
          </p>
          <Link
            to="/#contact"
            data-testid={MOVING.curatorRequestCta}
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="mt-10 inline-flex items-center justify-center border border-[#8B1C1C] text-[#d97a7a] hover:bg-[#8B1C1C] hover:text-white transition-colors duration-300 px-8 py-4 text-xs uppercase tracking-[0.26em]"
          >
            Request Screening / Curator Information →
          </Link>
          <p className="mt-6 text-xs uppercase tracking-[0.24em] text-ki-muted">
            Availability and technical details to be confirmed by artist
          </p>
        </div>

        <div className="lg:col-span-7">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-ki-border border border-ki-border">
            {CURATOR_PATHWAY.map((d) => (
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
