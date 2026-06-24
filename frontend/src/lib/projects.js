// Per-slug project registry — merges still + moving data into one shape
// for the unified /projects/:slug page. All content remains placeholder
// ("To be confirmed by artist") unless and until the artist supplies it.

import { STILL_PROJECTS, MOVING_WORKS } from "@/data/site";

// Optional richer per-slug placeholder content. Anything missing falls back
// to template defaults. This is the editable hand-off file: the artist can
// drop real text/images here without touching components.
const ENRICHMENT = {
  "cuba-love-story": {
    subtitle: "Photography and moving image",
    intro_statement:
      "A long-term photographic and moving-image investigation into masculinity, militarism, homoerotic codes, memory and desire — moving between observation, longing and the trained body.",
    hero_image:
      "https://images.unsplash.com/photo-1568322445389-495f4a7d20d4?auto=format&fit=crop&q=85&w=1800",
    hero_alt:
      "Cuba, Love Story — hero placeholder still. To be replaced with artist's selected work.",
    book: {
      title: "Cuba, Love Story — monograph (to be confirmed by artist)",
      publisher: "Publisher to be confirmed",
      format: "Hardcover — details to be confirmed",
      isbn: "ISBN to be confirmed",
      price: "Price on request",
    },
  },
  "river-of-three-crossings": {
    subtitle: "Photography",
    intro_statement:
      "Three crossings between landscape, biography and the porous edges of a remembered self.",
  },
  "fragments-of-life": {
    subtitle: "Photography and archive",
    intro_statement:
      "An ongoing diaristic series collecting fragments of daily life, intimacy and ordinary light.",
  },
  "intimate-strangers": {
    subtitle: "Portrait photography",
    intro_statement:
      "A study of brief encounters — men met, watched, photographed and remembered between cities.",
  },
  views: {
    subtitle: "Photography",
    intro_statement:
      "A quiet typology of windows, thresholds and the interior weather of looking out.",
  },
  "parisian-postcards": {
    subtitle: "Photography",
    intro_statement:
      "Letters in image form from a city of strangers — kept and never sent.",
  },
  "investigating-things-past": {
    subtitle: "Photography and archive",
    intro_statement:
      "An autobiographical archive in which childhood, exile and recollection are continually re-read.",
  },
  "military-masculinity-archive": {
    subtitle: "Photography and archive",
    intro_statement:
      "A working archive of uniforms, gestures, group portraits and the codes of trained male bodies.",
  },
  "soho-urban-encounters": {
    subtitle: "Photography",
    intro_statement:
      "Nighttime ambulations, queer cartographies and the soft choreography of strangers in the city.",
  },
  "portraits-and-bodies": {
    subtitle: "Portrait photography",
    intro_statement:
      "A continuing series on the photographed body — desired, observed, dressed, undressed, remembered.",
  },
  "landscapes-and-exile": {
    subtitle: "Photography",
    intro_statement:
      "Landscapes carrying the residue of biography: borders, returns, departures, the geography of leaving.",
  },
  "personal-archive": {
    subtitle: "Photography, found image, document",
    intro_statement:
      "A private archive of family pictures, letters, marginal images and the working notes of a life made of looking.",
  },
  "a-chaos-of-appearances": {
    subtitle: "Video art / experimental",
    intro_statement:
      "An assemblage of soldiers, strangers, cities and lovers — the unstable theatre of remembered appearance set in motion.",
  },
  "still-and-moving-diaries": {
    subtitle: "Visual diaries",
    intro_statement:
      "A diaristic project where photographs become rhythm, voice, light and time.",
  },
  "personal-archive-films": {
    subtitle: "Archive films",
    intro_statement:
      "Private film and video archive: family footage, marginal recordings, working notes.",
  },
  "music-sound-works": {
    subtitle: "Sound, voice, music",
    intro_statement:
      "Sound, voice and music explorations developed alongside the moving-image archive.",
  },
  "experimental-film-fragments": {
    subtitle: "Experimental film",
    intro_statement:
      "Short experimental sequences testing rhythm, repetition, montage and silence.",
  },
  "travelogue-works": {
    subtitle: "Travelogue",
    intro_statement:
      "Moving-image notes from journeys — Cuba, Paris, London and points between.",
  },
  "future-film-projects": {
    subtitle: "In development",
    intro_statement:
      "Film and moving-image projects currently in development. Synopses to be confirmed by the artist.",
  },
};

/**
 * Returns the merged record for a given slug, or null if not found in either
 * registry. Always uses placeholders for fields the artist has not confirmed.
 */
export function getProject(slug) {
  const still = STILL_PROJECTS.find((p) => p.slug === slug) || null;
  const moving = MOVING_WORKS.find((w) => w.slug === slug) || null;
  if (!still && !moving) return null;

  const base = still || moving;
  const enrichment = ENRICHMENT[slug] || {};

  return {
    slug,
    title: base.title,
    subtitle: enrichment.subtitle || (still?.medium ?? moving?.format ?? null),
    year_range: base.year_range,
    location: still?.location || moving?.location || "Location to be confirmed",
    // Artist's own existing language (from STILL_PROJECTS/MOVING_WORKS, sourced from
    // the verbatim Wix text) wins over the enrichment placeholder.
    intro_statement: base.description || base.synopsis || enrichment.intro_statement,
    // Thread structured metadata fields onto the template
    medium: still?.medium || moving?.format || null,
    format: moving?.format || null,
    status: base.status || null,
    description: base.description || base.synopsis || null,
    hero_image: enrichment.hero_image || null,
    hero_alt: enrichment.hero_alt || null,
    hasStill: !!still,
    hasMoving: !!moving,
    still,
    moving,
    // Reusable placeholders
    gallery_images: enrichment.gallery_images || null,
    selected_works: enrichment.selected_works || null,
    book: enrichment.book || null,
    exhibition_history: enrichment.exhibition_history || null,
    publication_history: enrichment.publication_history || null,
    press_quotes: enrichment.press_quotes || null,
  };
}

export function listAllProjectSlugs() {
  const set = new Set([
    ...STILL_PROJECTS.map((p) => p.slug),
    ...MOVING_WORKS.map((w) => w.slug),
  ]);
  return Array.from(set);
}
