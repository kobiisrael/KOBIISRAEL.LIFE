// Content migration data — extracted from https://kobiisrael.wixsite.com/kobiisrael
// on 2026-06-24. All text quoted verbatim from the artist's existing public website
// unless explicitly marked as cleanup. Status: every item needs final artist review
// before publication.

export const CONFIRMED_CONTACT = {
  email: "kobi.israel.photography@gmail.com",
  copyright: "© Kobi Israel",
  // Birth year visible on the existing Christie's listing referenced from the artist's site.
  birth_year_source: "Christie's listing: 'Kobi Israel (b. 1970)'",
  // CV confirms: 1970 Born in Tel-Aviv, Israel. Lives and Works in London, UK.
};

// Original Wix pages crawled.
export const SOURCE_PAGES = [
  { slug: "home", url: "https://kobiisrael.wixsite.com/kobiisrael", target: "/" },
  { slug: "still", url: "https://kobiisrael.wixsite.com/kobiisrael/still", target: "/still" },
  { slug: "moving", url: "https://kobiisrael.wixsite.com/kobiisrael/moving", target: "/moving" },
  { slug: "prints", url: "https://kobiisrael.wixsite.com/kobiisrael/limited-edition-prints", target: "/prints" },
  { slug: "books", url: "https://kobiisrael.wixsite.com/kobiisrael/books", target: "/books" },
  { slug: "cv", url: "https://kobiisrael.wixsite.com/kobiisrael/cv", target: "/cv" },
];

// Homepage phrases worth preserving verbatim.
export const HOMEPAGE_FRAGMENTS = [
  {
    text: "A CHAOS OF APPEARANCES",
    type: "title-positioning",
    target: "/",
    status: "needs-review",
    note: "Existing headline. Use as positioning line on /.",
  },
  {
    text: '"Forms of multiplicity and incongruity abound... we realize that the fragments are not governed by a secret unity: Charles Kane is a simulacrum, a chaos of appearances." — Jorge Luis Borges on Citizen Kane',
    type: "epigraph",
    target: "/",
    status: "confirmed-from-source",
    note: "Existing site epigraph. Keep verbatim.",
  },
  {
    text: "Still & Moving Diaries",
    type: "sub-positioning",
    target: "/",
    status: "confirmed-from-source",
  },
  {
    text: "Kobi's work is autobiographical and references the self and identity. He uses the medium of photography as a way of recording experiences, capturing moments from his everyday life to draw on physical, mental and emotional levels.",
    type: "artist-statement",
    target: "/cv · About + /",
    status: "confirmed-from-source",
  },
  {
    text: "Kobi's work is autobiographical in nature and investigates the \"remembrance of things past\" and the process of personal reminiscences and recollection. Empty landscapes, intimate encounters, touristic travelogues are all potential backdrops for an inside quest and reflection.",
    type: "artist-statement",
    target: "/still intro · /journal",
    status: "confirmed-from-source",
  },
];

