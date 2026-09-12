/**
 * site.ts — merges static site.config.ts with Keystatic-editable site.json.
 * =========================================================================
 * This is the ONLY module pages and components should import business data
 * from. It reads exclusively from ../site.config.ts and ../data/site.json,
 * so it satisfies the "no hardcoded city data outside those two files" rule
 * while keeping every page's fallback logic in one place.
 *
 * Keystatic writes real values to site.json once a site is rented. Until
 * then, every Keystatic-managed field falls back to a config-derived
 * default so the boilerplate (and a freshly cloned, not-yet-configured
 * city site) still renders something meaningful instead of blank strings.
 */

import { siteConfig, type SiteConfig } from "../site.config";
import siteData from "../data/site.json";

export interface SiteData {
  businessName: string;
  phone: string;
  email: string;
  address: string;
  heroHeading: string;
  heroSubheading: string;
  quoteFormEmail: string;
  googleBusinessUrl: string;
  businessHours: string;
}

export interface Site extends SiteConfig {
  heroHeading: string;
  heroSubheading: string;
  googleBusinessUrl: string;
  businessHours: string;
  /** Fully-qualified site URL derived from siteConfig.domain, e.g. "https://example.com" */
  siteUrl: string;
}

const data = siteData as SiteData;

export const site: Site = {
  ...siteConfig,
  businessName: data.businessName || siteConfig.businessName,
  phone: data.phone || siteConfig.phone,
  email: data.email || siteConfig.email,
  address: data.address || siteConfig.address,
  formEmail: data.quoteFormEmail || siteConfig.formEmail,
  heroHeading:
    data.heroHeading ||
    `${siteConfig.gpgLabel} Water in ${siteConfig.city}? We Can Fix That.`,
  heroSubheading:
    data.heroSubheading ||
    `Get a free water test and no-obligation quote for ${siteConfig.city}, ${siteConfig.stateAbbr} homes.`,
  googleBusinessUrl: data.googleBusinessUrl || "",
  businessHours: data.businessHours || "Mon–Fri: 8:00 AM – 5:00 PM · Sat–Sun: Closed",
  siteUrl: `https://${siteConfig.domain}`,
};
