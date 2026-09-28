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
| TampaMap.astro (neighbourhood water hardness map) | ✅ added 2026-09-27 — real interactive Leaflet map on the homepage, placed after "Best Water Softener for Tampa" and before the GPG data section. City centre and all 4 neighbourhood coordinates geocoded live via OpenStreetMap's Nominatim API (not estimated). `leaflet` + `@types/leaflet` added as dependencies, `astro.config.mjs` has `vite.ssr.noExternal: ["leaflet"]`, `Layout.astro` head has the Leaflet stylesheet link. The boilerplate's own unfilled `CityMap.astro` template (never rendered anywhere, dead code once leaflet became a real dependency) was deleted from this repo |
| About page | ✅ rebuilt 2026-09-27 to match the boilerplate's expanded 8-section template (What We Do, Differentiators, Who Uses Our Services, Team, How It Works, Key Facts table, FAQ, CTA) — see Notes for the alias founder/stats data used |
| Brand name in inner-page backlinks | ✅ corrected 2026-09-27 — anchor text changed from "Water Softeners of Tampa" (plural) to "Water Softener of Tampa" (singular), matching `site.businessName`, across all 21 inner pages. Meta titles/H1s intentionally left untouched (out of scope for that pass) |
| Em dashes in visible content | ✅ removed 2026-09-28 — every em dash in rendered page text across all 22 content pages rewritten as sentences/comma/colon joins. En dashes for GPG ranges (e.g. "11–15") are unrelated and untouched. Dev-facing HTML/CSS/JS comments still contain em dashes by design (never rendered) |
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
All 22 pages written, all site images are real photography (including
5 new About-page images added 2026-09-27), and a real interactive
neighbourhood map (`TampaMap.astro`) is live on the homepage. Since the
last major README update (PageHero migration), the following landed:

- **Homepage**: H1 is now "Water Softener in {city}, {state} | Expert
  Water Softener Services in {city}, {state}"; meta title is "Water
  Softener {city}, {state} | Expert Water Softener Installation {city}"
  (set via `Layout`'s `fullTitle` prop, bypassing the sitewide
  auto-suffix). Hero adopted Albuquerque's structure: an italic H3
  subheading below the H1, two intro paragraphs (plain `{site.businessName}`
  text, not the hyperlinked Glendale Elite pattern — that tradeoff was
  explicit and flagged at the time), and an exact-title secondary CTA.
  A new "Best Water Softener for {city}" section sits right after the
  services grid, followed immediately by `<TampaMap />`. All 9 H2s on
  the page now share one harmonized style (previously 3 sections fell
  back to a smaller, blue, unstyled default). The "Water Hardness
  Reading" section was restructured with 3 H3 subsections (water
  sources, hard-water effects, utility service info) and no longer
  links out. "Cost, Timeline & What's Included" placeholders are filled
  with real figures.
- **Comparison page**: H1/meta title changed to "Salt-Based vs.
  Salt-Free Water Conditioner in {city}, {state}" — a descriptive H1,
  intentionally not the "Trusted Local Specialists" pattern.
- **Products page**: H1/meta title changed to "Best Water Softener for
  {city}, {state} | Trusted Local Specialists".
- **Installation page**: all pricing/duration/warranty/financing
  `[PLACEHOLDER]` markers filled with confirmed figures.
- **About page**: rebuilt to the boilerplate's newer 8-section template
  (see build-status table above and Notes for the alias founder data).
- **Brand name**: inner-page backlink anchor text corrected from
  "Water Softeners of {city}" to "Water Softener of {city}" (singular),
  matching `site.businessName`, across all 21 inner pages.
- **Em dashes**: removed from all visible page content sitewide.

Everything above is committed and pushed to `main` (last commit
`98a6f2c`); working tree clean. Next: run the quality gate (never run),
then fill remaining `[PLACEHOLDER]` business facts and replace the
alias founder/stats data once a tenant/operator is identified.

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
- [x] Step 6 — `npm run build` — 0 errors, 0 warnings confirmed (last verified after the em-dash cleanup, commit `98a6f2c`)
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
- **About page founder/stats data is an explicit alias, not real.** No
  tenant/owner exists yet. Per direct owner instruction (2026-09-27),
  `site.config.ts`'s `founderNames` ("Marcus Reyes and Dana Whitfield"),
  `foundedYear` ("2019"), `customersServed`, and `projectsDelivered`
  (both labeled "(illustrative)") are placeholder values to replace
  once the site is rented — not invented facts presented as verified.
- **TampaMap.astro coordinates are real, not estimated.** City centre
  and all 4 neighbourhood coordinates were geocoded live via
  OpenStreetMap's Nominatim API during the same session that built the
  map, not pulled from memory. The bounding box is a tight box around
  the 4 neighbourhoods, not the full municipal boundary, so the map
  stays zoomed to the residential core at the locked zoom levels.
- **Installation page sizing note uses the site's own 11-15 GPG figure**,
  not a "9 to 18 GPG" baseline that appeared in a pasted content block.
  That number would have contradicted the GPG reading stated everywhere
  else on the site, so it was not used.
- Full detail on all of the above is in the conversation history — this
  file is a status snapshot, not a replacement for it.
