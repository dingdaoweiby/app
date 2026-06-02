# Supernova Elite Education Destination — Full Site (v10)

## Status: Brand renamed · Legal pages live · Form backend pending

## What's Live
- **10 routes** rendered via React Router (BrowserRouter + ScrollToTop)
  - `/` Home · `/k-12` · `/college/strategic-planning` · `/college/admissions-consulting`
  - `/graduate` · `/research` · `/international` · `/contact` (Schedule a Consultation)
  - **NEW** `/privacy` · **NEW** `/terms`
- **Branding (Feb 2026)**: All "Supernova Education" replaced with full company name
  "**Supernova Elite Education Destination**" using a 2-line crest treatment:
  - Top line (serif display): `Supernova Elite`
  - Bottom line (mono uppercase, orange, letterspaced): `EDUCATION DESTINATION`
  - Applied in Nav, Footer, browser title, and legal pages
- **Footer (Feb 2026)**:
  - Tagline: `Growth Mindset. Clear Goals. Consistent Effort.`
  - Copyright: `© 2018 Supernova Elite Education Destination · All Rights Reserved`
  - Privacy and Terms now link to real pages (not `#`)
- **Privacy Policy** (`/privacy`) — 12 sections (Who we are, Information collected, How we
  use info, Children/minors, Sharing, International transfers, Retention, Your rights,
  Cookies, Security, Changes, Contact). Content adapted (rewritten, not copied) from
  Crimson Education's structure, tuned to educational-consulting realities (transcripts,
  essays, visa documents, minors).
- **Terms and Conditions** (`/terms`) — 12 sections (Acceptance, Services, Eligibility,
  Fees & Refunds, IP, Third parties, Disclaimers, Limitation of liability, Termination,
  Governing law NJ, Changes, Contact).
- **International page** — alignment verified: title on single line, service titles
  horizontally centered with their orange round icons.

## Tech
- React (CRA) + Tailwind + React Router v7
- Source Serif 4 · Playfair Display · IBM Plex Mono
- Palette: Navy `#0077C8`/`#163E72` · Mist `#EAF1F7` · White · Orange accent

## Backlog / Future (Prioritized)
- **P0** — Backend integration for "Schedule a Consultation" form. User has Resend in
  mind, target recipient `yingban2013@gmail.com`. User declined to provide API key in
  this session; revisit next session.
- P1 — Replace Unsplash placeholders with the practice's own commissioned photography
- P1 — Animation polish (scroll reveals, page transitions)
- P2 — Chinese locale (`/zh/...` routes) when user is ready
- P2 — Insights / blog section for SEO and parent education
- P2 — Founder bio page

## Files Modified This Session
- `/app/frontend/src/components/Nav.jsx` — 2-line brand mark
- `/app/frontend/src/components/Footer.jsx` — brand mark, tagline, © 2018, real legal links
- `/app/frontend/src/pages/Terms.jsx` — NEW, 12-section terms
- `/app/frontend/src/pages/Privacy.jsx` — NEW, 12-section privacy policy
- `/app/frontend/src/App.js` — registered `/privacy` and `/terms` routes
- `/app/frontend/public/index.html` — page `<title>` updated

## Next Actions
- User reviews new brand treatment, legal pages, and updated footer
- When ready, provide Resend API Key → wire `/api/consultation` to email
  `yingban2013@gmail.com`
