// Static site content — placeholders only (To be confirmed by artist).

import { CUBA } from "@/data/cubaImages";

export const NAV_ITEMS = [
  { slug: "home", label: "Home", to: "/" },
  { slug: "still", label: "Still", to: "/still" },
  { slug: "moving", label: "Moving", to: "/moving" },
  { slug: "projects", label: "Projects", to: "/projects" },
  { slug: "prints", label: "Prints", to: "/prints" },
  { slug: "books", label: "Books", to: "/books" },
  { slug: "archive", label: "Archive", to: "/archive" },
  { slug: "cv", label: "CV", to: "/cv" },
  { slug: "journal", label: "Journal", to: "/journal" },
  { slug: "contact", label: "Contact", to: "/contact" },
];

export const HERO = {
  image: CUBA.i1.src,
  alt: CUBA.i1.alt,
};

// Hero copy options — Option 2 (recommended) is currently used in Hero.jsx.
// The full set is preserved here so the artist can swap easily.
export const HERO_COPY_OPTIONS = {
  recommended: "option-2",
  option_1: {
    overline: "Still & Moving Diaries",
    title: "Kobi Israel",
    positioning: "Photography, moving image and autobiographical archives.",
    paragraph:
      "An archive of masculinity, desire, exile and memory — soldiers, strangers, lovers, landscapes, cities and time.",
    primary_cta: { label: "View Selected Works", to: "#selected-works" },
    secondary_cta: { label: "Explore the Archive", to: "/archive" },
  },
  option_2: {
    overline: "Still & Moving Diaries",
    title: "Kobi Israel",
    positioning:
      "Photography, moving image and autobiographical archives of masculinity, desire, exile and memory.",
    paragraph: null,
    primary_cta: { label: "View Selected Works", to: "#selected-works" },
    secondary_cta: { label: "Collector Inquiries", to: "#contact" },
  },
  option_3: {
    overline: "Archive · Vol. 01",
    title: "A Chaos of Appearances",
    positioning:
      "Still and moving diaries from the work of Kobi Israel — photography, moving image, books and prints.",
    paragraph: null,
    primary_cta: { label: "View Selected Works", to: "#selected-works" },
    secondary_cta: { label: "Request Print Availability", to: "#contact" },
  },
  // Why Option 2 is recommended:
  // Curatorial clarity — names the artist and the medium plainly.
  // Emotional power — the four-theme cadence (masculinity, desire, exile, memory)
  // does the atmospheric work without an extra paragraph.
  // Collector credibility — the second CTA goes straight to Collector Inquiries.
  // Archive identity — "Still & Moving Diaries" is the artist's own phrase.
  // SEO usefulness — the positioning line carries "photography, moving image,
  // autobiographical archives, masculinity, desire, exile, memory" in a natural sentence.
  // Visual compatibility — short copy sits cleanly over a large cinematic image.
};

export const STILL_HERO = {
  image: CUBA.i5.src,
  alt: CUBA.i5.alt,
};

export const STILL_CURATORIAL_IMAGE = {
  image: CUBA.i3.src,
  alt: CUBA.i3.alt,
};

// Filter tag taxonomy used across the Still archive
export const STILL_FILTERS = [
  { slug: "all", label: "All" },
  { slug: "autobiography", label: "Autobiography" },
  { slug: "masculinity", label: "Masculinity" },
  { slug: "queer", label: "Queer / Homoerotic Codes" },
  { slug: "travel", label: "Travel Diaries" },
  { slug: "portraits", label: "Portraits" },
  { slug: "landscape", label: "Landscape" },
  { slug: "urban", label: "Urban Memory" },
  { slug: "military", label: "Military" },
  { slug: "books", label: "Books" },
  { slug: "prints", label: "Available Prints" },
];

// Full still / photography archive — 12 projects.
// Years, locations, dimensions, prices, editions: all "To be confirmed by artist".
export const STILL_PROJECTS = [
  {
    slug: "cuba-love-story",
    title: "Cuba, Love Story",
    year_range: "1993–2012",
    location: "Cuba",
    medium: "Photography (and related film)",
    description:
      "The confusing and bewildering paradox of the masculine and militarist blended with the homoerotic in Cuba — the artist's own memories of growing up in young, macho and militarist Israel.",
    tags: ["autobiography", "masculinity", "queer", "military", "travel", "books", "prints"],
    status: "Published",
    featured: true,
    image: CUBA.i1.src,
    image_alt: CUBA.i1.alt,
  },
  {
    slug: "river-of-three-crossings",
    title: "River of Three Crossings",
    year_range: "2001–2017",
    location: "Multiple",
    medium: "Photography",
    description:
      "A travelogue around the mythic, nomadic nature of landscape — landscape as a stage on which to cast desire, identity and personal history.",
    tags: ["autobiography", "travel", "landscape"],
    status: "Archive",
  },
  {
    slug: "fragments-of-life",
    title: "Fragments of Life",
    year_range: "2000–2007",
    location: "Tel-Aviv, Israel",
    medium: "Photography — staged images",
    description:
      "Staged images of recollection, conflict and trapped emotion — adolescence in a deeply conservative and traditional society.",
    tags: ["autobiography", "portraits"],
    status: "Archive",
    image:
      "https://customer-assets.emergentagent.com/job_still-moving-1/artifacts/t49ma2n8_1700.jpg",
    image_alt:
      "1700 — image from Fragments of Life by Kobi Israel. Staged portrait at a Tel-Aviv juice stand. Details to be confirmed.",
  },
  {
    slug: "intimate-strangers",
    title: "Intimate Strangers",
    year_range: "2001–2006",
    location: "Soho, London, UK",
    medium: "Portrait photography",
    description:
      "Portraits of foreigners in a city full of immigrants — the brief contract between watcher and watched.",
    tags: ["queer", "portraits", "urban", "prints"],
    status: "Available Prints",
    image:
      "https://customer-assets.emergentagent.com/job_still-moving-1/artifacts/t6q72x65_Intimate%20Strangers_Kobi-Israel.01.jpg",
    image_alt:
      "Intimate Strangers — image by Kobi Israel: nude figure on an orange bed beneath a KABARET poster, Soho interior. Details to be confirmed.",
  },
  {
    slug: "views",
    title: "Views",
    year_range: "1999–2003",
    location: "Israel",
    medium: "Photography",
    description: "The thin line between homo-erotic and homo-social in army life.",
    tags: ["landscape", "urban", "masculinity", "military", "queer"],
    status: "Archive",
    image:
      "https://customer-assets.emergentagent.com/job_still-moving-1/artifacts/sgvjsipp_Views02.jpg",
    image_alt:
      "Views — image by Kobi Israel: two young soldiers at dusk in the Israeli landscape. Details to be confirmed.",
  },
  {
    slug: "parisian-postcards",
    title: "Parisian Postcards",
    year_range: "2010",
    location: "Paris",
    medium: "Three-channel video installation, 18 min",
    description:
      "An autobiographical investigation of personal family narratives — still and moving image fractured into time and space.",
    tags: ["travel", "urban", "moving-image"],
    status: "Published",
  },
  {
    slug: "investigating-things-past",
    title: "Investigating Things Past",
    year_range: "2023– (work in progress)",
    location: "Archive — 1982–1987 negatives",
    medium: "Still & moving images installation",
    description:
      "Seven 110mm negatives, separated by hand from a forgotten envelope — involuntary memories returning out of order, in their own light.",
    tags: ["autobiography", "memory"],
    status: "Work in progress",
  },
  {
    slug: "military-masculinity-archive",
    title: "Military / Masculinity Archive",
    year_range: "Years to be confirmed by artist",
    location: "Location to be confirmed",
    medium: "Photography and archive",
    description:
      "A working archive of uniforms, gestures, group portraits and the codes of trained male bodies.",
    tags: ["masculinity", "military", "queer", "autobiography"],
    status: "Archive",
  },
  {
    slug: "soho-urban-encounters",
    title: "Soho / Urban Encounters",
    year_range: "Years to be confirmed by artist",
    location: "London — Soho",
    medium: "Photography",
    description:
      "Nighttime ambulations, queer cartographies and the soft choreography of strangers in the city.",
    tags: ["queer", "urban", "portraits"],
    status: "To be confirmed",
  },
  {
    slug: "portraits-and-bodies",
    title: "Portraits and Bodies",
    year_range: "Years to be confirmed by artist",
    location: "Location to be confirmed",
    medium: "Portrait photography",
    description:
      "A continuing series on the photographed body — desired, observed, dressed, undressed, remembered.",
    tags: ["portraits", "queer", "prints"],
    status: "Available Prints",
  },
  {
    slug: "landscapes-and-exile",
    title: "Landscapes and Exile",
    year_range: "Years to be confirmed by artist",
    location: "Location to be confirmed",
    medium: "Photography",
    description:
      "Landscapes carrying the residue of biography: borders, returns, departures, the geography of leaving.",
    tags: ["landscape", "autobiography", "travel"],
    status: "Archive",
  },
  {
    slug: "personal-archive",
    title: "Personal Archive",
    year_range: "Ongoing",
    location: "Studio archive",
    medium: "Photography, found image, document",
    description:
      "A private archive of family pictures, letters, marginal images and the working notes of a life made of looking.",
    tags: ["autobiography"],
    status: "Archive",
  },
];

// Homepage selected works — first 7 of the full Still archive
export const SELECTED_PROJECTS = STILL_PROJECTS.slice(0, 7);

export const FEATURED_PROJECT = {
  slug: "cuba-love-story",
  title: "Cuba, Love Story",
  description:
    "The confusing and bewildering paradox of the masculine and militarist blended with the homoerotic in Cuba — evoking the artist's own memories of growing up in young, macho and militarist Israel.",
  image: CUBA.i1.src,
  alt: CUBA.i1.alt,
};

export const FEATURED_STILL = {
  slug: "cuba-love-story",
  title: "Cuba, Love Story",
  description:
    "The confusing and bewildering paradox of the masculine and militarist blended with the homoerotic in Cuba — evoking the artist's own memories of growing up in young, macho and militarist Israel.",
  image: CUBA.i2.src,
  alt: CUBA.i2.alt,
};

export const SPLIT_MEDIA = {
  still: {
    image: CUBA.i1.src,
    alt: CUBA.i1.alt,
    description:
      "Photographs as held breath. Portraits, landscapes and remembered rooms carrying memory forward.",
  },
  moving: {
    image: CUBA.i4.src,
    alt: "Moving-image still by Kobi Israel — from the Cuba, Love Story sequence. Details to be confirmed.",
    description:
      "A Cuban Love Story, Parisian Postcards, Investigating Things Past. Time as another way of looking.",
  },
};

export const PRINT_DETAILS = [
  { label: "Print medium", value: "Archival pigment print — details to be confirmed by artist." },
  { label: "Sizes available", value: "Multiple sizes — to be confirmed by artist." },
  { label: "Edition", value: "Limited edition with edition number — to be confirmed by artist." },
  { label: "Availability", value: "Please inquire." },
  { label: "Price", value: "On request." },
  { label: "Certificate of authenticity", value: "Included, signed by the artist." },
  { label: "Artist signature", value: "Hand-signed on verso." },
];

