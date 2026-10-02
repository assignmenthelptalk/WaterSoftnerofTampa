# watersoftenertampafl

Rank-and-rent local lead-generation site for water softener services in
Tampa, FL (`watersofteneroftampa.com`). Built with Astro (static output).
Deployed via Vercel on push to `main`.

Cloned from [assignmenthelptalk/water-softener-boilerplate](https://github.com/assignmenthelptalk/water-softener-boilerplate) —
see that repo's `PROVISION.md` for how sites like this one get created.

## Content

All city data (water hardness, source, service area, SEO targeting) and
business identity fields (phone, email, address) live in
`src/site.config.ts` — no CMS layer. To update any detail after a tenant
signs, edit the fields directly and `git push`; Vercel rebuilds and
redeploys automatically.

22 pages read from that single config, plus an optional QDP-gated
`[serviceArea]` dynamic route for expanding into nearby cities once they
pass the QDP test (see `PROVISION.md` Step 5c).

## Google Search Console

The Google site verification meta tag is configured in `src/components/Layout.astro` and included in the `<head>` of all pages:

```html
<meta name="google-site-verification" content="uKZ0i0iIYAlXHKjVpPu4PbDo3CBNcyYU8p_Q5gZ1mFM" />
```

This allows Google Search Console to verify ownership of the Tampa water softener site.

### Pages to Submit for Indexing

Submit these 25+ pages to Google Search Console in priority order:

**Core Pages (High Priority):**
- https://watersofteneroftampa.com/
- https://watersofteneroftampa.com/water-quality/
- https://watersofteneroftampa.com/hard-water/
- https://watersofteneroftampa.com/installation/
- https://watersofteneroftampa.com/repair/
- https://watersofteneroftampa.com/comparison/
- https://watersofteneroftampa.com/products/
- https://watersofteneroftampa.com/faq/
- https://watersofteneroftampa.com/about/
- https://watersofteneroftampa.com/contact/

**Service Pages (High Priority):**
- https://watersofteneroftampa.com/salt-based-installation/
- https://watersofteneroftampa.com/salt-free-installation/
- https://watersofteneroftampa.com/whole-home-filtration/
- https://watersofteneroftampa.com/reverse-osmosis/
- https://watersofteneroftampa.com/water-softener-sizing/
- https://watersofteneroftampa.com/free-water-test/
- https://watersofteneroftampa.com/brine-tank-cleaning/
- https://watersofteneroftampa.com/resin-bed-replacement/

**Repair & Installation Pages (Medium Priority):**
- https://watersofteneroftampa.com/control-head-repair/
- https://watersofteneroftampa.com/new-construction-installation/

**Neighborhood Pages (Medium Priority):**
- https://watersofteneroftampa.com/neighbourhood/
- https://watersofteneroftampa.com/neighbourhood/#davis-islands
- https://watersofteneroftampa.com/neighbourhood/#ybor-city
- https://watersofteneroftampa.com/neighbourhood/#seminole-heights
- https://watersofteneroftampa.com/neighbourhood/#hyde-park

Use Google Search Console's "URL inspection" tool to request indexing for these pages.

## Development

```
npm install
npm run dev      # local dev server
npm run build    # astro check && astro build — must complete with 0 errors, 0 warnings
```
