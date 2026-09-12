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
};