// Collector pathway for the Still page
export const STILL_COLLECTOR = [
  { label: "Selected works available as prints", value: "Curated selection — to be confirmed by artist." },
  { label: "Print medium", value: "Archival pigment print — exact paper and process to be confirmed." },
  { label: "Sizes", value: "Multiple sizes — to be confirmed by artist." },
  { label: "Edition numbers", value: "Limited edition — numbers to be confirmed per work." },
  { label: "Artist signature", value: "Hand-signed by the artist on verso." },
  { label: "Certificate of authenticity", value: "Included, numbered and signed." },
  { label: "Framing options", value: "Bespoke museum-grade framing on request." },
  { label: "Shipping", value: "International shipping with insurance and condition reporting." },
  { label: "Price", value: "On request." },
  { label: "Availability", value: "Please inquire." },
  { label: "Condition notes", value: "Each print produced and inspected to archival standards." },
  { label: "Secondary market", value: "Notes available on request for works previously placed." },
];

export const BOOKS = [
  {
    slug: "monograph-tbc",
    title: "Monograph — title to be confirmed by artist",
    publisher: "Publisher to be confirmed",
    format: "Hardcover — details to be confirmed",
    isbn: "ISBN to be confirmed",
    price: "Price on request",
    cover: null,
    signed: "Signed copies — please inquire",
  },
  {
    slug: "catalogue-tbc",
    title: "Exhibition catalogue — title to be confirmed by artist",
    publisher: "Publisher to be confirmed",
    format: "Softcover — details to be confirmed",
    isbn: "ISBN to be confirmed",
    price: "Price on request",
    cover: null,
    signed: "Signed copies — please inquire",
  },
  {
    slug: "pdf-tbc",
    title: "Artist PDF — title to be confirmed by artist",
    publisher: "Self-published",
    format: "Digital PDF",
    isbn: "—",
    price: "Price on request",
    cover: null,
    signed: "—",
  },
];

export const CREDIBILITY_GROUPS = [
  { heading: "Selected solo exhibitions", items: ["To be confirmed by artist"] },
  { heading: "Selected group exhibitions", items: ["To be confirmed by artist"] },
  { heading: "Public collections", items: ["To be confirmed by artist"] },
  { heading: "Private collections", items: ["To be confirmed by artist"] },
  { heading: "Awards", items: ["To be confirmed by artist"] },
  { heading: "Publications", items: ["To be confirmed by artist"] },
];

export const CURRENT_PROJECTS = [
  { slug: "new-work", title: "New Work", note: "In progress — details to be confirmed by artist." },
  { slug: "moving-image", title: "Moving Image", note: "New film / video work — details to be confirmed." },
  { slug: "music-sound", title: "Music / Sound", note: "Sound and score explorations — details to be confirmed." },
  { slug: "writing", title: "Writing", note: "Essays, notes and texts — details to be confirmed." },
  { slug: "archive-notes", title: "Archive Notes", note: "Working notes from the archive — details to be confirmed." },
];

// Archive notes — Still page poetic cards
export const ARCHIVE_NOTES = [
  { slug: "memory", title: "Memory", note: "Notes on the photograph as a memory object — to be confirmed by artist." },
  { slug: "desire", title: "Desire", note: "Notes on looking, longing and the photographed body — to be confirmed by artist." },
  { slug: "masculinity", title: "Masculinity", note: "Notes on masculinity as performance, costume and inheritance — to be confirmed." },
  { slug: "exile", title: "Exile", note: "Notes on departure, return and the geography of leaving — to be confirmed." },
  { slug: "travel", title: "Travel", note: "Notes on travel as a way of seeing and being seen — to be confirmed." },
  { slug: "military", title: "Military", note: "Notes on uniforms, training and the trained male body — to be confirmed." },
  { slug: "bodies", title: "Bodies", note: "Notes on the photographed body, dressed and undressed — to be confirmed." },
  { slug: "cities", title: "Cities", note: "Notes on cities as theatres of strangers and intimacy — to be confirmed." },
  { slug: "landscape", title: "Landscape", note: "Notes on landscape as biography and residue — to be confirmed." },
  { slug: "self-as-witness", title: "The Self as Witness", note: "Notes on the autobiographical I — to be confirmed by artist." },
];

export const ARTIST_STATEMENT =
  "Kobi Israel's work is autobiographical in nature, investigating the remembrance of things past — empty landscapes, intimate encounters and touristic travelogues as backdrops for an inside quest and reflection. Still and moving images of masculinity, desire, exile and the self as witness.";

export const CONCEPT_HEADING = "A Chaos of Appearances";
export const CONCEPT_BODY =
  "An archive of fragments — soldiers and strangers, lovers and landscapes, cities, childhood and exile. Still and moving diaries from the unstable theatre of memory.";

// ============================================================
// MOVING / FILM / VIDEO ARCHIVE
// ============================================================

export const MOVING_HERO = {
  image: CUBA.i4.src,
  alt:
    "Moving-image hero — video still from Cuba, Love Story by Kobi Israel. Details to be confirmed.",
};

export const MOVING_CURATORIAL_IMAGE = {
  image: CUBA.i2.src,
  alt:
    "Curatorial moving-image still — from Cuba, Love Story by Kobi Israel. Details to be confirmed.",
};

export const MOVING_FILTERS = [
  { slug: "all", label: "All" },
  { slug: "short-films", label: "Short Films" },
  { slug: "video-art", label: "Video Art" },
  { slug: "visual-diaries", label: "Visual Diaries" },
  { slug: "music-sound", label: "Music / Sound" },
  { slug: "travelogue", label: "Travelogue" },
  { slug: "autobiography", label: "Autobiography" },
  { slug: "queer", label: "Queer / Desire" },
  { slug: "archive-fragments", label: "Archive Fragments" },
  { slug: "wip", label: "Works in Progress" },
];

// Moving works — 12 entries, all placeholder content.
export const MOVING_WORKS = [
  {
    slug: "cuba-love-story",
    title: "Cuba, Love Story",
    year_range: "Years to be confirmed by artist",
    duration: "Duration to be confirmed",
    format: "HD / digital — format to be confirmed",
    status: "Completed",
    synopsis:
      "A moving-image investigation into masculinity, militarism, desire, memory and the charged space between observation and longing.",
    tags: ["short-films", "autobiography", "queer", "travelogue"],
    featured: true,
  },
  {
    slug: "a-chaos-of-appearances",
    title: "A Chaos of Appearances",
    year_range: "Years to be confirmed by artist",
    duration: "Duration to be confirmed",
    format: "Digital video — format to be confirmed",
    status: "Work in Progress",
    synopsis:
      "An assemblage of soldiers, strangers, cities and lovers — the unstable theatre of remembered appearance set in motion.",
    tags: ["video-art", "autobiography", "archive-fragments", "wip"],
  },
  {
    slug: "still-and-moving-diaries",
    title: "Still & Moving Diaries",
    year_range: "Ongoing",
    duration: "Variable",
    format: "Digital video and stills — format to be confirmed",
    status: "Work in Progress",
    synopsis:
      "A diaristic project where photographs become rhythm, voice, light and time.",
    tags: ["visual-diaries", "autobiography", "wip"],
  },
  {
    slug: "fragments-of-life",
    title: "Fragments of Life",
    year_range: "Years to be confirmed by artist",
    duration: "Duration to be confirmed",
    format: "Digital video — format to be confirmed",
    status: "Archive",
    synopsis:
      "Short cinematic fragments collected from daily life, intimacy and ordinary light.",
    tags: ["visual-diaries", "autobiography", "archive-fragments"],
  },
  {
    slug: "river-of-three-crossings",
    title: "River of Three Crossings",
    year_range: "Years to be confirmed by artist",
    duration: "Duration to be confirmed",
    format: "Digital video — format to be confirmed",
    status: "Work in Progress",
    synopsis:
      "Three crossings between landscape, biography and the porous edges of a remembered self.",
    tags: ["short-films", "travelogue", "autobiography", "wip"],
  },
  {
    slug: "intimate-strangers",
    title: "Intimate Strangers",
    year_range: "Years to be confirmed by artist",
    duration: "Duration to be confirmed",
    format: "Digital video — format to be confirmed",
    status: "Archive",
    synopsis:
      "Brief moving-image encounters: men watched, filmed and remembered between cities.",
    tags: ["video-art", "queer", "archive-fragments"],
  },
  {
    slug: "investigating-things-past",
    title: "Investigating Things Past",
    year_range: "Years to be confirmed by artist",
    duration: "Duration to be confirmed",
    format: "Digital video and archival materials",
    status: "Work in Progress",
    synopsis:
      "A moving archive in which childhood, exile and recollection are continually re-read on screen.",
    tags: ["video-art", "autobiography", "archive-fragments", "wip"],
  },
  {
    slug: "personal-archive-films",
    title: "Personal Archive Films",
    year_range: "Ongoing",
    duration: "Variable",
    format: "Mixed — Super 8, MiniDV, digital (to be confirmed)",
    status: "Archive",
    synopsis:
      "Private film and video archive: family footage, marginal recordings, working notes.",
    tags: ["archive-fragments", "autobiography", "visual-diaries"],
  },
  {
    slug: "music-sound-works",
    title: "Music / Sound Works",
    year_range: "Years to be confirmed by artist",
    duration: "Variable",
    format: "Sound, voice and moving image",
    status: "Work in Progress",
    synopsis:
      "Sound, voice and music explorations developed alongside the moving-image archive.",
    tags: ["music-sound", "wip"],
  },
  {
    slug: "experimental-film-fragments",
    title: "Experimental Film Fragments",
    year_range: "Years to be confirmed by artist",
    duration: "Variable short fragments",
    format: "Digital video and analogue transfers",
    status: "Archive",
    synopsis:
      "Short experimental sequences testing rhythm, repetition, montage and silence.",
    tags: ["video-art", "archive-fragments"],
  },
  {
    slug: "travelogue-works",
    title: "Travelogue Works",
    year_range: "Years to be confirmed by artist",
    duration: "Variable",
    format: "Digital video — format to be confirmed",
    status: "Work in Progress",
    synopsis:
      "Moving-image notes from journeys — Cuba, Paris, London and points between.",
    tags: ["travelogue", "visual-diaries", "wip"],
  },
  {
    slug: "future-film-projects",
    title: "Future Film Projects",
    year_range: "In development",
    duration: "—",
    format: "—",
    status: "To be confirmed",
    synopsis:
      "Film and moving-image projects currently in development. Synopses to be confirmed by the artist.",
    tags: ["wip"],
  },
];

export const FEATURED_MOVING = {
  slug: "cuba-love-story",
  title: "Cuba, Love Story",
  description:
    "A moving-image and photographic investigation into masculinity, militarism, homoerotic codes, desire, memory and the tension between observation and longing.",
  image: CUBA.i4.src,
  alt:
    "Cuba, Love Story — featured moving-image still by Kobi Israel. Details to be confirmed.",
  duration: "Duration to be confirmed by artist",
  format: "HD / digital — format to be confirmed",
  language: "Language and subtitles to be confirmed",
  screening_status: "Screening status to be confirmed",
};

