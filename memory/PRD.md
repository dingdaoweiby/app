# Supernova Elite Education Destination — v11 (i18n Phase 1)

## Status: Bilingual shell live · Footer redesigned · Subpage bodies still EN

## Latest (Feb 2026)
### i18n infrastructure
- `LanguageProvider` (`/app/frontend/src/i18n/LanguageContext.jsx`) — React Context with `useT()` and `useLang()` hooks. Persists choice to `localStorage` under `supernova-lang`. Updates `<html lang>` automatically.
- `dict` (`/app/frontend/src/i18n/dictionary.js`) — single source of truth for EN/ZH parallel strings. Keys: `nav`, `footer`, `closingCta`, `breadcrumb`, `pages.{k12,strategy,admissions,graduate,research,international,contact,privacy,terms}`.
- Noto Serif SC + Noto Sans SC loaded as CJK fallback in `index.html`; appended to font-family stacks in `index.css`.
- App.js wraps everything in `<LanguageProvider>`.

### Translated UI shell (Phase 1 scope)
- Nav: all 5 menu items + College dropdown header + CTA + Menu/Close mobile labels
- Footer: full content + new bottom bar  
- ClosingCTA: eyebrow / title / two-line body / button
- PageHeader breadcrumb "Home" → "首页"
- All 9 subpage PageHeaders (K12, CollegeStrategy, CollegeAdmissions, Graduate, Research, International, Contact crumb, Privacy, Terms) reading from dictionary

### Footer redesign
- Stronger column heading typography (mono uppercase orange)
- Brand block: logo + 2-line wordmark + LLC legal name + italic tagline + EN | 中文 toggle
- Wider vertical rhythm (`paddingTop: 88px`, `mt-20 pt-7` bottom bar)
- New `LanguageToggle` component placed inside brand column under tagline (per user request: "左下角")
- Real links to `/privacy` and `/terms`

### Verified screenshots (1440px)
- EN home top + footer
- ZH footer (with toggle in 中文 active state)
- ZH home top (Nav fully Chinese, breadcrumbs/headers translated)
- ZH K-12 page header
- ZH International page header
- ZH CollegeStrategy page header (with 2-line stack)

## Backlog / Future (Prioritized)
- **P1 — i18n Phase 2**: translate subpage bodies (Home Hero + Pillars + AssessmentTools + TrackRecord + StudentStories; then K12, Strategy, Admissions, Graduate, Research, International, Contact form labels; finally Privacy and Terms section bodies). User has agreed to do this in subsequent phases.
- **P0 — Resend backend integration**: Schedule a Consultation form → email `yingban2013@gmail.com`. Pending user-provided Resend API key.
- P1 — Replace Unsplash placeholders with real photography
- P1 — Favicon using the SEED ship logo
- P1 — Scroll reveal animations

## Files Touched This Round
- NEW `/app/frontend/src/i18n/LanguageContext.jsx`
- NEW `/app/frontend/src/i18n/dictionary.js`
- NEW `/app/frontend/src/components/LanguageToggle.jsx`
- `/app/frontend/src/App.js` (provider wrap)
- `/app/frontend/src/index.css` (CJK font fallback)
- `/app/frontend/public/index.html` (load Noto Serif SC + Noto Sans SC)
- `/app/frontend/src/components/Nav.jsx`
- `/app/frontend/src/components/Footer.jsx` (full rewrite + redesign + toggle)
- `/app/frontend/src/components/ClosingCTA.jsx`
- `/app/frontend/src/components/PageHeader.jsx`
- `/app/frontend/src/pages/K12.jsx`
- `/app/frontend/src/pages/CollegeStrategy.jsx`
- `/app/frontend/src/pages/CollegeAdmissions.jsx`
- `/app/frontend/src/pages/Graduate.jsx`
- `/app/frontend/src/pages/Research.jsx`
- `/app/frontend/src/pages/International.jsx`
- `/app/frontend/src/pages/Privacy.jsx`
- `/app/frontend/src/pages/Terms.jsx`
- `/app/frontend/src/pages/Contact.jsx`

## Next Actions
- User confirms Phase 1 (toggle UX + Chinese rendering) is acceptable
- If yes, proceed to Phase 2: translate Home page body (Hero / Pillars / AssessmentTools / TrackRecord / StudentStories) and the visible body sections of each subpage
- After all UI translated, address Resend email integration when API key is provided
