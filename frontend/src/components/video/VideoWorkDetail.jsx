import { Link } from "react-router-dom";
import { Play } from "lucide-react";

/**
 * VideoWorkDetail — reusable video-work detail component template.
 *
 * For use on future individual moving-image pages.
 * All fields are optional; missing fields fall back to "To be confirmed by artist".
 *
 * Expected shape (all optional):
 * {
 *   title, subtitle, year, duration, format, language, subtitles,
 *   synopsis, statement,
 *   director, camera, editor, sound,
 *   stills[],           // [{ url, alt }]
 *   excerpt_url,        // direct video URL OR vimeo/youtube embed URL
 *   poster_url, poster_alt,
 *   screening_history[], festival_history[], installation_history[],
 *   press_quotes[],     // [{ quote, source }]
 *   related_photography, related_book, related_sound,  // each: { title, to }
 *   licensing_inquiry, curator_inquiry,                // strings (route paths)
 * }
 */
export default function VideoWorkDetail({ work = {} }) {
  const TBC = "To be confirmed by artist";
  const field = (v) => (v && String(v).trim() ? v : TBC);
  const listField = (arr) => (Array.isArray(arr) && arr.length > 0 ? arr : [TBC]);

  return (
    <article className="border-t border-ki-border py-16 md:py-20" aria-label="Moving-image work detail">
      <header className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7">
          {/* Excerpt / poster — static, no autoplay */}
          <div className="relative aspect-video w-full overflow-hidden bg-ki-elevated border border-ki-border group">
            {work.poster_url ? (
              <img
                src={work.poster_url}
                alt={work.poster_alt || `${field(work.title)} — video poster`}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover opacity-85"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-ki-muted/70">
                    Excerpt / Poster
                  </div>
                  <div className="mt-3 font-serif text-lg text-ki-fg/45 leading-snug">
                    {field(work.title)}
                  </div>
                  <div className="mt-3 text-[10px] uppercase tracking-[0.28em] text-ki-muted/60">
                    Placeholder
                  </div>
                </div>
              </div>
            )}
            <button
              type="button"
              aria-label="Excerpt placeholder — to be supplied by artist"
              disabled
              className="absolute inset-0 m-auto w-20 h-20 md:w-24 md:h-24 rounded-full border border-ki-fg/35 bg-ki-bg/40 backdrop-blur-sm flex items-center justify-center group-hover:border-ki-gold transition-colors"
            >
              <Play size={22} className="text-ki-fg/85 ml-1 group-hover:text-ki-gold transition-colors" strokeWidth={1} />
            </button>
            <div className="absolute bottom-4 left-4 right-4 flex justify-between text-[10px] uppercase tracking-[0.28em] text-ki-fg/70">
              <span>Excerpt · Placeholder</span>
              <span>No autoplay · No sound</span>
            </div>
          </div>

          {/* Caption / transcript notice */}
          <p className="mt-3 text-[11px] uppercase tracking-[0.26em] text-ki-muted">
            Captions and transcript to be supplied by artist
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="overline">{field(work.subtitle)}</div>
          <h3 className="mt-4 font-serif text-3xl sm:text-4xl tracking-tight text-ki-fg">
            {field(work.title)}
          </h3>

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4">
            {[
              ["Year", work.year],
              ["Duration", work.duration],
              ["Format", work.format],
              ["Language", work.language],
              ["Subtitles", work.subtitles],
              ["Director", work.director],
              ["Camera", work.camera],
              ["Editor", work.editor],
              ["Sound / Music", work.sound],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="text-[10px] uppercase tracking-[0.26em] text-ki-gold/90">{label}</dt>
                <dd className="mt-2 text-sm text-ki-fg/85 leading-snug">{field(value)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      {/* Synopsis & statement */}
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-6">
          <div className="overline">Synopsis</div>
          <p className="mt-5 text-base md:text-lg text-ki-fg/85 leading-relaxed">
            {field(work.synopsis)}
          </p>
        </div>
        <div className="lg:col-span-6">
          <div className="overline">Artist Statement</div>
          <p className="mt-5 font-serif italic text-lg md:text-xl text-ki-fg/85 leading-relaxed text-balance">
            {field(work.statement)}
          </p>
        </div>
      </section>

      {/* Stills gallery */}
      <section className="mt-16">
        <div className="overline">Stills</div>
        <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {(work.stills && work.stills.length > 0 ? work.stills : Array.from({ length: 6 })).map(
            (s, i) => (
              <div
                key={i}
                className="relative aspect-video bg-ki-elevated border border-ki-border/60 overflow-hidden"
              >
                {s?.url ? (
                  <img
                    src={s.url}
                    alt={s.alt || `Still ${i + 1} — placeholder`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-center px-3">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.3em] text-ki-muted/70">
                        Still · {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="mt-2 text-[10px] uppercase tracking-[0.28em] text-ki-muted/60">
                        Placeholder
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </section>

      {/* Histories */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-ki-border border border-ki-border">
        {[
          ["Screening history", listField(work.screening_history)],
          ["Festival history", listField(work.festival_history)],
          ["Installation history", listField(work.installation_history)],
        ].map(([label, items]) => (
          <div key={label} className="bg-ki-surface p-5">
            <div className="text-[10px] uppercase tracking-[0.26em] text-ki-gold/90">{label}</div>
            <ul className="mt-3 space-y-1.5">
              {items.map((it, i) => (
                <li key={i} className="text-sm text-ki-fg/75 leading-snug">
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Press */}
      {work.press_quotes && work.press_quotes.length > 0 && (
        <section className="mt-16">
          <div className="overline">Press</div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10">
            {work.press_quotes.map((q, i) => (
              <blockquote key={i} className="border-l-2 border-ki-gold pl-6">
                <p className="font-serif italic text-xl text-ki-fg/90 leading-relaxed">
                  &ldquo;{q.quote}&rdquo;
                </p>
                <footer className="mt-4 text-[11px] uppercase tracking-[0.28em] text-ki-muted">
                  {q.source || TBC}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      )}

      {/* Related */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-ki-border border border-ki-border">
        {[
          ["Related Photography", work.related_photography],
          ["Related Book", work.related_book],
          ["Related Music / Sound", work.related_sound],
        ].map(([label, rel]) => (
          <div key={label} className="bg-ki-surface p-5">
            <div className="text-[10px] uppercase tracking-[0.26em] text-ki-gold/90">{label}</div>
            {rel?.title ? (
              <Link
                to={rel.to || "#"}
                className="mt-3 inline-flex font-serif text-base text-ki-fg/90 hover:text-ki-gold transition-colors"
              >
                {rel.title} →
              </Link>
            ) : (
              <p className="mt-3 text-sm text-ki-fg/75">{TBC}</p>
            )}
          </div>
        ))}
      </section>

      {/* Actions */}
      <section className="mt-12 flex flex-col sm:flex-row gap-4">
        <Link
          to={work.curator_inquiry || "/#contact"}
          className="inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg px-8 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300"
        >
          Curator Inquiry →
        </Link>
        <Link
          to={work.licensing_inquiry || "/#contact"}
          className="inline-flex items-center justify-center border border-[#8B1C1C] text-[#d97a7a] hover:bg-[#8B1C1C] hover:text-white px-8 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300"
        >
          Rights / Licensing →
        </Link>
      </section>
    </article>
  );
}