export const MOVING_STATEMENT =
  "The moving-image works should be understood as visual diaries rather than conventional films. They gather fragments of travel, memory, body, voice, silence, city, landscape and desire into a cinematic archive of lived experience.";

// Curator / screening pathway
export const CURATOR_PATHWAY = [
  { label: "Screening copies", value: "Available on request — formats to be confirmed by artist." },
  { label: "Installation formats", value: "Single-channel, multi-channel and gallery installation — to be discussed." },
  { label: "Artist talks", value: "Available on request, subject to schedule." },
  { label: "Q&A availability", value: "Available in person and online, subject to schedule." },
  { label: "Festival submissions", value: "Welcomed via direct curator contact." },
  { label: "Museum / gallery presentations", value: "Welcomed via direct curator contact." },
  { label: "Educational licensing", value: "University and library licensing on request." },
  { label: "Press kit", value: "Available on request — to be confirmed by artist." },
  { label: "Technical specifications", value: "Resolution, codec, runtime and aspect ratio confirmed per work." },
  { label: "Contact", value: "Use the curator inquiry form below or write directly to the studio." },
];

// Still ↔ Moving connection cards
export const STILL_MOVING_BRIDGE = [
  {
    slug: "photography-into-film",
    title: "Photography into Film",
    note: "How a photographed gesture, gaze or street becomes a sequence in time.",
  },
  {
    slug: "memory-into-sequence",
    title: "Memory into Sequence",
    note: "How remembered images return as rhythm, repetition and montage.",
  },
  {
    slug: "archive-into-voice",
    title: "Archive into Voice",
    note: "How the working archive finds voice through sound, narration and music.",
  },
];

// Sound, voice, music section — placeholder fields
export const SOUND_VOICE_MUSIC = {
  project_title: "Music project title — to be confirmed by artist.",
  sound_work: "Sound work title — to be confirmed by artist.",
  voice_over: "Voice-over text — to be supplied by the artist.",
  soundtrack: "Video soundtrack — to be confirmed.",
  streaming_link: "Streaming link — to be confirmed by artist.",
  related_visual: "Related visual project — to be confirmed.",
  artist_note:
    "Sound and music are part of the moving-image archive: a continuing exploration of voice, silence and rhythm in dialogue with the image.",
};

// Archive fragments — 10 short experimental / diary pieces
export const MOVING_FRAGMENTS = [
  { slug: "cities", title: "Cities", note: "Streets, traffic, strangers and the breath of urban time.", status: "Archive" },
  { slug: "bodies", title: "Bodies", note: "The photographed body in motion — gesture, skin, breath.", status: "Archive" },
  { slug: "rooms", title: "Rooms", note: "Interiors as theatre of the self: hotel rooms, studios, kitchens.", status: "Archive" },
  { slug: "travel", title: "Travel", note: "Windows, platforms, runways — the texture of moving through.", status: "Work in Progress" },
  { slug: "memory", title: "Memory", note: "Fragments returning out of order, in their own light.", status: "Archive" },
  { slug: "exile", title: "Exile", note: "Departure, return and the geography of leaving, set in motion.", status: "Work in Progress" },
  { slug: "family", title: "Family", note: "Inherited gestures, archival film, voices remembered.", status: "Archive" },
  { slug: "desire", title: "Desire", note: "Looking, longing, withholding — the rhythm of attention.", status: "Archive" },
  { slug: "silence", title: "Silence", note: "Held breath, dropped sound, the image alone.", status: "Work in Progress" },
  { slug: "night", title: "Night", note: "Cities and bodies under low light — the night as another country.", status: "Archive" },
];

// ============================================================
// LIMITED EDITION PRINTS
// ============================================================

export const PRINTS_HERO = {
  image: CUBA.i3.src,
  alt:
    "Limited edition prints hero — image from Cuba, Love Story by Kobi Israel. Details to be confirmed.",
};

export const PRINTS_VIEWING_IMAGE = {
  image: CUBA.i5.src,
  alt:
    "Collector viewing room — image from Cuba, Love Story by Kobi Israel. Details to be confirmed.",
};

// 10 print collection cards. Slugs match existing project slugs from STILL_PROJECTS so they can link.
export const PRINT_COLLECTIONS = [
  {
    slug: "cuba-love-story",
    title: "Cuba, Love Story",
    description: "Long-form photographic investigation of masculinity, militarism and desire.",
    edition_status: "Edition status to be confirmed by artist",
    availability: "Selected prints available by inquiry",
  },
  {
    slug: "river-of-three-crossings",
    title: "River of Three Crossings",
    description: "Crossings between landscape, biography and the porous edges of a remembered self.",
    edition_status: "Edition status to be confirmed by artist",
    availability: "Availability to be confirmed",
  },
  {
    slug: "fragments-of-life",
    title: "Fragments of Life",
    description: "Ongoing diaristic series collecting daily life, intimacy and ordinary light.",
    edition_status: "Edition status to be confirmed by artist",
    availability: "Selected prints available by inquiry",
  },
  {
    slug: "intimate-strangers",
    title: "Intimate Strangers",
    description: "Brief encounters: men met, watched, photographed and remembered.",
    edition_status: "Edition status to be confirmed by artist",
    availability: "Selected prints available by inquiry",
  },
  {
    slug: "views",
    title: "Views",
    description: "A typology of windows, thresholds and the interior weather of looking out.",
    edition_status: "Edition status to be confirmed by artist",
    availability: "Availability to be confirmed",
  },
  {
    slug: "parisian-postcards",
    title: "Parisian Postcards",
    description: "Letters in image form from a city of strangers, kept and never sent.",
    edition_status: "Edition status to be confirmed by artist",
    availability: "Availability to be confirmed",
  },
  {
    slug: "investigating-things-past",
    title: "Investigating Things Past",
    description: "An autobiographical archive in which childhood, exile and recollection return.",
    edition_status: "Edition status to be confirmed by artist",
    availability: "Availability to be confirmed",
  },
  {
    slug: "military-masculinity-archive",
    title: "Masculinity / Military Archive",
    description: "Working archive of uniforms, gestures and the codes of trained male bodies.",
    edition_status: "Edition status to be confirmed by artist",
    availability: "Availability to be confirmed",
  },
  {
    slug: "portraits-and-bodies",
    title: "Portraits and Bodies",
    description: "The photographed body — desired, observed, dressed, undressed, remembered.",
    edition_status: "Edition status to be confirmed by artist",
    availability: "Selected prints available by inquiry",
  },
  {
    slug: "landscapes-and-exile",
    title: "Landscapes and Exile",
    description: "Landscapes carrying biography: borders, returns, the geography of leaving.",
    edition_status: "Edition status to be confirmed by artist",
    availability: "Availability to be confirmed",
  },
];

// Available works grid — 8 placeholder artwork cards.
export const PRINTS_AVAILABLE_WORKS = [
  {
    slug: "artwork-tbc-01",
    title: "Untitled — title to be confirmed by artist",
    series: "Cuba, Love Story",
    year: "Year to be confirmed",
    medium: "Archival pigment print — to be confirmed",
    dimensions: "Dimensions to be confirmed",
    edition: "Edition to be confirmed",
    availability: "Availability to be confirmed",
    price: "Price on request",
  },
  {
    slug: "artwork-tbc-02",
    title: "Untitled — title to be confirmed by artist",
    series: "Intimate Strangers",
    year: "Year to be confirmed",
    medium: "Archival pigment print — to be confirmed",
    dimensions: "Dimensions to be confirmed",
    edition: "Edition to be confirmed",
    availability: "Availability to be confirmed",
    price: "Price on request",
  },
  {
    slug: "artwork-tbc-03",
    title: "Untitled — title to be confirmed by artist",
    series: "Portraits and Bodies",
    year: "Year to be confirmed",
    medium: "Archival pigment print — to be confirmed",
    dimensions: "Dimensions to be confirmed",
    edition: "Edition to be confirmed",
    availability: "Availability to be confirmed",
    price: "Price on request",
  },
  {
    slug: "artwork-tbc-04",
    title: "Untitled — title to be confirmed by artist",
    series: "Fragments of Life",
    year: "Year to be confirmed",
    medium: "Archival pigment print — to be confirmed",
    dimensions: "Dimensions to be confirmed",
    edition: "Edition to be confirmed",
    availability: "Availability to be confirmed",
    price: "Price on request",
  },
  {
    slug: "artwork-tbc-05",
    title: "Untitled — title to be confirmed by artist",
    series: "Cuba, Love Story",
    year: "Year to be confirmed",
    medium: "Archival pigment print — to be confirmed",
    dimensions: "Dimensions to be confirmed",
    edition: "Edition to be confirmed",
    availability: "Availability to be confirmed",
    price: "Price on request",
  },
  {
    slug: "artwork-tbc-06",
    title: "Untitled — title to be confirmed by artist",
    series: "Views",
    year: "Year to be confirmed",
    medium: "Archival pigment print — to be confirmed",
    dimensions: "Dimensions to be confirmed",
    edition: "Edition to be confirmed",
    availability: "Availability to be confirmed",
    price: "Price on request",
  },
  {
    slug: "artwork-tbc-07",
    title: "Untitled — title to be confirmed by artist",
    series: "Parisian Postcards",
    year: "Year to be confirmed",
    medium: "Archival pigment print — to be confirmed",
    dimensions: "Dimensions to be confirmed",
    edition: "Edition to be confirmed",
    availability: "Availability to be confirmed",
    price: "Price on request",
  },
  {
    slug: "artwork-tbc-08",
    title: "Untitled — title to be confirmed by artist",
    series: "Landscapes and Exile",
    year: "Year to be confirmed",
    medium: "Archival pigment print — to be confirmed",
    dimensions: "Dimensions to be confirmed",
    edition: "Edition to be confirmed",
    availability: "Availability to be confirmed",
    price: "Price on request",
  },
];

export const PRINT_INFO_BLOCKS = [
  { slug: "medium", label: "Medium", value: "Archival pigment print on fine art paper. Exact paper, ink and process to be confirmed by artist per work." },
  { slug: "edition", label: "Edition", value: "Signed limited edition with numbered certificate. Edition sizes to be confirmed by artist per work." },
  { slug: "signature", label: "Signature", value: "Each print hand-signed by the artist on verso." },
  { slug: "certificate", label: "Certificate of Authenticity", value: "Numbered certificate of authenticity included, signed by the artist." },
  { slug: "condition", label: "Condition", value: "Each print produced and inspected to archival standards. Condition reports available on request." },
  { slug: "framing", label: "Framing", value: "Bespoke museum-grade framing available on request. Frame details to be confirmed per work." },
  { slug: "shipping", label: "Shipping", value: "International shipping with insurance and condition reporting on delivery. Shipping policy to be confirmed by artist." },
  { slug: "availability", label: "Availability", value: "Availability to be confirmed by artist per work. Some works may be sold out or held in private collections." },
  { slug: "price", label: "Price on Request", value: "Prices are confirmed by the artist or representative on inquiry, subject to size, edition status and condition." },
  { slug: "secondary-market", label: "Secondary Market Notes", value: "Notes for works previously placed in private collections available on request, case by case." },
];

