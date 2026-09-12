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

### Step 5b — Adapt interactive components

Three interactive components exist in the boilerplate and are ready to use
on any city page. They read from site.config.ts automatically — no manual
data entry needed beyond filling in the config.

**GPGSlider.astro** — add to water-quality.astro
Reads gpgLow, gpgHigh, gpgLabel, waterSource, waterAuthority, city from
site.config.ts. Default slider value centres on the city's GPG range.
Import and add after the water hardness data section:
```astro
import GPGSlider from '../components/GPGSlider.astro'
<GPGSlider />
```

**GPGSliderMini.astro** — add to comparison.astro
Compact version contextualising the product comparison at the city's
specific hardness level. Import and add before the product cards section.

**SystemTour.astro** — add to installation.astro
Four-step ion exchange process tour. Content is generic — applies to any
city. Import and add after the installation cost section.

**City-specific components to build per city (not in boilerplate):**
- Neighbourhood hardness map (requires city-specific pin coordinates) — see
  the City Map section below, a template exists at `CityMap.astro`
- Installation process section (requires city-specific copy)
- Testimonials section (requires city-specific placeholder copy)

Build these during Step 5 using the Henderson versions as reference.

#### City Map (city-specific — build per city)

The neighbourhood hardness map is a city-specific component because it requires
real GPS coordinates for each neighbourhood — these cannot be genericised.
`src/components/CityMap.astro` is a template with every interaction pattern
(zoom lock, bounds lock, reset button, hover tooltips) already implemented —
copy it rather than building the map from scratch.

**Steps to build the city map:**

1. Copy `src/components/CityMap.astro` to `src/components/[City]Map.astro`
   Example: `src/components/MinneapolisMap.astro`

2. Find the city centre coordinates using OpenStreetMap:
   Go to https://www.openstreetmap.org → search for the city
   Right-click the city centre → "Show address" → copy lat/lng

3. Fill in the MAP_CONFIG constants near the top of the `<script>` block:
   ```
   CITY_LAT / CITY_LNG        ← city centre coordinates
   zoom:     12                 ← leave at 12 unless city is very large/small
   minZoom:  11                 ← prevents zooming out to wider metro
   maxZoom:  14
   BOUNDS_SOUTH / BOUNDS_WEST  ← southwest corner of the service area
   BOUNDS_NORTH / BOUNDS_EAST  ← northeast corner of the service area
   ```
   Find the bounding box: https://boundingbox.klokantech.com → search city →
   copy the CSV coordinates into the four `BOUNDS_*` constants.

4. Find neighbourhood coordinates — for each neighbourhood in
   `site.config.ts`'s `neighbourhoods` array:
   Go to https://www.openstreetmap.org → search "[neighbourhood name] [city]"
   Right-click the neighbourhood centre → "Show address" → copy lat/lng

5. Fill in the `neighbourhoods` array in the script — one entry per
   neighbourhood:
   - `name`:     exact neighbourhood name (must match the site.config.ts entry)
   - `coords`:   `[lat, lng]` from step 4
   - `gpgRange`: `"[gpgLow]–[gpgHigh]"` from site.config.ts
   - `wqaNote`:  `"Anything above 10.5 GPG is considered 'Very Hard' by the
                 Water Quality Association."`
   - `issues`:   4 hard water issues specific to this neighbourhood's situation
               (older housing stock, pools, newer construction etc)

6. Install Leaflet (not a boilerplate dependency — install per city):
   ```bash
   npm install leaflet @types/leaflet
   ```

7. Add to astro.config.mjs (if not already present):
   ```javascript
   vite: { ssr: { noExternal: ['leaflet'] } }
   ```

8. Add the Leaflet stylesheet to Layout.astro's head (if not already present):
   ```html
   <link rel="stylesheet"
     href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
     integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
     crossorigin=""/>
   ```

