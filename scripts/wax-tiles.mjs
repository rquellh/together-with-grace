#!/usr/bin/env node
/**
 * wax-tiles.mjs — deterministic generator for the Together with Grace cloth tiles.
 *
 * PROVENANCE
 *   Generated art, not traced from any photograph. Seed 20260907 (see SEED below);
 *   every coordinate comes from a mulberry32 PRNG threaded from that seed, so
 *   `node scripts/wax-tiles.mjs` reproduces the four SVGs byte for byte.
 *
 * WHAT IT DRAWS
 *   Four seamless tiles that read as Dutch wax / Ankara yardage:
 *
 *   wax-orange.svg, wax-ink.svg  (440x440)
 *     - A "sun" medallion (208px across) centred in the tile plus a second
 *       medallion quartered across the four corners. Nothing in a medallion is a
 *       flat field: every ring is built from small marks — bead chains (a dark
 *       disc with a ground-coloured pupil), radial dashes, radial petals
 *       (round-capped stadium strokes), outward triangles, zigzag rings, dot
 *       rings — the way p12 "Brown Savanna Sun" and p06 "Black Olive Paisley Sun"
 *       are built.
 *     - Twisted-wave paisleys on the four edge midpoints: a spiral centreline
 *       offset along its true normal into a ribbon that tapers from a rounded
 *       fat end to a curling point, filled with dot rows that follow the curl
 *       and backed by a bead chain, after p14 "Orange Blue Twisted Waves" and
 *       p13. A smaller companion comma nests in the hollow of each curl. The two
 *       edge pairs take different colour plates so the tile is not one motif.
 *     - Six-petal flowers on the quarter points, plus scattered cowrie ovals,
 *       four-petal sprigs and beaded dot-stars wherever the ground has room.
 *     - No ring is a machine-perfect circle: outlines and colour plates alike are
 *       drawn through wobbleD, which undulates the radius by well under a percent.
 *     - Off-register printing: the colour plates (cream / deep-orange bands on
 *       the orange cloth, indigo / orange bands on the navy cloth) are drawn
 *       2-3px away from the dark outline work, so colour spills past the line on
 *       one side and leaves a sliver of ground on the other. This is the single
 *       most recognisable trait of real wax print.
 *     - A jittered stipple grid over the whole ground so no area is ever flat.
 *
 *   crackle-orange.svg, crackle-ink.svg  (320x320, transparent)
 *     - Batik crackle: hairline veins that meander along three preferred
 *       fracture directions with side branches, plus clusters of wax "bubble"
 *       speckles. Composited over the wax tiles by CSS, and used alone over
 *       plain orange in .close-call — so it is deliberately low contrast.
 *
 * SEAMLESSNESS
 *   Everything is placed through wrap-aware helpers: any element whose bounding
 *   circle crosses a tile edge is emitted again at every wrapped position, and
 *   the root <svg> viewBox clips the overhang. Crack polylines are walked on a
 *   torus and each translated copy is clipped to the tile box before it is
 *   written out. Verified by rendering a 3x3 tiling.
 *
 * PALETTE (brand-locked; no other colours appear in the output)
 *   orange #E9670D · deep orange #C24E06 · navy #002B3C · indigo #0E4A63
 *   brand blue #0484B1 (sparse accent only) · muslin cream #F6E8D0 · midnight #001B27
 */

import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const SEED = 20260907;

const HERE = dirname(fileURLToPath(import.meta.url));
const ASSETS = resolve(HERE, '..', 'src', 'assets');

/* ------------------------------------------------------------------ maths -- */

const TAU = Math.PI * 2;

function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Number -> shortest sensible decimal string. */
function f(v, d = 1) {
  let s = (+v).toFixed(d);
  if (s.includes('.')) s = s.replace(/0+$/, '').replace(/\.$/, '');
  return s === '-0' ? '0' : s;
}

const px = (r, a) => [r * Math.cos(a), r * Math.sin(a)];

/**
 * A circle with a printer's wobble: two low-frequency undulations plus a little
 * per-point noise, so no ring in a medallion is a machine-perfect vector circle.
 * Used for the outline rings and for the thick-stroked colour-plate annuli.
 */
function wobbleD(cx, cy, r, rng, amp = 0.007) {
  const n = Math.max(26, Math.min(88, Math.round(r * 0.95)));
  const k1 = 2 + Math.floor(rng() * 3);
  const k2 = 4 + Math.floor(rng() * 4);
  const p1 = rng() * TAU;
  const p2 = rng() * TAU;
  const a1 = amp * (0.6 + rng() * 0.8);
  const a2 = amp * (0.3 + rng() * 0.5);
  const pts = [];
  for (let i = 0; i < n; i++) {
    const a = (i * TAU) / n;
    const rr = r * (1 + a1 * Math.sin(k1 * a + p1) + a2 * Math.sin(k2 * a + p2)) + (rng() - 0.5) * 0.35;
    pts.push([cx + rr * Math.cos(a), cy + rr * Math.sin(a)]);
  }
  return polyD(pts);
}

function polyD(pts, close = true) {
  let d = `M${f(pts[0][0])} ${f(pts[0][1])}`;
  for (let i = 1; i < pts.length; i++) d += `L${f(pts[i][0])} ${f(pts[i][1])}`;
  return close ? d + 'Z' : d;
}

