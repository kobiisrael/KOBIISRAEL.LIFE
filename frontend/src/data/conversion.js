// Conversion strategy data for KOBIISRAEL.COM
// Drives the /conversion-review admin dashboard and is the canonical reference
// for audience pathways, CTA placement, microcopy and safety review.
// No fake testimonials, no fake reviews, no fake scarcity, no commercial pressure.

export const CONVERSION_PRINCIPLE = {
  headline: "Convert through trust, atmosphere and clarity — never through pressure.",
  visitor_feels: [
    "the work is serious",
    "the archive has depth",
    "the artist has history",
    "the prints may be collectible",
    "the inquiry process is professional",
    "the website is safe to contact",
    "the work is worth exploring slowly",
  ],
  forbidden_patterns: [
    "sales funnels",
    "pop-ups",
    "discount language",
    "fake scarcity",
    "countdown timers",
    "forced newsletter capture",
    'aggressive "Buy Now" buttons',
    "generic lead-generation copy",
  ],
};

// ---------------------------------------------------------------------------
// 2 · Audiences
// ---------------------------------------------------------------------------
export const CONVERSION_AUDIENCES = [
  {
    slug: "collector",
    title: "Collectors",
    note: "Prints, editions, availability, condition, price-on-request, provenance and artist history.",
    inquiryType: "collector",
  },
  {
    slug: "curator",
    title: "Curators and museums",
    note: "Exhibitions, archive research, acquisitions, moving-image, artist talks and institutional context.",
    inquiryType: "curator",
  },
  {
    slug: "gallery",
    title: "Galleries",
    note: "Representation, exhibitions, print sales, archive development and professional collaboration.",
    inquiryType: "gallery",
  },
  {
    slug: "press",
    title: "Publishers and press",
    note: "Interviews, image requests, book features, catalogues, essays and licensing.",
    inquiryType: "press",
  },
  {
    slug: "film",
    title: "Film programmers",
    note: "Moving-image work, screenings, excerpts, technical specs, subtitles and Q&A.",
    inquiryType: "film_programmer",
  },
  {
    slug: "research",
    title: "Researchers and academics",
    note: "Archive material, project history, artist texts, CV, publications and visual themes.",
    inquiryType: "research",
  },
  {
    slug: "book",
    title: "Book buyers",
    note: "Artist books, catalogues, signed copies, PDFs, availability and purchase links.",
    inquiryType: "book_inquiry",
  },
  {
    slug: "viewer",
    title: "General viewers",
    note: "Discovery — from homepage to archive, projects, books, prints or journal.",
    inquiryType: "general",
  },
];