export const COLLECTOR_TRUST = [
  { heading: "Selected exhibitions", items: ["To be confirmed by artist"] },
  { heading: "Selected public collections", items: ["To be confirmed by artist"] },
  { heading: "Selected private collections", items: ["To be confirmed by artist"] },
  { heading: "Selected publications", items: ["To be confirmed by artist"] },
  { heading: "Selected awards", items: ["To be confirmed by artist"] },
  { heading: "Selected books", items: ["To be confirmed by artist"] },
  { heading: "Gallery history", items: ["To be confirmed by artist"] },
  { heading: "Press history", items: ["To be confirmed by artist"] },
];

export const INSTITUTIONAL_PATHWAY = [
  { label: "Exhibition proposals", value: "Welcomed via direct curator contact." },
  { label: "Archive research", value: "Researcher access on request, subject to materials availability." },
  { label: "Institutional acquisition", value: "Discussed case by case with the artist or representative." },
  { label: "Publication requests", value: "Editorial and academic publication requests welcomed." },
  { label: "Image licensing", value: "Licensing fees and conditions confirmed per request." },
  { label: "Artist talks", value: "Available on request, subject to schedule." },
  { label: "Screening connections", value: "Curatorial introductions to the moving-image archive on request." },
  { label: "Book and print collaborations", value: "Welcomed via direct contact with the studio." },
];

export const PRINTS_RELATED_LINKS = [
  { slug: "still", label: "Still", to: "/still" },
  { slug: "moving", label: "Moving", to: "/moving" },
  { slug: "books", label: "Books", to: "/books" },
  { slug: "cv", label: "CV", to: "/cv" },
  { slug: "archive", label: "Archive Notes", to: "/archive" },
  { slug: "contact", label: "Contact", to: "/contact" },
];

export const INQUIRY_TYPE_OPTIONS = [
  { value: "collector", label: "Collecting" },
  { value: "gallery_curator", label: "Curatorial / Gallery" },
  { value: "institutional", label: "Institutional" },
  { value: "press", label: "Press" },
  { value: "general", label: "Other" },
];

// ============================================================
// BOOKS, CATALOGUES AND PUBLICATIONS
// ============================================================

export const BOOKS_HERO = {
  image: CUBA.i2.src,
  alt:
    "Books hero — image from Cuba, Love Story by Kobi Israel. Details to be confirmed.",
};

export const BOOKS_EDITORIAL_IMAGE = {
  image: CUBA.i1.src,
  alt:
    "Editorial introduction — image from Cuba, Love Story by Kobi Israel. Details to be confirmed.",
};

// 10 publication cards. Slugs match project slugs where applicable so View Publication can link
// to the corresponding project detail page.
export const PUBLICATIONS = [
  {
    slug: "cuba-love-story",
    title: "Cuba, Love Story",
    subtitle: "Photographic monograph — to be confirmed by artist",
    year: "Year to be confirmed",
    publisher: "Publisher to be confirmed",
    format: "Hardcover — details to be confirmed",
    isbn: "ISBN to be confirmed",
    price: "Price on request",
    availability: "Signed copy availability to be confirmed",
    description:
      "A photographic and cinematic journey through Cuba, masculinity, military culture, desire and memory.",
    related_project: "cuba-love-story",
    featured: true,
  },
  {
    slug: "fragments-of-life",
    title: "Fragments of Life",
    subtitle: "Artist book — to be confirmed by artist",
    year: "Year to be confirmed",
    publisher: "Publisher to be confirmed",
    format: "Softcover — details to be confirmed",
    isbn: "ISBN to be confirmed",
    price: "Price on request",
    availability: "Availability to be confirmed",
    description: "Diaristic fragments collecting daily life, intimacy and ordinary light.",
    related_project: "fragments-of-life",
  },
  {
    slug: "river-of-three-crossings",
    title: "River of Three Crossings",
    subtitle: "Photographic book — to be confirmed by artist",
    year: "Year to be confirmed",
    publisher: "Publisher to be confirmed",
    format: "Hardcover — details to be confirmed",
    isbn: "ISBN to be confirmed",
    price: "Price on request",
    availability: "Availability to be confirmed",
    description: "Crossings between landscape, biography and the porous edges of a remembered self.",
    related_project: "river-of-three-crossings",
  },
  {
    slug: "intimate-strangers",
    title: "Intimate Strangers",
    subtitle: "Portrait book — to be confirmed by artist",
    year: "Year to be confirmed",
    publisher: "Publisher to be confirmed",
    format: "Hardcover — details to be confirmed",
    isbn: "ISBN to be confirmed",
    price: "Price on request",
    availability: "Availability to be confirmed",
    description: "Brief encounters: men met, watched, photographed and remembered.",
    related_project: "intimate-strangers",
  },
  {
    slug: "a-chaos-of-appearances",
    title: "A Chaos of Appearances",
    subtitle: "Visual diary — to be confirmed by artist",
    year: "Year to be confirmed",
    publisher: "Publisher to be confirmed",
    format: "Softcover — details to be confirmed",
    isbn: "ISBN to be confirmed",
    price: "Price on request",
    availability: "Availability to be confirmed",
    description: "Soldiers, strangers, cities and lovers — the unstable theatre of remembered appearance.",
    related_project: "a-chaos-of-appearances",
  },
  {
    slug: "artist-catalogues",
    title: "Artist Catalogues",
    subtitle: "Selected artist catalogues",
    year: "Years to be confirmed",
    publisher: "Publishers to be confirmed",
    format: "Various formats — to be confirmed",
    isbn: "Multiple ISBNs — to be confirmed",
    price: "Prices on request",
    availability: "Availability to be confirmed",
    description: "Selected artist catalogues across solo and group presentations.",
  },
  {
    slug: "exhibition-catalogues",
    title: "Exhibition Catalogues",
    subtitle: "Catalogues from selected exhibitions",
    year: "Years to be confirmed",
    publisher: "Publishers to be confirmed",
    format: "Various formats — to be confirmed",
    isbn: "Multiple ISBNs — to be confirmed",
    price: "Prices on request",
    availability: "Availability to be confirmed",
    description: "Catalogues produced around selected exhibition projects.",
  },
  {
    slug: "pdf-archive",
    title: "PDF Archive",
    subtitle: "Digital publications and artist PDFs",
    year: "Ongoing",
    publisher: "Self-published",
    format: "Digital PDF",
    isbn: "—",
    price: "Price on request",
    availability: "Access by inquiry",
    description: "Selected artist PDFs, project notes and digital publications.",
  },
  {
    slug: "upcoming-publications",
    title: "Upcoming Publications",
    subtitle: "Forthcoming books and catalogues",
    year: "In development",
    publisher: "Publishers to be confirmed",
    format: "Formats to be confirmed",
    isbn: "ISBNs to be confirmed",
    price: "Pricing to be confirmed",
    availability: "Forthcoming — please inquire",
    description: "New publications currently in development with the artist and collaborators.",
  },
  {
    slug: "selected-essays-and-texts",
    title: "Selected Essays and Texts",
    subtitle: "Writing connected to the archive",
    year: "Years to be confirmed",
    publisher: "Various — to be confirmed",
    format: "Print and digital",
    isbn: "Where applicable — to be confirmed",
    price: "—",
    availability: "Reading copies on request",
    description: "Essays, notes and texts written around the photographic and moving-image work.",
  },
];

export const FEATURED_BOOK = {
  slug: "cuba-love-story",
  title: "Cuba, Love Story",
  description:
    "A photographic and cinematic journey through Cuba, masculinity, military culture, desire, memory and the charged encounter between stranger, witness and image.",
  cover_alt:
    "Cuba, Love Story — featured book cover placeholder. To be replaced with artist's selected cover.",
  metadata: [
    ["Publisher", "Publisher to be confirmed"],
    ["Format", "Hardcover — details to be confirmed"],
    ["Pages", "Page count to be confirmed"],
    ["ISBN", "ISBN to be confirmed"],
    ["Language", "Language to be confirmed"],
    ["Edition", "Edition to be confirmed"],
    ["Signed copies", "Availability to be confirmed"],
    ["Price", "Price on request"],
  ],
  related_project: "cuba-love-story",
};

export const PURCHASE_BLOCKS = [
  { label: "Available books", value: "Selected titles available — please inquire for current list." },
  { label: "Signed copies", value: "Signed copy availability to be confirmed per title by the artist." },
  { label: "Standard copies", value: "Where applicable — to be confirmed by artist." },
  { label: "Sold out titles", value: "Some titles may be sold out or out of print." },
  { label: "PDF editions", value: "Selected PDFs available by inquiry." },
  { label: "Shipping", value: "International shipping arranged with insurance — costs confirmed per order." },
  { label: "Price", value: "Price on request — confirmed by the artist or representative." },
  { label: "Condition", value: "All copies inspected before despatch. Condition notes available on request." },
  { label: "Rare / out-of-print", value: "Rare and out-of-print works subject to confirmation case by case." },
  { label: "Secondary market", value: "Notes on secondary market availability on request." },
];

export const PDF_ARCHIVE_CARDS = [
  { slug: "artist-statement", title: "Artist Statement PDF", description: "Artist statement and biography document — file to be supplied.", file_type: "PDF · file to be supplied", access: "Access by inquiry" },
  { slug: "selected-essays", title: "Selected Essays", description: "Essays connected to the archive — files to be supplied.", file_type: "PDF · files to be supplied", access: "Access by inquiry" },
  { slug: "exhibition-catalogues", title: "Exhibition Catalogues", description: "Selected exhibition catalogue PDFs.", file_type: "PDF · to be supplied", access: "Access by inquiry" },
  { slug: "project-notes", title: "Project Notes", description: "Working notes connected to individual projects.", file_type: "PDF · to be supplied", access: "Access by inquiry" },
  { slug: "press-pdfs", title: "Press PDFs", description: "Selected press features and writing about the work.", file_type: "PDF · to be supplied", access: "Access by inquiry" },
  { slug: "book-samples", title: "Book Samples", description: "Sample spreads from selected publications.", file_type: "PDF · to be supplied", access: "Access by inquiry" },
  { slug: "archive-texts", title: "Archive Texts", description: "Texts from the working archive.", file_type: "PDF · to be supplied", access: "Access by inquiry" },
];

export const TEXTS_ESSAYS = [
  { slug: "memory", title: "Memory", description: "Notes on the photograph as a memory object.", category: "Memory", date: "Date to be confirmed" },
  { slug: "masculinity", title: "Masculinity", description: "Notes on masculinity as performance, costume and inheritance.", category: "Masculinity", date: "Date to be confirmed" },
  { slug: "desire", title: "Desire", description: "Notes on looking, longing and the photographed body.", category: "Desire", date: "Date to be confirmed" },
  { slug: "exile", title: "Exile", description: "Notes on departure, return and the geography of leaving.", category: "Exile", date: "Date to be confirmed" },
  { slug: "photography", title: "Photography", description: "Notes on the still image as evidence and confession.", category: "Photography", date: "Date to be confirmed" },
  { slug: "moving-images", title: "Moving Images", description: "Notes on the still image becoming time.", category: "Moving Images", date: "Date to be confirmed" },
  { slug: "autobiography", title: "Autobiography", description: "Notes on the autobiographical I.", category: "Autobiography", date: "Date to be confirmed" },
  { slug: "travel", title: "Travel", description: "Notes on travel as a way of seeing and being seen.", category: "Travel", date: "Date to be confirmed" },
  { slug: "queer-codes", title: "Queer Codes", description: "Notes on queer signals, glances and unwritten languages.", category: "Queer Codes", date: "Date to be confirmed" },
  { slug: "archive-notes", title: "Archive Notes", description: "Working notes from the archive itself.", category: "Archive Notes", date: "Date to be confirmed" },
];

