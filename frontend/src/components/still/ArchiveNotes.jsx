import { Link } from "react-router-dom";
import { ARCHIVE_NOTES } from "@/data/site";
import { STILL } from "@/constants/testIds";

export default function ArchiveNotes() {
  return (
    <section className="py-24 md:py-32 border-b border-ki-border bg-ki-bg">
      <div className="container-ki">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="overline">Notes</div>
            <h2
              data-testid={STILL.notesHeading}
              className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ki-fg"
            >
              Archive Notes
            </h2>
          </div>
          <p className="text-sm text-ki-muted max-w-sm leading-relaxed">
            Short poetic, historical and autobiographical notes connected to the photographic
            archive. Final texts to be supplied by the artist.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-ki-border border border-ki-border">
          {ARCHIVE_NOTES.map((n, i) => (
            <li
              key={n.slug}
              data-testid={STILL.noteCard(n.slug)}
              className="group bg-ki-bg p-7 min-h-[220px] flex flex-col justify-between transition-colors duration-500 hover:bg-ki-surface"
            >
              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">
                  Note · {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 font-serif text-2xl text-ki-fg tracking-tight">{n.title}</h3>
              </div>
              <div className="mt-6 space-y-4">
                <p className="text-sm text-ki-fg/70 leading-relaxed">{n.note}</p>
                <Link
                  to="/journal"
                  data-testid={STILL.noteCta(n.slug)}
                  className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.28em] text-ki-fg/80 hover:text-ki-gold transition-colors duration-300"
                >
                  Read Note →
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