// ---------------------------------------------------------------------------
// 3 · Visitor journey map
// ---------------------------------------------------------------------------
export const CONVERSION_JOURNEYS = [
  {
    audience: "Collector",
    entry: "/prints or artwork detail",
    motivation: "Wants to know whether a work is available.",
    first_sight: "Image, metadata, edition placeholder, price-on-request language.",
    trust: "CV, exhibitions, publications, certificate placeholder, professional form.",
    next_action: "Request Print Availability",
    target: "/contact (inquiry_type=collector) or /prints#prints-inquiry",
    friction: "No visible price; uncertainty.",
    fix: "Reassure that availability and pricing are confirmed case by case.",
  },
  {
    audience: "Curator / Museum",
    entry: "/archive, /cv or /projects/:slug",
    motivation: "Understand the body of work quickly.",
    first_sight: "Project summary, themes, images, CV, professional materials.",
    trust: "Exhibitions, collections, publications, archive structure.",
    next_action: "Send Curator Inquiry",
    target: "/contact (inquiry_type=curator)",
    friction: "Unclear project organisation.",
    fix: "Suggested pathways, downloadable-material placeholders, project metadata blocks.",
  },
  {
    audience: "Gallery",
    entry: "/, /still, /prints",
    motivation: "Assess seriousness and representation fit.",
    first_sight: "Coherent visual identity, CV, print structure, archive depth.",
    trust: "Exhibitions, books, collector-facing page.",
    next_action: "Send Gallery Inquiry",
    target: "/contact (inquiry_type=gallery)",
    friction: "Site looks too commercial OR too thin.",
    fix: "Editorial design, restrained CTAs, no representation-begging language.",
  },
  {
    audience: "Press / Publisher",
    entry: "/cv, /books, /journal",
    motivation: "Source bio, image, book or essay material.",
    first_sight: "Bio, books, project summaries, artist texts.",
    trust: "Publication history, CV, journal notes.",
    next_action: "Send Press Inquiry · Request Image Permission",
    target: "/contact (inquiry_type=press)",
    friction: "Cannot find image-permission route.",
    fix: "Press pathway + 'Request Image Permission' CTA prefills inquiry_type=press.",
  },
  {
    audience: "Film Programmer",
    entry: "/moving, /projects/cuba-love-story",
    motivation: "Source screening copy, excerpts, technical specs.",
    first_sight: "Moving-image index, duration/format placeholders, screening section.",
    trust: "Artist statement, related photography, CV.",
    next_action: "Request Screening Information",
    target: "/contact (inquiry_type=film_programmer)",
    friction: "Autoplay, YouTube-style clutter, no spec sheet.",
    fix: "No autoplay; technical placeholders; dedicated film pathway.",
  },
  {
    audience: "Researcher / Academic",
    entry: "/archive, /journal, /cv",
    motivation: "Locate project material, themes, sources.",
    first_sight: "Searchable archive, project index, library placeholders.",
    trust: "CV, publication history, journal, bibliography.",
    next_action: "Send Archive Inquiry",
    target: "/archive#archive-inquiry (inquiry_type=research)",
    friction: "Messy archive or unverified facts.",
    fix: "Clear taxonomy + 'To be confirmed by artist' markers wherever needed.",
  },
  {
    audience: "Book Buyer",
    entry: "/books",
    motivation: "Buy a copy / find signed copy / acquire catalogue.",
    first_sight: "Cover, metadata, related project, signed-copy placeholder.",
    trust: "Publication history, ISBN/publisher placeholders, related project links.",
    next_action: "Request Book Availability",
    target: "/books#books-inquiry (inquiry_type=book_inquiry / purchase / signed_copy)",
    friction: "Old prices presented as final / fake stock.",
    fix: "Pricing & availability confirmed before any order; no checkout.",
  },
  {
    audience: "General Viewer",
    entry: "/",
    motivation: "Discover the work.",
    first_sight: "Hero, conceptual entry, selected works.",
    trust: "Editorial structure, archive depth.",
    next_action: "View Selected Works · Explore the Archive",
    target: "/still, /archive",
    friction: "Hero overload, too many CTAs.",
    fix: "Hero limited to two primary buttons.",
  },
];

// ---------------------------------------------------------------------------
// 4 · Homepage conversion flow
// ---------------------------------------------------------------------------
export const HOMEPAGE_FLOW = [
  { order: 1, block: "Hero", role: "Immediate artistic identity", primary_ctas: ["View Selected Works", "Explore the Archive"] },
  { order: 2, block: "Conceptual Entry", role: "Emotional and conceptual hook", primary_ctas: [] },
  { order: 3, block: "Selected Works", role: "First proof of body of work", primary_ctas: ["View Project"] },
  { order: 4, block: "Still & Moving Split", role: "Archive breadth", primary_ctas: ["View Still", "View Moving"] },
  { order: 5, block: "Featured Project (Cuba, Love Story)", role: "Anchor project", primary_ctas: ["View Project", "Request Print Availability"] },
  { order: 6, block: "Prints / Collector", role: "Quiet collector entry", primary_ctas: ["Request Print Availability"] },
  { order: 7, block: "Books", role: "Publication credibility", primary_ctas: ["View Books"] },
  { order: 8, block: "Credibility Strip + Artist Statement", role: "CV & archive credibility", primary_ctas: ["View CV"] },
  { order: 9, block: "Current Projects", role: "Living archive", primary_ctas: [] },
  { order: 10, block: "Contact section", role: "Professional inquiry", primary_ctas: ["Send Professional Inquiry"] },
];

