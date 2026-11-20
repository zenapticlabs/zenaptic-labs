# zenapticlabs.com — repo contract

The org contract `~/repos/zenapticlabs/AGENTS.md` binds here. This file adds only this repo's facts.

**Production exception:** every merge to `master` auto-deploys to production (https://www.zenapticlabs.com)
through the Vercel Git integration; pull requests get Vercel preview deployments (behind Vercel SSO).
There is no other deploy step, so merging is the deploy — merge only on Sung's explicit instruction.

## Stack

- Astro 5, `output: 'server'`, `@astrojs/vercel` adapter; React 19 islands; Tailwind 4.
- `npm ci` · `npm run dev` · `npm run build` (writes `.vercel/output`).
- `npm run preview` does not work with the Vercel adapter. To test a production build, serve
  `.vercel/output` with a small harness (example: `studio/qa/site-placeholders-2026-11-20/sources/`).
- `master` is protected by the org ruleset "Master Protection": PR with one approving review, no force
  push, no deletion.

## Secrets

Doppler project `zenaptic-labs` (configs `dev`, `stg`, `prd`) holds `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`,
`SMTP_PASSWORD`, `SMTP_TO_EMAIL`, used by the contact form (`src/lib/email.js`, `src/pages/api/`). The
Vercel project carries the same names for the **production** target only, alongside Doppler's
`DOPPLER_*` markers (Doppler sync), so the contact form cannot send from preview deployments. Values
never enter the repo.

## Showcase content

- The homepage "Real-World Solutions" section, the solutions slider and the Service page strip render
  `src/data/caseStudies.js`. It lists exactly the projects in `studio/gtm/public-portfolio.md` (17 as of
  2026-11-20), the same set and order as the Upwork agency and freelancer portfolios.
- Card images are `public/assets/case-studies/<slug>.webp`, exported from the covers in
  `studio/gtm/project-covers-2026-11-20/` (Sortle and Waybill from `studio/gtm/upwork-covers-2026-11-19/`),
  the same files uploaded to Upwork. Covers show the product in use, never a landing or login page.
  Personal data is covered with solid bars, never blurred.
- Descriptions, links and metrics come only from `studio/gtm/website-showcase-2026-11-20/manifest.md`;
  only Sung-confirmed metrics appear.
- The logo strip stays as it is. Prices and plans change only with Sung.

## Verification

`studio/doctrine/qa-gate.md` applies: drive a production build in your own headless browser at
1440×900 and 390×844, light and dark, compare against `master`, and capture screenshots. Watch
layout shift on `/Service`: `ServiceDetails` resolves its body from `localStorage` after hydration,
and the lower content is held until it does (commit `cda8ada`).