9. Import and add to index.astro after the GPG stat block:
   ```astro
   import MinneapolisMap from '../components/MinneapolisMap.astro'
   <MinneapolisMap />
   ```

10. Run `npm run dev` — verify at localhost:4321:
    - All neighbourhood pins visible within the viewport at zoom 12
    - Hover over a pin — tooltip shows neighbourhood name and GPG
    - Click a pin — report panel updates, map centres on that neighbourhood
    - Reset View button returns the map to the default view
    - Map cannot be panned outside the city bounds

**TILE LAYER — DO NOT CHANGE:**
The tile layer uses OpenStreetMap with a CSS inversion filter. Do not switch
to CARTO (requires an API key as of September 2026) or Stadia Maps (also
requires authentication). The CSS inversion filter is scoped to
`.leaflet-tile-pane` only — it does not affect markers, popups, or controls,
which sit on separate Leaflet panes. See CLAUDE.md → "Map Component — Tile
Layer Rule" for the same note.

### Step 5c — Service Area Pages (optional — only if surrounding cities have search demand)

Service area pages target surrounding cities that homeowners in those cities
search for. Each page must pass the QDP test before being built. Do not build
a service area page for a city that fails the QDP test — it will not rank and
may dilute the primary city's topical authority.

#### QDP Test — run for every potential service area city

Answer all four questions. All four must pass:

1. SEARCH DEMAND
   Is there measurable search volume for "water softener [city] [state]"?
   Check: Google Keyword Planner, Ahrefs, or Semrush
   Pass: volume > 10/month
   Fail: no measurable volume — do not build this page

2. DIFFERENT ENTITIES
   Is this city genuinely different from the primary city?
   Check: different water authority? Different county? Different ZIP codes?
   Different incorporated status (city vs unincorporated community)?
   Pass: at least two meaningful differences from the primary city
   Fail: same water authority, same GPG, same county, same ZIP = do not
         build a separate page — add a section to neighbourhood.astro instead

3. LOW SIMILARITY
   Would this page be meaningfully different from the primary homepage?
   Check: different GPG note? Different water source? Different communities?
   Pass: at least 60% of content is genuinely different
   Fail: only the city name changes — this is a doorway page, do not build

4. RECOGNISABLE PATTERN
   Do homeowners in this city search specifically for "[city] water softener"
   or do they search for the primary city?
   Pass: city-specific search pattern confirmed in keyword tool
   Fail: all searches go to the primary city keyword — do not build

#### Neighbourhood verification checklist

Before adding any neighbourhood name to the `neighbourhoods` array:

- [ ] Is this a named residential community (not a road, highway, or park)?
- [ ] Does it appear in at least one of: Zillow, Realtor.com, city government site?
- [ ] Would a local homeowner recognise this as where they live?
- [ ] Is it within the service area city limits (not the primary city)?

If any answer is NO — remove the name. It is better to have 3 verified
neighbourhood names than 8 that include roads and recreation areas.

#### Adding a service area to site.config.ts

1. Add a new object to the `serviceAreas` array in `site.config.ts`
2. Fill every required field — TypeScript will error on missing fields
3. Set `qdp.verified: false` initially
4. Run the QDP test above — if all four pass set `qdp.verdict: 'PASS'`
5. Set `qdp.verified: true` and `qdp.verifiedDate` to today's date
6. Set `dataVerified: true` and `verificationSource` to the URL used
7. Run `npm run build` — the dynamic route generates the page automatically
8. Verify the new URL appears in `/sitemap.xml`
9. Run Rich Results Test on the new page URL

#### What NOT to do

- Do not set `qdp.verified: true` before running the QDP test
- Do not list road names as neighbourhoods
- Do not copy the primary city's `gpgNote` verbatim — write a new one
- Do not set `testimonial.placeholder: false` until a real review exists
- Do not build a service area page for a city that shares the primary
  city's water authority, GPG, county, and ZIP codes — it is the same
  entity and will not rank as a separate page

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