function bbox(pts) {
  let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
  for (const [x, y] of pts) {
    if (x < x0) x0 = x;
    if (x > x1) x1 = x;
    if (y < y0) y0 = y;
    if (y > y1) y1 = y;
  }
  return { x0, x1, y0, y1, w: x1 - x0, h: y1 - y0, cx: (x0 + x1) / 2, cy: (y0 + y1) / 2 };
}

/* ---------------------------------------------------------------- drawing -- */

/**
 * Ordered op list that merges *adjacent* ops sharing a style signature into one
 * <path>. Keeps z-order exact while collapsing a 64-bead ring into ~11 bytes
 * per bead. Dots are zero-length round-capped subpaths ("M x y h0"), so they
 * merge with round-capped strokes of the same colour and width.
 */
class Draw {
  constructor() {
    this.ops = [];
  }
  fill(color, d, opacity = 1) {
    this.ops.push({ k: 'f', color, opacity, d });
    return this;
  }
  stroke(color, w, d, { opacity = 1, cap = 'round', join = 'round' } = {}) {
    this.ops.push({ k: 's', color, w, opacity, cap, join, d });
    return this;
  }
  dot(x, y, r, color, opacity = 1) {
    const w = Math.round(r * 2 * 10) / 10;
    this.ops.push({ k: 's', color, w, opacity, cap: 'round', join: 'round', d: `M${f(x)} ${f(y)}h0` });
    return this;
  }
  raw(s) {
    this.ops.push({ k: 'r', s });
    return this;
  }
  render(pad = '  ') {
    const out = [];
    let sig = null;
    let head = null;
    let buf = [];
    const flush = () => {
      if (head) out.push(pad + head + buf.join('') + '"/>');
      head = null;
      buf = [];
      sig = null;
    };
    for (const op of this.ops) {
      if (op.k === 'r') {
        flush();
        out.push(pad + op.s);
        continue;
      }
      const s =
        op.k === 'f'
          ? `f|${op.color}|${op.opacity}`
          : `s|${op.color}|${op.w}|${op.opacity}|${op.cap}|${op.join}`;
      if (s === sig) {
        buf.push(op.d);
        continue;
      }
      flush();
      sig = s;
      // fill:none and round caps/joins are set once on the root <svg>, so a
      // path only ever carries what differs from the sheet default.
      if (op.k === 'f') {
        head = `<path fill="${op.color}"${op.opacity !== 1 ? ` fill-opacity="${f(op.opacity, 2)}"` : ''} d="`;
      } else {
        head =
          `<path stroke="${op.color}" stroke-width="${f(op.w, 2)}"` +
          (op.opacity !== 1 ? ` stroke-opacity="${f(op.opacity, 2)}"` : '') +
          (op.cap !== 'round' ? ` stroke-linecap="${op.cap}"` : '') +
          (op.join !== 'round' ? ` stroke-linejoin="${op.join}"` : '') +
          ' d="';
      }
      buf.push(op.d);
    }
    flush();
    return out.join('\n');
  }
}

/* ------------------------------------------------------------ ring makers -- */

/**
 * n radial marks on a ring. len 0 gives dots, a thin width gives dashes, a fat
 * width gives the elongated petals that fill p12's bands.
 */
function ringMarks(d, o) {
  const {
    r, n, len = 0, w = 1, color, opacity = 1, phase = 0,
    jitA = 0, jitR = 0, rng = null, cap = 'round',
  } = o;
  for (let i = 0; i < n; i++) {
    const jw = rng ? (rng() - 0.5) : 0;
    const a = phase + ((i + jw * jitA) * TAU) / n;
    const rr = r + (rng ? (rng() - 0.5) * jitR : 0);
    if (len < 0.05) {
      const [x, y] = px(rr, a);
      d.stroke(color, w, `M${f(x)} ${f(y)}h0`, { opacity, cap });
    } else {
      const [x0, y0] = px(rr - len / 2, a);
      const [x1, y1] = px(rr + len / 2, a);
      d.stroke(color, w, `M${f(x0)} ${f(y0)}L${f(x1)} ${f(y1)}`, { opacity, cap });
    }
  }
}

/** Bead chain: a ring of discs, each with a pupil of the ground colour. */
function ringBeads(d, { r, n, R, ring, core, coreR = 0.42, phase = 0, rng = null, jitR = 0 }) {
  const rr = [];
  for (let i = 0; i < n; i++) {
    const a = phase + (i * TAU) / n;
    rr.push(px(r + (rng ? (rng() - 0.5) * jitR : 0), a));
  }
  beadChain(d, rr, { R, ring, core, coreR });
}

/** Bead chain along an arbitrary point list (used for medallion rims and paisley outlines). */
function beadChain(d, pts, { R, ring, core, coreR = 0.42 }) {
  for (const [x, y] of pts) d.dot(x, y, R, ring);
  if (core) for (const [x, y] of pts) d.dot(x, y, R * coreR, core);
}

/** Resample a polyline at roughly `step` spacing. */
function resample(pts, step, closed = true) {
  const src = closed ? [...pts, pts[0]] : pts;
  const out = [];
  let carry = 0;
  for (let i = 0; i < src.length - 1; i++) {
    const [x0, y0] = src[i];
    const [x1, y1] = src[i + 1];
    const len = Math.hypot(x1 - x0, y1 - y0);
    let t = carry;
    while (t < len) {
      out.push([x0 + ((x1 - x0) * t) / len, y0 + ((y1 - y0) * t) / len]);
      t += step;
    }
    carry = t - len;
  }
  return out;
}

