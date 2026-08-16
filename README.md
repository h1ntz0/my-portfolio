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
| `/` | Home: hero + QA test execution panel, credibility metrics, featured projects, methodology, testing lab preview, skills, experience, contact, Recruiter / QA Deep Dive mode |
| `/about` | Bio, methodology, certifications |
| `/projects` | Project listing with category filter + search |
| `/projects/[slug]` | Full case study (scope, strategy, test cases, defects, automation, metrics, lessons) |
| `/testing-lab` | Interactive test case explorer, bug explorer, API showcase, automation, test runs |
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

- Information first; visual supports information.
- Anti-AI-slop: no purple gradients, glassmorphism, floating blobs, or fake stats.
- Restrained palette: charcoal / cool gray + one blue accent, plus semantic status colors.
- Two font families: Inter (UI) and JetBrains Mono (technical: IDs, endpoints, metrics).
- WCAG 2.2 AA: semantic HTML, keyboard nav, visible focus, skip link, `prefers-reduced-motion`, aria labels.

## Notes

- Project metrics are labelled **Sample Project Metrics** where they are demo executions, per the PRD's "no fake numbers" rule.
- `codegraph` is initialized in this repo for code intelligence.