// ---------------------------------------------------------------------------
// 5–11 · Audience pathways
// ---------------------------------------------------------------------------
export const AUDIENCE_PATHWAYS = [
  {
    slug: "collector",
    title: "Collector pathway",
    flow: ["/", "Selected Works", "Project Detail", "Artwork Detail", "Print Availability", "Collector Inquiry", "Confirmation"],
    trust: [
      "Large artwork image",
      "Clear artwork metadata",
      "Project context",
      "Edition details placeholder",
      "Availability status placeholder",
      "Price on request",
      "Certificate placeholder",
      "Signature placeholder",
      "Condition placeholder",
      "CV link",
      "Publication and exhibition history placeholders",
      "Professional inquiry form",
    ],
    cta_safe: ["Request Print Availability", "Request Artwork Details", "Send Collector Inquiry", "View Related Works", "View Artist CV"],
    cta_forbidden: ["Buy Now", "Add to Cart", "Limited Stock", "Investment Opportunity", "Museum Quality", "Guaranteed Value", "Rare Masterpiece"],
    reassurance:
      "Print availability, edition details, dimensions, condition and pricing are confirmed case by case before any sale or reservation.",
    target_pages: ["/prints", "/prints/:slug", "/projects/:slug", "/contact"],
    inquiry_type: "collector",
  },
  {
    slug: "curator",
    title: "Curator and museum pathway",
    flow: ["/", "Archive", "Project Detail", "CV", "Moving / Still", "Professional Materials", "Curator Inquiry"],
    trust: [
      "Clear artist positioning",
      "Project summaries",
      "Archive map",
      "CV",
      "Selected exhibitions",
      "Collections (only when confirmed)",
      "Publications",
      "Moving-image section",
      "Research library placeholders",
      "Professional materials placeholders",
      "Contact form",
    ],
    cta_safe: ["Send Curator Inquiry", "Request Professional Materials", "View CV", "Explore Archive", "View Project", "Request Screening Information"],
    cta_forbidden: ["Book me", "Hire me", "Available for representation"],
    reassurance:
      "Professional materials, archive details, screening information and exhibition-related requests are reviewed case by case.",
    target_pages: ["/archive", "/cv", "/projects/:slug", "/moving", "/contact"],
    inquiry_type: "curator",
  },
  {
    slug: "gallery",
    title: "Gallery pathway",
    flow: ["/", "Selected Works", "Prints", "Project Detail", "CV", "Contact", "Gallery Inquiry"],
    trust: [
      "Coherent visual identity",
      "Print inquiry structure",
      "CV",
      "Exhibition history",
      "Book and publication section",
      "Archive depth",
      "Collector-facing page",
      "Professional presentation",
    ],
    cta_safe: ["Send Gallery Inquiry", "Request Viewing Information", "View Selected Works", "View Prints", "View CV"],
    cta_forbidden: ["Looking for representation", "Available for shows", "Desperate language", "Cheap shop layout"],
    reassurance:
      "Gallery and representation-related inquiries may include exhibitions, print sales, archive development, viewing room proposals or professional collaboration.",
    target_pages: ["/prints", "/cv", "/projects/:slug", "/contact"],
    inquiry_type: "gallery",
  },
  {
    slug: "press",
    title: "Press and publishing pathway",
    flow: ["/", "CV", "Books", "Archive", "Journal", "Contact", "Press Inquiry"],
    trust: [
      "Artist biography",
      "Project summaries",
      "Publication history",
      "Books page",
      "Artist texts",
      "Selected images",
      "Press kit placeholder",
      "Image licensing pathway",
    ],
    cta_safe: ["Send Press Inquiry", "Request Image Permission", "View Books", "View Artist Biography", "Request Press Materials"],
    cta_forbidden: ["Free high-res downloads", "Unverified press quotes", "Fake media logos", "Unsupported review claims"],
    reassurance:
      "Please include the intended use, publication name, deadline, image requirements and rights request where relevant.",
    target_pages: ["/cv", "/books", "/journal", "/contact"],
    inquiry_type: "press",
  },
  {
    slug: "film",
    title: "Film and screening pathway",
    flow: ["/", "Moving", "Project Detail", "Moving Image Detail", "CV", "Contact", "Film Inquiry"],
    trust: [
      "Moving-image index",
      "Video-still cards",
      "Duration placeholders",
      "Format placeholders",
      "Screening inquiry pathway",
      "Technical specs placeholders",
      "Artist statement",
      "Related photography project",
    ],
    cta_safe: ["Request Screening Information", "Send Film Inquiry", "View Moving Image", "Request Technical Details", "View Related Photography"],
    cta_forbidden: ["Autoplay with sound", "YouTube-style suggestions", "Invented festival history", "Fake screening links"],
    reassurance:
      "Screening copies, excerpts, subtitles, technical details and installation formats are confirmed case by case.",
    target_pages: ["/moving", "/projects/:slug", "/contact"],
    inquiry_type: "film_programmer",
  },
  {
    slug: "research",
    title: "Research and archive pathway",
    flow: ["/", "Archive", "Project Index", "CV", "Journal", "Books", "Contact", "Archive Inquiry"],
    trust: [
      "Searchable archive",
      "Project index",
      "Archive timeline",
      "Research library placeholders",
      "CV",
      "Publication history",
      "Journal notes",
      "Bibliography placeholder",
    ],
    cta_safe: ["Send Archive Inquiry", "Explore Project Index", "View Research Library", "View CV", "Read Archive Notes"],
    cta_forbidden: ["Overly poetic copy that hides information", "Missing source context", "Unverified facts"],
    reassurance:
      "Archive and research inquiries should include the project, theme, publication, academic context or research purpose where relevant.",
    target_pages: ["/archive", "/cv", "/journal", "/books"],
    inquiry_type: "research",
  },
  {
    slug: "book",
    title: "Book buyer pathway",
    flow: ["/", "Books", "Book Detail", "Related Project", "Book Inquiry"],
    trust: [
      "Book covers",
      "Book spreads",
      "Publication metadata placeholders",
      "ISBN placeholders",
      "Price and availability placeholders",
      "Related project links",
      "Signed-copy status placeholder",
      "PDF placeholder",
    ],
    cta_safe: ["Request Book Availability", "View Book", "Send Book Inquiry", "View Related Project"],
    cta_forbidden: ['"Last copies"', '"In stock now"', "Checkout before confirmation"],
    reassurance:
      "Book availability, signed copy status, pricing and shipping information are confirmed before any order is arranged.",
    target_pages: ["/books", "/projects/:slug", "/contact"],
    inquiry_type: "book_inquiry",
  },
];