// Project records — real descriptions quoted from the existing Wix site.
export const PROJECT_RECORDS = [
  {
    slug: "cuba-love-story",
    title: "Cuba, Love Story!",
    year_range: "1993–2012",
    medium: "Photography (and related film: A Cuban Love Story, 2023)",
    location: "Cuba",
    description:
      "The confusing and bewildering paradox of the masculine and militarist blended with the homoerotic in Cuba evoked my own experiences and memories of growing up in young, macho and militarist Israel.",
    related_film: "A Cuban Love Story — 12 episodes (HD), Cuba 2023, work in progress",
    source: "Wix /still + /moving",
    status: "confirmed-from-source",
    target: "/projects/cuba-love-story",
  },
  {
    slug: "river-of-three-crossings",
    title: "River of Three Crossings",
    year_range: "2001–2017",
    medium: "Photography (work in progress for moving image)",
    location: "Multiple",
    description:
      "River of Three Crossings is a travelogue that evolves around the mythic, nomadic nature of landscape photography. It is a symbolic tale forming an epic cinematic journey. Each chapter explores psychological territories, using landscape as a stage on which to cast the themes of desire, identity and personal history whilst the spectator is encouraged to assemble clues and construct a personal narrative.",
    source: "Wix /still",
    status: "confirmed-from-source",
    target: "/projects/river-of-three-crossings",
  },
  {
    slug: "fragments-of-life",
    title: "Fragments of Life",
    year_range: "2000–2007",
    medium: "Photography (staged images)",
    location: "Tel-Aviv, Israel",
    description:
      "Staged images where I lead the viewer into a world of recollection, conflict and trapped emotion which I experienced as an adolescent growing up in a deeply conservative and traditional society. (Tel-Aviv, Israel).",
    note: 'Selected amongst the 60 finalists in "Descubrimientos PHE02", PhotoEspana, Madrid, Spain, 2002.',
    source: "Wix /still",
    status: "confirmed-from-source",
    target: "/projects/fragments-of-life",
  },
  {
    slug: "intimate-strangers",
    title: "Intimate Strangers",
    year_range: "2001–2006",
    medium: "Portrait photography",
    location: "Soho, London, UK",
    description:
      "The experience of being a foreigner in a city full of immigrants (Soho, London, UK).",
    source: "Wix /still",
    status: "confirmed-from-source",
    target: "/projects/intimate-strangers",
  },
  {
    slug: "views",
    title: "Views",
    year_range: "1999–2003",
    medium: "Photography",
    location: "Israel (army)",
    description: "The thin line between homo-erotic and homo-social in army life.",
    source: "Wix /still",
    status: "confirmed-from-source",
    target: "/projects/views",
  },
  {
    slug: "parisian-postcards",
    title: "Parisian Postcards",
    year_range: "2010",
    medium: "Video Installation — Three-channel video projection, in sync 4:3",
    duration: "18 minutes",
    location: "Paris",
    description:
      "Parisian Postcards is an autobiographical journey investigating personal family narratives through a formal exploration of still and moving imagery. By integrating the still and the moving image and by working with a site the narrative is fractured and non linear, the temporal and spatial is experienced and viewer is taken through and at times disquieting and poignant journey.",
    source: "Wix /moving",
    status: "confirmed-from-source",
    target: "/projects/parisian-postcards",
  },
  {
    slug: "investigating-things-past",
    title: "Investigating Things Past",
    year_range: "2023– (work in progress, references 1982–1987 negatives)",
    medium: "Still & Moving Images Installation",
    description:
      "I always felt nostalgic about \"Things Past\". It wasn't until January 2023, when I found a lost/forgotten envelope with sleeveless 110mm negatives, stuck as one pile, that a new opportunity to travel and investigate the past emerged. As soon as I was able to separate them, I logged-in to Amazon searching for 110mm film scanners. I managed to save seven 110mm negatives which led to sudden flood of past, involuntary memories from 1982 – 1987.",
    source: "Wix /moving",
    status: "confirmed-from-source",
    target: "/projects/investigating-things-past",
  },
  {
    slug: "promised-lands",
    title: "Promised Lands",
    year_range: "Year range to be confirmed by artist",
    medium: "Photography (landscape trilogy: Canaan / America / Hampstead Heath)",
    description:
      "In the first 'Land-scapes' trilogy titled 'Promised Lands' Kobi explored the concept of identity in a more abstract and indirect way. The images from this series are all landscapes and represent worlds relating to personal identities embedded in his mind. 'Canaan' are images from elemental landscapes in Iceland where he recognised extracts from biblical tales taught in his childhood. 'America' represents the promise that a land can hold to generations of immigrants, such as those of his parents. 'Hampstead Heath' represents a place of promised pleasure, excitement and even maybe love.",
    source: "Wix /cv About + /books (Promised Lands catalogue, Hamiltons Gallery 2007)",
    status: "needs-review",
    note: "Not currently in /projects registry — recommend adding to ENRICHMENT.",
    target: "/projects/promised-lands (proposed)",
  },
  {
    slug: "boulevards-of-broken-dreams",
    title: "Boulevards of Broken Dreams",
    year_range: "1996",
    medium: "Student film, 16mm, B&W, 10 min",
    location: "New York Film Academy, New York",
    source: "Wix /moving + /cv FILM section",
    status: "confirmed-from-source",
    target: "/moving — student film entry",
  },
];