/** n small triangles standing on a ring, apex outward (or inward). */
function ringTris(d, { r, n, h, hw, color, out = true, phase = 0, opacity = 1 }) {
  const sgn = out ? 1 : -1;
  for (let i = 0; i < n; i++) {
    const a = phase + (i * TAU) / n;
    const ux = Math.cos(a);
    const uy = Math.sin(a);
    const tx = -uy;
    const ty = ux;
    const apex = [(r + sgn * h) * ux, (r + sgn * h) * uy];
    const b1 = [r * ux + hw * tx, r * uy + hw * ty];
    const b2 = [r * ux - hw * tx, r * uy - hw * ty];
    d.fill(color, polyD([apex, b1, b2]), opacity);
  }
}

/** Closed zigzag ring. */
function ringZig(d, { r, n, amp, w, color, phase = 0, opacity = 1 }) {
  const pts = [];
  for (let i = 0; i < n * 2; i++) {
    const a = phase + (i * TAU) / (n * 2);
    pts.push(px(r + (i % 2 ? -amp : amp), a));
  }
  d.stroke(color, w, polyD(pts), { opacity });
}

/* ------------------------------------------------------------- medallions -- */

/**
 * Concentric sun medallion, drawn centred on the origin, outer bead chain at
 * r = R. `kind` 0 is the centre medallion, 1 the corner one (different ring
 * schedule so the tile does not read as one motif repeated).
 */
function medallion(R, P, rng, kind = 0) {
  const d = new Draw();
  const S = R / 100;
  const s = (v) => v * S;
  const [ax, ay] = P.offA;
  const [bx, by] = P.offB;
  const K = kind ? 0.88 : 1;              // corner medallion carries fewer marks
  const wob = (cx, cy, r) => wobbleD(cx, cy, r, rng, 0.008);
  const N = (n) => Math.max(6, Math.round(n * K));

  /* --- colour plates, printed off-register from the outline work.
         They are tonal fields close to the ground, not white rings: the light
         comes from the marks laid on top, the way p12 works.  ---------------- */
  d.stroke(P.plateDeep, s(19), wob(ax, ay, s(80.5)));
  d.stroke(P.plateLight, s(11), wob(bx, by, s(66)));
  d.stroke(P.plateHot, s(13), wob(bx * -0.8, by * -0.8, s(51)));
  d.stroke(P.plateLight, s(14), wob(ax, ay, s(36)));
  d.fill(P.plateHot, wob(bx * 0.7, by * 0.7, s(21)));

  /* --- outline + texture, printed true ------------------------------------ */
  // beaded rim
  ringBeads(d, { r: s(96), n: N(66), R: s(3.4), ring: P.ink, core: P.ground, rng, jitR: s(0.9) });
  d.stroke(P.ink, s(1.2), wob(0, 0, s(90.5)));

  // triangles standing inward off the rim line
  ringTris(d, { r: s(90.5), n: N(46), h: s(-6.5), hw: s(2.9), color: P.ink, out: true, phase: 0.03 });

  // BAND 1 (r 71-90, over the deep plate): petals of light alternating with
  // ink petals, ground showing in the gaps
  const n1 = N(46);
  const h1 = Math.round(n1 / 2);
  ringMarks(d, { r: s(80.5), len: s(15), w: s(5.6), n: h1, color: P.petalA, rng, jitA: 0.16, jitR: s(0.7) });
  ringMarks(d, { r: s(80.5), len: s(15), w: s(5.6), n: h1, color: P.petalB, phase: Math.PI / h1, rng, jitA: 0.16, jitR: s(0.7) });
  ringMarks(d, { r: s(80.5), len: s(13), w: s(2.6), n: n1, color: P.ink, phase: Math.PI / n1, rng, jitR: s(0.8) });
  ringMarks(d, { r: s(88.5), len: 0, w: s(1.8), n: n1, color: P.ink, phase: Math.PI / n1 });
  ringMarks(d, { r: s(73), len: 0, w: s(2.2), n: n1, color: P.warm, phase: Math.PI / n1 });
  // brand blue, sparse
  ringMarks(d, { r: s(80.5), len: 0, w: s(3.4), n: 8, color: P.accent, phase: 0.42 });
  d.stroke(P.ink, s(1.4), wob(0, 0, s(71)));

  // BAND 2 (r 61-71, over the light plate): fine ink ticks and outward triangles
  const n2 = N(40);
  ringMarks(d, { r: s(66), len: s(9), w: s(1.7), n: n2, color: P.ink, rng, jitA: 0.2 });
  ringTris(d, { r: s(61), n: N(20), h: s(-5), hw: s(2.4), color: P.warm, out: true, phase: 0.1 });
  d.stroke(P.ink, s(1.3), wob(0, 0, s(58)));

  // BAND 3 (r 45-58, over the second deep plate): fat warm petals, light pins
  const n3 = N(28);
  ringMarks(d, { r: s(51), len: s(14), w: s(6.8), n: n3, color: P.warm, rng, jitA: 0.14, jitR: s(0.6) });
  ringMarks(d, { r: s(51), len: s(11), w: s(1.8), n: n3, color: P.ink, phase: Math.PI / n3 });
  ringMarks(d, { r: s(56.5), len: 0, w: s(2), n: n3 * 2, color: P.light, phase: Math.PI / (n3 * 2) });
  d.stroke(P.ink, s(1.3), wob(0, 0, s(44)));

  // BAND 4 (r 29-44, over the inner light plate): zigzag between two dot rings
  ringMarks(d, { r: s(41), len: 0, w: s(2.1), n: N(32), color: P.ink, rng, jitR: s(0.7) });
  ringZig(d, { r: s(35.5), n: N(19), amp: s(4), w: s(1.6), color: P.ink });
  ringMarks(d, { r: s(30.5), len: 0, w: s(2), n: N(24), color: P.warm, phase: 0.08 });
  d.stroke(P.ink, s(1.2), wob(0, 0, s(26.5)));

  // eye: bead ring, petals, pupil
  ringBeads(d, { r: s(23), n: N(16), R: s(3), ring: P.ink, core: P.light });
  ringMarks(d, { r: s(13), len: s(10), w: s(4.6), n: N(10), color: P.light, phase: 0.2 });
  d.stroke(P.ink, s(1.2), wob(0, 0, s(7.6)));
  d.dot(0, 0, s(3.6), P.ink);

  return d;
}