// ---------------------------------------------------------------------------
// 12 · Site-wide CTA placement map
// ---------------------------------------------------------------------------
export const CTA_MAP = [
  { page: "/", placement: "Hero", ctas: ["View Selected Works", "Explore the Archive"] },
  { page: "/", placement: "Selected Works", ctas: ["View Project"] },
  { page: "/", placement: "Featured Project (Cuba)", ctas: ["View Project", "Request Print Availability"] },
  { page: "/", placement: "Prints section", ctas: ["Request Print Availability"] },
  { page: "/", placement: "Books section", ctas: ["View Books"] },
  { page: "/", placement: "CV section", ctas: ["View CV"] },
  { page: "/", placement: "Footer / Contact section", ctas: ["Send Professional Inquiry"] },

  { page: "/still", placement: "Project cards", ctas: ["Enter Project"] },
  { page: "/still", placement: "Collector section", ctas: ["Request Print Availability"] },
  { page: "/still", placement: "Bottom", ctas: ["Explore Prints"] },

  { page: "/moving", placement: "Moving cards", ctas: ["View Work"] },
  { page: "/moving", placement: "Screening section", ctas: ["Request Screening Information"] },
  { page: "/moving", placement: "Bottom", ctas: ["Film / Curator Inquiry"] },

  { page: "/prints", placement: "Artwork cards", ctas: ["Request Details"] },
  { page: "/prints", placement: "Collector form", ctas: ["Send Collector Inquiry"] },
  { page: "/prints", placement: "Secondary market section", ctas: ["Send Collector Inquiry"] },

  { page: "/books", placement: "Publication cards", ctas: ["View Publication"] },
  { page: "/books", placement: "Purchase section", ctas: ["Request Book Availability"] },
  { page: "/books", placement: "Book Inquiry form", ctas: ["Send Book Inquiry"] },

  { page: "/archive", placement: "Pathway cards", ctas: ["Begin"] },
  { page: "/archive", placement: "Research library", ctas: ["View Material"] },
  { page: "/archive", placement: "Inquiry form", ctas: ["Send Archive Inquiry"] },

  { page: "/cv", placement: "Professional materials", ctas: ["Request Materials"] },
  { page: "/cv", placement: "Contact section", ctas: ["Send Professional Inquiry"] },

  { page: "/journal", placement: "Entries", ctas: ["Read Note"] },
  { page: "/journal", placement: "Related projects", ctas: ["View Project"] },
  { page: "/journal", placement: "Newsletter", ctas: ["Subscribe"] },

  { page: "/contact", placement: "Pathway cards", ctas: ["Start Inquiry"] },
  { page: "/contact", placement: "Main form", ctas: ["Send Inquiry"] },
];