// Limited Edition Prints — confirmed details from the existing site.
export const PRINTS_FACTS = {
  print_type: "C-type / hand-made directly from the negative — Signed, Limited Edition Chromogenic Prints",
  medium_size: { dimensions: "30×40 in / 80×100 cm", edition_size: 5 },
  small_size: { dimensions: "20×24 in / 50×60 cm", edition_size: 10 },
  patron_offer: "50% off offers & Artist Proofs available to Patrons (legacy Wix programme — confirm whether retained)",
  // Collection claims from the artist's existing public site — high-value but require artist sign-off.
  public_collections: [
    "The National Portrait Gallery (London) — source: artist's prints page",
  ],
  private_collections_claimed_on_wix: [
    "George Michael & Kenny Goss Private Collection (Christie's auction reference)",
    "Madonna's Private Collection",
    "Elton John's Private Collection",
    "Joe Wright Collection",
    "...and more (artist phrasing)",
  ],
  selected_solo_exhibitions_summary: [
    "Hamiltons Gallery, London, UK",
    "Goss Michael Foundation, Dallas, USA",
    "David Gallery, Los Angeles, USA",
  ],
  selected_group_exhibitions_summary: [
    "National Portrait Gallery, London, UK",
    "The Israel Museum, Jerusalem, Israel",
    "The Association of Photographers, London, UK",
  ],
  status: "needs-artist-confirmation",
  note: "Migrate as 'shown on previous site, artist review required' until each line is signed off. Prices not shown on existing prints page — keep as 'Price on request'.",
};

// Books — verbatim from the existing Wix /books page.
export const BOOK_RECORDS = [
  {
    slug: "cuba-love-stories",
    title: "Cuba, Love Stories",
    format: "Hardcover",
    isbn_10: "1366341813",
    isbn_13: "978-1366341815",
    dimensions: "13 × 11 × 0.8 in",
    editions: [
      { name: "Collector's Edition 11×13", price: "£69.69" },
      { name: "Amazon edition", price: "£8.95 / $11.95 / €9.95" },
      { name: "Kindle & iBook", price: "£3.49" },
    ],
    source_url: "https://kobiisrael.wixsite.com/kobiisrael/book-cuba",
    status: "confirmed-from-source",
  },
  {
    slug: "river-of-three-crossings",
    title: "River of Three Crossings",
    format: "Hardcover",
    isbn_10: "1366341821",
    isbn_13: "978-1366341822",
    dimensions: "13 × 11 × 1 in",
    editions: [
      { name: "Collector's Edition 11×13", price: "£69.69" },
      { name: "Amazon edition", price: "£8.95 / $11.95 / €9.95" },
      { name: "Kindle & iBook", price: "£3.49" },
    ],
    source_url: "https://kobiisrael.wixsite.com/kobiisrael/river-of-three-crossings",
    status: "confirmed-from-source",
  },
  {
    slug: "intimate-strangers",
    title: "Intimate Strangers",
    format: "Hardcover · 120 pages",
    publisher: "Bruno Gmuender Gmbh",
    isbn_10: "3861876957",
    isbn_13: "978-3861876953",
    dimensions: "10.8 × 0.5 × 8.2 in",
    editions: [
      { name: "PDF via email", price: "£5" },
      { name: "Printed book (signed, directly from Kobi)", price: "£35" },
      { name: "Amazon.com", price: "Retail" },
    ],
    note: "Also appears in CV: Monographs 2005 — ISBN 3861876957.",
    status: "confirmed-from-source",
  },
  {
    slug: "views",
    title: "Views",
    publisher: "Bruno Gmunder Verlag GmbH",
    isbn_10: "3861872854",
    editions: [
      { name: "PDF via email", price: "£5" },
      { name: "Printed book (signed, directly from Kobi)", price: "£25" },
      { name: "Amazon.com", price: "Retail" },
    ],
    note: "Also appears in CV: Monographs 2003 — ISBN 3861872854.",
    status: "confirmed-from-source",
  },
  {
    slug: "views-postcard-book",
    title: "Views — Postcard Book",
    note: "Catalogues / Signed, Limited Edition.",
    status: "needs-review",
  },
  {
    slug: "promised-lands",
    title: "Promised Lands",
    publisher: "Hamiltons Gallery, London (2007)",
    editions: [
      { name: "PDF via email", price: "£5" },
      { name: "Printed catalogue (signed, directly from Kobi)", price: "£35" },
      { name: "Hamiltons Gallery website (not signed)", price: "See gallery" },
    ],
    note: "CV: Catalogues 2007 — Promised Lands, published by Hamiltons Gallery, London.",
    status: "confirmed-from-source",
  },
];

