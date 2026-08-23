// Base-aware URL helpers.
//
// The site is deployed at a GitHub Pages *project* path
// (https://rquellh.github.io/together-with-grace/, built with
// BASE_PATH=/together-with-grace), so every root-relative URL in the
// markup needs the configured base prefixed on. These two helpers are the
// only place that logic lives.

// Matches an absolute URL with a scheme (http:, https:, mailto:, tel:,
// etc.) or a same-page hash anchor — anything that should never be
// prefixed with the base.
const UNTOUCHED_RE = /^(?:[a-z][a-z0-9+.-]*:|#)/i;

/**
 * Prefixes `path` with `import.meta.env.BASE_URL`, so internal links and
 * asset references resolve correctly whether the site is served from `/`
 * (Netlify, `astro dev`) or from a GitHub Pages project path like
 * `/together-with-grace/`.
 *
 * - `http(s):`, `mailto:`, `tel:` URLs and `#hash` anchors pass through
 *   unchanged.
 * - Exactly one slash is guaranteed between the base and the path, and a
 *   base of `/` produces the plain path back (no `//`).
 */
export function withBase(path: string): string {
  if (!path || UNTOUCHED_RE.test(path)) return path;

  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const suffix = path.startsWith('/') ? path : `/${path}`;

  return `${base}${suffix}`;
}

/**
 * The inverse of `withBase` for pathnames: strips the configured base off
 * `pathname` (e.g. so `Astro.url.pathname` can be compared against a route
 * path like `/give`), returning `/` for the site root.
 */
export function stripBase(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const stripped = base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;

  return stripped || '/';
}
