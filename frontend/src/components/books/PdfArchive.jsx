import { FileText } from "lucide-react";
import { PDF_ARCHIVE_CARDS } from "@/data/site";
import { BOOKS } from "@/constants/testIds";

export default function PdfArchive({ onAccess }) {
  return (
    <section className="py-24 md:py-32 border-b border-ki-border">
      <div className="container-ki">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="overline">Digital</div>
            <h2 data-testid={BOOKS.pdfHeading}
              className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg">
              PDF Archive and Digital Publications
            </h2>
          </div>
          <p className="text-sm text-ki-muted max-w-sm leading-relaxed">
            Selected digital publications available by inquiry. No real download links until the
            artist confirms files.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-px bg-ki-border border border-ki-border">
          {PDF_ARCHIVE_CARDS.map((p, i) => (
            <li key={p.slug} data-testid={BOOKS.pdfCard(p.slug)}
              className="group bg-ki-bg p-6 min-h-[260px] flex flex-col justify-between transition-colors duration-500 hover:bg-ki-surface">
              <div>
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.26em] text-ki-gold/90">
                  <FileText size={14} strokeWidth={1.2} />
                  PDF · {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 font-serif text-xl text-ki-fg tracking-tight">{p.title}</h3>
                <p className="mt-3 text-sm text-ki-fg/70 leading-relaxed">{p.description}</p>
              </div>
              <div className="mt-5 space-y-2">
                <div className="text-[10px] uppercase tracking-[0.22em] text-ki-muted">
                  {p.file_type}
                </div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-ki-muted">
                  {p.access}
                </div>
                <button type="button"
                  data-testid={BOOKS.pdfCta(p.slug)}
                  onClick={() => onAccess?.(p.title)}
                  className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.26em] text-ki-fg/85 hover:text-ki-gold transition-colors duration-300">
                  Request Access →
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