// CV — verbatim extraction.
export const CV_RECORDS = {
  biography: {
    born: "1970, Tel-Aviv, Israel",
    lives: "Lives and works in London, UK",
    status: "confirmed-from-source",
  },
  education: [
    { year: "2010", entry: "MA in Fine Art, Central Saint Martins — University of Arts, London, UK" },
    { year: "2001", entry: "Cinematography, Camera-Obscura — School of Visual Arts, Tel-Aviv, Israel" },
    { year: "2000", entry: "Photography, Camera-Obscura — School of Visual Arts, Tel-Aviv, Israel" },
    { year: "1996", entry: "Film, N.Y.F.A — New York Film Academy, New York, USA" },
    { year: "1993", entry: "General Studies, Tel Aviv University, Tel Aviv, Israel" },
  ],
  solo_exhibitions: [
    { year: "2012", entry: "Lands In-between, Hamiltons Gallery, London, UK" },
    { year: "2007", entry: "Promised Lands, David Gallery, Los Angeles, USA" },
    { year: "2007", entry: "Intimate Strangers, David Gallery, Los Angeles, USA" },
    { year: "2007", entry: "Promised Lands, Hamiltons Gallery, London, UK" },
    { year: "2006", entry: "Photographs, Goss-Michael Foundation, Dallas, USA" },
  ],
  group_exhibitions: [
    { year: "2019", entry: "Peter and Pan, The Israel Museum, Jerusalem, Israel" },
    { year: "2012", entry: "The Sexuality Spectrum, HUC Museum, New York, NY" },
    { year: "2010", entry: "101 Seconds, The Stanley & Audrey Burton Gallery, Leeds, UK" },
    { year: "2010", entry: "Lingering Whispers, The Crypt, London, UK" },
    { year: "2009", entry: "Dogma, HDLU, Zagreb, Croatia" },
    { year: "2009", entry: "Something for Everyone 2, Hamiltons Gallery, London, UK" },
    { year: "2009", entry: "AOP Open Awards, Association of Photographers Gallery, London, UK" },
    { year: "2008", entry: "Promised Land, Warehouse Gallery, Teramo, Italy" },
    { year: "2008", entry: "Something for Everyone, Hamiltons Gallery, London, UK" },
    { year: "2007", entry: "London Photo, London, UK" },
    { year: "2007", entry: "AOP Open Awards, Association of Photographers Gallery, London, UK" },
    { year: "2006", entry: "Paris Photo, Paris, France" },
    { year: "2006", entry: "AOP Open Awards, Association of Photographers Gallery, London, UK" },
    { year: "2005", entry: "AOP Open Awards, Association of Photographers Gallery, London, UK" },
    { year: "2004", entry: "International Photography Award, IPA04, London, UK" },
    { year: "2004", entry: "International Open Image Award, IOI04, Waterloo Gallery, London, UK — 'Highly Commended' Award" },
    { year: "2003", entry: "Schweppes Photographic Portrait Prize, National Portrait Gallery, London, UK" },
    { year: "2003", entry: "AOP Open Awards, Association of Photographers Gallery, London, UK — 'Judges Choice' Award" },
    { year: "2003", entry: "International Open Image Award, IOI03, Deluxe Gallery — Hoxton Sq, London, UK" },
    { year: "2002", entry: "Descubrimientos PHE02, PHotoEspana 2002, Madrid, Spain" },
    { year: "2002", entry: "First International Saloon of Contemporary Artists, Lisbon, Portugal" },
    { year: "2001", entry: "Galerie Art 7, Nice, France" },
    { year: "2001", entry: "Ramat-Gan Museum of Contemporary Art, Ramat-Gan, Israel" },
  ],
  catalogues: [
    { year: "2009", entry: "Now: Art of the 21st Century, Phillips de Pury, London & New York" },
    { year: "2009", entry: "AOP Open Awards, Association of Photographers, London" },
    { year: "2007", entry: "Promised Lands, published by Hamiltons Gallery, London" },
    { year: "2003", entry: "Schweppes Portrait Prize, National Portrait Gallery, London" },
  ],
  monographs: [
    { year: "2005", entry: "Intimate Strangers, Bruno Gmunder Verlag GmbH — ISBN 3861876957" },
    { year: "2003", entry: "Views, Bruno Gmunder Verlag GmbH — ISBN 3861872854" },
  ],
  anthologies: [
    { year: "2008", entry: "Night Visions — Photo Anthology, Bruno Gmunder Verlag GmbH — ISBN 3861878925" },
    { year: "2007", entry: "Men for Men: Homoeroticism and Male Homosexuality in the History of Photography, 1840–2006, Jonathan Cape Ltd" },
    { year: "2006", entry: "Dateline Israel, New Photography and Video Art, The Jewish Museum New York, Yale University Press — ISBN 0300111568" },
    { year: "2005", entry: "Self Exposure, The Male Nude Self Portrait by Reed Massengill, Universe Publications — Rizzoli — ISBN 0789313170" },
  ],
  awards: [
    { year: "2007", entry: "PX3 Prix de la Photographie Paris — Honorable Mentions" },
    { year: "2007", entry: "IPA International Photography Awards — Honorable Mentions" },
    { year: "2006", entry: "PX3 Prix de la Photographie Paris — Honorable Mentions" },
    { year: "2006", entry: "IPA International Photography Awards — Honorable Mentions" },
    { year: "2004", entry: "IPA International Photography Awards — People, Self-Portrait" },
    { year: "2004", entry: "International Open Image Award — 'Highly Commended', Waterloo Gallery, London, UK" },
    { year: "2003", entry: "AOP Open — 'Judges Choice' Award, AOP Gallery, London, UK" },
  ],
  film: [
    { year: "1996", entry: "Boulevards of Broken Dreams, 16mm, 10 min, New York" },
  ],
  about_statement_preserved_verbatim: true,
  status: "confirmed-from-source",
};

