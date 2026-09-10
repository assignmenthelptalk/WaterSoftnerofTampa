import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import keystatic from "@keystatic/astro";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { siteConfig } from "./src/site.config.ts";

// output: "server" + the Vercel adapter is required because Keystatic's
// admin UI (@keystatic/astro) injects on-demand API routes that can't be
// prerendered. Every page WE author sets `export const prerender = true`
// in its frontmatter so it still builds to static HTML at build time —
// only Keystatic's own routes run on-demand on Vercel.
export default defineConfig({
  site: `https://${siteConfig.domain}`,
  output: "server",
  adapter: vercel(),
  integrations: [react(), keystatic(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Keystatic's admin UI (React + @keystar/ui) bundles as one large
      // chunk on its own /keystatic route — it never ships to the public
      // marketing pages, so the default 500kB warning threshold is noise
      // here rather than a real regression to watch for.
      chunkSizeWarningLimit: 3200,
    },
  },
});
