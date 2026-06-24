# KOBIISRAEL.COM — PRD

## Original Problem Statement
Foundation, brand direction, navigation system and homepage wireframe for the upgraded
KOBIISRAEL.COM website — a world-class artist site for Kobi Israel / Yaqov Israel Grossi
(autobiographical photographer & filmmaker). Sophisticated, cinematic, museum-aware,
collector-friendly. No invented biography, exhibitions, prices, awards or collectors.

## User Choices (verbatim, captured via ask_human)
- Heading typography: **Playfair Display**
- Accent palette: **Both deep red (#8B1C1C) and dark gold (#C19B54)**
- Theme: **Dark cinematic (off-black #0a0a09, warm cream #fdfcf9)**
- Backend scope: **Inquiries + newsletter signup storage (FastAPI + MongoDB)**
- Image placeholders: **Mixed — toned photos for hero / featured / split, plain blocks for project cards**

## Personas
1. **Collector** — looking for limited edition prints, availability and signed editions.
2. **Gallery / curator** — researching the artist's body of work, exhibitions, CV.
3. **Museum / publisher / film programmer** — looking for monographs, catalogues, moving image.
4. **Queer art / photography researcher** — exploring themes of masculinity, desire, exile, memory.
5. **New visitor** — first-time discovery of the work.

## Brand Foundation
- Theme: Dark Cinematic Editorial (design_guidelines.json — Archetype 5 / Luxury)
- Typography: Playfair Display (headings), Manrope (body)
- Palette: ki-bg #0a0a09, ki-fg #fdfcf9, ki-beige #d9d3c7, ki-gold #C19B54, ki-red #8B1C1C
- Navigation: Home, Still, Moving, Projects, Prints, Books, Archive, CV, Journal, Contact

## Architecture
- **Backend** (FastAPI + MongoDB at `/app/backend/server.py`)
  - `GET  /api/` — health/welcome
  - `GET  /api/projects` — list of 7 selected projects (static seed)
  - `GET  /api/projects/{slug}` — single project
  - `POST /api/inquiries` — collector / gallery / press / general inquiries
  - `GET  /api/inquiries` — list (unauthenticated for now — P1 to lock down)
  - `POST /api/newsletter` — newsletter subscription (idempotent by email)
  - `GET  /api/newsletter` — list (unauthenticated — P1 to lock down)
- **Frontend** (React + Tailwind + shadcn/ui at `/app/frontend/src`)
  - `pages/Home.jsx` composes 11 sections
  - `pages/Placeholder.jsx` for inner nav routes (Still, Moving, Projects, Prints, Books, Archive, CV, Journal, Contact)
  - `components/layout/{Layout, Navbar, Footer}.jsx`
  - `components/sections/*` — Hero, ConceptualEntry, SelectedWorks, ProjectCard, StillMovingSplit, FeaturedProject, PrintsCollector, BooksSection, CredibilityStrip, ArtistStatement, CurrentProjects, ContactSection
  - `data/site.js` — placeholder content (To be confirmed by artist)
  - `lib/api.js` — axios client using `REACT_APP_BACKEND_URL`
  - `constants/testIds/home.js` — full registry of `data-testid` values

## What's Been Implemented (2026-06-24)
- ✅ Brand foundation: tokens, fonts, dark cinematic theme
- ✅ Main navigation (10 items) — desktop bar + mobile drawer, keyboard accessible
- ✅ Homepage wireframe with all 11 sections and all CTAs from spec
- ✅ Reusable components: ProjectCard, BookCard pattern, credibility cells, inquiry form
- ✅ Inquiry form (4 types: general / collector / gallery_curator / press) → POST /api/inquiries
- ✅ Newsletter signup ("The Archive Notes") → POST /api/newsletter (idempotent)
- ✅ SEO: page title + meta description, semantic h1/h2/h3, alt text placeholders
- ✅ Placeholder inner pages for all nav routes
- ✅ Tested end-to-end (backend 7/7, frontend 52/53)

### Still / Photography page (`/still`) — 2026-06-24
- ✅ Cinematic hero (title "Still", subtitle, intro, view-projects + collector CTAs)
- ✅ Curatorial intro "Still Images as Memory Objects"
- ✅ Project index: 12 cards (7 original + Military/Masculinity Archive, Soho/Urban Encounters, Portraits and Bodies, Landscapes and Exile, Personal Archive); each card has image placeholder, status badge, year, location, medium, description, Enter Project CTA
- ✅ Filters bar with 11 tabs (All, Autobiography, Masculinity, Queer/Homoerotic Codes, Travel Diaries, Portraits, Landscape, Urban Memory, Military, Books, Available Prints); horizontal scroll on mobile; empty state included
- ✅ Featured project block: Cuba, Love Story — three CTAs (View Project, Request Print Availability, View Related Book)
- ✅ Collector pathway section with 12-field metadata grid
- ✅ Archive Notes section with 10 cards (Memory, Desire, Masculinity, Exile, Travel, Military, Bodies, Cities, Landscape, The Self as Witness)
- ✅ Reusable `ArtworkDetail` component covering all metadata fields (title, series, year, location, medium, dimensions, edition size/number, print type, signature, COA, availability, price, publication/exhibition/collection history, artwork note, image alt, inquiry button)
- ✅ Reusable `ProjectDetailTemplate` component covering: title, subtitle, year range, location, intro statement, gallery, selected works (via ArtworkDetail), moving-image connection, book connection, print availability, exhibition/publication history, press quotes, collector inquiry + back-to-Still
- ✅ Wired `/projects/:slug` to the template with data from STILL_PROJECTS
- ✅ Per-page SEO: title `Still Photography | Kobi Israel`, keyword-rich description; project pages set title to `{Project Title} | Kobi Israel`
- ✅ Fixed title race condition between App.js and page-level useEffects (App.js now only sets the homepage title)

### Moving / Film / Video page (`/moving`) — 2026-06-24
- ✅ Cinematic hero (title "Moving", subtitle, intro, View Moving Works + Film/Curator Inquiries CTAs); no autoplay
- ✅ Curatorial intro "When the Still Image Begins to Move"
- ✅ Moving works index: 12 cards (Cuba Love Story, A Chaos of Appearances, Still & Moving Diaries, Fragments of Life, River of Three Crossings, Intimate Strangers, Investigating Things Past, Personal Archive Films, Music/Sound Works, Experimental Film Fragments, Travelogue Works, Future Film Projects); each card has video-still placeholder, status badge, year, duration, format, synopsis, View Work CTA
- ✅ 10 filter tabs (All, Short Films, Video Art, Visual Diaries, Music/Sound, Travelogue, Autobiography, Queer/Desire, Archive Fragments, Works in Progress)
- ✅ Featured moving work block: Cuba, Love Story — full metadata grid (Duration, Format, Language/subtitles, Screening status) + 3 CTAs (Watch Excerpt, View Related Photography, Film/Curator Inquiry)
- ✅ Moving Image Statement section
- ✅ Curator pathway section ("Screenings, Installations and Curator Inquiries") with 10-field metadata grid and Request Screening CTA
- ✅ Still ↔ Moving bridge: 3 cards (Photography into Film, Memory into Sequence, Archive into Voice)
- ✅ Sound, Voice and Music section with placeholder fields + static audio waveform placeholder; "Explore Sound Works" CTA
- ✅ Archive Fragments section: 10 cards (Cities, Bodies, Rooms, Travel, Memory, Exile, Family, Desire, Silence, Night) with status badges
- ✅ Reusable `VideoWorkDetail` component covering: title, subtitle, year, duration, format, language, subtitles, director, camera, editor, sound, synopsis, statement, stills gallery, excerpt/poster placeholder, screening/festival/installation history, press quotes, related photography/book/sound, curator + licensing inquiry CTAs — no autoplay, captions/transcript placeholders noted
- ✅ Per-page SEO: title `Moving Image | Kobi Israel`, keyword-rich description
- ✅ Tested: 113/113 frontend assertions ✅

### Individual project detail pages (`/projects/:slug`) — 2026-06-24
- ✅ All 19 unique project slugs from STILL_PROJECTS + MOVING_WORKS render a working detail page (5 still+moving, 7 still-only, 7 moving-only)
- ✅ `lib/projects.js` — `getProject(slug)` merges the two registries with per-slug `ENRICHMENT` placeholder map (subtitles, intro statements, optional hero images)
- ✅ Status badges: `project-badge-still` and/or `project-badge-moving` shown depending on which registries the slug appears in
- ✅ Hero image strip rendered when enrichment provides `hero_image` (e.g. Cuba Love Story)
- ✅ `ProjectDetailTemplate` (existing) renders: hero, gallery placeholders, selected works via `ArtworkDetail`, conditional moving-image-connection stub, book connection, print availability CTA, exhibition + publication history, press quotes, collector inquiry + back-to-Still CTAs
- ✅ When `hasMoving === true` → full `VideoWorkDetail` block appended after the template (no autoplay) and the small moving-image stub inside the template is suppressed (mutually exclusive — verified across all 19 slugs)
- ✅ `NotFound` component at `pages/NotFound.jsx` (`data-testid=project-not-found`) used for both unknown `/projects/:slug` and the catch-all `path="*"` route
- ✅ Per-page SEO: `{Project Title} | Kobi Israel`, description seeded from intro statement
- ✅ Tested: 19/19 project pages + 2/2 404 paths + 2/2 nav regressions + mobile layout — 100% pass

### Limited Edition Prints page (`/prints`) — 2026-06-24
- ✅ Cinematic hero (title "Limited Edition Prints", subtitle, intro, View Available Works + Request Print Availability CTAs)
- ✅ Collector Viewing Room — narrow editorial intro
- ✅ Selected Print Collections — 10 collection cards (Cuba Love Story, River of Three Crossings, Fragments of Life, Intimate Strangers, Views, Parisian Postcards, Investigating Things Past, Masculinity/Military Archive, Portraits and Bodies, Landscapes and Exile); each links to the matching project detail page
- ✅ Works Available by Inquiry — 8 placeholder artwork cards with full metadata grid (series, year, medium, dimensions, edition, availability, price). Each "Request Details" button prefills the inquiry form via forwardRef API
- ✅ Print Information — 10 info blocks (Medium, Edition, Signature, Certificate of Authenticity, Condition, Framing, Shipping, Availability, Price on Request, Secondary Market Notes)
- ✅ Artist, Archive and Provenance — 8 trust groups, all "To be confirmed by artist"
- ✅ Request Print Availability form — Full collector inquiry form: name, email, phone (optional), country, artwork of interest, preferred size, budget range (optional), interest type (5 options: Collecting, Curatorial/Gallery, Institutional, Press, Other), message, consent checkbox. Submit blocked without consent. Posts to `/api/inquiries`
- ✅ Gallery / Museum / Institutional Inquiries — 8 institutional fields + dedicated CTA that flips the form's inquiry_type to "institutional" and scrolls
- ✅ Secondary Market and Rare Works — discreet placeholder section
- ✅ Related Archive — 6 cross-archive links (Still, Moving, Books, CV, Archive Notes, Contact)
- ✅ Backend extended: `InquiryCreate`/`Inquiry` accept optional `phone`, `country`, `preferred_size`, `budget_range`, `consent`; `InquiryType` literal adds `"institutional"`
- ✅ Per-page SEO: title `Limited Edition Prints | Kobi Israel`, keyword-rich meta description
- ✅ Tested: backend 12/12 pytest + frontend 81/81 Playwright assertions (form prefill from card, institutional flip, consent guard, regression across all earlier pages) — 100% pass

### Books, Catalogues and Publications page (`/books`) — 2026-06-24
- ✅ Cinematic hero (title "Books", subtitle, intro, View Publications + Book Inquiries CTAs)
- ✅ Editorial intro "Books as Portable Archives"
- ✅ Publications index: 10 publication cards (Cuba Love Story, Fragments of Life, River of Three Crossings, Intimate Strangers, A Chaos of Appearances, Artist Catalogues, Exhibition Catalogues, PDF Archive, Upcoming Publications, Selected Essays and Texts) — full metadata grid; View link conditionally routes to /projects/{slug} when a related project exists, otherwise a muted "Details to be confirmed" label
- ✅ Featured book block (Cuba, Love Story): cover placeholder + spreads strip + 8-field metadata grid + 3 CTAs (View Related Project, Request Book Availability, Collector Inquiry)
- ✅ Purchase and Availability section: 10 blocks + Request Book Availability CTA
- ✅ PDF Archive (7 cards): Artist Statement PDF, Selected Essays, Exhibition Catalogues, Project Notes, Press PDFs, Book Samples, Archive Texts; each Request Access CTA prefills the form with type="research" + the PDF title
- ✅ Texts, Essays and Notes (10 cards): Memory, Masculinity, Desire, Exile, Photography, Moving Images, Autobiography, Travel, Queer Codes, Archive Notes — each Read Text CTA links to /journal
- ✅ Publication History (9 groups): all marked "To be confirmed by artist"
- ✅ Book Inquiry form: name, email, country, book of interest, interest type (7 options: Purchase, Signed copy, Collector inquiry, Research, Press, Institutional, Other), message, consent. Submit blocked without consent. Posts to `/api/inquiries`
- ✅ Related Archive: 7 cross-archive links (Still, Moving, Projects, Limited Edition Prints, Archive, CV, Contact)
- ✅ Reusable `PublicationDetail.jsx` template covering every field in spec (title, subtitle, year, publisher, designer, editor, author, photographer, contributors, format, dimensions, page count, binding, ISBN, language, edition, signed copy, price, stock status, cover, spread gallery, description, artist note, related photography/moving/prints, press quotes, exhibition history, purchase link, PDF link, inquiry button) — exported for future use; not yet routed
- ✅ Backend extended: `InquiryType` literal adds `purchase`, `signed_copy`, `research` (all 8 valid values now)
- ✅ Per-page SEO: title `Books and Publications | Kobi Israel`, keyword-rich meta description
- ✅ Tested: backend 13/13 pytest + frontend 85/85 Playwright (full content, form prefill from card / featured / purchase / PDF, consent guard, regressions across all pages, mobile 390px) — 100% pass

### CV / Biography / Exhibitions / Collections page (`/cv`) — 2026-06-24
- ✅ Cinematic hero (title "CV", Read Biography + Download CV CTAs — Download fires placeholder toast, no real file)
- ✅ Biography + Artist Positioning (3 cards: Photography, Moving Image, Archive)
- ✅ Selected Exhibitions — Solo + Group (4 placeholder entries each)
- ✅ Collections — 4 subsections (Public, Private, Institutional, Archive/Library) × 3 entries
- ✅ Awards and Recognition — 4 entries
- ✅ Publications and Press — 7 subsections × 3 entries
- ✅ Books and Artist Publications — 4-book list linking to /books
- ✅ Selected Project Timeline — 11 entries with vertical timeline; links to /projects/{slug}
- ✅ Professional Materials — 8 download placeholders (toast-only; High-Res Request routes to contact form with type="press")
- ✅ Professional Inquiries — 3 pathway cards (Curator/Museum, Press/Publication, Collector/Gallery)
- ✅ Contact form — 9-option inquiry type with required consent
- ✅ Backend extended: `InquiryType` literal now has 14 values (added gallery, curator, museum, publisher, film_programmer, academic); zero regression
- ✅ Per-page SEO: title `CV and Biography | Kobi Israel`
- ✅ Tested: backend 14/14 pytest + frontend 95/96 Playwright — all blocking assertions pass

### Archive / Project Index / Research Library page (`/archive`) — 2026-06-24
- ✅ Cinematic hero (title "Archive", subtitle, intro, Explore Projects + Search the Archive CTAs)
- ✅ Editorial intro "A Map of the Work"
- ✅ Archive Categories — 12 category cards (Photography, Moving Image, Prints, Books, Texts, Exhibitions, Press, Notes, Sound, Current, Personal Mythology, Research)
- ✅ Project Index — 16 cards with search by title/place/theme/medium/year and 20-filter taxonomy; empty-state on no match; each card links to /projects/{slug}
- ✅ Suggested Pathways — 5 pathway cards (Collectors, Curators, Researchers, Viewers, Publishers) each pre-sets inquiry_type
- ✅ Archive Notes — 10 poetic note cards
- ✅ Research Library — 12 file/document cards; each Request CTA prefills the form (type='research', area=card title) and scrolls
- ✅ Archive Timeline — multi-entry vertical timeline with year_range/medium/location/event_type
- ✅ Personal Mythology — 10 motif cards
- ✅ Related Archive — 8 cross-archive links
- ✅ Archive Inquiry form — name, email, organisation, country, 10-option inquiry type (curatorial, research, press, publisher, collector, gallery, museum, licensing, academic, general), area of interest, message, required consent. Submit blocked without consent.
- ✅ Backend `InquiryType` literal now also includes 'curatorial' and 'licensing'
- ✅ Per-page SEO: title `Archive | Kobi Israel`, keyword-rich meta description
- ✅ Tested: backend 14/14 pytest + frontend 10/10 Playwright (filter, search, library prefill, consent guard, full form submit + success) — 100% pass

### Journal / Archive Notes / Writing page (`/journal`) — 2026-06-24
- ✅ Cinematic hero (title "Journal", subtitle, intro, Read Archive Notes + Explore Projects CTAs)
- ✅ Editorial intro "Writing as an Extension of the Image" with side image placeholder
- ✅ Featured Notes — 8 featured writing entries (A Chaos of Appearances, Still Images as Memory Objects, When the Still Image Begins to Move, Cuba Notes from the Archive, Masculinity as Performance, The Stranger and the Witness, Rooms Bodies and Borders, Memory Does Not Return Whole); each Read Note routes to /journal/{slug}
- ✅ Categories — 17 writing categories (Memory, Photography, Moving Image, Masculinity, Desire, Exile, Travel, Queer Codes, Military, Bodies, Cities, Childhood, Books, Prints, Sound and Music, Artist Notes, Project Notes)
- ✅ All Notes index — 15 entries with searchable + filterable index (13 filter tabs); empty-state on no match
- ✅ Notes by Project — 11 project-linked note cards each routing to /projects/{slug}
- ✅ Recurring Motifs — 15 motif cards (Masks, Faces, Soldiers, Strangers, Rooms, Borders, Water, Cities, Bodies, Lovers, Silence, Childhood, Exile, Memory, The Witness)
- ✅ Voice, Film and Time — 6 cards (Voice-over Fragments, Film Notes, Sound Notes, Travelogue Texts, Still-to-Moving Sequences, Unfinished Scripts)
- ✅ Receive Archive Notes — newsletter form with email + 6 interest options (artist-notes, books, prints, moving-image, exhibitions, all-updates); posts to /api/newsletter with new optional `interest` field
- ✅ Explore More — 8 related archive links (Still, Moving, Projects, Prints, Books, Archive, CV, Contact)
- ✅ Individual writing entry page at `/journal/:slug` — reusable template with hero image placeholder, title, subtitle, meta block (date/category/medium/project), body text with pull quote, image insert placeholder, 5 related links (still/moving/book/print/archive note), Back to Journal + Send an Inquiry CTAs. Unknown slugs fall through to NotFound.
- ✅ Backend extended: `NewsletterCreate` and `NewsletterSubscription` now carry an optional `interest` field; existing newsletter endpoint remains idempotent on email
- ✅ Per-page SEO: title `Journal and Archive Notes | Kobi Israel`, keyword-rich meta description, full H1/H2 semantic hierarchy
- ✅ Tested: backend 18/18 pytest + frontend 58/58 Playwright (22 journal + 15 entry + 10 archive + 9 regression + 2 mobile) — 100% pass; zero console errors across all 9 primary routes

### Contact / Inquiries / Professional Pathways page (`/contact`) — 2026-06-24
- ✅ Cinematic hero (title "Contact", subtitle, intro, Send Inquiry + Request Print Availability CTAs — Print CTA prefills inquiry_type='collector')
- ✅ Editorial intro "Professional Inquiries" with side image placeholder
- ✅ Pathway cards — 9 pathways (Collector, Gallery, Curator/Museum, Press/Publication, Film/Screening, Book, Archive/Research, Licensing, General); each Start Inquiry button sets the form select and scrolls
- ✅ Main contact form: name, email, phone (optional), organisation (optional), country, 12-option inquiry type (collector, gallery, curator, museum, press, publisher, film_programmer, book_inquiry, research, licensing, academic, general), project_interest (optional), conditional budget_range (only for collector/gallery), conditional deadline (only for press/publisher/film_programmer), message, required consent. Submit blocked without consent.
- ✅ Section pathways with field-list grids: Collector emphasis section, Curator/Museum (10 fields), Press/Publishing (9 fields), Film/Screening (10 fields), Books/Archive (8 fields); each section CTA prefills the correct InquiryType
- ✅ Contact Details — 4 placeholder cards (Email, Studio/archive location, Social links, Newsletter) all "To be confirmed by artist"; no private address, phone or social shown
- ✅ Before You Write — professional guidance section
- ✅ Privacy section with placeholder text + "Privacy Policy · to be supplied" link (preventDefault stub)
- ✅ Explore Before Contacting — 8 related archive links
- ✅ Backend extended: `InquiryType` literal adds `book_inquiry` (17 values total); `InquiryCreate`/`Inquiry` add optional `organisation` (max 200) and `deadline` (max 100) fields
- ✅ Per-page SEO: title `Contact | Kobi Israel`, keyword-rich meta description, full H1/H2 semantic hierarchy
- ✅ Tested: backend 21/21 pytest + frontend 72/72 Playwright (57 contact-page + 15 regression/mobile/navbar) — 100% pass; navbar /contact active state verified; zero console errors across all 10 routes

### Project Detail Page Template upgrade (`/projects/:slug`) — 2026-06-24
- ✅ Full editorial monograph chapter: 13 spec sections in one reusable template (all existing testIDs preserved)
- ✅ Hero with project title, subtitle, year_range, location, medium, status badges (Still / Moving), 3 CTAs (View Image Sequence, Request Print Availability, Related Moving Image — last only when hasMoving)
- ✅ Project Summary section with side image placeholder
- ✅ Curatorial Note section
- ✅ Image Sequence with lightbox: 8 thumbnails, click-to-open, prev/next buttons, keyboard ArrowLeft/ArrowRight/Escape, body-scroll lock, backdrop-close, Request Details CTA that closes lightbox and hashes to #project-inquiry
- ✅ Selected Works (unchanged — uses ArtworkDetail)
- ✅ Moving Image Connection stub (only when hasMoving=false; rich VideoWorkDetail otherwise from ProjectDetail.jsx)
- ✅ Books and Publications connection card (cover placeholder + 6-field metadata + View Book + Book Inquiry CTAs)
- ✅ Limited Edition Prints metadata block (8 fields all placeholder) + Request Print Availability CTA
- ✅ Archive Notes — 8 motif cards (Memory, Place, Body, Witness, Desire, Exile, Time, Encounter)
- ✅ Exhibition + Publication History (preserved from previous template)
- ✅ Press Quotes (preserved; stable content-derived keys retained)
- ✅ Project Metadata block — 16 structured fields (title/subtitle/year/location/medium/format/number_of_works/related_*/archive_status/availability_status/last_updated etc.) all using TBC fallback
- ✅ Related Projects section — 6 cards (Still, Moving, Books, Prints, Archive, Journal)
- ✅ Project Inquiry form — name, email, organisation (opt), country, 11-option inquiry type, **project (auto-filled with project title, readonly)**, artwork (opt), message, required consent. Submit blocked without consent. Success element + form reset on success. Submitted flag clears when user resumes typing (UX polish from testing agent feedback).
- ✅ Backend: no schema changes needed; POST /api/inquiries already accepts the payload
- ✅ ProjectDetail.jsx wrapper updated to pass through slug + extended metadata fields
- ✅ Tested: backend 21/21 pytest + frontend full suite (14 new sections × 2 representative projects + lightbox keyboard/backdrop/request flow + consent gate + 10-route regression + mobile 390px) — 100% pass; zero console errors

### Individual Artwork Detail / Print Record template (`/prints/:slug`) — 2026-06-24
- ✅ New standalone page `ArtworkRecord.jsx` covering all 12 spec sections plus hero + footer
- ✅ Hero with title, series ("From <series>" or TBC placeholder), year/location/medium row, caption, 3 CTAs (Request Artwork Details, Request Print Availability, Back to Project — last only when series_slug exists)
- ✅ Premium viewing layout: large click-to-enlarge image on the left + side panel on the right (Availability headline, price, 6 quick metadata fields, Inquire/Licensing CTAs)
- ✅ Click-to-enlarge lightbox with Escape + backdrop close + body-scroll lock
- ✅ 4 alternate-view thumbnail placeholders
- ✅ Artwork Details — 20 structured metadata fields (Title, Series/Project, Year, Location, Medium, Print type, Paper type, Image size, Paper size, Frame size, Edition size, Edition number, Signature, Certificate, Condition, Framing status, Availability, Price, Archive status, Last updated)
- ✅ Artwork Note section with TBC placeholder text
- ✅ Project Context section with project metadata + View Full Project (or Browse Projects fallback) CTA
- ✅ Print Availability — 11 placeholder fields + Request Print Availability CTA
- ✅ Provenance, Exhibition & Publication History — 3-column layout
- ✅ Related Works grid — 4 placeholder cards
- ✅ Related Media — 6 cards (Moving Image, Book, Archive Note, Exhibition, Text, Sound/Music)
- ✅ Artwork Inquiry form — name, email, phone (opt), country, readonly artwork title + series (auto-filled from slug), 9 inquiry types, preferred size (opt), budget range (opt), message, required consent. Submitted flag clears on resume typing.
- ✅ Licensing & Reproduction — 8 use-case grid + Request Licensing Information CTA
- ✅ Archive Record status block with 8 possible status labels + "Availability to be confirmed" default
- ✅ Slug-derived display title (e.g. `cuba-soldier-portrait-01` → `Cuba Soldier Portrait 01`) — no fabricated records; `ARTWORK_REGISTRY` is empty by design per content-accuracy rules
- ✅ Per-page SEO: title `[Title] from [Series] | Kobi Israel` (or just `[Title] | Kobi Israel`), spec-compliant meta description
- ✅ Backend: no schema changes; POST /api/inquiries already accepts the artwork payload
- ✅ Tested across iterations 13 & 14: backend 21/21 pytest + frontend full suite (18 sections + lightbox 4-way close + 6 CTAs scroll + consent gate + 11-route regression + mobile 390px + bug-fix retest) — 100% pass

### Final site-wide polish + launch-readiness — 2026-06-24
- ✅ Global 4-column footer: Studio / Explore (10 NAV_ITEMS) / Professional Inquiries (5 pathways linking to /contact) / Follow & Contact (4 TBC placeholders) + legal bottom bar with 5 links + spec-compliant copyright text
- ✅ 5 legal placeholder pages at `/legal/{privacy,terms,copyright,cookies,accessibility}` via shared `Legal.jsx` (each page: H1, 3–4 placeholder sections, related-legal cross-links, return-home/contact CTAs, all marked "Final wording to be reviewed before launch")
- ✅ Admin `/launch-checklist` page with 5 sections (Domain & Technical, Content, SEO, Design, Commercial) and 43 reviewable items; `noindex, nofollow` meta + robots.txt Disallow
- ✅ Rewritten cinematic 404 NotFound page per spec: H1 "Page Not Found", 3 CTAs (Return Home / Explore Archive / Contact), backward-compat `project-not-found` testid alias preserved for iteration_12 invariant
- ✅ Homepage title + meta description set in code (`Home.jsx`) AND in `public/index.html` so first-paint SEO is correct before React hydrates
- ✅ `public/robots.txt` with site-root, /launch-checklist disallow, and Sitemap reference
- ✅ `public/sitemap.xml` listing all 14 public URLs with appropriate changefreq + priority
- ✅ Tested: backend 21/21 pytest + frontend FULL site-wide regression (4 footer cols × every page, 24 footer testids, 5 legal pages × {title/H1/sections/placeholder phrase}, launch-checklist 5/43, 404 + project-not-found backward-compat, footer navigation flows, 12-route regression with zero console errors, mobile 390px no overflow on /, /launch-checklist, /legal/privacy) — 100% pass

### Content migration system (Wix → KOBIISRAEL.COM) — 2026-06-24
- ✅ All 6 Wix source pages crawled and content extracted verbatim
- ✅ Structured `migration.js` data module: 5 homepage fragments (Borges epigraph + artist statements), 9 project records with real descriptions and year ranges (Cuba Love Story 1993–2012, River of Three Crossings 2001–2017, Fragments of Life 2000–2007, Intimate Strangers 2001–2006, Views 1999–2003, Parisian Postcards 2010, Investigating Things Past 2023–, Promised Lands trilogy, Boulevards of Broken Dreams 1996), full prints facts (C-type, 80×100cm ed.5 / 50×60cm ed.10, collection claims), 6 book records with ISBN/publisher/dimensions/price tiers, FULL CV (1970 born, education×5, solo×5, group×23, catalogues×4, monographs×2, anthologies×4, awards×7, film×1), 19-row mapping table, 17-entry redirect map, 18-item missing-content checklist
- ✅ Admin dashboard at `/migration-review` (noindex,nofollow + robots.txt Disallow) with 11 sections covering: confirmed contact, source pages, homepage fragments, project records, prints facts, book records, CV preview, mapping table, redirect map, missing-content checklist, quality check
- ✅ **Confirmed artist email recovered: `kobi.israel.photography@gmail.com`** — surfaced in dashboard for easy replacement of TBC placeholders in footer and Contact section
- ✅ **Confirmed biography facts**: born 1970 Tel-Aviv, lives/works London, MA Central Saint Martins 2010
- ✅ Distinctive artist voice preserved verbatim — Borges epigraph, "remembrance of things past", "homoerotic codes", trilogy framing (Canaan/America/Hampstead Heath), "still and moving diaries"
- ✅ Collection claims (Madonna, Elton John, George Michael, Joe Wright, NPG) preserved but flagged 'needs-review' — never published unconfirmed
- ✅ Tested: backend 21/21 pytest + frontend all selector/structure/nav/regression assertions pass; only "issue" was a prose miscount in the task description (data has 23 group exhibitions matching the Wix source; the prose said 24) — no code or data fix needed

### Final homepage copywriting upgrade — 2026-06-24
- ✅ Refined HERO subtitle to singular "moving image" + added `HERO_COPY_OPTIONS` constant with 3 hero options + recommendation rationale (Option 2 implemented)
- ✅ ARTIST_STATEMENT updated to use the artist's own Wix language: "remembrance of things past", "empty landscapes, intimate encounters and touristic travelogues as backdrops for an inside quest"
- ✅ CONCEPT_BODY refined: "An archive of fragments — soldiers and strangers, lovers and landscapes, cities, childhood and exile. Still and moving diaries from the unstable theatre of memory."
- ✅ FEATURED_PROJECT (Cuba) description now uses the artist's verbatim Wix wording: "The confusing and bewildering paradox of the masculine and militarist blended with the homoerotic in Cuba — evoking the artist's own memories of growing up in young, macho and militarist Israel."
- ✅ SPLIT_MEDIA still+moving descriptions refined; moving now names real existing projects (A Cuban Love Story, Parisian Postcards, Investigating Things Past)
- ✅ All 7 SELECTED_PROJECTS entries updated with real Wix-confirmed year ranges, locations, mediums and verbatim descriptions: Cuba 1993–2012, River of Three Crossings 2001–2017, Fragments of Life 2000–2007 Tel-Aviv, Intimate Strangers 2001–2006 Soho London, Views 1999–2003 Israel, Parisian Postcards 2010 (three-channel video, 18 min), Investigating Things Past 2023– (110mm negatives)
- ✅ Homepage SEO metadata: title 58/60 chars, description 151/155 chars, OG title + OG description + OG type set (also baked into public/index.html for first-paint)
- ✅ Alt-text placeholders updated to spec format: "[Image type] by Kobi Israel, details to be confirmed."
- ✅ Fixed `lib/projects.js` getProject(): now threads medium/format/status/description fields onto the template; intro_statement priority flipped so the verbatim Wix descriptions win over enrichment placeholders
- ✅ Tested across iterations 17 + 18: backend 21/21 pytest + frontend full homepage assertions (SEO, content, forbidden-phrase check, alt, 7-card grid, CTAs, mobile overflow, 15-route regression with zero console errors) + bug-fix retest (Parisian Postcards + Investigating Things Past medium/year/location render correctly, Cuba intro is now Wix-verbatim, hero subtitle singular) — 100% pass

## Backlog (prioritised)

### P0 — content readiness (artist must supply)
- Final hero image and alt text
- Final project images for the 7 selected works
- Confirmed year ranges, mediums and short descriptions per project
- Final artist statement, CV and full biography
- Confirmed exhibitions, collections, awards, publications for credibility strip
- Real book covers, ISBNs, publishers, prices, buy links and signed copy info
- Print pricing, sizes, edition numbers and availability
- Real contact email and social handles

### P1 — inner pages
- All ten core navigation pages now built (Home, Still, Moving, Projects/:slug, Prints, Books, Archive, CV, Journal, Contact)
- Next: Individual Book Detail Pages (`/books/:slug`) using the existing `PublicationDetail` template

### P1 — backend hardening
- Admin auth for `GET /api/inquiries` and `GET /api/newsletter`
- Rate limiting + honeypot on POST inquiries / newsletter (spam protection)
- Email delivery for inquiry submissions (Resend / SendGrid) — currently NOT sending email
- Tighten CORS to production domain
- Move SELECTED_PROJECTS out of server.py into a JSON seed or DB collection

### P2 — enhancements
- Lightweight CMS-style admin to update projects / books / prints
- Print buy flow (Stripe) with edition tracking
- Moving image player with chapter markers and transcript
- OG image + structured data (Person, CreativeWork) for richer SEO
- Multilingual (EN / HE / IT) if requested

## Tech Stack
- FastAPI + Motor + MongoDB
- React 19, React Router 7, Tailwind 3.4, shadcn/ui, sonner, axios, lucide-react
- Hosted preview: https://still-moving-1.preview.emergentagent.com

### Final SEO + Google ranking strategy — 2026-06-24
- ✅ Central SEO helpers added at `lib/seo.js`: `applyPageSeo`, `setCanonical`, `setJsonLd`, `setRobots`, plus schema builders (`websiteSchema`, `personSchema`, `breadcrumbSchema`, `creativeWorkSchema`, `visualArtworkSchema`, `articleSchema`, `contactPageSchema`) and image-alt helpers (`defaultAlt`, `projectAlt`, `artworkAlt`, `bookCoverAlt`, `videoStillAlt`)
- ✅ Page-level SEO map + redirect map + cluster + launch checklist consolidated in `data/seo.js` (17-row SEO_MAP, 10-row REDIRECT_MAP, 8-route NOINDEX_ROUTES, 6 SEO_CLUSTERS, 9-item content calendar, 15-item launch checklist, image SEO rules)
- ✅ Canonical host fixed to apex `https://kobiisrael.life` (no www) baked into every public page's `<link rel=canonical>` + `og:url`, plus `og:site_name`, `twitter:card` defaults
- ✅ Per-page JSON-LD attached via `setJsonLd(id, data)` — Home has WebSite+Person+Breadcrumb (3 blocks), CollectionPage on Still/Moving/Prints/Books/Archive, Blog on Journal, Person+ProfilePage on CV, ContactPage on Contact, CreativeWork on /projects/:slug, VisualArtwork on /prints/:slug, Article on /journal/:slug — all with BreadcrumbList
- ✅ Legal placeholder pages (`/legal/privacy|terms|copyright|cookies|accessibility`) now ship `robots=noindex,nofollow` until artist-approved
- ✅ Sitemap expanded from 14 → 35 URLs covering all 12 project slugs + 8 featured journal entries + legal placeholders
- ✅ robots.txt adds `Disallow: /seo-review` alongside the existing `/launch-checklist` + `/migration-review` rules
- ✅ Admin SEO Review dashboard at `/seo-review` (noindex,nofollow) with searchable SEO map, per-page metadata detail, content clusters, redirect table, noindex routes list, image SEO rules, content calendar, and launch checklist
- ✅ Canonical SEO strategy document at `/app/seo_strategy.md` — covers all 30 sections of the spec (positioning, intent map, URL structure, titles/meta rules, headings, internal linking, image SEO, structured data plan, entity SEO, content clusters, Wix→kobiisrael.life redirects, Search Console placeholders, quality review, dashboard, launch checklist)
- ✅ `public/index.html` updated with first-paint canonical + OG/Twitter tags for the homepage
- ✅ Tested: backend 21/21 pytest + frontend testing_agent iteration_19 → 100% pass (all 13 features verified: canonical+title+robots+JSON-LD across 10 main pages, 3 detail templates with correct schema types, 5 legal pages noindex, 3 admin pages noindex, sitemap + robots.txt content, mobile 390px no overflow, zero console errors, inquiry + newsletter forms still 201)

### Final conversion strategy + professional inquiry optimisation — 2026-06-24
- ✅ Canonical conversion-strategy data model added at `frontend/src/data/conversion.js`: 8 audiences · 8-row visitor journey map · 10-step homepage flow · 7 audience pathways (with trust elements, safe CTAs, forbidden language and reassurance copy) · 29-row CTA placement map · form microcopy reference · trust elements · 10-row friction-reduction table · conversion-safe vocabulary (use vs avoid) · newsletter strategy · 15 analytics placeholders · 11 mobile checks · 10 accessibility checks · 13-row safety review · 10 quality-test questions · 10-row inquiry-routing reference · 15-row conversion dashboard status registry
- ✅ Admin dashboard at `/conversion-review` (noindex,nofollow, robots.txt disallowed) — 18 sections rendered, searchable journey table, 7 audience pathway cards, vocabulary use-vs-avoid, microcopy reference, safety review with status pills, cross-links to `/seo-review` and `/launch-checklist`
- ✅ Canonical conversion strategy document at `/app/conversion_strategy.md` covering all 24 sections of the brief
- ✅ `NOINDEX_ROUTES` + SEO_MAP in `data/seo.js` extended to include `/conversion-review`; `public/robots.txt` adds `Disallow: /conversion-review`
- ✅ Tested: testing_agent iteration_20 → 100% pass (8/8 features: dashboard renders with correct testid + title + noindex meta; 18 sections + 5 data tables with exact row counts; journey search filter works; 7 pathway + 8 audience cards present; robots.txt disallow correct; smoke regression across 10 main pages + 3 admin pages still clean; inquiry POST /api/inquiries → 201)