// Redirect map: old Wix URL → new path.
export const REDIRECT_MAP = [
  { from: "https://kobiisrael.wixsite.com/kobiisrael", to: "/" },
  { from: "https://kobiisrael.wixsite.com/kobiisrael/still", to: "/still" },
  { from: "https://kobiisrael.wixsite.com/kobiisrael/moving", to: "/moving" },
  { from: "https://kobiisrael.wixsite.com/kobiisrael/limited-edition-prints", to: "/prints" },
  { from: "https://kobiisrael.wixsite.com/kobiisrael/books", to: "/books" },
  { from: "https://kobiisrael.wixsite.com/kobiisrael/cv", to: "/cv" },
  { from: "https://kobiisrael.wixsite.com/kobiisrael/river", to: "/projects/river-of-three-crossings" },
  { from: "https://kobiisrael.wixsite.com/kobiisrael/patron-cuba", to: "/projects/cuba-love-story" },
  { from: "https://kobiisrael.wixsite.com/kobiisrael/fragments", to: "/projects/fragments-of-life" },
  { from: "https://kobiisrael.wixsite.com/kobiisrael/patron-intimate", to: "/projects/intimate-strangers" },
  { from: "https://kobiisrael.wixsite.com/kobiisrael/patron-views", to: "/projects/views" },
  { from: "https://kobiisrael.wixsite.com/kobiisrael/parisianpostcards", to: "/projects/parisian-postcards" },
  { from: "https://kobiisrael.wixsite.com/kobiisrael/book-cuba", to: "/books" },
  { from: "https://kobiisrael.wixsite.com/kobiisrael/river-of-three-crossings", to: "/books" },
  { from: "https://kobiisrael.wixsite.com/kobiisrael/copy-of-2-book-river-of-three-cros", to: "/books" },
  { from: "https://kobiisrael.wixsite.com/kobiisrael/copy-of-3-book-intimate-strangers", to: "/books" },
  { from: "https://kobiisrael.wixsite.com/kobiisrael/copy-of-4-book-views", to: "/books" },
];

