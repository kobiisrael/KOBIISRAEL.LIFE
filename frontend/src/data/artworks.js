// Artwork registry — keyed by slug. Empty by default per content-accuracy rules:
// real artwork records must be supplied by the artist. Unknown slugs are rendered
// by the ArtworkRecord template with placeholder ("To be confirmed by artist") values.

export const ARTWORK_REGISTRY = {};

// Returns a normalised artwork record. If the slug is not registered, derives
// a human-readable display title from the slug itself and leaves every metadata
// field empty so the template's field() helper renders the TBC fallback.
export function getArtworkRecord(slug) {
  if (!slug) return null;
  const stored = ARTWORK_REGISTRY[slug] || {};
  const fallbackTitle = slug
    .split("-")
    .map((w) => (w.length > 0 ? w[0].toUpperCase() + w.slice(1) : ""))
    .join(" ");
  return {
    slug,
    title: stored.title || fallbackTitle,
    series: stored.series || null,
    series_slug: stored.series_slug || null,
    year: stored.year || null,
    location: stored.location || null,
    medium: stored.medium || null,
    print_type: stored.print_type || null,
    paper_type: stored.paper_type || null,
    image_size: stored.image_size || null,
    paper_size: stored.paper_size || null,
    frame_size: stored.frame_size || null,
    edition_size: stored.edition_size || null,
    edition_number: stored.edition_number || null,
    signature: stored.signature || null,
    certificate: stored.certificate || null,
    condition: stored.condition || null,
    framing_status: stored.framing_status || null,
    availability: stored.availability || null,
    price: stored.price || null,
    archive_status: stored.archive_status || null,
    last_updated: stored.last_updated || null,
    caption: stored.caption || null,
    note: stored.note || null,
    image: stored.image || null,
    alt: stored.alt || null,
    copyright: stored.copyright || null,
    alternate_views: stored.alternate_views || null,
    project_title: stored.project_title || null,
    project_subtitle: stored.project_subtitle || null,
    project_description: stored.project_description || null,
    project_themes: stored.project_themes || null,
    project_location: stored.project_location || null,
    project_year_range: stored.project_year_range || null,
    related_works: stored.related_works || null,
    provenance: stored.provenance || null,
    exhibition_history: stored.exhibition_history || null,
    publication_history: stored.publication_history || null,
    press_quotes: stored.press_quotes || null,
    licensing_terms: stored.licensing_terms || null,
  };
}
