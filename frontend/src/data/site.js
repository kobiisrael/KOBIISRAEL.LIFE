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
