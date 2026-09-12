# How to Provision a New City Site

This boilerplate is never deployed itself. Every live city site is created by
cloning this repo, filling in `src/site.config.ts`, and deploying the result.

## Environment

This is a local-development workflow — there is no VPS or staging server:

```
local laptop (Claude Code, npm run build) → GitHub → Vercel (auto-deploy on push)
```

You write and build code locally, push to a per-city GitHub repo, and Vercel
deploys on every push to `main`. Nothing else is involved.

## Prerequisites

- Node.js 18+
- GitHub CLI (`gh`) — install from https://cli.github.com/ if not already
  present, then run `gh auth login`. If you'd rather not install it, create
  the repo on github.com instead and `git remote add origin <url>` manually,
  substituting for Step 1 below.
- Vercel CLI (`npm i -g vercel`), logged in via `vercel login`
- Access to the `assignmenthelptalk` GitHub account

## Steps

### Step 1 — Create the GitHub repo

```bash
gh repo create watersoftener[CITY][STATE] --private --clone
cd watersoftener[CITY][STATE]
```

### Step 2 — Copy the boilerplate

```bash
cp -r ../water-softener-boilerplate/. .
npm install
```

### Step 3 — Update site.config.ts

Open `src/site.config.ts` and replace every `SCREAMING_SNAKE_CASE`
placeholder with real data for the city:

- `city`, `state`, `stateAbbr`, `domain`
- `gpgLow`, `gpgHigh`, `gpgLabel`
- `waterSource`, `waterAuthority`
- `primaryKeyword`, `searchVol`, `metaDescription`
- `population`, `county`
- `neighbourhoods` (array of 3+ real suburbs)
- `zipCodes` (array of 3+ real ZIP codes)
- `formEmail` (your formsubmit.co destination inbox for this city)

Leave `phone`, `email`, `address`, and `businessName` as-is — those get set
through Keystatic in Step 4, not hardcoded here.

### Step 4 — Switch Keystatic to GitHub mode

This boilerplate ships with `storage: { kind: "local" }` in
`keystatic.config.ts` because it's never deployed. A live city site on
Vercel can't write to its own filesystem, so Keystatic needs to commit
content changes back to GitHub instead. In `keystatic.config.ts`, change:

```ts
storage: {
  kind: "local",
},
```

to:

```ts
storage: {
  kind: "github",
  repo: "assignmenthelptalk/watersoftener[CITY][STATE]",
},
```

Also update the singleton `label` from `"Boilerplate — Site Settings..."` to
`"[City] — Site Settings"`.

GitHub-mode Keystatic requires a GitHub OAuth App for authentication — see
https://keystatic.com/docs/github-mode for the one-time setup, then add the
resulting `KEYSTATIC_GITHUB_CLIENT_ID` and `KEYSTATIC_GITHUB_CLIENT_SECRET`
as environment variables in the Vercel project (Step 7).

### Step 5 — Write city content

Ask Claude Code:

> Using the values in site.config.ts, write real water softener content
> for all 8 pages. Every page needs the city name, GPG hardness figure,
> water source, and a local hook. No placeholder text in the final output.

### Step 6 — Build and verify locally

```bash
npm run build
```

Must complete with 0 errors and 0 warnings before moving on.

### Step 6b — Score built content quality

Run the quality gate against the rendered HTML output before going live:

```bash
cd C:\Users\lenevo\waterSoftenerProjects\[site-folder]
npm run build

cd C:\Users\lenevo\Local-SEO-Toolkit
npm run score-built-site -- \
  --business [business-id] \
  --dist C:\Users\lenevo\waterSoftenerProjects\[site-folder]\dist
```

All 8 pages must score 80+ before the domain is connected and the site goes live.
If any page fails: fix the flagged rules in the .astro source, rebuild, and rescore.
Do not proceed to Step 7 until all pages pass.

### Step 7 — Deploy to Vercel

```bash
git add .
git commit -m "init [CITY] [STATE] water softener site"
git push origin main
vercel link   # create a new Vercel project for this repo
vercel --prod
```

If you switched Keystatic to GitHub mode in Step 4, add
`KEYSTATIC_GITHUB_CLIENT_ID` and `KEYSTATIC_GITHUB_CLIENT_SECRET` to the
Vercel project's environment variables before the first production deploy.

### Step 8 — Add the custom domain

- Vercel dashboard → Project → Domains → Add `[domain]`
- Namecheap → DNS → point to Vercel's nameservers/records

### Step 9 — Google Search Console

- Add property → URL prefix → verify via the Vercel-injected meta tag
- Submit sitemap: `https://[domain]/sitemap-index.xml`

### Step 10 — Citations (within 1 week of going live)

Submit to: Google Business Profile, Yelp, BBB, Angi, HomeAdvisor,
Bing Places, Apple Maps, Foursquare, Manta, Hotfrog.

Use identical NAP (Name / Address / Phone) on every directory — pull these
from Keystatic's Site Settings once they're set, not from memory.

## City Config Reference

See `src/site.config.ts` for the full `SiteConfig` interface and every
required field. Every value still in `SCREAMING_SNAKE_CASE` must be replaced
before deployment — a stray placeholder on a live page means this step was
skipped.
