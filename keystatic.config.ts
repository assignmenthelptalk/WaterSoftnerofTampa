import { config, fields, singleton } from "@keystatic/core";

/**
 * keystatic.config.ts
 * ====================
 * Editable business identity for ONE rented city site. Every field here
 * writes to src/data/site.json, which src/lib/site.ts merges over the
 * defaults in src/site.config.ts.
 *
 * STORAGE MODE — READ BEFORE PROVISIONING A LIVE SITE:
 * This boilerplate uses `storage: { kind: "local" }` because it is a
 * factory template that is never deployed and never has a GitHub remote
 * of its own to write to. Local mode writes straight to the filesystem,
 * which is fine for a repo nobody deploys.
 *
 * Every city site cloned FROM this boilerplate is different: it lives in
 * its own GitHub repo and IS deployed to Vercel, so its Keystatic admin
 * (accessed at /keystatic on the live site) needs to commit content
 * changes back to that repo instead of a local filesystem Vercel can't
 * write to. When you provision a new city site, switch this to:
 *
 *   storage: {
 *     kind: "github",
 *     repo: "assignmenthelptalk/watersoftener[CITY][STATE]",
 *   }
 *
 * and update the singleton `label` below to "[City] — Site Settings".
 * See PROVISION.md Step 4 for the full instructions.
 */
export default config({
  storage: {
    kind: "local",
  },
  singletons: {
    siteSettings: singleton({
      label: "Boilerplate — Site Settings (placeholder, never deployed)",
      path: "src/data/site",
      // Keystatic defaults to YAML if this is omitted, which would write to
      // src/data/site.yaml — a file src/lib/site.ts never reads. Without
      // this, every Keystatic edit silently goes nowhere.
      format: "json",
      schema: {
        businessName: fields.text({
          label: "Business Name",
          description: "Overrides the businessName placeholder in site.config.ts",
        }),
        phone: fields.text({
          label: "Phone Number",
          description: "e.g. (702) 555-0192",
        }),
        email: fields.text({
          label: "Email Address",
        }),
        address: fields.text({
          label: "Address",
          description: "Physical or service-area address shown in the footer and schema",
        }),
        heroHeading: fields.text({
          label: "Hero Heading",
          description: "Leave blank to use the auto-generated GPG-hook headline",
        }),
        heroSubheading: fields.text({
          label: "Hero Subheading",
          description: "Leave blank to use the auto-generated subheading",
        }),
        quoteFormEmail: fields.text({
          label: "Quote Form Email",
          description: "formsubmit.co destination for lead form submissions. Overrides formEmail in site.config.ts",
        }),
        googleBusinessUrl: fields.url({
          label: "Google Business Profile URL",
          description: "Linked from the footer and used as the schema sameAs URL once claimed",
        }),
      },
    }),
  },
});
