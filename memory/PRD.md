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
- ✅ Tested end-to-end (backend 7/7, frontend 52/53 — sole fail is a test-script artifact)

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
