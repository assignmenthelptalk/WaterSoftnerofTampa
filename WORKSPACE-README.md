# Water Softener CITY_NAME STATE_ABBR — Workspace

## Boilerplate build status (informational — not per-city data)
This section tracks what the *template itself* contains, independent of any
city. Update it when the boilerplate gains or loses a component; do not fill
in per-city data here — that's the rest of this file, below.

| Component | Status |
|---|---|
| Full design system (global.css) | ✅ commit 3b6e9cf |
| Layout.astro (nav + footer) | ✅ commit 3b6e9cf |
| QuoteForm.astro | ✅ commit 3b6e9cf |
| Breadcrumbs.astro | ✅ commit 3b6e9cf |
| LocalSchema.astro | ✅ (unchanged, already matched Henderson) |
| All 8 page files with page-header | ✅ commit 3b6e9cf |
| GPGSlider.astro | ✅ commit d084265 |
| GPGSliderMini.astro | ✅ commit d084265 |
| SystemTour.astro | ✅ commit d084265 |
| CLAUDE.md | ✅ (pre-existing, unchanged) |
| BRAND-GUIDE.md | ✅ (pre-existing, unchanged) |
| PROVISION.md (Step 5b added) | ✅ commit 4aad52d |
| HendersonMap.astro | ❌ city-specific — build per city (needs real pin coordinates) |
| InstallationProcess.astro | ❌ city-specific — build per city (needs local copy) |
| Testimonials.astro | ❌ city-specific — build per city (needs local placeholder copy) |

GPGSlider/GPGSliderMini/SystemTour all read city data from `site.config.ts`
automatically (city, gpgLow/gpgHigh, gpgLabel, waterSource, waterAuthority) —
no manual editing needed beyond filling in the config. See PROVISION.md
Step 5b for where to add each one.

## Site identity
- Domain:           DOMAIN_NAME
- City:             CITY_NAME, STATE_ABBR
- GPG:              GPG_LOW-GPG_HIGH (GPG_LABEL)
- Water source:     WATER_SOURCE
- Water authority:  WATER_AUTHORITY
- Primary keyword:  PRIMARY_KEYWORD (SEARCH_VOL vol/mo)
- GitHub repo:      assignmenthelptalk/REPO_NAME
- Vercel project:   REPO_NAME
- Vercel URL:       https://REPO_NAME.vercel.app
- Live domain:      https://DOMAIN_NAME

## Folder structure
- Local-SEO-Toolkit/
    data/BUSINESS_ID/topical-map.md        ← topical map
    data/BUSINESS_ID/briefs/               ← EAV briefs per page
    data/BUSINESS_ID/quality-report-*.json ← quality gate reports
- waterSoftenerProjects/REPO_NAME/
    src/site.config.ts                     ← city config (only file changed per city)
    src/data/site.json                     ← Keystatic-editable fields
    src/pages/                             ← all 8 .astro page files
    dist/                                  ← built HTML (after npm run build)

## Page status
| Page          | Written | Score | Ship-ready |
|---------------|---------|-------|------------|
| homepage      | ⏳      | —     | —          |
| water-quality | ⏳      | —     | —          |
| hard-water    | ⏳      | —     | —          |
| installation  | ⏳      | —     | —          |
| comparison    | ⏳      | —     | —          |
| faq           | ⏳      | —     | —          |
| neighbourhood | ⏳      | —     | —          |
| quote         | ⏳      | —     | —          |

Update this table after every write and score session.
✅ = done | 🔄 = in progress | ⏳ = not started | ❌ = blocked

## Quality gate (last run: never)
Score threshold: 80/100
Run: cd C:\Users\lenevo\Local-SEO-Toolkit
     npm run score-built-site -- --business BUSINESS_ID --dist [site-path]\dist

## Current task
CURRENT_TASK

## Local data
- Neighbourhoods:  NEIGHBOURHOOD_1, NEIGHBOURHOOD_2, NEIGHBOURHOOD_3
- ZIP codes:       ZIP_1, ZIP_2, ZIP_3
- County:          COUNTY_NAME
- Population:      POPULATION

## SpringWell affiliate links
- /follow/softener/ — salt-based softener (wired into homepage + comparison)
- /follow/combo/    — softener + filtration combo
- /follow/ro/       — reverse osmosis system

## Provisioning checklist
Mirrors PROVISION.md step-for-step, in the same order — check PROVISION.md
itself if a step here needs more detail than fits on one line.

- [ ] Step 1 — GitHub repo created (`gh repo create`)
- [ ] Step 2 — Boilerplate copied into the repo + `npm install`
- [ ] Step 3 — `src/site.config.ts` filled in with real city data
- [ ] Step 4 — Keystatic switched to `github` storage mode (repo name + singleton label updated)
- [ ] Step 5 — Content written for all 8 pages
- [ ] Step 6 — `npm run build` — 0 errors, 0 warnings confirmed
- [ ] Step 6b — All 8 pages scored 80+ via the quality gate
- [ ] Step 7 — Deployed to Vercel (Keystatic OAuth env vars set, if applicable)
- [ ] Step 8 — Custom domain added (Vercel dashboard + Namecheap DNS)
- [ ] Step 9 — Google Search Console property added, sitemap submitted
- [ ] Step 10 — Citations submitted (Google Business Profile, Yelp, BBB, Angi, HomeAdvisor, Bing Places, Apple Maps, Foursquare, Manta, Hotfrog)

## Notes
_Add any city-specific notes, open data gaps, or decisions made here._