/* ------------------------------------------------- twisted-wave rosette --- */

/**
 * One comma/swirl. A spiral centreline, offset by a half-width measured on the
 * true normal (not radially — that is what turns a comma into a scallop shell),
 * tapering from a rounded fat end to a point that curls into the middle. Returns
 * the closed outline, the resampled outline for beading, and the centreline
 * frames so the caller can lay dot rows that follow the curl.
 */
function comma({ r0, r1, sweep, w0, w1, phase, steps = 64, taper = 0.85 }) {
  const mid = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const a = phase + t * sweep;
    const rho = r0 + (r1 - r0) * t;
    mid.push({ t, x: rho * Math.cos(a), y: rho * Math.sin(a), w: w1 + (w0 - w1) * Math.pow(1 - t, taper) });
  }
  // true normals from a central difference along the centreline
  for (let i = 0; i <= steps; i++) {
    const a = mid[Math.max(0, i - 1)];
    const b = mid[Math.min(steps, i + 1)];
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const L = Math.hypot(dx, dy) || 1;
    mid[i].n = [-dy / L, dx / L];
  }
  const outer = mid.map((m) => [m.x + m.w * m.n[0], m.y + m.w * m.n[1]]);
  const inner = mid.map((m) => [m.x - m.w * m.n[0], m.y - m.w * m.n[1]]);
  // semicircular cap swung round the fat end, from the inner edge to the outer
  const m0 = mid[0];
  const a0 = Math.atan2(-m0.n[1], -m0.n[0]);
  const cap = [];
  for (let i = 1; i <= 9; i++) {
    const th = a0 + (i * Math.PI) / 10;
    cap.push([m0.x + m0.w * Math.cos(th), m0.y + m0.w * Math.sin(th)]);
  }
  const ring = [...outer, ...inner.slice().reverse(), ...cap];
  return { d: polyD(ring), ring, mid };
}

/**
 * A comma laid down the way the cloth is printed: colour plate first and
 * off-register, then dot rows that follow the curl, then the outline — a line
 * plus a bead chain, the p06 / p13 signature.
 */
function commaInto(d, P, spec, { plate, dots, off, bead = 0, core = null, eye = 0 }) {
  const c = comma(spec);
  // off-register colour plate
  d.raw(`<g transform="translate(${f(off[0])} ${f(off[1])})">`);
  d.fill(plate, c.d);
  d.raw('</g>');
  // dot rows following the curl, spaced along both the centreline and the normal
  const rows = [];
  let last = null;
  for (const m of c.mid) {
    if (last && Math.hypot(m.x - last.x, m.y - last.y) < 4.4) continue;
    last = m;
    const k = Math.floor((m.w - 1.5) / 4.3);
    for (let j = -k; j <= k; j++) {
      const u = j * 4.3;
      if (Math.abs(u) > m.w - 2) continue;
      rows.push([m.x + u * m.n[0], m.y + u * m.n[1]]);
    }
  }
  for (const [x, y] of rows) d.dot(x, y, 1.4, dots);
  // a small target eye inside the fat end, as every p13 paisley carries
  if (eye) {
    const m = c.mid[1];
    d.dot(m.x, m.y, eye, P.ink);
    d.dot(m.x, m.y, eye * 0.62, plate);
    d.dot(m.x, m.y, eye * 0.3, P.ink);
  }
  // outline, printed true
  d.stroke(P.ink, 1.7, c.d);
  if (bead) beadChain(d, resample(c.ring, bead * 2.05), { R: bead, ring: P.ink, core: core || P.light });
}

/**
 * Edge-midpoint motif: a bold twisted-wave paisley with a beaded back, plus a
 * smaller comma nested in the hollow of its curl. The comma is generated once to
 * measure it, then re-generated scaled and translated so the paisley actually
 * fills its slot instead of hanging off one side of the spiral origin.
 */
function rosette(P, rng, R, variant = 0) {
  const d = new Draw();
  const v = P.rosette[variant];
  const base = { r0: R * 0.6, r1: R * 0.1, sweep: 3.85, w0: R * 0.3, w1: R * 0.03, phase: 0.35, steps: 76 };
  const bb = bbox(comma(base).ring);
  const k = (2 * R * 0.97) / Math.max(bb.w, bb.h);
  const fit = (o, m = 1) => ({ ...o, r0: o.r0 * k * m, r1: o.r1 * k * m, w0: o.w0 * k * m, w1: o.w1 * k * m });

  d.raw(`<g transform="translate(${f(-bb.cx * k)} ${f(-bb.cy * k)})">`);
  commaInto(d, P, fit(base), {
    plate: v.plate, dots: v.dots, off: P.offA, bead: R * 0.06, eye: R * 0.12, core: v.bead,
  });
  // the companion comma, tucked into the hollow the big curl leaves open
  d.raw('<g transform="rotate(186)">');
  commaInto(
    d, P,
    fit({ r0: R * 0.62, r1: R * 0.12, sweep: 3.3, w0: R * 0.3, w1: R * 0.05, phase: 0.35, steps: 52 }, 0.47),
    { plate: v.plate2, dots: v.dots2, off: [P.offB[0] * 1.5, P.offB[1] * 1.5], bead: R * 0.05, core: v.bead }
  );
  d.raw('</g>');
  d.raw('</g>');
  return d;
}