export const PUBLICATION_HISTORY = [
  { heading: "Published books", items: ["To be confirmed by artist"] },
  { heading: "Catalogues", items: ["To be confirmed by artist"] },
  { heading: "Magazine features", items: ["To be confirmed by artist"] },
  { heading: "Newspaper features", items: ["To be confirmed by artist"] },
  { heading: "Anthologies", items: ["To be confirmed by artist"] },
  { heading: "Academic references", items: ["To be confirmed by artist"] },
  { heading: "Library holdings", items: ["To be confirmed by artist"] },
  { heading: "Book fairs", items: ["To be confirmed by artist"] },
  { heading: "Exhibition publications", items: ["To be confirmed by artist"] },
];

export const BOOKS_RELATED_LINKS = [
  { slug: "still", label: "Still", to: "/still" },
  { slug: "moving", label: "Moving", to: "/moving" },
  { slug: "projects", label: "Projects", to: "/projects" },
  { slug: "prints", label: "Limited Edition Prints", to: "/prints" },
  { slug: "archive", label: "Archive", to: "/archive" },
  { slug: "cv", label: "CV", to: "/cv" },
  { slug: "contact", label: "Contact", to: "/contact" },
];

export const BOOK_INQUIRY_TYPE_OPTIONS = [
  { value: "purchase", label: "Purchase" },
  { value: "signed_copy", label: "Signed copy" },
  { value: "collector", label: "Collector inquiry" },
  { value: "research", label: "Research" },
  { value: "press", label: "Press" },
  { value: "institutional", label: "Institutional" },
  { value: "general", label: "Other" },
];

// ============================================================
// CV / BIOGRAPHY / EXHIBITIONS / COLLECTIONS
// ============================================================

export const CV_HERO = {
  image: CUBA.i4.src,
  alt:
    "CV hero — image from Cuba, Love Story by Kobi Israel. Details to be confirmed.",
};

export const CV_BIOGRAPHY =
  "Kobi Israel / Yaqov Israel Grossi is a photographer, filmmaker and visual artist whose work explores masculinity, desire, memory, exile, identity and the autobiographical archive through still and moving images.";

export const CV_POSITIONING = [
  {
    slug: "photography",
    title: "Photography",
    note: "Still-image projects exploring masculinity, desire, body, place, autobiography and memory.",
  },
  {
    slug: "moving-image",
    title: "Moving Image",
    note: "Film fragments, video works and visual diaries extending the photographic archive into time, voice and motion.",
  },
  {
    slug: "archive",
    title: "Archive",
    note: "Books, prints, texts, exhibitions and project records forming a connected body of work.",
  },
];

// Solo + Group exhibition lists — placeholders only
const CV_PLACEHOLDER_EXHIBITION = {
  year: "Year to be confirmed by artist",
  title: "Exhibition title to be confirmed by artist",
  venue: "Venue to be confirmed",
  city: "City to be confirmed",
  country: "Country to be confirmed",
  curator: "Curator to be confirmed",
  project: "Project to be confirmed",
};

export const CV_EXHIBITIONS_SOLO = Array.from({ length: 4 }).map((_, i) => ({
  slug: `solo-${i + 1}`,
  ...CV_PLACEHOLDER_EXHIBITION,
}));

export const CV_EXHIBITIONS_GROUP = Array.from({ length: 4 }).map((_, i) => ({
  slug: `group-${i + 1}`,
  ...CV_PLACEHOLDER_EXHIBITION,
}));

const CV_PLACEHOLDER_COLLECTION = {
  name: "Collection name to be confirmed by artist",
  city: "City to be confirmed",
  country: "Country to be confirmed",
  work: "Work / series to be confirmed",
  acquired: "Acquisition date to be confirmed",
  notes: "Notes to be confirmed",
};

export const CV_COLLECTIONS = [
  {
    slug: "public",
    heading: "Public Collections",
    entries: Array.from({ length: 3 }).map((_, i) => ({ slug: `public-${i + 1}`, ...CV_PLACEHOLDER_COLLECTION })),
  },
  {
    slug: "private",
    heading: "Private Collections",
    entries: Array.from({ length: 3 }).map((_, i) => ({ slug: `private-${i + 1}`, ...CV_PLACEHOLDER_COLLECTION })),
  },
  {
    slug: "institutional",
    heading: "Institutional Holdings",
    entries: Array.from({ length: 3 }).map((_, i) => ({ slug: `institutional-${i + 1}`, ...CV_PLACEHOLDER_COLLECTION })),
  },
  {
    slug: "archive-library",
    heading: "Archive / Library Holdings",
    entries: Array.from({ length: 3 }).map((_, i) => ({ slug: `archive-library-${i + 1}`, ...CV_PLACEHOLDER_COLLECTION })),
  },
];

export const CV_AWARDS = Array.from({ length: 4 }).map((_, i) => ({
  slug: `award-${i + 1}`,
  year: "Year to be confirmed",
  name: "Award name to be confirmed by artist",
  body: "Awarding body to be confirmed",
  category: "Category to be confirmed",
  project: "Related project to be confirmed",
  notes: "Notes to be confirmed",
}));

export const CV_PUBLICATIONS_PRESS = [
  { slug: "books", heading: "Books" },
  { slug: "catalogues", heading: "Catalogues" },
  { slug: "press", heading: "Press" },
  { slug: "interviews", heading: "Interviews" },
  { slug: "essays", heading: "Essays" },
  { slug: "anthologies", heading: "Anthologies" },
  { slug: "academic-references", heading: "Academic References" },
].map((s) => ({
  ...s,
  entries: Array.from({ length: 3 }).map((_, i) => ({
    slug: `${s.slug}-${i + 1}`,
    year: "Year to be confirmed",
    title: "Title to be confirmed by artist",
    publication: "Publication to be confirmed",
    publisher: "Publisher to be confirmed",
    author: "Author / interviewer to be confirmed",
    type: s.heading,
    related: "Related project to be confirmed",
  })),
}));

export const CV_BOOKS_SHORT = [
  {
    slug: "cuba-love-story",
    title: "Cuba, Love Story",
    year: "Year to be confirmed",
    publisher: "Publisher to be confirmed",
    isbn: "ISBN to be confirmed",
    format: "Hardcover — details to be confirmed",
    availability: "Availability to be confirmed",
  },
  {
    slug: "fragments-of-life",
    title: "Fragments of Life",
    year: "Year to be confirmed",
    publisher: "Publisher to be confirmed",
    isbn: "ISBN to be confirmed",
    format: "Format to be confirmed",
    availability: "Availability to be confirmed",
  },
  {
    slug: "river-of-three-crossings",
    title: "River of Three Crossings",
    year: "Year to be confirmed",
    publisher: "Publisher to be confirmed",
    isbn: "ISBN to be confirmed",
    format: "Format to be confirmed",
    availability: "Availability to be confirmed",
  },
  {
    slug: "intimate-strangers",
    title: "Intimate Strangers",
    year: "Year to be confirmed",
    publisher: "Publisher to be confirmed",
    isbn: "ISBN to be confirmed",
    format: "Format to be confirmed",
    availability: "Availability to be confirmed",
  },
];

export const CV_TIMELINE = [
  { slug: "cuba-love-story", title: "Cuba, Love Story", year_range: "Years to be confirmed", medium: "Photography and moving image", location: "Cuba", note: "Long-form investigation of masculinity, militarism and desire." },
  { slug: "river-of-three-crossings", title: "River of Three Crossings", year_range: "Years to be confirmed", medium: "Photography", location: "Location to be confirmed", note: "Crossings between landscape, biography and remembered self." },
  { slug: "fragments-of-life", title: "Fragments of Life", year_range: "Years to be confirmed", medium: "Photography and archive", location: "Location to be confirmed", note: "Diaristic series of daily life, intimacy and ordinary light." },
  { slug: "intimate-strangers", title: "Intimate Strangers", year_range: "Years to be confirmed", medium: "Portrait photography", location: "Location to be confirmed", note: "Brief encounters: men met, watched, photographed." },
  { slug: "views", title: "Views", year_range: "Years to be confirmed", medium: "Photography", location: "Location to be confirmed", note: "Windows, thresholds and the interior weather of looking out." },
  { slug: "parisian-postcards", title: "Parisian Postcards", year_range: "Years to be confirmed", medium: "Photography", location: "Paris", note: "Letters in image form from a city of strangers." },
  { slug: "investigating-things-past", title: "Investigating Things Past", year_range: "Years to be confirmed", medium: "Photography and archive", location: "Location to be confirmed", note: "Autobiographical archive of childhood, exile and recollection." },
  { slug: "a-chaos-of-appearances", title: "A Chaos of Appearances", year_range: "Years to be confirmed", medium: "Video art / experimental", location: "Multiple", note: "Unstable theatre of remembered appearance set in motion." },
  { slug: "moving-image-works", title: "Moving Image Works", year_range: "Ongoing", medium: "Film, video, visual diaries", location: "Multiple", note: "Films, video diaries and moving-image excerpts." },
  { slug: "music-sound-works", title: "Music / Sound Works", year_range: "Years to be confirmed", medium: "Sound, voice, music", location: "Studio", note: "Sound and music explorations alongside the moving-image archive." },
  { slug: "current-archive-projects", title: "Current Archive Projects", year_range: "Ongoing", medium: "Mixed", location: "Studio archive", note: "Working archive in development." },
];

export const CV_DOWNLOADS = [
  { slug: "cv-pdf", title: "Full CV PDF", description: "Complete artist CV — file to be supplied by artist.", file_type: "PDF · to be supplied" },
  { slug: "bio-pdf", title: "Artist Biography PDF", description: "Long biography for press and curator use — file to be supplied.", file_type: "PDF · to be supplied" },
  { slug: "press-kit", title: "Press Kit", description: "Press kit including biography, statement and images — to be supplied.", file_type: "ZIP / PDF · to be supplied" },
  { slug: "selected-works", title: "Selected Works PDF", description: "Curated portfolio of selected works.", file_type: "PDF · to be supplied" },
  { slug: "prints-pdf", title: "Limited Edition Prints PDF", description: "Print availability sheet — file to be supplied.", file_type: "PDF · to be supplied" },
  { slug: "books-pdf", title: "Books and Publications PDF", description: "Books and publications summary.", file_type: "PDF · to be supplied" },
  { slug: "moving-pdf", title: "Film / Moving Image PDF", description: "Moving image works catalogue.", file_type: "PDF · to be supplied" },
  { slug: "highres-request", title: "High-Resolution Image Request", description: "Request high-resolution images for editorial or institutional use.", file_type: "Inquiry form" },
];

