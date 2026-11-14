// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import { snapshotPlugins } from './src/lib/snapshots.mjs';

// The deploy workflow reads PAGES_HOST and BASE_PATH from the repo's Pages settings
// (project URL: rquellh.github.io + /together-with-grace; custom domain: base is "").
// Unset or empty falls back to the custom domain at "/"; the site is always https.
const host = process.env.PAGES_HOST || 'www.togetherwithgrace.org';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site: `https://${host}`,
  base,
  markdown: {
    processor: satteri({ ...snapshotPlugins() }),
  },
});