/* ------------------------------------------------------- small motifs ----- */

/** A leaf/petal pointing along +x, tip at (len, 0), root at the origin. */
function leafD(len, w) {
  return (
    `M0 0C${f(len * 0.3)} ${f(-w)} ${f(len * 0.68)} ${f(-w * 0.82)} ${f(len)} 0` +
    `C${f(len * 0.68)} ${f(w * 0.82)} ${f(len * 0.3)} ${f(w)} 0 0Z`
  );
}

function petalFlower(d, P, R, { n = 4, phase = 0, len, w, plate, off, bead = 0 }) {
  const leaf = leafD(len, w);
  const g = (extra) => {
    for (let i = 0; i < n; i++) {
      const a = ((phase + (i * TAU) / n) * 180) / Math.PI;
      d.raw(`<g transform="rotate(${f(a)})${extra}">`);
      d.fill(plate, leaf);
      d.raw('</g>');
    }
  };
  d.raw(`<g transform="translate(${f(off[0])} ${f(off[1])})">`);
  g('');
  d.raw('</g>');
  for (let i = 0; i < n; i++) {
    const a = ((phase + (i * TAU) / n) * 180) / Math.PI;
    d.raw(`<g transform="rotate(${f(a)})">`);
    d.stroke(P.ink, R * 0.055, leaf);
    d.raw('</g>');
    // vein of dots down the middle of the petal
    const ang = phase + (i * TAU) / n;
    for (let k = 1; k <= 4; k++) {
      const rr = (len * k) / 5;
      d.dot(rr * Math.cos(ang), rr * Math.sin(ang), R * 0.05, P.ink);
    }
  }
  if (bead) ringBeads(d, { r: R * 0.92, n: Math.round(R * 0.78), R: bead, ring: P.ink, core: P.light });
}

function seedMotif(P, rng, R) {
  const d = new Draw();
  petalFlower(d, P, R, {
    n: 6, phase: 0.26, len: R * 0.74, w: R * 0.2,
    plate: P.plateLight, off: [P.offA[0] * 0.8, P.offA[1] * 0.8], bead: R * 0.07,
  });
  d.dot(0, 0, R * 0.19, P.ink);
  d.dot(0, 0, R * 0.12, P.warm);
  return d;
}

function cowrieMotif(P, rng, R) {
  const d = new Draw();
  const [bx, by] = P.offB;
  const rx = R * 0.52;
  const ry = R;
  d.raw(
    `<ellipse cx="${f(bx * 0.8)}" cy="${f(by * 0.8)}" rx="${f(rx)}" ry="${f(ry)}" fill="${P.plateDeep}"/>`
  );
  d.raw(`<ellipse rx="${f(rx)}" ry="${f(ry)}" fill="none" stroke="${P.ink}" stroke-width="${f(R * 0.11, 2)}"/>`);
  // the cowrie's toothed slit
  const n = 7;
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1);
    const y = -ry * 0.6 + t * ry * 1.2;
    const hw = rx * 0.46 * Math.sin(Math.PI * (0.18 + t * 0.64));
    d.stroke(P.light, R * 0.11, `M${f(-hw)} ${f(y)}L${f(hw)} ${f(y)}`);
  }
  d.stroke(P.ink, R * 0.07, `M0 ${f(-ry * 0.66)}L0 ${f(ry * 0.66)}`);
  return d;
}

function sprigMotif(P, rng, R) {
  const d = new Draw();
  petalFlower(d, P, R, {
    n: 4, phase: 0.4, len: R * 0.8, w: R * 0.24,
    plate: P.plateHot, off: [P.offB[0] * 0.7, P.offB[1] * 0.7],
  });
  d.dot(0, 0, R * 0.2, P.ink);
  d.dot(0, 0, R * 0.1, P.light);
  return d;
}

function starMotif(P, rng, R) {
  const d = new Draw();
  ringBeads(d, { r: R * 0.74, n: 10, R: R * 0.2, ring: P.ink, core: P.light });
  d.dot(0, 0, R * 0.22, P.warm);
  d.dot(0, 0, R * 0.1, P.ink);
  return d;
}

/* ----------------------------------------------------------- occupancy ---- */

class Occ {
  constructor(w, h) {
    this.w = w;
    this.h = h;
    this.list = [];
  }
  add(x, y, r) {
    this.list.push([x, y, r]);
  }
  free(x, y, r) {
    for (const [ox, oy, orr] of this.list) {
      let dx = Math.abs(x - ox);
      let dy = Math.abs(y - oy);
      if (dx > this.w / 2) dx = this.w - dx;
      if (dy > this.h / 2) dy = this.h - dy;
      if (dx * dx + dy * dy < (r + orr) * (r + orr)) return false;
    }
    return true;
  }
}

