import { Link } from "react-router-dom";
import { PRINTS_RELATED_LINKS } from "@/data/site";
import { PRINTS } from "@/constants/testIds";

export default function RelatedArchive() {
  return (
    <section className="py-24 md:py-32 border-b border-ki-border bg-ki-bg">
      <div className="container-ki">
        <div className="max-w-2xl mb-10">
          <div className="overline">Continue Browsing</div>
          <h2
            data-testid={PRINTS.relatedHeading}
            className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg"
          >
            Related Archive
          </h2>
          <p className="mt-6 text-sm text-ki-muted leading-relaxed">
            The prints are part of a wider archive, not isolated objects. Continue into the still,
            moving, written and archival areas of Kobi Israel&apos;s work.
          </p>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-ki-border border border-ki-border">
          {PRINTS_RELATED_LINKS.map((l) => (
            <li key={l.slug} className="bg-ki-bg">
              <Link
                to={l.to}
                data-testid={PRINTS.relatedLink(l.slug)}
                className="group block p-7 min-h-[140px] flex flex-col justify-between transition-colors duration-500 hover:bg-ki-surface"
              >
                <div className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">Section</div>
                <div className="mt-4 font-serif text-2xl text-ki-fg tracking-tight group-hover:text-ki-gold transition-colors">
                  {l.label}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
