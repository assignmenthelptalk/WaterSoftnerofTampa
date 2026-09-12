/**
 * site.config.ts — the ONLY file you change per city.
 * ======================================================
 * This is the factory template's single source of truth for everything
 * that differs between city sites: identity, water hardness data, SEO
 * targeting, local geography, and monetisation links.
 *
 * It is intentionally city-agnostic. Every value below is a placeholder
 * token in SCREAMING_SNAKE_CASE so a half-provisioned site is immediately
 * obvious in the rendered output — if you see "CITY_NAME" on a live page,
 * this file was never filled in.
 *
 * business identity fields (phone, email, address, businessName) are
 * DEFAULTS ONLY. Once a site is rented, Keystatic writes the real values
 * to src/data/site.json, which overrides these defaults. See src/lib/site.ts
 * for the merge — pages should import `site` from there, not this file
 * directly, so they always see the final (possibly Keystatic-overridden)
 * values.
 *
 * See PROVISION.md for the full step-by-step process of turning this
 * boilerplate into a live city site.
 */

export interface ServiceAreaNeighbourhood {
  /** Real, named residential community only — never a road, highway, or
   * recreation area. Run the neighbourhood verification checklist in
   * PROVISION.md Step 5c before adding any entry here. */
  name: string;
  /** Optional one-line description of this community. */
  note?: string;
}

export interface ServiceAreaFaq {
  question: string;
  answer: string;
}

/**
 * ServiceArea — one entry per surrounding city a provisioner has verified
 * via the QDP test (PROVISION.md Step 5c). A page is only generated for an
 * entry once qdp.verified === true AND qdp.verdict === 'PASS' — see
 * src/pages/[serviceArea]/index.astro's getStaticPaths filter.
 */
export interface ServiceArea {
  // ── Identity ────────────────────────────────────────────────────────────
  /** URL slug e.g. "boulder-city" → /boulder-city/ */
  slug: string;
  /** Display city name e.g. "Boulder City" */
  city: string;
  /** Two-letter state abbreviation e.g. "NV" */
  stateAbbr: string;
  /** County name e.g. "Clark County" */
  county: string;
  /** Verified population e.g. "16,000" */
  population: string;
  /** Verified ZIP codes */
  zipCodes: string[];

  // ── Water data — must be verified against real utility data ───────────
  /** Lower bound of local hardness range */
  gpgLow: number;
  /** Upper bound of local hardness range */
  gpgHigh: number;
  /** WQA classification e.g. "Very Hard" */
  gpgLabel: string;
  /** Exact official name of the water authority */
  waterAuthority: string;
  /** Water source description */
  waterSource: string;

  // ── Distance and relationship to the primary city ──────────────────────
  /** e.g. "7 miles southeast" */
  distanceFromPrimary: string;
  /** e.g. "separately incorporated city" or "unincorporated Clark County community" */
  relationship: string;

  // ── Page content ────────────────────────────────────────────────────────
  /** Under 60 chars */
  metaTitle: string;
  /** Under 160 chars */
  metaDesc: string;
  /** Page H1 — must contain city + state */
  h1: string;
  /** H1 subheading — one line */
  h1Sub: string;
  /** e.g. "16–18 GPG" */
  heroStat: string;
  /** e.g. "Boulder City Water Hardness" */
  heroStatLabel: string;
  /** e.g. "VERY HARD" */
  heroStatBadge: string;
  /** City-specific GPG explanation paragraph */
  gpgNote: string;
  /** WQA classification note */
  wqaNote: string;

  /** VERIFIED residential areas only — no road names, recreation areas, or
   * vague descriptors. Empty array is valid and must render gracefully. */
  neighbourhoods: ServiceAreaNeighbourhood[];

  /** 4 city-specific benefits — not copy-pasted from the primary city */
  benefits: string[];

  /** 3+ city-specific FAQs */
  faqs: ServiceAreaFaq[];

  // ── Internal linking ────────────────────────────────────────────────────
  /** Page slugs this service area page links to, e.g. ["water-quality"].
   * Reserved for provisioners extending internal-linking automation —
   * not rendered by the base ServiceAreaLayout component. */
  internalLinksTo: string[];
  /** Links to other service area pages */
  nearbyAreas: { name: string; slug: string }[];

  // ── Testimonial placeholder ─────────────────────────────────────────────
  testimonial: {
    quote: string;
    name: string;
    location: string;
    /** Must be true until a real review exists */
    placeholder: boolean;
  };

  // ── QDP verification — required before a page is generated ─────────────
  qdp: {
    /** Must be true before a page is built for this entry */
    verified: boolean;
    /** Evidence of search volume */
    searchDemand: string;
    /** How this city differs from the primary city */
    differentFrom: string;
    verdict: "PASS" | "FAIL";
    /** ISO date e.g. "2026-09-12" */
    verifiedDate: string;
    /** Who verified e.g. "manual research" */
    verifiedBy: string;
  };

  // ── Data verification ────────────────────────────────────────────────────
  /** Must be true — all figures verified */
  dataVerified: boolean;
  /** URL or source used to verify data */
  verificationSource: string;
}

