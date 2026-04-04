# Service Website Template

Production template for lead-generation microsites built with Next.js 16, React 19, and Tailwind CSS 4.

## What this repo includes

- multi-page local service business website structure
- SEO metadata and JSON-LD schema helpers
- responsive navigation and mobile call bar
- reusable service and location page generation
- lint, typecheck, production build, and Playwright GUI smoke coverage
- GitHub Actions CI for pull requests and pushes

## Core scripts

```bash
npm run dev         # local development
npm run lint        # ESLint
npm run typecheck   # TypeScript validation
npm run build       # production build
npm run test:e2e    # Playwright GUI smoke suite
npm run ci          # lint + typecheck + build + GUI tests
```

## Local development

```bash
npm ci
npx playwright install chromium
npm run dev
```

Open `http://127.0.0.1:3000`.

## Quality gates

The expected release checks are:

1. `npm run lint`
2. `npm run typecheck`
3. `npm run build`
4. `npm run test:e2e`

CI runs the same sequence on every push and pull request.

## Repo structure

- `src/app` - route files for the homepage, services, and locations
- `src/components` - reusable marketing site components
- `src/config/business.ts` - site-specific business data
- `src/lib/business.tsx` - schema, formatting, and business helpers
- `tests/e2e` - browser-level GUI smoke coverage
- `.github/workflows/ci.yml` - CI pipeline
- `docs/TESTING.md` - GUI test guidance
- `docs/CI_CD.md` - deployment and CI/CD notes

## Deployment

These sites are intended to deploy on Vercel through GitHub integration. See [docs/CI_CD.md](./docs/CI_CD.md) for the workflow and [docs/TESTING.md](./docs/TESTING.md) for test coverage details.

---

Made with 💛 by Sean G