// ---------------------------------------------------------------------------
// 13 · Form microcopy reference
// ---------------------------------------------------------------------------
export const FORM_MICROCOPY = {
  before:
    "Please include the relevant project, artwork, publication or archive area in your message so the inquiry can be reviewed clearly.",
  collector_note:
    "For print inquiries, please include the artwork or series if known, preferred size, country and whether the inquiry relates to a new acquisition, existing collection or secondary market question.",
  press_note:
    "For press and publishing requests, please include the publication name, intended use, image requirements and deadline.",
  film_note:
    "For screening inquiries, please include organisation, event context, proposed date, format needs and whether a Q&A or artist talk is requested.",
  after_submit:
    "Thank you for your inquiry. Your message has been received and will be reviewed before reply. Availability, pricing, licensing terms, screenings and professional materials will be confirmed case by case.",
  error: "Please check the required fields and try again.",
  privacy:
    "Your information will only be used to respond to your inquiry. Final privacy wording to be reviewed before launch.",
};

// ---------------------------------------------------------------------------
// 14 · Trust elements + 22 · Safety review
// ---------------------------------------------------------------------------
export const TRUST_ELEMENTS = [
  "Clear artist biography",
  "CV page",
  "Selected exhibitions section",
  "Selected publications section",
  "Books page",
  "Archive structure",
  "Project metadata",
  "Artwork metadata",
  "Print information placeholders",
  "Professional inquiry forms",
  "Legal placeholders",
  "Copyright notice",
  "Consistent design",
  "Fast loading",
  "Mobile polish",
  "Clear contact pathways",
];

