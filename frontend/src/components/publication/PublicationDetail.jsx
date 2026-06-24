import { Link } from "react-router-dom";

/**
 * PublicationDetail — reusable book / catalogue detail template.
 * All fields optional; missing fields fall back to "To be confirmed by artist".
 *
 * Expected shape (all optional):
 * {
 *   title, subtitle, year, publisher, designer, editor, author, photographer,
 *   contributors[], format, dimensions, page_count, binding, isbn, language,
 *   edition, signed_availability, price, stock_status,
 *   purchase_url, inquiry_url,
 *   cover_url, cover_alt,
 *   spreads[],            // [{ url, alt }]
 *   description, artist_note,
 *   related_project, related_moving, related_prints,
 *   press_quotes[],       // [{ quote, source }]
 *   exhibition_history[],
 *   pdf_url
 * }
 */
export default function PublicationDetail({ book = {} }) {
  const TBC = "To be confirmed by artist";
  const field = (v) => (v && String(v).trim() ? v : TBC);
  const listField = (arr) => (Array.isArray(arr) && arr.length > 0 ? arr : [TBC]);

  return (
    <article className="border-t border-ki-border py-16 md:py-20" aria-label="Publication detail">
      <header className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-ki-elevated border border-ki-border">
            {book.cover_url ? (
              <img src={book.cover_url} alt={book.cover_alt || `${field(book.title)} — cover`}
                loading="lazy" decoding="async"
                className="absolute inset-0 w-full h-full object-cover opacity-90" />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-ki-muted/70">Cover</div>
                  <div className="mt-4 font-serif text-xl text-ki-fg/55 leading-snug">{field(book.title)}</div>
                  <div className="mt-3 text-[10px] uppercase tracking-[0.28em] text-ki-muted/60">Placeholder</div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="overline">{field(book.subtitle)}</div>
          <h3 className="mt-4 font-serif text-3xl sm:text-4xl tracking-tight text-ki-fg">
            {field(book.title)}
          </h3>

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4">
            {[
              ["Year", book.year],
              ["Publisher", book.publisher],
              ["Designer", book.designer],
              ["Editor", book.editor],
              ["Author", book.author],
              ["Photographer", book.photographer],
              ["Format", book.format],
              ["Dimensions", book.dimensions],
              ["Pages", book.page_count],
              ["Binding", book.binding],
              ["ISBN", book.isbn],
              ["Language", book.language],
              ["Edition", book.edition],
              ["Signed copies", book.signed_availability],
              ["Price", book.price],
              ["Stock status", book.stock_status],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="text-[10px] uppercase tracking-[0.26em] text-ki-gold/90">{label}</dt>
                <dd className="mt-2 text-sm text-ki-fg/85 leading-snug">{field(value)}</dd>
              </div>
            ))}
          </dl>

          {/* Contributors */}
          <div className="mt-8">
            <div className="text-[10px] uppercase tracking-[0.26em] text-ki-gold/90">Contributors</div>
            <ul className="mt-3 space-y-1.5">
              {listField(book.contributors).map((c, i) => (
                <li key={i} className="text-sm text-ki-fg/80">{c}</li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      {/* Description + artist note */}
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <div>
          <div className="overline">Description</div>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-ki-fg/85">{field(book.description)}</p>
        </div>
        <div>
          <div className="overline">Artist Note</div>
          <p className="mt-5 font-serif italic text-lg md:text-xl leading-relaxed text-ki-fg/85 text-balance">
            {field(book.artist_note)}
          </p>
        </div>
      </section>

      {/* Spreads */}
      <section className="mt-16">
        <div className="overline">Book Spreads</div>
        <div className="mt-5 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {(book.spreads && book.spreads.length > 0 ? book.spreads : Array.from({ length: 6 })).map((s, i) => (
            <div key={i} className="relative aspect-[3/2] bg-ki-elevated border border-ki-border/60 overflow-hidden">
              {s?.url ? (
                <img src={s.url} alt={s.alt || `Spread ${i + 1}`} loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover opacity-90" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-[0.28em] text-ki-muted/70">
                  Spread · {String(i + 1).padStart(2, "0")}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Related */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-ki-border border border-ki-border">
        {[
          ["Related photography", book.related_project, book.related_project ? `/projects/${book.related_project}` : null],
          ["Related moving image", book.related_moving, book.related_moving ? `/projects/${book.related_moving}` : null],
          ["Related prints", book.related_prints, "/prints"],
        ].map(([label, value, to]) => (
          <div key={label} className="bg-ki-surface p-5">
            <div className="text-[10px] uppercase tracking-[0.26em] text-ki-gold/90">{label}</div>
            {value && to ? (
              <Link to={to} className="mt-3 inline-flex font-serif text-base text-ki-fg/90 hover:text-ki-gold transition-colors">
                {typeof value === "string" ? value : value.title} →
              </Link>
            ) : (
              <p className="mt-3 text-sm text-ki-fg/75">{TBC}</p>
            )}
          </div>
        ))}
      </section>

      {/* Press */}
      {book.press_quotes && book.press_quotes.length > 0 && (
        <section className="mt-16">
          <div className="overline">Press</div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-10">
            {book.press_quotes.map((q, i) => (
              <blockquote key={i} className="border-l-2 border-ki-gold pl-6">
                <p className="font-serif italic text-xl text-ki-fg/90 leading-relaxed">&ldquo;{q.quote}&rdquo;</p>
                <footer className="mt-4 text-[11px] uppercase tracking-[0.28em] text-ki-muted">{q.source || TBC}</footer>
              </blockquote>
            ))}
          </div>
        </section>
      )}

      {/* Exhibition history */}
      <section className="mt-16">
        <div className="overline">Exhibition History</div>
        <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          {listField(book.exhibition_history).map((x, i) => (
            <li key={i} className="text-sm text-ki-fg/80 leading-snug">{x}</li>
          ))}
        </ul>
      </section>

      {/* Actions */}
      <section className="mt-12 flex flex-col sm:flex-row gap-4">
        {book.purchase_url ? (
          <a href={book.purchase_url} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg px-8 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300">
            Purchase Book →
          </a>
        ) : (
          <Link to={book.inquiry_url || "/books#books-inquiry"}
            className="inline-flex items-center justify-center border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg px-8 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300">
            Request Book Availability →
          </Link>
        )}
        {book.pdf_url ? (
          <a href={book.pdf_url} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-ki-fg/30 text-ki-fg hover:border-ki-gold hover:text-ki-gold px-8 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300">
            Download PDF →
          </a>
        ) : (
          <span className="inline-flex items-center justify-center border border-ki-border text-ki-muted px-8 py-4 text-xs uppercase tracking-[0.28em]">
            PDF availability to be confirmed
          </span>
        )}
        <Link to="/books"
          className="inline-flex items-center justify-center border border-ki-fg/30 text-ki-fg hover:border-ki-fg px-8 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300">
          ← Back to Books
        </Link>
      </section>
    </article>
  );
}
