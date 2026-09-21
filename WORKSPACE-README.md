# Water Softener CITY_NAME STATE_ABBR — Workspace

## Boilerplate build status (informational — not per-city data)
This section tracks what the *template itself* contains, independent of any
city. Update it when the boilerplate gains or loses a component; do not fill
in per-city data here — that's the rest of this file, below.

| Component | Status |
|---|---|
| Keystatic CMS | ❌ REMOVED — phone-call-based rank-and-rent model, site.config.ts edited directly, see PROVISION.md "CMS — No Keystatic" |
| Output mode | Static (`output: "static"`, `@astrojs/vercel`, zero serverless functions) |
| Full design system (global.css) | ✅ commit 3b6e9cf |
| Layout.astro (utility bar + Services-dropdown nav + minimal footer) | ✅ synced from Henderson structural improvements |
| Homepage (10 sections: hero, services grid, GPG data, 2 alternating image-text, CityMap placeholder, service areas, why-choose-us, FAQ accordion, slim CTA bar) | ✅ synced from Henderson structural improvements |
| New pages: repair, about, contact | ✅ created this pass |
| Brand backlink on every inner page | ✅ this pass |
| QuoteForm.astro | ✅ commit 3b6e9cf, updated to use businessEmail |
| Breadcrumbs.astro | ✅ commit 3b6e9cf |
| LocalSchema.astro | ✅ (unchanged, already matched Henderson) |
| GPGSlider.astro | ✅ commit d084265 |
| GPGSliderMini.astro | ✅ commit d084265 |
| SystemTour.astro | ✅ commit d084265 |
| CLAUDE.md | ✅ (pre-existing, unchanged) |
| BRAND-GUIDE.md | ✅ (pre-existing, unchanged) |
| PROVISION.md (Step 5b added, Keystatic step removed, CMS section added) | ✅ this pass |
| HendersonMap.astro | ❌ city-specific, not copied — use CityMap.astro, build per city (needs real pin coordinates) |
| InstallationProcess.astro | ❌ city-specific — build per city (needs local copy) |
| Testimonials.astro | ❌ city-specific — build per city (needs local placeholder copy) |

**Next action**: Ready for Minneapolis provisioning.

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
    src/pages/                             ← all page files (no CMS layer)
    dist/                                  ← built static HTML (after npm run build)

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
| repair        | ⏳      | —     | —          |
| about         | ⏳      | —     | —          |
| contact       | ⏳      | —     | —          |
| quote         | ⏳      | —     | —          |

Update this table after every write and score session.
✅ = done | 🔄 = in progress | ⏳ = not started | ❌ = blocked

## Quality gate (last run: never)
Score threshold: 80/100
Run: cd C:\Users\lenevo\Local-SEO-Toolkit
     npm run score-built-site -- --business BUSINESS_ID --dist [site-path]\dist

## Current task
Keystatic removed, Henderson structural improvements synced (utility bar,
Services-dropdown nav, minimal single-row footer, 10-section homepage,
repair/about/contact pages, brand backlinks on every inner page), static
output confirmed via a clean build (0 errors/warnings, 13 pages, dist/
not dist/client/). Ready for Minneapolis provisioning.

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
- [ ] Step 4 — ~~Keystatic~~ REMOVED — no CMS step, see PROVISION.md "CMS — No Keystatic"
- [ ] Step 5 — Content written for all pages (8 core + repair + about + contact)
- [ ] Step 6 — `npm run build` — 0 errors, 0 warnings confirmed
- [ ] Step 6b — All pages scored 80+ via the quality gate
- [ ] Step 7 — Deployed to Vercel (static output, no environment variables needed)
- [ ] Step 8 — Custom domain added (Vercel dashboard + Namecheap DNS)
- [ ] Step 9 — Google Search Console property added, sitemap submitted
- [ ] Step 10 — Citations submitted (Google Business Profile, Yelp, BBB, Angi, HomeAdvisor, Bing Places, Apple Maps, Foursquare, Manta, Hotfrog)

## Notes
_Add any city-specific notes, open data gaps, or decisions made here._
