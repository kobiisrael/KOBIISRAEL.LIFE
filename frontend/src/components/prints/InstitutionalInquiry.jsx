import { INSTITUTIONAL_PATHWAY } from "@/data/site";
import { PRINTS } from "@/constants/testIds";

export default function InstitutionalInquiry({ onSendInstitutional }) {
  return (
    <section className="py-24 md:py-32 border-b border-ki-border bg-ki-surface">
      <div className="container-ki grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="overline">Galleries · Museums · Institutions</div>
          <h2
            data-testid={PRINTS.institutionalHeading}
            className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg"
          >
            Gallery, Museum and Institutional Inquiries
          </h2>
          <p className="mt-6 text-base text-ki-fg/75 leading-relaxed max-w-md">
            A dedicated pathway for galleries, curators, museums, universities, publishers and
            researchers. Exhibition proposals, archive research, institutional acquisitions and
            publication requests welcomed via direct contact.
          </p>
          <button
            type="button"
            onClick={onSendInstitutional}
            data-testid={PRINTS.institutionalCta}
            className="mt-10 inline-flex items-center justify-center border border-[#8B1C1C] text-[#d97a7a] hover:bg-[#8B1C1C] hover:text-white transition-colors duration-300 px-8 py-4 text-xs uppercase tracking-[0.26em]"
          >
            Send Institutional Inquiry →
          </button>
          <p className="mt-6 text-xs uppercase tracking-[0.24em] text-ki-muted">
            Details confirmed case by case by the artist or representative
          </p>
        </div>

        <div className="lg:col-span-7">
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-ki-border border border-ki-border">
            {INSTITUTIONAL_PATHWAY.map((d) => (
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