export const SAFETY_REVIEW = [
  { label: "Unconfirmed prices", status: "marked TBC", note: "All price fields render 'Price on request' or TBC." },
  { label: "Unconfirmed availability", status: "marked TBC", note: "Availability sections explicitly say 'confirmed case by case'." },
  { label: "Unconfirmed edition numbers", status: "marked TBC", note: "Edition placeholders only — no fabricated edition data." },
  { label: "Unconfirmed certificates", status: "marked TBC", note: "Certificate placeholders only." },
  { label: "Unconfirmed shipping terms", status: "marked TBC", note: "Shipping confirmed at inquiry time." },
  { label: "Unconfirmed secondary market claims", status: "marked TBC", note: "Discreet placeholder only." },
  { label: "Unconfirmed collectors", status: "needs review", note: "Collection claims from Wix (Madonna, Elton John, etc.) flagged 'needs-review' — never published unconfirmed." },
  { label: "Unconfirmed celebrity collector claims", status: "needs review", note: "Hidden behind artist-approval review." },
  { label: "Unconfirmed institutional claims", status: "marked TBC", note: "Collections subsections marked 'To be confirmed by artist'." },
  { label: "Unconfirmed awards", status: "marked TBC", note: "Awards section is placeholder-only." },
  { label: "Unconfirmed press quotes", status: "marked TBC", note: "Press quote slots TBC; never published unconfirmed." },
  { label: "Unconfirmed screenings", status: "marked TBC", note: "Screening / festival history TBC." },
  { label: "Unconfirmed licensing terms", status: "marked TBC", note: "Licensing details confirmed by inquiry." },
];

// ---------------------------------------------------------------------------
// 15 · Friction map
// ---------------------------------------------------------------------------
export const FRICTION_REDUCTION = [
  { friction: "Unclear whether prints are available", fix: "'Availability to be confirmed' language across artwork pages." },
  { friction: "Not enough artwork metadata", fix: "20-field artwork record template in `ArtworkRecord.jsx`." },
  { friction: "Unclear contact route", fix: "9 pathway cards on /contact + section-level CTAs that prefill the form select." },
  { friction: "Too many project names without context", fix: "Project intro statements + verbatim Wix descriptions." },
  { friction: "Moving-image work hidden", fix: "Dedicated /moving page + 'Related Moving Image' CTA on each project page." },
  { friction: "CV too dense", fix: "Grouped into Biography · Exhibitions · Collections · Awards · Publications · Books · Timeline · Professional Materials." },
  { friction: "Prices missing", fix: "Price-on-request language + collector reassurance copy." },
  { friction: "Old Wix links confusing", fix: "Wix → kobiisrael.life 301 redirect map (in /seo-review)." },
  { friction: "Uncertain book availability", fix: "Book inquiry pathway + 'confirmed before order' reassurance." },
  { friction: "Unconfirmed details", fix: "All TBC fields rendered with explicit 'To be confirmed by artist' marker." },
];

// ---------------------------------------------------------------------------
// 16 · Conversion-safe vocabulary
// ---------------------------------------------------------------------------
export const VOCABULARY = {
  safe: [
    "Request Print Availability",
    "Request Artwork Details",
    "Send Collector Inquiry",
    "Price on Request",
    "Availability to be Confirmed",
    "Edition Details to be Confirmed",
    "Professional Inquiry",
    "Case by Case",
    "Request Book Availability",
    "Request Screening Information",
    "Request Licensing Information",
  ],
  forbidden: [
    "Buy Now",
    "Add to Cart",
    "Only One Left",
    "Last Chance",
    "Investment Opportunity",
    "Guaranteed Value",
    "Museum Quality (unsupported)",
    "Rare Masterpiece (unsupported)",
    "Celebrity-owned (unapproved)",
    "Huge Demand (unconfirmed)",
    "Act Now",
    "Limited Time",
  ],
};

