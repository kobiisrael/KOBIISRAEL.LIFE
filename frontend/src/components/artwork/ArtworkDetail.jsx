import { Link } from "react-router-dom";

/**
 * ArtworkDetail — reusable artwork-metadata template.
 *
 * Use this for individual artwork records on future inner pages.
 * All fields are optional; missing fields fall back to "To be confirmed by artist".
 *
 * Expected shape (all optional):
 * {
 *   title, series, year, location, medium, dimensions,
 *   edition_size, edition_number, print_type, signature, certificate,
 *   availability, price, publication_history[], exhibition_history[], collection_history[],
 *   artwork_note, image_url, image_alt, inquiry_subject
 * }
 */
export default function ArtworkDetail({ artwork = {}, inquireTo = "/#contact" }) {
  const TBC = "To be confirmed by artist";
  const field = (v) => (v && String(v).trim() ? v : TBC);
  const listField = (arr) =>
    Array.isArray(arr) && arr.length > 0 ? arr : [TBC];

  return (
    <article className="border-t border-ki-border py-16 md:py-20" aria-label="Artwork detail">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-6">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-ki-elevated border border-ki-border">
            {artwork.image_url ? (
              <img
                src={artwork.image_url}
                alt={artwork.image_alt || `${field(artwork.title)} — artwork image`}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover opacity-90"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-ki-muted/70">
                    Artwork Image
                  </div>
                  <div className="mt-3 font-serif text-lg text-ki-fg/45 leading-snug">
                    {field(artwork.title)}
                  </div>
                  <div className="mt-3 text-[10px] uppercase tracking-[0.28em] text-ki-muted/60">
                    Placeholder
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="overline">{field(artwork.series)}</div>
          <h3 className="mt-4 font-serif text-3xl sm:text-4xl tracking-tight text-ki-fg">
            {field(artwork.title)}
          </h3>

          <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
            {[
              ["Year", artwork.year],
              ["Location", artwork.location],
              ["Medium", artwork.medium],
              ["Dimensions", artwork.dimensions],
              ["Edition size", artwork.edition_size],
              ["Edition number", artwork.edition_number],
              ["Print type", artwork.print_type],
              ["Signature", artwork.signature],
              ["Certificate of authenticity", artwork.certificate],
              ["Availability", artwork.availability],
              ["Price", artwork.price],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="text-[10px] uppercase tracking-[0.26em] text-ki-gold/90">
                  {label}
                </dt>
                <dd className="mt-2 text-sm text-ki-fg/85 leading-relaxed">{field(value)}</dd>
              </div>
            ))}
          </dl>

          {artwork.artwork_note && (
            <p className="mt-8 text-sm text-ki-fg/75 leading-relaxed max-w-prose">
              {artwork.artwork_note}
            </p>
          )}

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-px bg-ki-border border border-ki-border">
            {[
              ["Publication history", listField(artwork.publication_history)],
              ["Exhibition history", listField(artwork.exhibition_history)],
              ["Collection history", listField(artwork.collection_history)],
            ].map(([label, items]) => (
              <div key={label} className="bg-ki-surface p-5">
                <div className="text-[10px] uppercase tracking-[0.26em] text-ki-gold/90">
                  {label}
                </div>
                <ul className="mt-3 space-y-1.5">
                  {items.map((it, i) => (
                    <li key={i} className="text-sm text-ki-fg/75 leading-snug">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Link
            to={inquireTo}
            className="mt-10 inline-flex items-center gap-3 border border-ki-gold text-ki-gold hover:bg-ki-gold hover:text-ki-bg px-7 py-4 text-xs uppercase tracking-[0.28em] transition-colors duration-300"
          >
            Inquire About This Work →
          </Link>
        </div>
      </div>
    </article>
  );
}