// Missing-content checklist.
export const MISSING_CONTENT_CHECKLIST = [
  { item: "Final homepage hero image", action: "Artist to select image" },
  { item: "Final artist biography (long-form)", action: "Confirm or expand existing About text" },
  { item: "Confirmed project years (all 8 projects)", action: "Most confirmed from source — final sign-off" },
  { item: "Confirmed project locations (per project)", action: "Most confirmed — final sign-off" },
  { item: "Confirmed print prices for the 2 print sizes", action: "Not shown on existing site — artist to confirm" },
  { item: "Confirmed print availability per series", action: "Artist to confirm" },
  { item: "Confirmed edition numbers issued / remaining", action: "Artist to confirm" },
  { item: "Confirmed book current availability and stock", action: "Old £ prices on Wix may be outdated — confirm" },
  { item: "Confirmed Amazon / purchase links (still valid?)", action: "Test before launch — mark broken if 404" },
  { item: "Confirmed celebrity collector wording (Madonna / Elton John / George Michael / Joe Wright)", action: "Sign-off required before publication on /cv or /prints" },
  { item: "Confirmed public collection wording (NPG and others)", action: "Confirm and add to /cv Public Collections section" },
  { item: "Confirmed press quotes", action: "Source from existing materials" },
  { item: "Confirmed contact email", action: "kobi.israel.photography@gmail.com — confirmed; replace TBC placeholders" },
  { item: "Confirmed social links (Instagram, YouTube/Vimeo)", action: "Artist to supply" },
  { item: "Confirmed newsletter platform", action: "Artist to supply or remove signup form" },
  { item: "Final legal wording (Privacy, Terms, Copyright, Cookies, Accessibility)", action: "Legal review before launch" },
  { item: "Final copyright wording for footer", action: "Artist legal counsel" },
  { item: "Domain DNS — kobiisrael.com / www.kobiisrael.com / kobiisrael.life", action: "Confirm canonical domain and redirects" },
];

