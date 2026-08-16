# QA Tester Portfolio

A modern, evidence-driven QA tester portfolio built as a **Digital QA Command Center**. This is not a generic template: it demonstrates how a QA engineer thinks, tests, finds defects, automates, and documents quality evidence.

## Stack

- **Next.js 15** (App Router, static-first)
- **TypeScript**
- **Tailwind CSS v4** (design tokens via CSS variables)
- **shadcn/ui**-style components on Radix primitives
- **Playwright** for E2E testing

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Home: hero, intro, selected work (real GitHub repos), what I test, experience, tools, currently learning, contact |
| `/about` | Bio, methodology, certifications |
| `/projects` | Real projects from GitHub |
| `/skills` | Skills grouped by discipline, tied to evidence |
| `/experience` | Experience timeline + career path |
| `/resume` | Printable resume (Print / Save as PDF) |
| `/contact` | Contact methods + validated form |

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve production build
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

## Testing

```bash
npx playwright install chromium
npm run test:e2e   # requires a running server (default http://localhost:3100)
```

Set `PORTFOLIO_BASE_URL` to point at a running instance if it is not on port 3100.

E2E scenarios (mapped to the PRD test plan):

- Homepage loads with hero and QA panel
- Navigation works
- Project filter works
- Project detail opens
- Testing Lab loads
- Bug report detail opens
- Resume link works
- Contact form validation
- Mobile hamburger menu works

Automated accessibility (WCAG 2.2 AA, via `@axe-core/playwright`): every page is
scanned for serious/critical violations in both dark and light mode, with zero
violations required. Run with `npx playwright test tests/e2e/accessibility.spec.ts`.

## Content architecture

All content is static data in `content/` and `lib/types.ts` defines the shared types.
Adding a project means adding one entry to `content/projects.ts`; no component changes are required (the PRD's content architecture goal).

## Design principles

Redesigned per the UI/UX PRD as a **personal QA playground**, not a QA dashboard.

- Person → story → work → evidence → technical depth (QA depth lives in case studies and the Testing Lab).
- Friendly, human, editorial typography-led layout with generous whitespace.
- Anti-AI-slop: no purple/neon gradients, no glassmorphism, no bento-everything, no fake metrics or fake dashboards.
- Restrained palette: dark `#111315` / light `#F7F7F5`, one blue accent (`#4F8CFF` dark / `#2B56AD` light), plus semantic status colors.
- Two font families: Inter (human-first) and JetBrains Mono (limited to IDs, endpoints, technical labels).
- Cards only where there's real grouping; borders are subtle (1px); sentence case throughout.
- **Bilingual EN/ID**: a language toggle in the navbar switches the presentation layer (nav, hero, home sections, footer) between English and Indonesian. Persisted in localStorage.
- WCAG 2.2 AA: semantic HTML, keyboard nav, visible focus, skip link, `prefers-reduced-motion`, aria labels. Verified in dark and light mode with axe.

## Notes

- Project metrics are labelled **Sample Project Metrics** where they are demo executions, per the PRD's "no fake numbers" rule.
- `codegraph` is initialized in this repo for code intelligence.