export const CV_INQUIRY_PATHWAYS = [
  {
    slug: "curator",
    title: "Curator / Museum Inquiry",
    note: "For exhibitions, archive research, screenings, acquisitions and institutional projects.",
    type: "curator",
  },
  {
    slug: "press",
    title: "Press / Publication Inquiry",
    note: "For interviews, image requests, articles, book features and media use.",
    type: "press",
  },
  {
    slug: "collector",
    title: "Collector / Gallery Inquiry",
    note: "For print availability, gallery collaboration, sales and representation discussions.",
    type: "collector",
  },
];

export const CV_CONTACT_TYPE_OPTIONS = [
  { value: "collector", label: "Collector" },
  { value: "gallery", label: "Gallery" },
  { value: "curator", label: "Curator" },
  { value: "museum", label: "Museum" },
  { value: "press", label: "Press" },
  { value: "publisher", label: "Publisher" },
  { value: "film_programmer", label: "Film programmer" },
  { value: "academic", label: "Academic / Researcher" },
  { value: "general", label: "General" },
];

// ============================================================
// ARCHIVE / PROJECT INDEX / RESEARCH LIBRARY
// ============================================================

export const ARCHIVE_HERO = {
  image: CUBA.i5.src,
  alt:
    "Archive hero — image from Cuba, Love Story by Kobi Israel. Details to be confirmed.",
};

export const ARCHIVE_CATEGORIES = [
  { slug: "photography", title: "Photography Projects", note: "Still-image projects across the archive.", count: "To be confirmed", to: "/still" },
  { slug: "moving-image", title: "Moving Image Works", note: "Films, video works and visual diaries.", count: "To be confirmed", to: "/moving" },
  { slug: "prints", title: "Limited Edition Prints", note: "Signed editioned works by inquiry.", count: "To be confirmed", to: "/prints" },
  { slug: "books", title: "Books and Publications", note: "Artist books, catalogues and PDFs.", count: "To be confirmed", to: "/books" },
  { slug: "texts", title: "Texts and Essays", note: "Writing connected to the work.", count: "To be confirmed", to: "/journal" },
  { slug: "exhibitions", title: "Exhibitions", note: "Solo and group exhibition record.", count: "To be confirmed", to: "/cv" },
  { slug: "press", title: "Press and Publications", note: "Selected press, features and interviews.", count: "To be confirmed", to: "/cv" },
  { slug: "notes", title: "Archive Notes", note: "Poetic, autobiographical and conceptual notes.", count: "To be confirmed", to: "/journal" },
  { slug: "sound", title: "Sound and Music", note: "Voice, music and soundtrack works.", count: "To be confirmed", to: "/projects/music-sound-works" },
  { slug: "current", title: "Current Projects", note: "Work in progress and forthcoming.", count: "To be confirmed", to: "/projects/current-archive-projects" },
  { slug: "mythology", title: "Personal Mythology", note: "Recurring motifs across the work.", count: "To be confirmed", to: "/archive#archive-mythology" },
  { slug: "research", title: "Research Materials", note: "Bibliography, image licensing, study notes.", count: "To be confirmed", to: "/archive#archive-library" },
];

export const ARCHIVE_FILTERS = [
  { slug: "all", label: "All" },
  { slug: "photography", label: "Photography" },
  { slug: "moving", label: "Moving Image" },
  { slug: "books", label: "Books" },
  { slug: "prints", label: "Prints" },
  { slug: "texts", label: "Texts" },
  { slug: "exhibitions", label: "Exhibitions" },
  { slug: "press", label: "Press" },
  { slug: "sound", label: "Sound" },
  { slug: "autobiography", label: "Autobiography" },
  { slug: "masculinity", label: "Masculinity" },
  { slug: "desire", label: "Desire" },
  { slug: "exile", label: "Exile" },
  { slug: "memory", label: "Memory" },
  { slug: "travel", label: "Travel" },
  { slug: "queer", label: "Queer Codes" },
  { slug: "military", label: "Military" },
  { slug: "landscape", label: "Landscape" },
  { slug: "portraits", label: "Portraits" },
  { slug: "current", label: "Current Work" },
];

// Build the master project index from the existing registries + a few aggregate entries.
function _project(slug, title, subtitle, year, medium, location, status, description, kinds = []) {
  return { slug, title, subtitle, year_range: year, medium, location, status, description, kinds };
}

export const ARCHIVE_PROJECT_INDEX = [
  _project("cuba-love-story", "Cuba, Love Story", "Long-form series", "Years to be confirmed", "Photography and moving image", "Cuba", "Published", "Masculinity, militarism and desire.", ["photography", "moving", "books", "prints", "autobiography", "masculinity", "queer", "military", "travel"]),
  _project("river-of-three-crossings", "River of Three Crossings", "Crossings series", "Years to be confirmed", "Photography", "Location to be confirmed", "Archive", "Landscape, biography and remembered self.", ["photography", "autobiography", "travel", "landscape"]),
  _project("fragments-of-life", "Fragments of Life", "Diaristic series", "Years to be confirmed", "Photography and archive", "Location to be confirmed", "Archive", "Daily life, intimacy and ordinary light.", ["photography", "autobiography", "portraits"]),
  _project("intimate-strangers", "Intimate Strangers", "Portrait series", "Years to be confirmed", "Portrait photography", "Location to be confirmed", "Available Prints", "Brief encounters: men met, watched, photographed.", ["photography", "queer", "portraits", "prints"]),
  _project("views", "Views", "Window typology", "Years to be confirmed", "Photography", "Location to be confirmed", "Archive", "Windows, thresholds, interior weather.", ["photography", "landscape"]),
  _project("parisian-postcards", "Parisian Postcards", "City letters", "Years to be confirmed", "Photography", "Paris", "To be confirmed", "Letters in image form from a city of strangers.", ["photography", "travel"]),
  _project("investigating-things-past", "Investigating Things Past", "Autobiographical archive", "Years to be confirmed", "Photography and archive", "Location to be confirmed", "Archive", "Childhood, exile, recollection.", ["photography", "autobiography", "memory", "exile"]),
  _project("a-chaos-of-appearances", "A Chaos of Appearances", "Video assemblage", "Years to be confirmed", "Video art", "Multiple", "Work in Progress", "Unstable theatre of remembered appearance.", ["moving", "autobiography", "current"]),
  _project("still-and-moving-diaries", "Still & Moving Diaries", "Ongoing diaries", "Ongoing", "Photography and moving image", "Multiple", "Work in Progress", "Photographs becoming rhythm and time.", ["photography", "moving", "autobiography", "current"]),
  _project("military-masculinity-archive", "Military / Masculinity Archive", "Working archive", "Years to be confirmed", "Photography and archive", "Location to be confirmed", "Archive", "Uniforms, gestures, trained male bodies.", ["photography", "masculinity", "military", "queer", "autobiography"]),
  _project("soho-urban-encounters", "Soho / Urban Encounters", "Night cartography", "Years to be confirmed", "Photography", "London — Soho", "To be confirmed", "Queer cartographies of the night city.", ["photography", "queer", "portraits"]),
  _project("portraits-and-bodies", "Portraits and Bodies", "Portrait series", "Years to be confirmed", "Portrait photography", "Location to be confirmed", "Available Prints", "Bodies — desired, observed, remembered.", ["photography", "portraits", "queer", "prints"]),
  _project("landscapes-and-exile", "Landscapes and Exile", "Landscape series", "Years to be confirmed", "Photography", "Location to be confirmed", "Archive", "Landscapes carrying biography and exile.", ["photography", "landscape", "exile", "autobiography", "travel"]),
  _project("personal-archive-films", "Personal Archive Films", "Family + working archive", "Ongoing", "Mixed film and video", "Studio archive", "Archive", "Family footage and working notes.", ["moving", "autobiography", "memory"]),
  _project("music-sound-works", "Music / Sound Works", "Sound, voice, music", "Years to be confirmed", "Sound and moving image", "Studio", "Work in Progress", "Sound and music alongside moving image.", ["moving", "sound", "current"]),
  _project("current-archive-projects", "Current Archive Projects", "Studio archive", "Ongoing", "Mixed", "Studio archive", "Work in Progress", "Working archive in development.", ["current", "autobiography", "memory"]),
];

export const ARCHIVE_PATHWAYS = [
  { slug: "collectors", title: "For Collectors", note: "Limited edition prints, selected works, provenance and collector inquiry.", to: "/prints" },
  { slug: "curators", title: "For Curators", note: "CV, exhibitions, moving image, professional materials and institutional inquiry.", to: "/cv" },
  { slug: "researchers", title: "For Researchers", note: "Archive notes, texts, bibliography and project records.", to: "/journal" },
  { slug: "viewers", title: "For Viewers", note: "Selected projects, still works, moving images, books and artist statement.", to: "/still" },
  { slug: "publishers", title: "For Publishers", note: "Books, PDFs, image licensing notes, press kit and contact form.", to: "/books" },
];

export const ARCHIVE_NOTE_INDEX = [
  "memory","desire","masculinity","exile","travel","military","bodies","cities","landscape","queer-codes","family","childhood","silence","fragments","self-as-witness",
].map((slug) => ({
  slug,
  title: slug.split("-").map((s) => s[0].toUpperCase() + s.slice(1)).join(" "),
  category: slug,
  date: "Date to be confirmed",
  excerpt: "Short note excerpt to be supplied by artist.",
}));

export const ARCHIVE_LIBRARY = [
  { slug: "biography", title: "Artist Biography", description: "Long-form biography for press and curator use.", file_type: "PDF · to be supplied", access: "Access by inquiry" },
  { slug: "cv", title: "Full CV", description: "Complete artist CV.", file_type: "PDF · to be supplied", access: "Access by inquiry" },
  { slug: "selected-works", title: "Selected Works PDF", description: "Curated portfolio.", file_type: "PDF · to be supplied", access: "Access by inquiry" },
  { slug: "press-kit", title: "Press Kit", description: "Press kit (biography, statement, images).", file_type: "ZIP / PDF · to be supplied", access: "Access by inquiry" },
  { slug: "books-list", title: "Books and Publications List", description: "Books and publications summary.", file_type: "PDF · to be supplied", access: "Access by inquiry" },
  { slug: "exhibition-history", title: "Exhibition History", description: "Selected solo + group exhibitions.", file_type: "PDF · to be supplied", access: "Access by inquiry" },
  { slug: "licensing", title: "Image Licensing Notes", description: "Editorial and academic licensing.", file_type: "PDF · to be supplied", access: "Access by inquiry" },
  { slug: "moving-notes", title: "Film and Moving Image Notes", description: "Technical and curatorial notes for moving-image works.", file_type: "PDF · to be supplied", access: "Access by inquiry" },
  { slug: "print-info", title: "Limited Edition Print Information", description: "Editions, sizes, papers, signatures.", file_type: "PDF · to be supplied", access: "Access by inquiry" },
  { slug: "bibliography", title: "Bibliography", description: "Selected references.", file_type: "PDF · to be supplied", access: "Access by inquiry" },
  { slug: "interview-archive", title: "Interview Archive", description: "Selected interviews.", file_type: "PDF · to be supplied", access: "Access by inquiry" },
  { slug: "press-archive", title: "Press Archive", description: "Selected press features.", file_type: "PDF · to be supplied", access: "Access by inquiry" },
];

