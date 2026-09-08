// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import { snapshotPlugins } from './src/lib/snapshots.mjs';

// GitHub Pages project-page deploy: the workflow sets BASE_PATH=/together-with-grace
// until the custom domain is attached. Locally the site serves from "/".
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site: 'https://rquellh.github.io',
  base,
  markdown: {
    processor: satteri({ ...snapshotPlugins() }),
  },
});
