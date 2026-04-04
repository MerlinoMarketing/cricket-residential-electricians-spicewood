# Testing Guide

## Automated checks

Run the full quality suite locally:

```bash
npm ci
npx playwright install chromium
npm run ci
```

Individual commands:

```bash
npm run lint
npm run typecheck
npm run build
npm run test:e2e
```

## GUI coverage

The Playwright suite validates the highest-value flows:

- homepage renders the main conversion sections
- services index and one service detail route load correctly
- locations index and one location detail route load correctly
- mobile navigation opens and exposes core actions
- contact section renders all fields and map CTA

## When to expand tests

Add coverage when you introduce:

- new CTA flows
- route-level layout changes
- accessibility-critical interactions such as modals or drawers
- business-data conditionals that change page rendering

## Notes

- CI uses Chromium only for fast signal.
- The local config reuses an existing dev server when one is already running.
- For visual debugging, use `npm run test:e2e:headed`.