export const ARCHIVE_TIMELINE_ENTRIES = ARCHIVE_PROJECT_INDEX.slice(0, 12).map((p, i) => ({
  slug: `tl-${p.slug}`,
  year_range: p.year_range,
  title: p.title,
  medium: p.medium,
  location: p.location,
  event_type: i % 4 === 0 ? "project" : i % 4 === 1 ? "exhibition" : i % 4 === 2 ? "publication" : "personal archive",
  note: p.description,
  related_slug: p.slug,
}));

export const ARCHIVE_MYTHOLOGY = [
  ["masks", "Masks"], ["bodies", "Bodies"], ["soldiers", "Soldiers"], ["rooms", "Rooms"],
  ["borders", "Borders"], ["lovers", "Lovers"], ["strangers", "Strangers"], ["cities", "Cities"],
  ["water", "Water"], ["childhood", "Childhood"], ["desire", "Desire"], ["exile", "Exile"],
  ["memory", "Memory"], ["performance", "Performance"], ["witness", "The Witness"],
].map(([slug, title]) => ({
  slug, title,
  note: "A recurring motif across the photographic and moving-image archive.",
  related: "Related projects to be confirmed by artist",
}));

export const ARCHIVE_RELATED_LINKS = [
  { slug: "still", label: "Still", to: "/still" },
  { slug: "moving", label: "Moving", to: "/moving" },
  { slug: "projects", label: "Projects", to: "/projects" },
  { slug: "prints", label: "Prints", to: "/prints" },
  { slug: "books", label: "Books", to: "/books" },
  { slug: "cv", label: "CV", to: "/cv" },
  { slug: "journal", label: "Journal", to: "/journal" },
  { slug: "contact", label: "Contact", to: "/contact" },
];

export const ARCHIVE_INQUIRY_TYPE_OPTIONS = [
  { value: "curatorial", label: "Curatorial" },
  { value: "research", label: "Research" },
  { value: "press", label: "Press" },
  { value: "publisher", label: "Publication" },
  { value: "collector", label: "Collector" },
  { value: "gallery", label: "Gallery" },
  { value: "museum", label: "Museum" },
  { value: "licensing", label: "Licensing" },
  { value: "academic", label: "Academic" },
  { value: "general", label: "General" },
];

// ============================================================
// JOURNAL / ARCHIVE NOTES / WRITING
// ============================================================

export const JOURNAL_HERO = {
  image: CUBA.i2.src,
  alt:
    "Journal hero — image from Cuba, Love Story by Kobi Israel. Details to be confirmed.",
};

export const JOURNAL_EDITORIAL_IMAGE = {
  image: CUBA.i3.src,
  alt:
    "Editorial introduction — image from Cuba, Love Story by Kobi Israel. Details to be confirmed.",
};

export const JOURNAL_FEATURED_NOTES = [
  { slug: "a-chaos-of-appearances", title: "A Chaos of Appearances", category: "Artist Notes", date: "Date to be confirmed", excerpt: "Notes on the unstable theatre of remembered appearance and the assemblage of soldiers, strangers, cities and lovers.", related_project: "a-chaos-of-appearances" },
  { slug: "still-images-as-memory-objects", title: "Still Images as Memory Objects", category: "Photography", date: "Date to be confirmed", excerpt: "Short reflections on the photograph as a fragment of memory carried forward in time.", related_project: "fragments-of-life" },
  { slug: "when-the-still-image-begins-to-move", title: "When the Still Image Begins to Move", category: "Moving Image", date: "Date to be confirmed", excerpt: "Where the photograph ends and the moving image begins — notes on rhythm, voice and time.", related_project: "still-and-moving-diaries" },
  { slug: "cuba-love-story-notes-from-the-archive", title: "Cuba, Love Story: Notes from the Archive", category: "Project Notes", date: "Date to be confirmed", excerpt: "Working notes from the Cuba archive — masculinity, militarism, desire and the long shadow of looking.", related_project: "cuba-love-story" },
  { slug: "masculinity-as-performance", title: "Masculinity as Performance", category: "Masculinity", date: "Date to be confirmed", excerpt: "Notes on masculinity as costume, gesture and inheritance — uniforms, postures, brief tenderness.", related_project: "military-masculinity-archive" },
  { slug: "the-stranger-and-the-witness", title: "The Stranger and the Witness", category: "Queer Codes", date: "Date to be confirmed", excerpt: "On photographing strangers — the brief contract between watcher and watched.", related_project: "intimate-strangers" },
  { slug: "rooms-bodies-and-borders", title: "Rooms, Bodies and Borders", category: "Exile", date: "Date to be confirmed", excerpt: "Hotel rooms, contested borders and the body that carries them across.", related_project: "landscapes-and-exile" },
  { slug: "memory-does-not-return-whole", title: "Memory Does Not Return Whole", category: "Memory", date: "Date to be confirmed", excerpt: "On the fragmented return of remembered images, out of order, in their own light.", related_project: "investigating-things-past" },
];

export const JOURNAL_CATEGORIES = [
  { slug: "memory", title: "Memory", note: "The photograph as memory object." },
  { slug: "photography", title: "Photography", note: "Notes on the still image." },
  { slug: "moving-image", title: "Moving Image", note: "Notes on time, voice and motion." },
  { slug: "masculinity", title: "Masculinity", note: "Performance, costume, inheritance." },
  { slug: "desire", title: "Desire", note: "Looking, longing, withholding." },
  { slug: "exile", title: "Exile", note: "Departure, return, the geography of leaving." },
  { slug: "travel", title: "Travel", note: "Travel as a way of seeing and being seen." },
  { slug: "queer-codes", title: "Queer Codes", note: "Glances, signals, unwritten languages." },
  { slug: "military", title: "Military", note: "Uniforms, training, the trained male body." },
  { slug: "bodies", title: "Bodies", note: "The photographed body in time." },
  { slug: "cities", title: "Cities", note: "Streets, strangers, the urban hour." },
  { slug: "childhood", title: "Childhood", note: "Inherited rooms and remembered light." },
  { slug: "books", title: "Books", note: "Notes around the artist books and catalogues." },
  { slug: "prints", title: "Prints", note: "Notes on edition, signature and care." },
  { slug: "sound-and-music", title: "Sound and Music", note: "Voice, score and the moving-image archive." },
  { slug: "artist-notes", title: "Artist Notes", note: "Working notes from the studio." },
  { slug: "project-notes", title: "Project Notes", note: "Notes attached to specific projects." },
];

export const JOURNAL_FILTERS = [
  { slug: "all", label: "All" },
  { slug: "artist-notes", label: "Artist Notes" },
  { slug: "project-notes", label: "Project Notes" },
  { slug: "essays", label: "Essays" },
  { slug: "visual-diary", label: "Visual Diary" },
  { slug: "travel", label: "Travel" },
  { slug: "memory", label: "Memory" },
  { slug: "photography", label: "Photography" },
  { slug: "moving-image", label: "Moving Image" },
  { slug: "books", label: "Books" },
  { slug: "prints", label: "Prints" },
  { slug: "sound", label: "Sound" },
  { slug: "personal-mythology", label: "Personal Mythology" },
];

// Master journal index — combines featured notes and additional entries.
// Each entry has tags that map to JOURNAL_FILTERS slugs.
export const JOURNAL_NOTES = [
  { slug: "a-chaos-of-appearances", title: "A Chaos of Appearances", subtitle: "On the assemblage of remembered images", date: "Date to be confirmed", category: "Artist Notes", related_project: "a-chaos-of-appearances", medium: "moving image", excerpt: "Notes on the unstable theatre of remembered appearance.", tags: ["artist-notes", "moving-image", "personal-mythology"] },
  { slug: "still-images-as-memory-objects", title: "Still Images as Memory Objects", subtitle: "Photography and memory", date: "Date to be confirmed", category: "Photography", related_project: "fragments-of-life", medium: "photography", excerpt: "The photograph as a fragment of memory carried forward.", tags: ["essays", "photography", "memory"] },
  { slug: "when-the-still-image-begins-to-move", title: "When the Still Image Begins to Move", subtitle: "From photograph to film", date: "Date to be confirmed", category: "Moving Image", related_project: "still-and-moving-diaries", medium: "moving image", excerpt: "On rhythm, voice and the threshold between image and time.", tags: ["essays", "moving-image", "photography"] },
  { slug: "cuba-love-story-notes-from-the-archive", title: "Cuba, Love Story: Notes from the Archive", subtitle: "Project notes", date: "Date to be confirmed", category: "Project Notes", related_project: "cuba-love-story", medium: "photography", excerpt: "Working notes from the Cuba archive.", tags: ["project-notes", "photography", "travel"] },
  { slug: "masculinity-as-performance", title: "Masculinity as Performance", subtitle: "Costume, gesture, inheritance", date: "Date to be confirmed", category: "Masculinity", related_project: "military-masculinity-archive", medium: "photography", excerpt: "Notes on masculinity as a learned theatre.", tags: ["essays", "photography", "personal-mythology"] },
  { slug: "the-stranger-and-the-witness", title: "The Stranger and the Witness", subtitle: "Photographing strangers", date: "Date to be confirmed", category: "Queer Codes", related_project: "intimate-strangers", medium: "photography", excerpt: "The brief contract between watcher and watched.", tags: ["essays", "photography", "personal-mythology"] },
  { slug: "rooms-bodies-and-borders", title: "Rooms, Bodies and Borders", subtitle: "On exile and interior space", date: "Date to be confirmed", category: "Exile", related_project: "landscapes-and-exile", medium: "photography", excerpt: "Hotel rooms, contested borders and the body that carries them.", tags: ["essays", "travel", "memory"] },
  { slug: "memory-does-not-return-whole", title: "Memory Does Not Return Whole", subtitle: "Fragmented recollection", date: "Date to be confirmed", category: "Memory", related_project: "investigating-things-past", medium: "archive", excerpt: "On the fragmented return of remembered images.", tags: ["essays", "memory", "personal-mythology"] },
  { slug: "letter-from-paris", title: "Letter from Paris", subtitle: "A travel fragment", date: "Date to be confirmed", category: "Travel", related_project: "parisian-postcards", medium: "photography", excerpt: "A short letter from a city of strangers.", tags: ["visual-diary", "travel", "photography"] },
  { slug: "the-soundtrack-of-images", title: "The Soundtrack of Images", subtitle: "On voice and score", date: "Date to be confirmed", category: "Sound and Music", related_project: "music-sound-works", medium: "sound", excerpt: "Notes on the sound that accompanies the moving-image archive.", tags: ["artist-notes", "sound", "moving-image"] },
  { slug: "on-the-artist-book", title: "On the Artist Book", subtitle: "Books as portable archives", date: "Date to be confirmed", category: "Books", related_project: "cuba-love-story", medium: "book", excerpt: "On the book as the most intimate form of exhibition.", tags: ["essays", "books"] },
  { slug: "edition-signature-care", title: "Edition, Signature, Care", subtitle: "Notes on prints", date: "Date to be confirmed", category: "Prints", related_project: "intimate-strangers", medium: "print", excerpt: "Short notes on edition number, signature and the care of fine art prints.", tags: ["artist-notes", "prints"] },
  { slug: "night-cities", title: "Night Cities", subtitle: "Visual diary, Soho", date: "Date to be confirmed", category: "Cities", related_project: "soho-urban-encounters", medium: "photography", excerpt: "Visual diary fragments from the night city.", tags: ["visual-diary", "photography"] },
  { slug: "borders-and-returns", title: "Borders and Returns", subtitle: "A short essay on exile", date: "Date to be confirmed", category: "Exile", related_project: "landscapes-and-exile", medium: "photography", excerpt: "On the geography of leaving and the act of return.", tags: ["essays", "travel", "personal-mythology"] },
  { slug: "the-witness", title: "The Witness", subtitle: "On the autobiographical I", date: "Date to be confirmed", category: "Artist Notes", related_project: "investigating-things-past", medium: "archive", excerpt: "On the self as witness to its own archive.", tags: ["artist-notes", "memory", "personal-mythology"] },
];

