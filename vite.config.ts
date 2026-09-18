import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Build target: fully static site for GitHub Pages.
// Every route is pre-rendered to HTML at build time (no server needed in production).
// SITE_BASE lets CI set the sub-path GitHub Pages serves the site under,
// e.g. SITE_BASE=/my-repo/ for https://<username>.github.io/my-repo/
export default defineConfig({
  tanstackStart: {
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
  },
  nitro: { preset: "static" },
  vite: { base: process.env.SITE_BASE || "/" },
});