// ---------------------------------------------------------------------------
// 17 · Newsletter strategy
// ---------------------------------------------------------------------------
export const NEWSLETTER_STRATEGY = {
  purpose:
    "Allow visitors to receive occasional archive notes, new project updates, book news, print availability updates or screening information.",
  placement: ["Homepage footer", "Journal page", "Archive page", "Contact page"],
  copy: "Receive occasional archive notes, project updates, book news and print information from Kobi Israel.",
  fields: ["email", "interest"],
  interests: ["archive-notes", "books", "prints", "moving-image", "exhibitions", "all-updates"],
  cta: "Subscribe",
  after_submit: "Thank you. You will receive occasional archive notes and project updates.",
  forbidden: ["pop-ups", "forced subscription before browsing", "overpromised frequency"],
};

// ---------------------------------------------------------------------------
// 18 · Analytics conversion events (placeholders — not wired)
// ---------------------------------------------------------------------------
export const ANALYTICS_EVENTS = [
  { name: "collector_inquiry_submitted", page: "/contact, /prints, /prints/:slug, /projects/:slug" },
  { name: "general_contact_submitted", page: "/contact" },
  { name: "book_inquiry_submitted", page: "/books, /contact" },
  { name: "film_inquiry_submitted", page: "/moving, /contact" },
  { name: "archive_inquiry_submitted", page: "/archive, /contact" },
  { name: "press_inquiry_submitted", page: "/contact, /cv" },
  { name: "newsletter_signup", page: "/journal, /contact, footer" },
  { name: "project_page_viewed", page: "/projects/:slug" },
  { name: "artwork_detail_viewed", page: "/prints/:slug" },
  { name: "print_page_viewed", page: "/prints" },
  { name: "book_page_viewed", page: "/books" },
  { name: "cv_viewed", page: "/cv" },
  { name: "archive_search_used", page: "/archive" },
  { name: "pdf_placeholder_clicked", page: "/books, /archive" },
  { name: "outbound_purchase_link_clicked", page: "/books (only when confirmed)" },
];
export const ANALYTICS_NOTE =
  "Do not enable any tracking script until the privacy policy and cookie notice are reviewed and consent UX is in place.";

// ---------------------------------------------------------------------------
// 20 · Mobile conversion checks
// ---------------------------------------------------------------------------
export const MOBILE_CHECKS = [
  "Hero CTA visible but not overwhelming",
  "Project cards readable",
  "Print inquiry buttons easy to tap",
  "Artwork metadata readable",
  "Forms easy to complete",
  "Dropdowns usable",
  "Footer contact links visible",
  "Newsletter simple",
  "No horizontal overflow",
  "No tiny buttons",
  "No hidden inquiry pathway",
];

// ---------------------------------------------------------------------------
// 21 · Accessibility conversion checks
// ---------------------------------------------------------------------------
export const ACCESSIBILITY_CHECKS = [
  "Forms have clear labels",
  "Buttons are keyboard accessible",
  "Dropdowns are accessible",
  "Error messages are clear",
  "Consent checkbox has visible label",
  "CTA buttons have descriptive text",
  "Colour is not the only status indicator",
  "Forms work on mobile",
  "Focus states visible",
  "No essential CTA hidden inside images",
];

// ---------------------------------------------------------------------------
// 23 · Final quality test
// ---------------------------------------------------------------------------
export const QUALITY_TESTS = [
  "Can a collector understand how to ask about a print in under 30 seconds?",
  "Can a curator find CV, projects and contact quickly?",
  "Can a gallery understand the artist's seriousness without being oversold?",
  "Can a journalist find biography, books and press route?",
  "Can a film programmer find moving-image inquiry route?",
  "Can a researcher enter the archive without getting lost?",
  "Can a book buyer ask about availability clearly?",
  "Can a general visitor move from homepage to deeper pages naturally?",
  "Can every inquiry type reach the right form?",
  "Does every CTA feel calm, credible and artist-appropriate?",
];

