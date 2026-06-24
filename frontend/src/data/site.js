// Static site content — placeholders only (To be confirmed by artist).

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
  image:
    "https://images.unsplash.com/photo-1540172777610-b15b605dd68d?auto=format&fit=crop&q=85&w=1920",
  alt: "Cinematic moody portrait — hero placeholder (To be replaced with artist's selected work).",
};

export const STILL_HERO = {
  image:
    "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?auto=format&fit=crop&q=85&w=1920",
  alt: "Still photography hero — placeholder (To be replaced with artist's selected work).",
};

export const STILL_CURATORIAL_IMAGE = {
  image:
    "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?auto=format&fit=crop&q=85&w=1200",
  alt: "Curatorial introduction visual — placeholder (To be replaced with artist's selected work).",
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
    year_range: "Years to be confirmed by artist",
    location: "Cuba",
    medium: "Photography and moving image",
    description:
      "A long-term photographic and moving-image investigation into masculinity, militarism, homoerotic codes, memory and desire.",
    tags: ["autobiography", "masculinity", "queer", "military", "travel", "books", "prints"],
    status: "Published",
    featured: true,
  },
  {
    slug: "river-of-three-crossings",
    title: "River of Three Crossings",
    year_range: "Years to be confirmed by artist",
    location: "Location to be confirmed",
    medium: "Photography",
    description:
      "Crossings between landscape, biography and the porous edges of a remembered self.",
    tags: ["autobiography", "travel", "landscape"],
    status: "Archive",
  },
  {
    slug: "fragments-of-life",
    title: "Fragments of Life",
    year_range: "Years to be confirmed by artist",
    location: "Location to be confirmed",
    medium: "Photography and archive",
    description:
      "An ongoing diaristic series collecting fragments of daily life, intimacy and ordinary light.",
    tags: ["autobiography", "portraits"],
    status: "Archive",
  },
  {
    slug: "intimate-strangers",
    title: "Intimate Strangers",
    year_range: "Years to be confirmed by artist",
    location: "Location to be confirmed",
    medium: "Portrait photography",
    description: "A study of brief encounters: men met, watched, photographed and remembered.",
    tags: ["queer", "portraits", "urban", "prints"],
    status: "Available Prints",
  },
  {
    slug: "views",
    title: "Views",
    year_range: "Years to be confirmed by artist",
    location: "Location to be confirmed",
    medium: "Photography",
    description:
      "A quiet typology of windows, thresholds and the interior weather of looking out.",
    tags: ["landscape", "urban"],
    status: "Archive",
  },
  {
    slug: "parisian-postcards",
    title: "Parisian Postcards",
    year_range: "Years to be confirmed by artist",
    location: "Paris",
    medium: "Photography",
    description: "Letters in image form from a city of strangers, kept and never sent.",
    tags: ["travel", "urban"],
    status: "To be confirmed",
  },
  {
    slug: "investigating-things-past",
    title: "Investigating Things Past",
    year_range: "Years to be confirmed by artist",
    location: "Location to be confirmed",
    medium: "Photography and archive",
    description:
      "An autobiographical archive in which childhood, exile and recollection are continually re-read.",
    tags: ["autobiography"],
    status: "Archive",
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
    "A long-term photographic and moving-image investigation into masculinity, militarism, homoerotic codes, memory and desire.",
  image:
    "https://images.unsplash.com/photo-1568322445389-495f4a7d20d4?auto=format&fit=crop&q=85&w=1600",
  alt: "Cuba, Love Story — featured project visual placeholder (To be replaced with artist's selected work).",
};

export const FEATURED_STILL = {
  slug: "cuba-love-story",
  title: "Cuba, Love Story",
  description:
    "A photographic and moving-image investigation into masculinity, militarism, desire, memory and the charged space between observation and longing.",
  image:
    "https://images.unsplash.com/photo-1568322445389-495f4a7d20d4?auto=format&fit=crop&q=85&w=1800",
  alt: "Cuba, Love Story — featured still placeholder (To be replaced with artist's selected work).",
};

export const SPLIT_MEDIA = {
  still: {
    image:
      "https://images.unsplash.com/photo-1610303871783-491dc6d0a165?auto=format&fit=crop&q=85&w=1200",
    alt: "Still images section — placeholder image.",
    description:
      "Photographs as held breath. Portraits, landscapes, fragments and remembered rooms.",
  },
  moving: {
    image:
      "https://images.unsplash.com/photo-1638638977172-9f7169a77930?auto=format&fit=crop&q=85&w=1200",
    alt: "Moving images section — placeholder image.",
    description:
      "Films, video diaries and moving-image excerpts. Time as another way of looking.",
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
  "Kobi Israel's work is autobiographical in nature, using photography and moving images to explore identity, desire, masculinity, memory and the emotional traces left by places, people and time.";

export const CONCEPT_HEADING = "A Chaos of Appearances";
export const CONCEPT_BODY =
  "An archive of fragments: soldiers, strangers, landscapes, lovers, cities, childhood, exile and the unstable theatre of memory.";

// ============================================================
// MOVING / FILM / VIDEO ARCHIVE
// ============================================================

export const MOVING_HERO = {
  image:
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=85&w=1920",
  alt:
    "Cinematic moving-image hero placeholder — final hero still or video loop to be selected by artist.",
};

export const MOVING_CURATORIAL_IMAGE = {
  image:
    "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=85&w=1400",
  alt:
    "Curatorial moving-image still — placeholder. Final reference image to be supplied by artist.",
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
  image:
    "https://images.unsplash.com/photo-1568322445389-495f4a7d20d4?auto=format&fit=crop&q=85&w=1800",
  alt:
    "Cuba, Love Story — featured moving-image still (placeholder, to be replaced with artist's selected still).",
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