// Mapping table — what moves where, with action and status.
export const MAPPING_TABLE = [
  { src: "Wix /", item: "A Chaos of Appearances + Borges epigraph", type: "homepage copy", target: "/", section: "Hero / positioning", action: "migrate unchanged", status: "confirmed" },
  { src: "Wix /still", item: "Artist statement on remembrance / inside quest", type: "artist statement", target: "/still + /journal", section: "Intro", action: "migrate unchanged", status: "confirmed" },
  { src: "Wix /still", item: "5 project descriptions (Cuba / River / Fragments / Strangers / Views)", type: "project description", target: "/projects/:slug", section: "Intro + Curatorial note", action: "migrate with light copy clean-up", status: "confirmed" },
  { src: "Wix /moving", item: "A Cuban Love Story · 12 episodes (HD), 2023", type: "moving-image project", target: "/projects/cuba-love-story + /moving", section: "Moving image connection", action: "migrate unchanged", status: "confirmed" },
  { src: "Wix /moving", item: "Parisian Postcards · 18 mins, 3-channel, Paris 2010", type: "moving-image project", target: "/projects/parisian-postcards", section: "Hero + metadata", action: "migrate unchanged", status: "confirmed" },
  { src: "Wix /moving", item: "Investigating Things Past", type: "moving-image project", target: "/projects/investigating-things-past", section: "Hero + Curatorial", action: "migrate unchanged", status: "confirmed" },
  { src: "Wix /moving", item: "Boulevards of Broken Dreams (1996, 16mm)", type: "student film", target: "/moving + /cv FILM", section: "Archive films", action: "migrate unchanged", status: "confirmed" },
  { src: "Wix /prints", item: "Print specs: C-type, 30×40 in / 80×100 cm Edition of 5 + 20×24 in / 50×60 cm Edition of 10", type: "limited edition print information", target: "/prints", section: "Edition details", action: "migrate unchanged", status: "confirmed" },
  { src: "Wix /prints", item: "Collection claims (Madonna, Elton John, George Michael, Joe Wright, NPG)", type: "collection", target: "/cv Public + Private Collections", section: "Collections", action: "artist review required", status: "needs review" },
  { src: "Wix /prints", item: "Solo + Group exhibitions summary", type: "exhibition", target: "/cv", section: "Solo/Group", action: "merge with full CV list", status: "duplicate" },
  { src: "Wix /books", item: "6 book records (Cuba, River, Intimate Strangers, Views, Views-Postcard, Promised Lands)", type: "book information", target: "/books + /books/:slug", section: "Full record", action: "migrate with link verification", status: "needs review" },
  { src: "Wix /cv", item: "Biography 1970 Tel-Aviv → London", type: "biography", target: "/cv", section: "Biography", action: "migrate unchanged", status: "confirmed" },
  { src: "Wix /cv", item: "5 Education entries (1993–2010)", type: "education", target: "/cv", section: "Education", action: "migrate unchanged", status: "confirmed" },
  { src: "Wix /cv", item: "5 Solo exhibitions (2006–2012)", type: "solo exhibition", target: "/cv", section: "Selected Solo", action: "migrate unchanged", status: "confirmed" },
  { src: "Wix /cv", item: "24 Group exhibitions (2001–2019)", type: "group exhibition", target: "/cv", section: "Selected Group", action: "migrate unchanged", status: "confirmed" },
  { src: "Wix /cv", item: "4 Catalogues, 2 Monographs, 4 Anthologies", type: "publication", target: "/cv", section: "Publications", action: "migrate unchanged", status: "confirmed" },
  { src: "Wix /cv", item: "7 Awards (2003–2007)", type: "award", target: "/cv", section: "Awards", action: "migrate unchanged", status: "confirmed" },
  { src: "Wix /cv", item: "Long About statement (Views / Fragments / Strangers / Love Stories / Promised Lands trilogy)", type: "artist statement", target: "/cv About + /projects per-slug curatorial notes", section: "Curatorial note", action: "split into several sections", status: "confirmed" },
  { src: "All pages", item: "Email kobi.israel.photography@gmail.com", type: "contact information", target: "/contact + footer", section: "Contact details", action: "migrate unchanged", status: "confirmed" },
];