/** Emit a <use> at every wrapped position whose bounding circle touches the tile. */
function useWrapped(out, id, x, y, r, W, H, rot = 0, scale = 1) {
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const X = x + i * W;
      const Y = y + j * H;
      if (X + r < 0 || X - r > W || Y + r < 0 || Y - r > H) continue;
      let t = `translate(${f(X)} ${f(Y)})`;
      if (rot) t += ` rotate(${f(rot)})`;
      if (scale !== 1) t += ` scale(${f(scale, 3)})`;
      out.push(`  <use href="#${id}" transform="${t}"/>`);
    }
  }
}

/* ------------------------------------------------------------- wax tile --- */

function waxTile(P, seed, W = 440) {
  const H = W;
  const rng = mulberry32(seed);
  const R = 100;                 // medallion outer radius
  const RO = R * 1.07;           // its keep-out radius
  const RR = 62;                 // rosette radius
  const RRO = RR * 1.11;
  const SD = 25;                 // quarter-point seed radius
  const SDO = SD * 1.2;

  const defs = [];
  defs.push(`<g id="medA">\n${medallion(R, P, rng, 0).render('  ')}\n</g>`);
  defs.push(`<g id="medB">\n${medallion(R * 0.96, P, rng, 1).render('  ')}\n</g>`);
  defs.push(`<g id="ros">\n${rosette(P, rng, RR, 0).render('  ')}\n</g>`);
  defs.push(`<g id="ros2">\n${rosette(P, rng, RR, 1).render('  ')}\n</g>`);
  defs.push(`<g id="sd">\n${seedMotif(P, rng, SD).render('  ')}\n</g>`);
  defs.push(`<g id="cw">\n${cowrieMotif(P, rng, 13).render('  ')}\n</g>`);
  defs.push(`<g id="sp">\n${sprigMotif(P, rng, 11).render('  ')}\n</g>`);
  defs.push(`<g id="st">\n${starMotif(P, rng, 10).render('  ')}\n</g>`);

  const occ = new Occ(W, H);
  const uses = [];

  // corner medallion (quartered across all four corners) + centre medallion
  for (const [x, y] of [[0, 0], [W, 0], [0, H], [W, H]]) occ.add(x, y, RO * 0.96);
  useWrapped(uses, 'medB', 0, 0, RO, W, H);
  occ.add(W / 2, H / 2, RO);
  uses.push(`  <use href="#medA" transform="translate(${f(W / 2)} ${f(H / 2)})"/>`);

  // twisted-wave rosettes on the edge midpoints
  for (const [id, x, y, rot] of [
    ['ros', W / 2, 0, 0],
    ['ros', W / 2, H, 0],
    ['ros2', 0, H / 2, 104],
    ['ros2', W, H / 2, 104],
  ]) {
    occ.add(x, y, RRO);
    useWrapped(uses, id, x, y, RR * 1.2, W, H, rot);
  }

  // four-petal seeds on the quarter points
  for (const [x, y] of [
    [W / 4, H / 4],
    [(W * 3) / 4, H / 4],
    [W / 4, (H * 3) / 4],
    [(W * 3) / 4, (H * 3) / 4],
  ]) {
    occ.add(x, y, SDO);
    useWrapped(uses, 'sd', x, y, SD * 1.2, W, H, Math.floor(rng() * 4) * 22.5);
  }

  // scattered ground motifs wherever there is still room
  // The navy cloth carries a thinner scatter: p06 leaves a lot of dark ground
  // open, and cream body copy set on .cloth-ink needs that quiet.
  const dens = P.scatter;
  const scatter = [
    { id: 'cw', r: 15, keep: 19, tries: 90, want: 10, rot: true },
    { id: 'st', r: 11, keep: 14, tries: 140, want: 14, rot: false },
    { id: 'sp', r: 12, keep: 15, tries: 160, want: 18, rot: true },
  ];
  for (const sc of scatter) {
    sc.want = Math.round(sc.want * dens);
    let got = 0;
    for (let t = 0; t < sc.tries && got < sc.want; t++) {
      const x = rng() * W;
      const y = rng() * H;
      if (!occ.free(x, y, sc.keep)) continue;
      occ.add(x, y, sc.keep);
      useWrapped(uses, sc.id, x, y, sc.r + 2, W, H, sc.rot ? rng() * 360 : 0);
      got++;
    }
  }

  /* --- ground stipple: jittered grid, three inks, skipped under motifs ---- */
  const g = new Draw();
  const stipple = (cell, drop, rmin, rmax, color, keep = 3) => {
    const n = Math.round(W / cell);
    const c = W / n;
    const pts = [];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (rng() < drop) continue;
        const x = (i + 0.5 + (rng() - 0.5) * 0.85) * c;
        const y = (j + 0.5 + (rng() - 0.5) * 0.85) * c;
        if (!occ.free(x, y, keep)) continue;
        pts.push([((x % W) + W) % W, ((y % H) + H) % H, rmin + rng() * (rmax - rmin)]);
      }
    }
    for (const [x, y, r] of pts) {
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          const X = x + i * W;
          const Y = y + j * H;
          if (X + r < -1 || X - r > W + 1 || Y + r < -1 || Y - r > H + 1) continue;
          g.dot(X, Y, r, color);
        }
      }
    }
  };
  for (const [color, cell, drop, rmin, rmax, keep] of P.speck) {
    stipple(cell, drop, rmin, rmax, color, keep);
  }

  const body = [
    `  <rect width="${W}" height="${H}" fill="${P.ground}"/>`,
    g.render('  '),
    ...uses,
  ].join('\n');

  return svg(W, H, defs.join('\n'), body);
}

