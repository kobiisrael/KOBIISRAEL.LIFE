import { FileText } from "lucide-react";
import { toast } from "sonner";
import { CV_DOWNLOADS } from "@/data/site";
import { CV } from "@/constants/testIds";

export default function ProfessionalMaterials({ onHighResRequest }) {
  const handleClick = (m) => {
    if (m.slug === "highres-request") {
      onHighResRequest?.();
      return;
    }
    toast.message(`${m.title} placeholder — file to be supplied by artist.`);
  };

  return (
    <section className="py-24 md:py-32 border-b border-ki-border">
      <div className="container-ki">
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="overline">Downloads · Press</div>
          <h2 data-testid={CV.materialsHeading}
            className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg">
            Professional Materials
          </h2>
          <p className="mt-6 text-sm text-ki-muted leading-relaxed">
            Downloadable placeholders. No real files are linked until supplied by the artist.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ki-border border border-ki-border">
          {CV_DOWNLOADS.map((m) => (
            <li key={m.slug} data-testid={CV.materialCard(m.slug)}
              className="group bg-ki-bg p-6 min-h-[220px] flex flex-col justify-between transition-colors duration-500 hover:bg-ki-surface">
              <div>
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.26em] text-ki-gold/90">
                  <FileText size={14} strokeWidth={1.2} />
                  {m.file_type}
                </div>
                <h3 className="mt-4 font-serif text-lg text-ki-fg tracking-tight">{m.title}</h3>
                <p className="mt-3 text-sm text-ki-fg/70 leading-relaxed">{m.description}</p>
              </div>
              <button type="button" onClick={() => handleClick(m)}
                data-testid={CV.materialCta(m.slug)}
                className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.26em] text-ki-fg/85 hover:text-ki-gold transition-colors duration-300 self-start">
                {m.slug === "highres-request" ? "Request →" : "Download →"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