export interface SiteConfig {
  // ── Identity ────────────────────────────────────────────────────────────
  /** City name, e.g. "Las Vegas" */
  city: string;
  /** Full state name, e.g. "Nevada" */
  state: string;
  /** Two-letter state abbreviation, e.g. "NV" */
  stateAbbr: string;
  /** Live domain, no protocol, no trailing slash, e.g. "lasvegaswatersoftener.com" */
  domain: string;

  // ── Water hardness data ────────────────────────────────────────────────
  /** Lower bound of local hardness range, in grains per gallon (GPG) */
  gpgLow: number;
  /** Upper bound of local hardness range, in grains per gallon (GPG) */
  gpgHigh: number;
  /** Human label for the hardness range, e.g. "Very Hard" | "Extreme" */
  gpgLabel: string;
  /** Where the city's tap water comes from, e.g. "Colorado River via Lake Mead" */
  waterSource: string;
  /** The utility/authority that manages the water supply */
  waterAuthority: string;

  // ── SEO ─────────────────────────────────────────────────────────────────
  /** Primary exact-match keyword this domain targets */
  primaryKeyword: string;
  /** Monthly search volume for primaryKeyword, from keyword research */
  searchVol: number;
  /** Default meta description for the homepage */
  metaDescription: string;

  // ── Local data ──────────────────────────────────────────────────────────
  /** City population, formatted for display, e.g. "641,900" */
  population: string;
  /** Full county name including any suffix the county actually uses, e.g. "Clark County" or "Orleans Parish" — pages interpolate this value as-is, with no " County" appended */
  county: string;
  /** 3+ real neighbourhoods/suburbs, used by neighbourhood.astro */
  neighbourhoods: string[];
  /** 3+ real ZIP codes served, used by the water-quality ZIP table */
  zipCodes: string[];

  // ── Monetisation ────────────────────────────────────────────────────────
  /** SpringWell affiliate link — softener */
  affiliateSoftener: string;
  /** SpringWell affiliate link — softener/filter combo */
  affiliateCombo: string;
  /** SpringWell affiliate link — reverse osmosis */
  affiliateRO: string;

  // ── Forms ───────────────────────────────────────────────────────────────
  /** formsubmit.co destination inbox for lead form submissions */
  formEmail: string;

  // ── Business defaults (overridden by Keystatic src/data/site.json) ──────
  /** Default business name shown until Keystatic sets a real one */
  businessName: string;
  /** Default phone — intentionally blank until rented */
  phone: string;
  /** Default email — intentionally blank until rented */
  email: string;
  /** Default address — intentionally blank until rented */
  address: string;

  // ── Design tokens (deep teal + warm orange defaults; other cities override) ─────
  design: {
    /** Primary brand color — deep teal or navy, hex */
    primaryColor: string;
    /** Light tint of the primary color, used for backgrounds/highlights */
    primaryLight: string;
    /** CTA/accent color — warm orange or amber, hex */
    accentColor: string;
    /** Heading font family name */
    headingFont: string;
    /** Body font family name */
    bodyFont: string;
    /** Default border radius for cards/buttons */
    borderRadius: string;
    /** Color used for the GPG stat callout component */
    gpgStatColor: string;
  };

  // ── Service area subpages ────────────────────────────────────────────────
  /** Empty array if no service areas built yet. Populate only after each
   * entry passes the QDP test — see PROVISION.md Step 5c. */
  serviceAreas: ServiceArea[];
}

export const siteConfig: SiteConfig = {
  // Identity
  city: "CITY_NAME",
  state: "STATE_NAME",
  stateAbbr: "STATE_ABBR",
  domain: "DOMAIN_NAME",

  // Water hardness data
  gpgLow: 0,
  gpgHigh: 0,
  gpgLabel: "GPG_LABEL",
  waterSource: "WATER_SOURCE",
  waterAuthority: "WATER_AUTHORITY",

  // SEO
  primaryKeyword: "PRIMARY_KEYWORD",
  searchVol: 0,
  metaDescription: "META_DESCRIPTION",

  // Local data
  population: "POPULATION",
  county: "COUNTY_NAME",
  neighbourhoods: ["NEIGHBOURHOOD_1", "NEIGHBOURHOOD_2", "NEIGHBOURHOOD_3"],
  zipCodes: ["ZIP_1", "ZIP_2", "ZIP_3"],

  // Monetisation
  affiliateSoftener: "https://springwellwater.com/follow/softener/",
  affiliateCombo: "https://springwellwater.com/follow/combo/",
  affiliateRO: "https://springwellwater.com/follow/ro/",

  // Forms
  formEmail: "FORM_EMAIL",

  // Business (overridden by Keystatic when rented)
  businessName: "Water Softener CITY_NAME",
  phone: "",
  email: "",
  address: "",

  // Design tokens (deep teal + warm orange defaults — other cities override these)
  design: {
    primaryColor: "#0F6E78",
    primaryLight: "#E1F5EE",
    accentColor: "#E65100",
    headingFont: "DM Serif Display",
    bodyFont: "Inter",
    borderRadius: "8px",
    gpgStatColor: "#0F6E78",
  },

  serviceAreas: [],
  // Populate this array when adding service area pages.
  // Each entry must pass the QDP test before the page is built.
  // See PROVISION.md Step 5c for the full QDP checklist.
  // All neighbourhood names must be verified residential communities —
  // do not list road names, recreation areas, or vague descriptors.
};