/* --------------------------------------------------------- crackle tile --- */

function walk(rng, start, dir, len, meander, step = 11) {
  const pts = [[...start]];
  let [x, y] = start;
  let a = dir;
  const base = dir;
  let travelled = 0;
  while (travelled < len) {
    const st = step * (0.7 + rng() * 0.7);
    a += (rng() - 0.5) * meander + (base - a) * 0.14;
    x += Math.cos(a) * st;
    y += Math.sin(a) * st;
    pts.push([x, y]);
    travelled += st;
  }
  return pts;
}

/** Split a polyline into runs whose segments touch the box, so copies are cheap. */
function clipRuns(pts, W, H, m = 6) {
  const runs = [];
  let cur = null;
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i];
    const b = pts[i + 1];
    const hit =
      Math.max(a[0], b[0]) > -m &&
      Math.min(a[0], b[0]) < W + m &&
      Math.max(a[1], b[1]) > -m &&
      Math.min(a[1], b[1]) < H + m;
    if (hit) {
      if (!cur) {
        cur = [a];
        runs.push(cur);
      }
      cur.push(b);
    } else {
      cur = null;
    }
  }
  return runs.filter((r) => r.length > 1);
}

function crackleTile(P, seed, W = 320) {
  const H = W;
  const rng = mulberry32(seed);
  const dirs = [0.28, 1.72, 2.62];
  const veins = [];

  const push = (pts, wgt) => veins.push({ pts, wgt });

  for (let i = 0; i < 13; i++) {
    const base = dirs[i % dirs.length] + (rng() - 0.5) * 0.55;
    const start = [rng() * W, rng() * H];
    const pts = walk(rng, start, base, 190 + rng() * 240, 0.38);
    push(pts, 1);
    const nb = 1 + Math.floor(rng() * 3);
    for (let b = 0; b < nb; b++) {
      const idx = Math.max(1, Math.floor((0.12 + rng() * 0.72) * (pts.length - 1)));
      const p = pts[idx];
      const prev = pts[idx - 1];
      const ang = Math.atan2(p[1] - prev[1], p[0] - prev[0]);
      const off = (rng() < 0.5 ? 1 : -1) * (0.55 + rng() * 0.6);
      const bp = walk(rng, p, ang + off, 40 + rng() * 95, 0.42, 9);
      push(bp, 0.72);
      if (rng() < 0.45 && bp.length > 4) {
        const k = Math.max(1, Math.floor(bp.length * (0.3 + rng() * 0.5)));
        const q = bp[k];
        const qa = Math.atan2(q[1] - bp[k - 1][1], q[0] - bp[k - 1][0]);
        push(walk(rng, q, qa + (rng() < 0.5 ? 1 : -1) * (0.6 + rng() * 0.5), 22 + rng() * 45, 0.4, 8), 0.55);
      }
    }
  }

  // one hairline set of fine tributaries, drawn thinner and fainter
  const fine = [];
  for (let i = 0; i < 16; i++) {
    const base = dirs[(i + 1) % dirs.length] + (rng() - 0.5) * 1.1;
    fine.push(walk(rng, [rng() * W, rng() * H], base, 30 + rng() * 90, 0.42, 8));
  }

  // Grouped by weight so every crack of a given thickness collapses into one
  // <path>: attribute overhead, not coordinates, is what makes these files big.
  const collect = (list, layer) => {
    const d = new Draw();
    const byW = new Map();
    for (const v of list) {
      const w = Math.round(layer.w * (v.wgt ?? 1) * 20) / 20;
      if (!byW.has(w)) byW.set(w, []);
      byW.get(w).push(v.pts || v);
    }
    for (const [w, group] of [...byW].sort((a, b) => b[0] - a[0])) for (const pts of group) {
      let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
      for (const p of pts) {
        if (p[0] < minX) minX = p[0];
        if (p[0] > maxX) maxX = p[0];
        if (p[1] < minY) minY = p[1];
        if (p[1] > maxY) maxY = p[1];
      }
      const i0 = Math.floor(-maxX / W) - 1;
      const i1 = Math.ceil((W - minX) / W) + 1;
      const j0 = Math.floor(-maxY / H) - 1;
      const j1 = Math.ceil((H - minY) / H) + 1;
      for (let i = i0; i <= i1; i++) {
        for (let j = j0; j <= j1; j++) {
          const moved = pts.map((p) => [p[0] + i * W, p[1] + j * H]);
          for (const run of clipRuns(moved, W, H)) {
            d.stroke(layer.color, w, polyD(run, false), { opacity: layer.opacity });
          }
        }
      }
    }
    return d;
  };

  const out = [];
  // the vein cut itself, then its lifted-wax highlight a hair to one side
  const hi = P.crackHi;
  if (hi) {
    out.push(
      `  <g transform="translate(${f(hi.dx)} ${f(hi.dy)})">\n` +
        collect(veins, hi).render('    ') +
        '\n  </g>'
    );
  }
  out.push(collect(veins, P.crackMain).render('  '));
  out.push(collect(fine, P.crackFine).render('  '));

  // wax bubbles: clustered along the veins, plus a light overall dusting
  const b = new Draw();
  const bub = [];
  for (const v of veins) {
    for (let i = 2; i < v.pts.length; i += 3) {
      if (rng() > 0.42) continue;
      const p = v.pts[i];
      const a = rng() * TAU;
      const rr = 2 + rng() * 9;
      bub.push([p[0] + Math.cos(a) * rr, p[1] + Math.sin(a) * rr, 0.45 + rng() * 0.75]);
    }
  }
  for (let i = 0; i < 230; i++) bub.push([rng() * W, rng() * H, 0.4 + rng() * 0.6]);
  for (const [x0, y0, r] of bub) {
    const x = ((x0 % W) + W) % W;
    const y = ((y0 % H) + H) % H;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const X = x + i * W;
        const Y = y + j * H;
        if (X + r < -1 || X - r > W + 1 || Y + r < -1 || Y - r > H + 1) continue;
        b.dot(X, Y, r, P.crackBub.color, P.crackBub.opacity);
      }
    }
  }
  out.push(b.render('  '));

  return svg(W, H, '', out.filter(Boolean).join('\n'));
}

