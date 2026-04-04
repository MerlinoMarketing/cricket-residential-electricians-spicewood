# CI/CD Notes

## Current pipeline

GitHub Actions runs the repository quality gate on push and pull request:

1. `npm ci`
2. `npm run lint`
3. `npm run typecheck`
4. `npm run build`
5. `npm run test:e2e`

Workflow file:

- `.github/workflows/ci.yml`

## Deployment model

These repos are intended to deploy through Vercel's GitHub integration.

Recommended Vercel settings:

- Production branch: `master` unless the repo has been explicitly migrated to `main`
- Framework preset: Next.js
- Install command: `npm ci`
- Build command: `npm run build`

## Release checklist

Before merging or redeploying:

1. Confirm business data in `src/config/business.ts`
2. Run `npm run ci`
3. Verify the Vercel project is connected to the same default branch tracked by GitHub
4. Confirm the deployed alias resolves successfully

## Fleet maintenance rule

When updating all generated repos:

- patch existing files in place if they already exist
- add missing automation files only where absent
- do not replace custom docs or workflows unless they are still stock boilerplate
