// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
const base = process.env.BASE_PATH ?? '/';
const withBase = (path) => `${base.replace(/\/$/, '')}${path}`;

export default defineConfig({
  site: 'https://www.togetherwithgrace.org',
  base,
  trailingSlash: 'ignore',
  redirects: {
    '/donate': withBase('/give'),
  },
  // Astro's default HTML compressor strips most HTML comments (it keeps
  // this inconsistently — e.g. only the first one in a given render tree).
  // This build relies on several literal HTML comments surviving into
  // dist/ (the direction-contract comment, the REPLACE markers, the STUB
  // markers), so compression is disabled.
  compressHTML: false,
  // Off so review screenshots don't carry the toolbar pill.
  devToolbar: {
    enabled: false,
  },
});