/* ------------------------------------------------------------------ svg --- */

function svg(W, H, defs, body) {
  const d = defs ? `  <defs>\n${defs}\n  </defs>\n` : '';
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"` +
    ` fill="none" stroke-linecap="round" stroke-linejoin="round">\n` +
    d +
    body +
    '\n</svg>\n'
  );
}

/* -------------------------------------------------------------- palettes -- */

/**
 * Four inks on a ground, exactly as a real wax mill would separate them:
 *   ground      the cloth field
 *   ink         the dark (or, on navy, the light) outline plate
 *   light/warm  the two texture inks laid inside the bands
 *   plateLight / plateDeep   the two colour blocks, printed off-register
 *   accent      brand blue, dots only
 */
const ORANGE = {
  ground: '#E9670D',
  ink: '#002B3C',
  light: '#F6E8D0',
  warm: '#C24E06',
  plateLight: '#F6E8D0',
  plateDeep: '#C24E06',
  plateHot: '#C24E06',
  petalA: '#F6E8D0',
  petalB: '#E9670D',
  scatter: 1,
  accent: '#0484B1',
  offA: [3.4, -2.6],
  offB: [-2.8, 3.3],
  rosette: [
    { plate: '#F6E8D0', dots: '#002B3C', plate2: '#C24E06', dots2: '#F6E8D0', bead: '#F6E8D0' },
    { plate: '#C24E06', dots: '#F6E8D0', plate2: '#F6E8D0', dots2: '#002B3C', bead: '#E9670D' },
  ],
  // ground stipple: colour, grid cell, drop rate, min/max radius, keep-out
  speck: [
    ['#C24E06', 9, 0.3, 0.7, 1.7, 2.5],
    ['#002B3C', 13, 0.4, 0.5, 1.1, 2.5],
    ['#F6E8D0', 27, 0.4, 0.5, 1.1, 4],
    ['#0484B1', 62, 0.5, 1.3, 2.1, 6],
  ],
  crackMain: { color: '#C24E06', w: 1.1, opacity: 0.55 },
  crackHi: { color: '#F6E8D0', w: 0.9, opacity: 0.14, dx: 1.4, dy: -1.2 },
  crackFine: { color: '#002B3C', w: 0.7, opacity: 0.1 },
  crackBub: { color: '#C24E06', opacity: 0.45 },
};

const INK = {
  ground: '#002B3C',
  ink: '#F6E8D0',
  light: '#F6E8D0',
  warm: '#E9670D',
  plateLight: '#0E4A63',
  plateDeep: '#0E4A63',
  plateHot: '#C24E06',
  petalA: '#0E4A63',
  petalB: '#E9670D',
  scatter: 0.55,
  accent: '#0484B1',
  offA: [-3.2, 2.8],
  offB: [3.0, -2.6],
  rosette: [
    { plate: '#0E4A63', dots: '#F6E8D0', plate2: '#C24E06', dots2: '#F6E8D0', bead: '#0E4A63' },
    { plate: '#0E4A63', dots: '#E9670D', plate2: '#F6E8D0', dots2: '#002B3C', bead: '#002B3C' },
  ],
  speck: [
    ['#0E4A63', 9, 0.24, 0.7, 1.8, 2.5],
    ['#F6E8D0', 17, 0.55, 0.4, 0.85, 2.5],
    ['#E9670D', 30, 0.5, 0.45, 0.9, 4],
    ['#0484B1', 62, 0.5, 1.3, 2.1, 6],
  ],
  crackMain: { color: '#F6E8D0', w: 0.9, opacity: 0.1 },
  crackHi: { color: '#001B27', w: 1.3, opacity: 0.34, dx: -1.4, dy: 1.3 },
  crackFine: { color: '#F6E8D0', w: 0.65, opacity: 0.055 },
  crackBub: { color: '#F6E8D0', opacity: 0.1 },
};

/* ------------------------------------------------------------------ main -- */

const WAX = 440;
const CRACKLE = 320;

const files = {
  'wax-orange.svg': waxTile(ORANGE, SEED, WAX),
  'wax-ink.svg': waxTile(INK, SEED + 101, WAX),
  'crackle-orange.svg': crackleTile(ORANGE, SEED + 7, CRACKLE),
  'crackle-ink.svg': crackleTile(INK, SEED + 23, CRACKLE),
};

mkdirSync(ASSETS, { recursive: true });
for (const [name, content] of Object.entries(files)) {
  const p = resolve(ASSETS, name);
  writeFileSync(p, content);
  console.log(`${name.padEnd(20)} ${(content.length / 1024).toFixed(1)} KB`);
}
console.log(`\nseed ${SEED} · wax ${WAX}x${WAX} · crackle ${CRACKLE}x${CRACKLE}`);
