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
- ✅ Publications and Press — 7 subsections (Books, Catalogues, Press, Interviews, Essays, Anthologies, Academic References) × 3 entries
- ✅ Books and Artist Publications — 4-book list linking to /books
- ✅ Selected Project Timeline — 11 entries with vertical timeline; links to /projects/{slug}
- ✅ Professional Materials — 8 download placeholders (toast-only; High-Res Request routes to contact form with type="press")
- ✅ Professional Inquiries — 3 pathway cards (Curator/Museum, Press/Publication, Collector/Gallery) — each pre-sets contact form inquiry_type
- ✅ Contact form — name, email, organisation, country, 9-option inquiry type (collector / gallery / curator / museum / press / publisher / film_programmer / academic / general), message, required consent
- ✅ Backend extended: `InquiryType` literal now has 14 values (added gallery, curator, museum, publisher, film_programmer, academic); zero regression
- ✅ Per-page SEO: title `CV and Biography | Kobi Israel`
- ✅ Tested: backend 14/14 pytest + frontend 95/96 Playwright — all blocking assertions pass

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
- `/still` — Still Images gallery + project filters
- `/moving` — Moving Image works with video embeds + captions/transcripts
- `/projects/{slug}` — dedicated project pages (image essay layout)
- `/prints` — collector page with full edition table + inquiry per work
- `/books` — full books / catalogues / PDFs page with buy links
- `/archive` — working archive structure
- `/cv` — full CV with print-friendly version
- `/journal` — editorial journal / blog (likely needs CMS)
- `/contact` — dedicated multi-form contact (currently routes to homepage form)

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
