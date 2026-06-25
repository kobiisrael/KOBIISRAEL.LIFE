// Per-slug project registry — merges still + moving data into one shape
// for the unified /projects/:slug page. All content remains placeholder
// ("To be confirmed by artist") unless and until the artist supplies it.

import { STILL_PROJECTS, MOVING_WORKS } from "@/data/site";
import { CUBA_IMAGES } from "@/data/cubaImages";

// Optional richer per-slug placeholder content. Anything missing falls back
// to template defaults. This is the editable hand-off file: the artist can
// drop real text/images here without touching components.
const ENRICHMENT = {
  "cuba-love-story": {
    subtitle: "Photography and moving image",
    intro_statement:
      "A long-term photographic and moving-image investigation into masculinity, militarism, homoerotic codes, memory and desire — moving between observation, longing and the trained body.",
    hero_image: CUBA_IMAGES[0].src,
    hero_alt: CUBA_IMAGES[0].alt,
    gallery_images: CUBA_IMAGES.map((img) => ({
      url: img.src,
      alt: img.alt,
      caption: img.caption,
    })),
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
      "A travelogue around the mythic, nomadic nature of landscape — landscape as a stage on which to cast desire, identity and personal history. 2001–2017.",
    hero_image:
      "https://customer-assets.emergentagent.com/job_still-moving-1/artifacts/bjuw8vt4_River-of-three-crossings_Serial_Landscapes7.3.jpg",
    hero_alt:
      "River of Three Crossings — image by Kobi Israel: abandoned park landscape with classical statue, fairy-tale castle and rusted infrastructure reflected in standing water. Details to be confirmed.",
    gallery_images: [
      {
        url: "https://customer-assets.emergentagent.com/job_still-moving-1/artifacts/bjuw8vt4_River-of-three-crossings_Serial_Landscapes7.3.jpg",
        alt:
          "River of Three Crossings — image by Kobi Israel: abandoned park landscape with classical statue, fairy-tale castle and rusted infrastructure reflected in standing water. Details to be confirmed.",
        caption:
          "River of Three Crossings · Serial Landscapes 7.3 — title, year and dimensions to be confirmed by artist.",
      },
    ],
  },
  "fragments-of-life": {
    subtitle: "Photography — staged images",
    intro_statement:
      "Staged images of recollection, conflict and trapped emotion — adolescence in a deeply conservative and traditional society. Tel-Aviv, 2000–2007.",
    hero_image:
      "https://customer-assets.emergentagent.com/job_still-moving-1/artifacts/t49ma2n8_1700.jpg",
    hero_alt:
      "1700 — image from Fragments of Life by Kobi Israel. Staged portrait at a Tel-Aviv juice stand. Details to be confirmed.",
    gallery_images: [
      {
        url: "https://customer-assets.emergentagent.com/job_still-moving-1/artifacts/t49ma2n8_1700.jpg",
        alt:
          "1700 — image from Fragments of Life by Kobi Israel. Staged portrait at a Tel-Aviv juice stand. Details to be confirmed.",
        caption: "Fragments of Life · 1700 — title, year and dimensions to be confirmed by artist.",
      },
    ],
  },
  "intimate-strangers": {
    subtitle: "Portrait photography",
    intro_statement:
      "A study of brief encounters — men met, watched, photographed and remembered in Soho, London, 2001–2006.",
    hero_image:
      "https://customer-assets.emergentagent.com/job_still-moving-1/artifacts/t6q72x65_Intimate%20Strangers_Kobi-Israel.01.jpg",
    hero_alt:
      "Intimate Strangers — image by Kobi Israel: nude figure on an orange bed beneath a KABARET poster, Soho interior. Details to be confirmed.",
    gallery_images: [
      {
        url: "https://customer-assets.emergentagent.com/job_still-moving-1/artifacts/t6q72x65_Intimate%20Strangers_Kobi-Israel.01.jpg",
        alt:
          "Intimate Strangers — image by Kobi Israel: nude figure on an orange bed beneath a KABARET poster, Soho interior. Details to be confirmed.",
        caption:
          "Intimate Strangers · 01 — title, year and dimensions to be confirmed by artist.",
      },
    ],
  },
  views: {
    subtitle: "Photography",
    intro_statement:
      "The thin line between the homo-erotic and the homo-social in army life — Israel, 1999–2003.",
    hero_image:
      "https://customer-assets.emergentagent.com/job_still-moving-1/artifacts/sgvjsipp_Views02.jpg",
    hero_alt:
      "Views — image by Kobi Israel: two young soldiers at dusk in the Israeli landscape. Details to be confirmed.",
    gallery_images: [
      {
        url: "https://customer-assets.emergentagent.com/job_still-moving-1/artifacts/sgvjsipp_Views02.jpg",
        alt:
          "Views — image by Kobi Israel: two young soldiers at dusk in the Israeli landscape. Details to be confirmed.",
        caption: "Views · Views02 — title, year and dimensions to be confirmed by artist.",
      },
    ],
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