export const JOURNAL_PROJECT_NOTES = [
  { slug: "cuba-love-story", title: "Cuba, Love Story", note: "Working notes on masculinity, militarism and desire from the Cuba archive.", count: "Number of notes to be confirmed" },
  { slug: "river-of-three-crossings", title: "River of Three Crossings", note: "Notes on landscape, biography and remembered self.", count: "Number of notes to be confirmed" },
  { slug: "fragments-of-life", title: "Fragments of Life", note: "Diaristic notes on daily life and intimacy.", count: "Number of notes to be confirmed" },
  { slug: "intimate-strangers", title: "Intimate Strangers", note: "Notes on photographing the briefly met.", count: "Number of notes to be confirmed" },
  { slug: "views", title: "Views", note: "Notes on windows and the interior weather.", count: "Number of notes to be confirmed" },
  { slug: "parisian-postcards", title: "Parisian Postcards", note: "Letters in image form from Paris.", count: "Number of notes to be confirmed" },
  { slug: "investigating-things-past", title: "Investigating Things Past", note: "Autobiographical archive notes.", count: "Number of notes to be confirmed" },
  { slug: "a-chaos-of-appearances", title: "A Chaos of Appearances", note: "Notes on the moving-image assemblage.", count: "Number of notes to be confirmed" },
  { slug: "still-and-moving-diaries", title: "Still & Moving Diaries", note: "Notes from the diaristic project.", count: "Number of notes to be confirmed" },
  { slug: "music-sound-works", title: "Music / Sound Works", note: "Notes on voice and score.", count: "Number of notes to be confirmed" },
  { slug: "current-archive-projects", title: "Current Archive Projects", note: "Notes on works in progress.", count: "Number of notes to be confirmed" },
];

export const JOURNAL_MOTIFS = [
  { slug: "masks", title: "Masks", note: "Notes on the worn face and the hidden self." },
  { slug: "faces", title: "Faces", note: "On the encountered face and the photographed portrait." },
  { slug: "soldiers", title: "Soldiers", note: "On uniformed bodies and trained gesture." },
  { slug: "strangers", title: "Strangers", note: "On the brief presence of others." },
  { slug: "rooms", title: "Rooms", note: "On hotel rooms, studios and inherited interiors." },
  { slug: "borders", title: "Borders", note: "On political and bodily borders." },
  { slug: "water", title: "Water", note: "On rivers, seas and the act of crossing." },
  { slug: "cities", title: "Cities", note: "On urban time and the choreography of strangers." },
  { slug: "bodies", title: "Bodies", note: "On the photographed body." },
  { slug: "lovers", title: "Lovers", note: "On tenderness, briefness and reaching." },
  { slug: "silence", title: "Silence", note: "On withheld sound and held breath." },
  { slug: "childhood", title: "Childhood", note: "On inherited rooms and remembered light." },
  { slug: "exile", title: "Exile", note: "On leaving and the residue of place." },
  { slug: "memory", title: "Memory", note: "On the return of images out of order." },
  { slug: "the-witness", title: "The Witness", note: "On the self as observer of its own archive." },
];

export const JOURNAL_VOICE_FILM_CARDS = [
  { slug: "voice-over-fragments", title: "Voice-over Fragments", note: "Short voice-over texts written for the moving-image archive.", related: "Related work to be confirmed" },
  { slug: "film-notes", title: "Film Notes", note: "Working notes for film and video projects.", related: "Related work to be confirmed" },
  { slug: "sound-notes", title: "Sound Notes", note: "Notes on sound, score and silence.", related: "Related work to be confirmed" },
  { slug: "travelogue-texts", title: "Travelogue Texts", note: "Short travel notes written alongside the visual diaries.", related: "Related work to be confirmed" },
  { slug: "still-to-moving-sequences", title: "Still-to-Moving Sequences", note: "Notes on the threshold between still and moving image.", related: "Related work to be confirmed" },
  { slug: "unfinished-scripts", title: "Unfinished Scripts", note: "Fragments and openings of unfinished scripts.", related: "Related work to be confirmed" },
];

export const JOURNAL_NEWSLETTER_INTERESTS = [
  { value: "artist-notes", label: "Artist notes" },
  { value: "books", label: "Books" },
  { value: "prints", label: "Prints" },
  { value: "moving-image", label: "Moving image" },
  { value: "exhibitions", label: "Exhibitions" },
  { value: "all-updates", label: "All updates" },
];

export const JOURNAL_RELATED_LINKS = [
  { slug: "still", label: "Still", to: "/still" },
  { slug: "moving", label: "Moving", to: "/moving" },
  { slug: "projects", label: "Projects", to: "/projects" },
  { slug: "prints", label: "Prints", to: "/prints" },
  { slug: "books", label: "Books", to: "/books" },
  { slug: "archive", label: "Archive", to: "/archive" },
  { slug: "cv", label: "CV", to: "/cv" },
  { slug: "contact", label: "Contact", to: "/contact" },
];


// ============================================================
// CONTACT / INQUIRIES / PROFESSIONAL PATHWAYS
// ============================================================

export const CONTACT_HERO = {
  image: CUBA.i3.src,
  alt:
    "Contact hero — image from Cuba, Love Story by Kobi Israel. Details to be confirmed.",
};

export const CONTACT_INTRO_IMAGE = {
  image: CUBA.i5.src,
  alt:
    "Contact introduction — image from Cuba, Love Story by Kobi Israel. Details to be confirmed.",
};

// Pathway cards rendered in the "How to Inquire" section.
// `type` maps to the InquiryType value used by /api/inquiries.
export const CONTACT_PATHWAYS = [
  {
    slug: "collector",
    title: "Collector Inquiries",
    note: "Signed limited edition prints, available works, prices on request, condition, edition details and provenance.",
    type: "collector",
  },
  {
    slug: "gallery",
    title: "Gallery Inquiries",
    note: "Representation discussions, exhibitions, print sales, viewing rooms and professional collaborations.",
    type: "gallery",
  },
  {
    slug: "curator",
    title: "Curator / Museum Inquiries",
    note: "Exhibitions, acquisitions, archive research, museum programming, artist talks and institutional projects.",
    type: "curator",
  },
  {
    slug: "press",
    title: "Press / Publication Inquiries",
    note: "Interviews, image requests, articles, features, books, catalogues and media use.",
    type: "press",
  },
  {
    slug: "film",
    title: "Film / Screening Inquiries",
    note: "Moving-image works, screenings, festival interest, installations, Q&A and technical information.",
    type: "film_programmer",
  },
  {
    slug: "book",
    title: "Book Inquiries",
    note: "Books, catalogues, signed copies, availability, PDF materials and publication requests.",
    type: "book_inquiry",
  },
  {
    slug: "archive",
    title: "Archive / Research Inquiries",
    note: "Researchers, students, historians, writers, curators and archive-related questions.",
    type: "research",
  },
  {
    slug: "licensing",
    title: "Licensing Inquiries",
    note: "Image licensing, reproduction permissions, editorial use, publishing, film stills and archive material.",
    type: "licensing",
  },
  {
    slug: "general",
    title: "General Contact",
    note: "For all other professional messages.",
    type: "general",
  },
];

export const CONTACT_INQUIRY_TYPE_OPTIONS = [
  { value: "collector", label: "Collector" },
  { value: "gallery", label: "Gallery" },
  { value: "curator", label: "Curator" },
  { value: "museum", label: "Museum" },
  { value: "press", label: "Press" },
  { value: "publisher", label: "Publisher" },
  { value: "film_programmer", label: "Film programmer" },
  { value: "book_inquiry", label: "Book inquiry" },
  { value: "research", label: "Archive research" },
  { value: "licensing", label: "Licensing" },
  { value: "academic", label: "Academic" },
  { value: "general", label: "General" },
];

export const CONTACT_CURATOR_FIELDS = [
  "Exhibition proposals",
  "Selected works requests",
  "Archive research",
  "Artist talks",
  "Moving-image screenings",
  "Installation formats",
  "Museum acquisition inquiries",
  "Loan requests",
  "Press materials",
  "Technical specifications",
];

export const CONTACT_PRESS_FIELDS = [
  "Interviews",
  "Image requests",
  "Book features",
  "Catalogue texts",
  "Artist biography",
  "Press kit",
  "Image licensing",
  "Publication permissions",
  "High-resolution image requests",
];

export const CONTACT_FILM_FIELDS = [
  "Screening copies",
  "Trailers",
  "Excerpts",
  "Subtitles",
  "Technical specifications",
  "Installation formats",
  "Festival interest",
  "Educational screenings",
  "Artist Q&A",
  "Film stills",
];

export const CONTACT_BOOK_FIELDS = [
  "Book availability",
  "Signed copies",
  "PDF catalogues",
  "Artist texts",
  "Archive notes",
  "Research PDFs",
  "Publication records",
  "Out-of-print works",
];

export const CONTACT_DETAILS = [
  { slug: "email", label: "Email", value: "To be confirmed by artist" },
  { slug: "studio", label: "Studio / archive location", value: "London, UK — exact address not public unless supplied" },
  { slug: "social", label: "Social links", value: "To be confirmed by artist" },
  { slug: "newsletter", label: "Newsletter", value: "To be confirmed by artist" },
];

export const CONTACT_RELATED_LINKS = [
  { slug: "still", label: "Still", to: "/still" },
  { slug: "moving", label: "Moving", to: "/moving" },
  { slug: "projects", label: "Projects", to: "/projects" },
  { slug: "prints", label: "Prints", to: "/prints" },
  { slug: "books", label: "Books", to: "/books" },
  { slug: "archive", label: "Archive", to: "/archive" },
  { slug: "cv", label: "CV", to: "/cv" },
  { slug: "journal", label: "Journal", to: "/journal" },
];

