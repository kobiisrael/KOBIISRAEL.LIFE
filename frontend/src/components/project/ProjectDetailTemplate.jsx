import { useMemo } from "react";
import { Link } from "react-router-dom";
import ArtworkDetail from "@/components/artwork/ArtworkDetail";

/**
 * ProjectDetailTemplate — reusable project detail page layout.
 *
 * Renders the structural skeleton of an individual project page using placeholders.
 * Future project content slotted in via the `project` prop.
 *
 * Expected shape (all optional):
 * {
 *   title, subtitle, year_range, location, intro_statement,
 *   gallery_images[],  // [{ url, alt }]
 *   selected_works[],  // ArtworkDetail-shaped objects
 *   moving_image,      // { embed_url | poster_url, caption }
 *   book,              // { title, publisher, format, isbn, price, buy_url, cover }
 *   prints_available,  // boolean
 *   exhibition_history[],
 *   publication_history[],
 *   press_quotes[],    // [{ quote, source }]
 * }
 */
export default function ProjectDetailTemplate({ project = {} }) {
  const TBC = "To be confirmed by artist";
  const field = (v) => (v && String(v).trim() ? v : TBC);
  const listField = (arr) => (Array.isArray(arr) && arr.length > 0 ? arr : [TBC]);
  const fallbackArtwork = useMemo(
    () => ({ title: field(project.title), series: field(project.title) }),
    [project.title]
  );

  return (
    <article className="pt-40 pb-32" data-testid="project-detail">
      <header className="container-ki max-w-4xl">
        <div className="overline">Project</div>
        <h1
          data-testid="project-title"
          className="mt-6 font-serif text-5xl sm:text-6xl lg:text-7xl tracking-tight text-ki-fg"
        >
          {field(project.title)}
        </h1>
        {project.subtitle ? (
          <p className="mt-5 font-serif italic text-xl text-ki-beige/90">{project.subtitle}</p>
        ) : (
          <p className="mt-5 font-serif italic text-xl text-ki-muted/80">
            Subtitle to be confirmed by artist
          </p>
        )}
        {(project.hasStill || project.hasMoving) && (
          <div className="mt-7 flex flex-wrap gap-3" data-testid="project-status-badges">
            {project.hasStill && (
              <span
                data-testid="project-badge-still"
                className="text-[10px] uppercase tracking-[0.28em] border border-ki-gold/60 text-ki-gold/90 px-3 py-1.5"
              >
                Still · Photography
              </span>
            )}
            {project.hasMoving && (
              <span
                data-testid="project-badge-moving"
                className="text-[10px] uppercase tracking-[0.28em] border border-[#8B1C1C]/60 text-[#d97a7a] px-3 py-1.5"
              >
                Moving · Film / Video
              </span>
            )}
          </div>
        )}
        <div className="mt-8 flex flex-wrap gap-x-10 gap-y-3 text-[11px] uppercase tracking-[0.24em] text-ki-muted">
          <span>Year · {field(project.year_range)}</span>
          <span>Location · {field(project.location)}</span>
        </div>
        <p className="mt-10 max-w-2xl text-base md:text-lg leading-relaxed text-ki-fg/80">
          {field(project.intro_statement)}
        </p>
      </header>

      {project.hero_image && (
        <section className="container-ki mt-16">
          <div className="relative aspect-[21/9] w-full overflow-hidden bg-ki-elevated border border-ki-border grain">
            <img
              src={project.hero_image}
              alt={project.hero_alt || `${field(project.title)} — hero placeholder`}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ki-bg/40 to-transparent" />
            <div className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.3em] text-ki-fg/75">
              Hero · Placeholder
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      <section className="container-ki mt-20">
        <div className="overline">Image Gallery</div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(project.gallery_images && project.gallery_images.length > 0
            ? project.gallery_images
            : Array.from({ length: 6 })
          ).map((img, i) => (
            <div
              key={img?.url || `gallery-${i}`}
              className="relative aspect-[4/5] bg-ki-elevated border border-ki-border/60 overflow-hidden"
            >
              {img?.url ? (
                <img
                  src={img.url}
                  alt={img.alt || `Project image ${i + 1} — placeholder`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-ki-muted/70">
                      Image · {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="mt-3 text-[10px] uppercase tracking-[0.28em] text-ki-muted/60">
                      Placeholder
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Selected works */}
      <section className="container-ki mt-24" id="film">
        <div className="overline">Selected Works</div>
        <h2 className="sr-only">Selected Works</h2>
        {project.selected_works && project.selected_works.length > 0 ? (
          project.selected_works.map((w, i) => (
            <ArtworkDetail key={w?.slug || w?.title || `selected-${i}`} artwork={w} />
          ))
        ) : (
          <ArtworkDetail artwork={fallbackArtwork} />
        )}
      </section>

      {/* Moving image connection — small stub shown only when no rich VideoWorkDetail will follow */}
      {!project.hasMoving && (
        <section className="container-ki mt-24" data-testid="project-moving-stub">
          <div className="overline">Moving Image Connection</div>
          <div className="mt-6 relative aspect-video w-full bg-ki-elevated border border-ki-border overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-center px-6">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-ki-muted/70">
                  Moving Image · Placeholder
                </div>
                <div className="mt-3 font-serif text-lg text-ki-fg/55">
                  {field(project.moving_image?.caption)}
                </div>
                <div className="mt-3 text-[10px] uppercase tracking-[0.28em] text-ki-muted/60">
                  Connection to be confirmed by artist
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Book connection */}
      <section className="container-ki mt-24">
        <div className="overline">Book Connection</div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-10 border border-ki-border p-8">
          <div className="md:col-span-4 relative aspect-[3/4] bg-ki-elevated border border-ki-border/60 flex items-center justify-center">
            <div className="text-[10px] uppercase tracking-[0.28em] text-ki-muted/70">
              Cover · Placeholder
            </div>
          </div>
          <div className="md:col-span-8">
            <h3 className="font-serif text-2xl text-ki-fg tracking-tight">
              {field(project.book?.title)}
            </h3>
            <dl className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {[
                ["Publisher", project.book?.publisher],
                ["Format", project.book?.format],
                ["ISBN", project.book?.isbn],
                ["Price", project.book?.price],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between gap-3 border-b border-ki-border/60 pb-2">
                  <dt className="uppercase tracking-[0.2em] text-[10px] text-ki-muted">{label}</dt>
                  <dd className="text-ki-fg/80 text-right">{field(value)}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Print availability */}
      <section className="container-ki mt-24">
        <div className="overline">Print Availability</div>
        <div className="mt-6 border border-ki-border p-8">
          <p className="text-base text-ki-fg/80 leading-relaxed max-w-2xl">
            Limited edition prints from this project may be available on inquiry. Sizes, edition
            numbers and prices to be confirmed by the artist.
          </p>
          <Link
            to="/#contact"
            className="mt-6 inline-flex items-center gap-3 border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg px-7 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300"
          >
            Request Print Availability →
          </Link>
        </div>
      </section>

      {/* Exhibition + publication history */}
      <section className="container-ki mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ki-border border border-ki-border">
          <div className="bg-ki-surface p-7">
            <div className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">
              Exhibition history
            </div>
            <ul className="mt-4 space-y-2">
              {listField(project.exhibition_history).map((x, i) => (
                <li key={`exh-${x}-${i}`} className="text-sm text-ki-fg/75 leading-snug">
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-ki-surface p-7">
            <div className="text-[10px] uppercase tracking-[0.28em] text-ki-gold/90">
              Publication history
            </div>
            <ul className="mt-4 space-y-2">
              {listField(project.publication_history).map((x, i) => (
                <li key={`pub-${x}-${i}`} className="text-sm text-ki-fg/75 leading-snug">
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Press quotes */}
      <section className="container-ki mt-24">
        <div className="overline">Press</div>
        {project.press_quotes && project.press_quotes.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
            {project.press_quotes.map((q, i) => (
              <blockquote key={q.source || `press-quote-${i}`} className="border-l-2 border-ki-gold pl-6">
                <p className="font-serif italic text-xl text-ki-fg/90 leading-relaxed">&ldquo;{q.quote}&rdquo;</p>
                <footer className="mt-4 text-[11px] uppercase tracking-[0.28em] text-ki-muted">
                  {q.source || TBC}
                </footer>
              </blockquote>
            ))}
          </div>
        ) : (
          <p className="mt-6 text-sm text-ki-muted">Press quotes to be supplied by the artist.</p>
        )}
      </section>

      {/* Footer actions */}
      <section className="container-ki mt-24">
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/#contact"
            className="inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg px-8 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300"
          >
            Collector Inquiry →
          </Link>
          <Link
            to="/still"
            className="inline-flex items-center justify-center border border-ki-fg/30 text-ki-fg hover:border-ki-gold hover:text-ki-gold px-8 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300"
          >
            ← Back to Still Archive
          </Link>
        </div>
      </section>
    </article>
  );
}
