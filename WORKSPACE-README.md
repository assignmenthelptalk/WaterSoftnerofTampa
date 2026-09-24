# Water Softener of Tampa, FL — Workspace

## Boilerplate build status (informational — not per-city data)
This section tracks what the *template itself* contains, independent of any
city. Update it when the boilerplate gains or loses a component; do not fill
in per-city data here — that's the rest of this file, below.

| Component | Status |
|---|---|
| Keystatic CMS | ❌ REMOVED — phone-call-based rank-and-rent model, site.config.ts edited directly, see PROVISION.md "CMS — No Keystatic" |
| Output mode | Static (`output: "static"`, `@astrojs/vercel`, zero serverless functions) |
| Full design system (global.css) | ✅ reskinned this build — blue/slate theme adapted from SPSSassignment.help, replacing the boilerplate's default teal/orange |
| Layout.astro (utility bar + Services-dropdown nav + minimal footer) | ✅ synced from Henderson structural improvements |
| Homepage | ✅ rebuilt this build — two-column light hero (real product photo, not the boilerplate's centered dark-gradient version), 10 content sections below it. Hero now carries the Glendale Elite "Brand IS" opening paragraph directly (split into two paragraphs, brand name linked to `/`) — the old Tampa-hardness blurb that used to be the hero copy was merged into the "Water Hardness Reading" section further down the page instead of being duplicated |
| 6 expansion pages (salt-based-installation, salt-free-installation, water-softener-sizing, new-construction-installation, control-head-repair, free-water-test) | ✅ written this build, ported structurally from the boilerplate |
| PageHero.astro (split inner-page hero: breadcrumbs, H1, opening paragraph, CTAs left; real photo or GPG stat-card right) | ✅ built and wired into all 21 inner pages. Opening paragraph (Glendale Elite "Brand OFFERS" pattern) lives inside the hero via an `opening` slot, brand name underlined in white against the dark hero background. No `subheading` prop — content runs straight from H1 into the opening paragraph |
| Opening paragraph pattern (Glendale Elite) on every page | ✅ homepage uses "Brand IS" (no backlink, already on that page); all 21 inner pages use "Brand OFFERS" with the brand name linked to `/` |
| QuoteForm.astro | ✅ |
| Breadcrumbs.astro | ✅ |
| LocalSchema.astro | ✅ |
| Favicon | ✅ added this build — `public/favicon.svg`, blue water-droplet mark (the boilerplate's `<link>` reference had no file behind it before) |
| CLAUDE.md | ✅ (pre-existing, unchanged) |
| PROVISION.md | ✅ (pre-existing, unchanged) |
| CityMap.astro (city-specific pins) | ❌ not built — no neighbourhood map on the homepage yet |
| InstallationProcess.astro / Testimonials.astro | ❌ city-specific, not built |

**Next action**: Run the Local-SEO-Toolkit quality gate against all 22 pages
(never run yet), fill the remaining `[PLACEHOLDER]` business facts once a
tenant/operator is identified, then move on to Search Console + citations.

## Site identity
- Domain:           watersofteneroftampa.com
- City:              Tampa, FL
- GPG:               11-15 (Very Hard) — see Notes: GPG range source flagged unverified
- Water source:      Surface water from the Hillsborough River, Alafia River, and Tampa Bypass Canal, supplemented by Floridan Aquifer groundwater and desalinated seawater from the Tampa Bay Seawater Desalination Plant at Apollo Beach during dry periods
- Water authority:   Tampa Water Department
- Primary keyword:   water softener tampa fl (search volume unverified — no keyword-tool access this build)
- GitHub repo:       assignmenthelptalk/WaterSoftnerofTampa
- Vercel project:    water-softnerof-tampa (auto-deploys on push to `main`)
- Vercel URL:        https://water-softnerof-tampa.vercel.app
- Live domain:       not yet connected — Step 8 (custom domain) not done

## Folder structure
- Local-SEO-Toolkit/
    data/watersoftenertampafl/topical-map.md        ← Core 30 / GBP strategy doc
    data/watersoftenertampafl/briefs/               ← 23 EAV briefs (one per page + per neighbourhood)
- waterSoftenerProjects/watersoftenertampafl/
    src/site.config.ts                     ← city config (only file meant to change per city)
    src/pages/                             ← all page files
    src/assets/images/                     ← real photography, WebP, imported via astro:assets
    dist/                                  ← built static HTML (after npm run build)

## Page status
All 22 content pages have real, brief-grounded copy — EAV facts woven in,
brief-exact internal-link anchors, real photography. None have been run
through the Local-SEO-Toolkit quality gate yet, so Score/Ship-ready are
still blank for every page. Business-specific gaps (install duration,
warranty, exact price, financing, maintenance interval, sizing specifics,
trial period) are marked `[PLACEHOLDER]` inline rather than invented.

| Page                           | Written | Score | Ship-ready |
|--------------------------------|---------|-------|------------|
| homepage                       | ✅      | —     | —          |
| water-quality                  | ✅      | —     | —          |
| hard-water                     | ✅      | —     | —          |
| installation                   | ✅      | —     | —          |
| comparison                     | ✅      | —     | —          |
| faq                            | ✅      | —     | —          |
| neighbourhood                  | ✅      | —     | —          |
| repair                         | ✅      | —     | —          |
| about                          | ✅      | —     | —          |
| contact                        | ✅      | —     | —          |
| quote                          | ✅      | —     | —          |
| products                       | ✅      | —     | —          |
| whole-home-filtration          | ✅      | —     | —          |
| reverse-osmosis                | ✅      | —     | —          |
| resin-bed-replacement          | ✅      | —     | —          |
| brine-tank-cleaning            | ✅      | —     | —          |
| salt-based-installation        | ✅      | —     | —          |
| salt-free-installation         | ✅      | —     | —          |
| water-softener-sizing          | ✅      | —     | —          |
| new-construction-installation  | ✅      | —     | —          |
| control-head-repair            | ✅      | —     | —          |
| free-water-test                | ✅      | —     | —          |

22 pages total (excludes `thank-you` and the QDP-gated `[serviceArea]`
dynamic route, which builds zero pages while `serviceAreas: []`).
✅ = written | 🔄 = in progress | ⏳ = not started | ❌ = blocked

## Quality gate (last run: never)
Score threshold: 80/100
Run: cd C:\Users\lenevo\Local-SEO-Toolkit
     npm run score-built-site -- --business watersoftenertampafl --dist C:\Users\lenevo\waterSoftenerProjects\watersoftenertampafl\dist

## Current task
All 22 pages written and all 23 site images are real photography (0
`placehold.co` references remain in `src/`). Homepage hero rebuilt as a
two-column light layout (real product photo replacing the boilerplate's
centered dark-gradient design). Homepage H1 is
"Water Softeners of {city} - Premier Water Softener Installation in
{city}, {state}" (committed and pushed). Meta-title pattern
(`[Service] in [City], [State] | Water Softeners of [City]: ...`) and
inner-page H1 pattern (`[Service] in [City], [State] | Trusted Local
Specialists`) are applied across all pages, centralized in
`Layout.astro` for the title. All 21 inner pages are migrated to the
`PageHero.astro` split layout, with the Glendale Elite opening paragraph
moved inside the hero (no separate section below it) and the old
`subheading` prop removed entirely. The homepage hero was restructured
the same way — its Brand IS paragraph now lives directly in the hero,
split into two paragraphs, brand name linked to `/`. Everything above is
committed and pushed to `main` (last commit `8a49a26`); working tree is
otherwise clean except one small leftover fix (a dead `.page-hero-sub`
CSS selector renamed to `.page-hero-opening` after the subheading was
removed — build-verified, about to be committed with this README
update). Next: run the quality gate (never run), then fill remaining
`[PLACEHOLDER]` business facts once a tenant/operator is identified.

## Local data
- Neighbourhoods:  Hyde Park, Seminole Heights, Ybor City, Davis Islands
- ZIP codes:       33606, 33604, 33609
- County:          Hillsborough County
- Population:      414,575 (Census Reporter, ACS 2024 1-year estimate)

## SpringWell affiliate links
- /follow/softener/ — salt-based softener (wired into homepage + comparison + products)
- /follow/combo/    — softener + filtration combo
- /follow/ro/       — reverse osmosis system

## Provisioning checklist
Mirrors PROVISION.md step-for-step, in the same order — check PROVISION.md
itself if a step here needs more detail than fits on one line.

- [x] Step 1 — GitHub repo created (assignmenthelptalk/WaterSoftnerofTampa)
- [x] Step 2 — Boilerplate copied into the repo + `npm install`
- [x] Step 3 — `src/site.config.ts` filled in with real city data (phone/email still placeholders — no tenant yet)
- [x] Step 4 — ~~Keystatic~~ REMOVED — no CMS step
- [x] Step 5 — Content written for all 22 pages
- [x] Step 6 — `npm run build` — 0 errors, 0 warnings confirmed (last verified after the PageHero opening-paragraph migration)
- [ ] Step 6b — Quality gate never run — no page has a score yet
- [x] Step 7 — Deployed to Vercel, auto-deploy on push confirmed working (live images verified returning 200 OK)
- [ ] Step 8 — Custom domain (watersofteneroftampa.com) not yet connected
- [ ] Step 9 — Google Search Console not yet set up
- [ ] Step 10 — Citations not yet submitted

## Notes
_Add any city-specific notes, open data gaps, or decisions made here._

- **Theme is intentionally not the boilerplate default.** Reskinned from
  teal/orange/DM-Serif-Display to a blue (#2563EB)/slate/single-Inter-family
  theme adapted from SPSSassignment.help, per explicit request — this is a
  deliberate per-site override, not drift from the template.
- **GPG range (11-15) and water-source detail (Alafia River, Tampa Bypass
  Canal, Floridan Aquifer, Apollo Beach plant) came from two sources**: the
  original figure (8-17 GPG, avg 10.8) was verified directly from
  tampa.gov/water/faq and the 2024 Water Quality Report. It was later
  narrowed to 11-15 per user-supplied research citing "Aquatell Florida
  Hardness Reference Data" — a source that isn't independently verifiable.
  Used per explicit instruction ("just use it as-is"). Re-verify against
  the actual CCR PDF if it becomes readable (it's image-based; unreadable
  by this session's tools).
- **Permit/code content is also from that same unverified-source research**
  (Hillsborough County plumbing permit, licensed master plumber requirement,
  backflow preventer, citing IPC Section 802.1.5). It's a liability-bearing
  legal claim — verify against Hillsborough County's actual code before
  the site goes live, not just before it looks convincing.
- **searchVol is 0 in site.config.ts** — that's a placeholder, not a real
  zero. No Keyword Planner/Ahrefs/Semrush access from this environment.
- **Westshore** was considered as a 5th neighbourhood but excluded — reads
  commercial/airport-district in the sources checked, not clearly
  residential. Confirm before adding it.
- **Tier 4 service-area candidates** (Brandon, Riverview, Temple Terrace,
  Town 'n' Country) are unverified — none have passed PROVISION.md Step
  5c's QDP test. `serviceAreas: []` is correctly empty.
- **All 23 site images are real, AI-generated photography** (not stock),
  matched to each page's content by visual inspection, converted to WebP,
  served via `astro:assets`. See `src/assets/images/` for the full set.
  The homepage hero uses a real product photo rather than an abstract
  data-viz illustration — a visitor searching "water softener in tampa"
  needs instant product recognition, which a chart-style graphic (the
  SPSS reference pattern) doesn't provide for a local-service audience.
- Full detail on all of the above is in the conversation history — this
  file is a status snapshot, not a replacement for it.