// ---------------------------------------------------------------------------
// 19 · Conversion dashboard status registry
// ---------------------------------------------------------------------------
export const CONVERSION_DASHBOARD_STATUS = [
  { area: "Collector inquiry pathway", status: "ready", notes: "/prints, /prints/:slug, /projects/:slug, /contact all route to inquiry_type=collector with consent + reassurance copy." },
  { area: "Curator inquiry pathway", status: "ready", notes: "/archive, /cv, /contact all reach inquiry_type=curator (or curatorial)." },
  { area: "Gallery inquiry pathway", status: "ready", notes: "/contact pathway card prefills inquiry_type=gallery; /prints institutional CTA available." },
  { area: "Press inquiry pathway", status: "ready", notes: "/cv 'Request High-Res' → inquiry_type=press; /contact press section CTA." },
  { area: "Film inquiry pathway", status: "ready", notes: "/moving curator section + /contact film section both prefill inquiry_type=film_programmer." },
  { area: "Book inquiry pathway", status: "ready", notes: "/books form + /contact book section route to inquiry_type=book_inquiry / purchase / signed_copy / research." },
  { area: "Archive inquiry pathway", status: "ready", notes: "/archive inquiry form supports curatorial, research, press, publisher, collector, gallery, museum, licensing, academic, general." },
  { area: "Newsletter pathway", status: "ready", notes: "/journal receives occasional archive notes — 6-interest dropdown." },
  { area: "Homepage CTAs", status: "ready", notes: "Hero limited to two primary CTAs; full flow follows the 10-step homepage map." },
  { area: "Forms status", status: "ready", notes: "All inquiry / newsletter forms post to /api/inquiries or /api/newsletter; consent required; success message visible." },
  { area: "Mobile form testing", status: "ready", notes: "Verified at 390px viewport in testing_agent iterations 13–19." },
  { area: "Broken CTA links", status: "ready", notes: "No orphan or broken CTAs detected in last regression sweep." },
  { area: "Missing trust signals", status: "needs review", notes: "Final artist bio, exhibition list, collections list, awards and press quotes pending artist supply." },
  { area: "Unfinished metadata", status: "needs review", notes: "ARTWORK_REGISTRY intentionally empty; prints/:slug metadata is template + slug only." },
  { area: "Conversion blockers", status: "do not publish yet", notes: "Replace 'final image to be selected by artist' placeholders before public launch." },
];

// ---------------------------------------------------------------------------
// Inquiry routing reference (where each pathway lands)
// ---------------------------------------------------------------------------
export const INQUIRY_ROUTING = [
  { pathway: "Collector", endpoint: "POST /api/inquiries", types: ["collector"], primary_form: "/prints#prints-inquiry, /contact" },
  { pathway: "Curator", endpoint: "POST /api/inquiries", types: ["curator", "curatorial", "museum"], primary_form: "/contact, /archive#archive-inquiry" },
  { pathway: "Gallery", endpoint: "POST /api/inquiries", types: ["gallery"], primary_form: "/contact, /prints#prints-inquiry (institutional)" },
  { pathway: "Press / Publisher", endpoint: "POST /api/inquiries", types: ["press", "publisher"], primary_form: "/contact, /cv contact section" },
  { pathway: "Film / Screening", endpoint: "POST /api/inquiries", types: ["film_programmer"], primary_form: "/contact, /moving" },
  { pathway: "Book", endpoint: "POST /api/inquiries", types: ["book_inquiry", "purchase", "signed_copy"], primary_form: "/books#books-inquiry, /contact" },
  { pathway: "Archive / Research", endpoint: "POST /api/inquiries", types: ["research", "academic"], primary_form: "/archive#archive-inquiry, /contact" },
  { pathway: "Licensing", endpoint: "POST /api/inquiries", types: ["licensing"], primary_form: "/prints/:slug, /contact" },
  { pathway: "General", endpoint: "POST /api/inquiries", types: ["general"], primary_form: "/contact" },
  { pathway: "Newsletter", endpoint: "POST /api/newsletter", types: ["archive-notes", "books", "prints", "moving-image", "exhibitions", "all-updates"], primary_form: "/journal newsletter form" },
];
