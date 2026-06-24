import { CV_INQUIRY_PATHWAYS } from "@/data/site";
import { CV } from "@/constants/testIds";

export default function ProfessionalInquiries({ onSend }) {
  return (
    <section className="py-24 md:py-32 border-b border-ki-border bg-ki-surface">
      <div className="container-ki">
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="overline">Inquiries</div>
          <h2 data-testid={CV.inquiriesHeading}
            className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg">
            Professional Inquiries
          </h2>
          <p className="mt-6 text-sm text-ki-muted leading-relaxed">
            Three pathways. Each routes to the contact form below with the appropriate inquiry
            type pre-selected.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ki-border border border-ki-border">
          {CV_INQUIRY_PATHWAYS.map((p) => (
            <li key={p.slug} data-testid={CV.pathwayCard(p.slug)}
              className="bg-ki-surface p-7 min-h-[260px] flex flex-col justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">
                  Pathway
                </div>
                <h3 className="mt-4 font-serif text-2xl text-ki-fg tracking-tight">{p.title}</h3>
                <p className="mt-4 text-sm text-ki-fg/80 leading-relaxed">{p.note}</p>
              </div>
              <button type="button" onClick={() => onSend?.(p.type)}
                data-testid={CV.pathwayCta(p.slug)}
                className="mt-6 inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg transition-colors duration-300 px-6 py-3 text-[11px] uppercase tracking-[0.26em] self-start">
                Send Inquiry →
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
