---
name: Together with Grace
description: A nonprofit site cut from one length of wax-print yardage — printed cloth fields, selvage wayfinding, muslin backing for reading.
colors:
  cloth-orange: "#e9670d"
  burnt-hem-orange: "#c24e06"
  ember-orange: "#ff8a3c"
  legible-burnt-orange: "#9c3d00"
  dye-vat-ink: "#002b3c"
  midnight-ink: "#001b27"
  muslin: "#f6e8d0"
  muslin-deep: "#ead9b8"
  selvage-white: "#fcf9f2"
typography:
  display:
    fontFamily: "Alfa Slab One, Georgia, serif"
    fontSize: "clamp(2.7rem, 7.2vw, 5.9rem)"
    fontWeight: 400
    lineHeight: 1.05
  headline:
    fontFamily: "Alfa Slab One, Georgia, serif"
    fontSize: "clamp(2rem, 4.5vw, 3.1rem)"
    fontWeight: 400
    lineHeight: 1.05
  title:
    fontFamily: "Alfa Slab One, Georgia, serif"
    fontSize: "clamp(2.2rem, 5vw, 3.4rem)"
    fontWeight: 400
    lineHeight: 1.05
  headline-secondary:
    fontFamily: "Alfa Slab One, Georgia, serif"
    fontSize: "clamp(1.6rem, 3.4vw, 2.2rem)"
    fontWeight: 400
    lineHeight: 1.05
  tagline:
    fontFamily: "Bitter Variable, Georgia, serif"
    fontSize: "clamp(1.15rem, 2.2vw, 1.5rem)"
    fontWeight: 400
  price:
    fontFamily: "Alfa Slab One, Georgia, serif"
    fontSize: "2.4rem"
    fontWeight: 400
    lineHeight: 1
  care-name:
    fontFamily: "Alfa Slab One, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 400
  year-marker:
    fontFamily: "Archivo Variable, Helvetica Neue, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 750
    letterSpacing: "0.02em"
    fontVariation: "'wdth' 78"
  lead:
    fontFamily: "Bitter Variable, Georgia, serif"
    fontSize: "1.2rem"
    fontWeight: 400
  body-emphasis:
    fontFamily: "Bitter Variable, Georgia, serif"
    fontSize: "1.12rem"
    fontWeight: 400
    lineHeight: 1.65
  body-close:
    fontFamily: "Bitter Variable, Georgia, serif"
    fontSize: "1.1rem"
    fontWeight: 400
    lineHeight: 1.65
  body-story:
    fontFamily: "Bitter Variable, Georgia, serif"
    fontSize: "1.08rem"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "Bitter Variable, Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  body-secondary:
    fontFamily: "Bitter Variable, Georgia, serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.65
  tag-body:
    fontFamily: "Bitter Variable, Georgia, serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.5
  caption:
    fontFamily: "Bitter Variable, Georgia, serif"
    fontSize: "0.9rem"
    fontWeight: 400
  small-print:
    fontFamily: "Archivo Variable, Helvetica Neue, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 400
    letterSpacing: "0.02em"
  label-button:
    fontFamily: "Archivo Variable, Helvetica Neue, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 680
    letterSpacing: "0.14em"
    fontVariation: "'wdth' 116"
  label-nav:
    fontFamily: "Archivo Variable, Helvetica Neue, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 620
    letterSpacing: "0.18em"
    fontVariation: "'wdth' 118"
  label:
    fontFamily: "Archivo Variable, Helvetica Neue, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 640
    letterSpacing: "0.22em"
    fontVariation: "'wdth' 120"
rounded:
  none: "0px"
  focus-hairline: "1px"
spacing:
  band-gap: "clamp(1.4rem, 3vw, 2.4rem)"
  section-block: "clamp(4rem, 9vh, 6.5rem)"
  gutter: "clamp(1rem, 5vw, 3rem)"
  band-pad: "clamp(1.8rem, 4.5vw, 3rem)"
  hem-inset: "0.55rem"
  print-overhang: "9rem"
components:
  button-primary:
    backgroundColor: "{colors.dye-vat-ink}"
    textColor: "{colors.muslin}"
    typography: "{typography.label-button}"
    rounded: "{rounded.none}"
    padding: "0.95em 1.7em"
  button-sun:
    backgroundColor: "{colors.cloth-orange}"
    textColor: "{colors.midnight-ink}"
    typography: "{typography.label-button}"
    rounded: "{rounded.none}"
    padding: "0.95em 1.7em"
  button-ghost:
    backgroundColor: "{colors.muslin}"
    textColor: "{colors.dye-vat-ink}"
    typography: "{typography.label-button}"
    rounded: "{rounded.none}"
    padding: "0.95em 1.7em"
  tag:
    backgroundColor: "{colors.muslin}"
    textColor: "{colors.dye-vat-ink}"
    typography: "{typography.tag-body}"
    rounded: "{rounded.none}"
    padding: "2rem 1.5rem 1.4rem"
  date-band:
    backgroundColor: "{colors.cloth-orange}"
    textColor: "{colors.dye-vat-ink}"
    typography: "{typography.headline}"
    rounded: "{rounded.none}"
    padding: "clamp(1.8rem, 4.5vw, 3rem) 0 clamp(1.5rem, 4vw, 2.4rem)"
  letter-sheet:
    backgroundColor: "{colors.muslin}"
    textColor: "{colors.dye-vat-ink}"
    typography: "{typography.body-story}"
    rounded: "{rounded.none}"
    padding: "clamp(1.8rem, 4.5vw, 3rem) clamp(1.1rem, 4vw, 3rem) clamp(1.6rem, 4vw, 2.4rem)"
    width: "46rem"
  snapshot:
    backgroundColor: "{colors.selvage-white}"
    rounded: "{rounded.none}"
    padding: "0.45rem 0.45rem 0.55rem"
    width: "auto (image fits 19rem × 21rem; 22rem from 900px; 26rem from 1100px)"
  snapshot-wide:
    backgroundColor: "{colors.selvage-white}"
    rounded: "{rounded.none}"
    padding: "0.45rem 0.45rem 0.55rem"
    width: "min(100%, 32rem) (calc(100% + 6rem) from 900px; calc(100% + 10rem) from 1100px)"
  rail-link:
    backgroundColor: "{colors.selvage-white}"
    textColor: "{colors.dye-vat-ink}"
    typography: "{typography.label-nav}"
    rounded: "{rounded.none}"
    padding: "0.35em 0"
  wayfinding-link:
    textColor: "{colors.dye-vat-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
---

# Design System: Together with Grace

## Overview

**Creative North Star: "One Length of Wax-Print Yardage"**

The site is cut from the cloth the women at the Hands of Grace sewing center actually sew. Every surface is a fabric: full-bleed orange or navy wax-print fields (generated seamless SVG tiles — a printed motif layer under a crackle layer; see `scripts/wax-tiles.mjs`), muslin backing wherever long text must be read, and narrow selvage strips that carry the wayfinding. Sections do not merely stack; they are joined with pinked cut edges (a 14px zigzag), hung on threads, or measured against a printed tape. The build deliberately refuses the nonprofit hero-photo-plus-icon-cards template: the first viewport is cloth with a muslin bolt-band stamped across it, a strip of prints pinned along the cloth below it drifting sideways (`PhotoStrip.astro`, Embla Carousel with auto-scroll; still under reduced motion); the story then opens directly on the muslin backing. The News surface unrolls the same yardage as a bolt of letters: each letter is a muslin sheet laid on a muslin-deep bolt under a plain-woven orange date band, with the trip's prints matted and tucked into the text.

Density is generous and the register is warm and handmade: slab-serif stamps for headings, a workaday serif for letters, and compressed-to-extended sans caps for the utilitarian selvage voice. Depth is physical, never atmospheric — things that would cast a shadow in a sewing room (a bolt-band laid on cloth, a paper tag on a thread) cast one here; flat cloth stays flat.

**Key Characteristics:**
- Every background is a material: printed cloth, muslin, or selvage white — never a plain untextured brand fill on a large field.
- Sewing-notions component language: label buttons with dashed inner stitching, strung cost tags with punched eyelets, pinked cut edges between color fields, dashed stitch focus rings.
- Zero border-radius on surfaces; corners are cut, not rounded (the focus outline alone carries a 1px hairline).
- Small tilts (−2° to +2°) and threads make hung elements read as physically placed.
- Reading always happens on muslin (#f6e8d0) or on ink with muslin type; brand orange is a ground and an accent, not a small-text color.
- Two weaves of cloth: the printed motif-and-crackle tile for statement fields, and a plain-woven crackle-only tile wherever a stamp must read directly on the cloth (letter date bands, the News close).

## Colors

A two-dye palette — wax-print orange and dye-vat navy — backed by unbleached muslin neutrals.

### Primary
- **Cloth Orange** (#e9670d): the brand orange, used as the printed-cloth ground (hero, window, close) and as the `sun` button fill, link underlines, selvage registration dots, and the brand-mark accent word. Never used as small body text.
- **Burnt Hem Orange** (#c24e06): the working shade of orange — cut edges' dashed borders, the measuring tape, focus outlines on light grounds, scrollbar thumb, tag stitching, mobile year underlines.
- **Ember Orange** (#ff8a3c): orange lifted for dark grounds only — focus outlines and link underlines inside `.on-ink` sections.
- **Legible Burnt Orange** (#9c3d00): the accessible text-orange. Exists specifically because #e9670d fails 4.5:1 as small text on muslin; used for small orange captions and caps lines on muslin/muslin-deep.

### Secondary
- **Dye-Vat Ink** (#002b3c): the brand navy. Default text color, primary button fill, dark cloth ground (`.cloth-ink`), selection background.
- **Midnight Ink** (#001b27): ink deepened — text on orange grounds, the aperture's backing, button text on the sun button.

### Neutral
- **Muslin** (#f6e8d0): the page ground and reading surface; bolt-bands, tags, and story sections sit on it. Also the type color on ink grounds.
- **Muslin Deep** (#ead9b8): muslin's shadowed weave — hairline borders, tag threads and eyelet rings, photo-slot ground, scrollbar track, the sheet's hem stitch. On the News surface it is a large field for the first time: the bolt behind the letter sheets, so a muslin sheet reads as laid on rather than painted on.
- **Selvage White** (#fcf9f2): the header selvage strip only; slightly whiter than muslin so the wayfinding edge reads as a woven selvage.

### Named Rules
**The Muslin Backing Rule.** Long-form text never sits directly on printed cloth. It sits on a muslin band/panel laid over the cloth, or on ink with muslin type. On the orange cloth, direct type is ink-colored and display/decorative scale only.
**The Legible Orange Rule.** Orange type at small sizes on light grounds is always Legible Burnt Orange (#9c3d00), never brand #e9670d — the brand hue fails 4.5:1 on muslin. Brand orange as text appears only at display scale or as an accent word.
**The Two Reading Grounds Rule.** The reading ground has two named surfaces. The page ground stays muslin (#f6e8d0) everywhere. On the News surface the bolt behind the letters is muslin-deep (#ead9b8), and reading still happens on muslin: the letter is a muslin sheet with the soft shadow laid on the deeper bolt. Muslin-deep never carries running text directly.
**The Logo Blue Rule.** The logo artwork carries a third brand color, blue (#0484B1, a PRODUCT.md brand commitment). It lives only inside the logo lockup, mark, and favicon — logo-reserved, never a UI token. Do not paint interface elements with it.

## Typography

**Display Font:** Alfa Slab One (with Georgia, serif)
**Body Font:** Bitter Variable (with Georgia, serif)
**Label Font:** Archivo Variable (with Helvetica Neue, sans-serif)

**Character:** Stamps, letters, and selvage print. Alfa Slab One is the ink stamp pressed into cloth (always weight 400, tight 1.05 line-height, balanced wrapping); Bitter is the letter-from-the-field reading voice; Archivo is the utilitarian selvage voice — uppercase, widely tracked, and width-tuned via `font-variation-settings` (wdth 116–120 for caps, compressed to 78 for the story's year stamps).

The shipped ramp is wide but organized: four registers, each with fine steps inside it. New surfaces pick from the register that matches the job; they do not invent sizes between the recorded steps.

### Hierarchy

**Stamp register (Alfa Slab One, 400, 1.05 unless noted):**
- **Display** (clamp(2.7rem, 7.2vw, 5.9rem)): the home hero name stamp only.
- **Title** (clamp(2.2rem, 5vw, 3.4rem)): stub-page h1s inside the muslin title band.
- **Headline** (clamp(2rem, 4.5vw, 3.1rem)): section h2s on the home surface.
- **Headline-secondary** (clamp(1.6rem, 3.4vw, 2.2rem)): section h2s on secondary pages.
- **Price** (2.4rem, line-height 1, tabular numerals, Burnt Hem Orange): cost-tag price stamps.
- **Care-name** (1.5rem): the footer care label's name line.

**Mid-emphasis register:**
- **Tagline** (Bitter italic, clamp(1.15rem, 2.2vw, 1.5rem)): the hero tagline under the name stamp.
- **Year-marker** (Archivo 750, wdth 78, 1.35rem, Burnt Hem Orange): the story's measuring-tape year stamps.
- **Lead** (Bitter italic, 1.2rem): the window's muslin-chip lead line.

**Reading register (Bitter, 400, 1.65 unless noted):**
- **Body-emphasis** (1.12rem): the mission statement on About.
- **Body-close** (1.1rem): the closing call's line on orange cloth.
- **Body-story** (1.08rem): story entries, news line, story close, the footer verse (italic).
- **Body** (1.0625rem): the base body size.
- **Body-secondary** (1.05rem): running text and leads on stub pages, window chips.
- **Tag-body** (0.95rem, 1.5): cost-tag descriptions.
- **Caption** (0.9rem, italic): photo-slot explanations.

**Small-print register (Archivo caps and lines):**
- **Small-print** (400, 0.85rem, 0.02em): the care label's detail lines (its deliberate three-step footer register — 0.85/1.08/1.5rem — is a recorded detector ignore, not drift).
- **Label-button** (680, wdth 116, 0.82rem, 0.14em, uppercase): button labels.
- **Label-nav** (620, wdth 118, 0.78rem, 0.18em, uppercase): selvage nav links.
- **Label / `.caps`** (640, wdth 120, 0.72rem, 0.22em, uppercase): the base caps voice — captions, notes, photo-slot labels, the hero word-selvage.

Body copy measure is capped at 66ch (`--measure`). The letter column on News is narrower: 40rem inside a 46rem sheet.

The News surface minted no sizes. Its jobs map onto existing steps: title-band h1 → Title; letter stamps and the close h2 → Headline; letter body → Body-story; close line → Body-close; selvage-rail links → Label-nav; the letter's meta line, foot link, back link, newer/older links, and optional print captions → Label / `.caps`.

### Named Rules
**The One Stamp Weight Rule.** Alfa Slab One ships in one weight; hierarchy among headings is size and placement only, never weight.
**The Selvage Caps Rule.** Anything utilitarian — nav, buttons, captions, notes — speaks in Archivo wide-tracked uppercase caps; anything narrative speaks in Bitter.
**The Four Registers Rule.** Every type size belongs to one of the four recorded registers (stamp, mid-emphasis, reading, small-print). Choose the existing step nearest the job; do not mint in-between sizes.

## Layout

Full-bleed horizontal fabric bands stacked down the page, joined by 14px pinked cut edges wherever two color fields meet. Content inside each band is centered by `.wrap`: `min(100% - 2 * clamp(1rem, 5vw, 3rem), 72rem)`. Section vertical padding runs `clamp(4rem, 9vh, 6.5rem)` for major bands, lighter (`clamp(2.6rem, 6vw, 4rem)`) on stub pages. The home hero fills `calc(88svh - 64px)` with the muslin bolt-band vertically centered and a scrolling word-selvage pinned at its foot.

Signature spatial devices: the story's measuring-tape spine (a 20px ruled gradient in the left gutter, entries offset by `clamp(4.2rem, 9vw, 6rem)` with year stamps hung into the gutter) and the strung-tag row (flex row, even-numbered tags dropped 1.6rem lower on a longer thread). One breakpoint at 720px: the selvage bar centers, the measuring tape slims to a 2px dashed running stitch with static inline years, tag threads and the hanging line disappear, and tags go full-width.

The bolt of letters (News) adds a second spatial model: a sticky selvage rail (`position: sticky; top: 0`, z-index 20) under which the letters stack newest-first, each with `scroll-margin-top: 3.4rem` so anchors land below the rail. Each letter is a `.wrap`-centered muslin sheet capped at 46rem carrying a 40rem reading column; the date band's stamp and meta share that 40rem column so the stamp aligns with the text below it. Prints float left or right sized by a fit box on the image itself (`width: auto; height: auto; max-width: 19rem; max-height: 21rem`, so a landscape and a portrait print read as the same size and the float shrink-wraps), hanging 3rem past the column, with a 1.8rem gutter toward the text and a 0.35rem/1.1rem top/bottom margin; wide prints clear both floats at `min(100%, 32rem)` with 2.2rem/2.6rem margins. The bolt's breakpoints: at ≥900px side prints fit a 22rem box and hang 6rem past the column, and wide prints run `calc(100% + 6rem)`; at ≥1100px side prints fit a 26rem × 26rem box and hang 9rem past the column onto the bolt, and wide prints run `calc(100% + 10rem)` with `-5rem` inline margins, past both sheet edges; at ≤768px the rail becomes a horizontal scroller (scroll-snap proximity, hidden scrollbar, 3rem right mask fade, 3.5rem right padding) that follows the current letter; at ≤720px side prints stop floating and stack at `min(100%, 24rem)` centered with the image back at full width; at ≤480px the rail's "Letters" label hides. Letter markdown places the first print after the greeting so phones show the greeting before the picture.

## Elevation & Depth

Depth is physical, not atmospheric: only objects laid onto the cloth (bolt-bands, tags, snapshots, buttons, muslin caption chips) cast shadows, and every shadow is the same soft ink-tinted family. Cloth grounds themselves are flat; large-field depth comes from the two-layer pattern tiles (crackle at 320px over motif at 440px, both generated deterministically by `scripts/wax-tiles.mjs` after real Dutch-wax references: sun medallions built entirely of dots, dashes and triangles, twisted-wave paisleys, six-petal seeds and cowries, colour plates printed 2–3px off-register, batik crackle veins), not from shadow or gradients. Where a stamp must sit directly on the cloth (the letter date bands, the News close), the cloth is plain-woven: the crackle layer alone at 320px over the flat brand color, so ink type reads without the motif behind it.

### Shadow Vocabulary
- **Soft** (`box-shadow: 0 10px 24px -12px rgb(0 27 39 / 0.45)`, `--shadow-soft`): resting state for anything laid on the cloth.
- **Lift** (`box-shadow: 0 16px 34px -14px rgb(0 27 39 / 0.5)`, `--shadow-lift`): hover state for buttons, paired with `translateY(-2px) rotate(-0.4deg)`.
- **Bolt-band** (`0 14px 36px -14px rgb(0 27 39 / 0.55)`): the heavier throw for the largest laid object — the home hero band; News wears the same soft-shadow title band as About and Give. Still written inline; not yet a custom property.

Snapshots on News rest on Soft and take Lift on hover (with `rotate(0) translateY(-3px)`), the same pickup as the cost tags.

### Named Rules
**The Laid-On-Cloth Rule.** A shadow means the element is a physical object resting on the fabric. Flat graphic devices — cut edges, the measuring tape, selvage strips, threads — never carry shadows.

## Shapes

Radius is zero on every surface and component; edges are cut, torn, or stitched, never rounded. Two sanctioned exceptions: true circles (the tag's punched eyelet, the selvage registration dots) and a 1px hairline radius on the `:focus-visible` stitch outline — a softening of the dashed focus ring's corners, the system's only rectangular radius. The recurring form language: 14px pinked zigzag cut edges (tinted ink, orange, or muslin per the adjoining ground, flippable with `scaleY(-1)`); 1.5px dashed "stitching" borders inset 5–6px inside buttons and tags, and the same stitch in muslin-deep inset 0.55rem as the letter sheet's hem; 2px dashed threads and rules; and small rotations (−2° to +2°, via a `--tilt` custom property) on hung or pinned objects — the letters' prints use a fixed per-side set (left −1.4°/−0.7°, right +1.2°/+1.9° alternating by position, wide −0.8°). Focus is a 2px dashed stitch outline offset 3px with the 1px hairline (Burnt Hem Orange on light grounds, Ember Orange on ink).

## Components

### Buttons (`.btn` — woven garment labels)
- **Shape:** hard rectangle (0 radius) with a 1.5px dashed stitch border inset 5px at 65% opacity.
- **Primary:** Dye-Vat Ink fill, muslin caps text (label-button: Archivo 680, wdth 116, 0.82rem, 0.14em tracking), padding 0.95em 1.7em, soft shadow.
- **Sun (`.btn.sun`):** Cloth Orange fill, Midnight Ink text — reserved for the Give action.
- **Ghost (`.btn.ghost`):** muslin fill, ink text — the quieter companion action.
- **Hover:** lifts and tips (`translateY(-2px) rotate(-0.4deg)`) with the lift shadow, 0.25s springy ease `cubic-bezier(0.2, 0.8, 0.2, 1)`.

### Cost Tags (`.tag` — signature component)
- Muslin card (max-width 15.5rem, padding 2rem 1.5rem 1.4rem, soft shadow) hung on a 2px thread from a dashed line, with a radial-gradient punched eyelet at top center, an inset dashed orange stitch border, a per-tag `--tilt`, and a `--drop` thread length that alternates by position. Price in the 2.4rem price stamp with tabular numerals; description in tag-body 0.95rem. Hover straightens the tilt and lifts 4px. On ink grounds the thread and hanging line recolor to translucent muslin.

### Photography
Real photographs shipped via astro:assets `<Image>` with `fit="cover"` (2000px JPEG masters in `src/assets/photos/`). Two treatments:
- **Aperture photo (`.main-photo`):** the home window's photograph (1680×1120) framed between muslin cut edges over the ink-deep backing, revealed by the scissors-cut clip-path.
- **Matted snapshot (`.snap` on home and in letters, `.team-photo` on About):** a `<figure>` on a selvage-white mat — 0.45–0.5rem padding, slightly deeper below the image (0.55–0.65rem), soft shadow, optional ±2° `--tilt`. A centered `.caps` figcaption is optional and Legible Burnt Orange when present: the About team photo carries one; the home story's snapshots and every shipped letter print are plain, alt text only. Snapshots run 14–18rem wide in the story; the team photo mats up to 34rem; letter prints are sized by the Letters component below.
- **Photo slot (`.photo-slot` — placeholder only):** the treatment for a photograph not yet on hand: muslin-deep panel, diagonal basting-stitch overlay, 2px dashed Burnt Hem Orange border, Legible Burnt Orange caps label, italic 0.9rem caption. No longer the state of the masthead, window, or snapshots; use it only while a real image is awaited, then swap to a photography treatment.

### Navigation (the selvage)
- Selvage White strip with a 1px muslin-deep bottom border and a 10px orange registration-dot edge (`.selvage-dots`, radial-gradient dots on a 22px rhythm). The brand mark is the wide single-line lockup served on togetherwithgrace.org (`src/assets/twg-logo-wide.svg`, `.brand-logo`) at 34px height, dropping to 28px under 720px; the same file is the hero's name, unrolled to `min(100%, 42rem)` on the bolt-band with a visually hidden h1 behind it. Links in label-nav caps (620, wdth 118, 0.78rem, 0.18em) with a transparent 2px bottom border: orange on hover, ink when `aria-current="page"`; a link is current for its whole section (`/news/` stays current on `/news/<letter>/`). Under 720px the bar centers and wraps.

### Selvage Rail (`.rail` — News)
- A second, page-level selvage that sticks to the top as the bolt scrolls: Selvage White, 1px muslin-deep bottom border, the registration-dot edge below. A "Letters" caps label in Legible Burnt Orange, then the letters' names as label-nav links with the same transparent-border underline as the header nav — orange on hover, ink when `aria-current="location"`, set by an IntersectionObserver (root margin −38% / −58%) on the letter under the reader. Under 768px the bar scrolls sideways with a mask fade at its right edge and scroll-snaps by name; the script scrolls the current name into view. The rail is the page's table of contents; it never links off-page.

### Letters (`.letter` — signature component)
One letter from the field laid on the bolt; used newest-first on `/news/` (stamp links to the letter's page) and singly on `/news/<letter>/` (stamp as h1).
- **Date band (`.date-band`):** plain-woven orange (crackle tile only) between pinked orange cut edges (the first letter on the bolt has no edge above). The letter's name is an Alfa Slab stamp at the Headline step in Dye-Vat Ink; below it a `.caps` meta line in Midnight Ink ("A letter from … · Posted …"). A linked stamp underlines on hover with a 3px dashed Midnight Ink line offset 8px; focus rings inside the band are Midnight Ink.
- **Bolt (`.bolt`):** the muslin-deep field behind the sheets, padded `clamp(2rem, 5vw, 3.2rem)` above and `clamp(2.2rem, 5vw, 3.6rem)` below.
- **Sheet (`.sheet`):** muslin, max 46rem, soft shadow, padding `clamp(1.8rem, 4.5vw, 3rem) clamp(1.1rem, 4vw, 3rem) clamp(1.6rem, 4vw, 2.4rem)`, with the hem: a 1.5px dashed muslin-deep running stitch inset 0.55rem. Inside, a 40rem column in Body-story (1.08rem/1.65) with 1.15rem paragraph gaps; list markers are Legible Burnt Orange with tabular numerals.
- **Prints (`.snap.snap-left/right/wide`):** matted snapshots floated into the text per the Layout section, hanging past the sheet's edge at ≥1100px. Authored in markdown as `![alt](./photo.jpg "left" | "right" | "wide")` with an optional `| caption`; `src/lib/snapshots.mjs` renders the lone-image paragraph as the figure and gives it a constrained responsive srcset (1200px wide for sides, 1600px for wide).
- **Foot:** a `.caps` link in ink with a 2px dashed orange underline offset 5px (solid on hover) — "This letter's own page" on the bolt; on a letter's page a newer/older row split by a 1px dashed muslin-deep rule. The letter page also carries an "All the letters" caps back link above the stamp, Midnight Ink on the band.
- **Link preview:** each letter's `cover` is cropped to a 1200×630 JPEG via `getImage` for `og:image` / `twitter:card summary_large_image`.

### Close (`.close` — News)
- Plain-woven ink (crackle tile only) after an ink cut edge; centered Headline h2, Body-close line at 52ch, then the sun Give button and the ghost companion in a wrapping 1rem row.

### Footer (the care label)
- Ink ground (`.on-ink`), centered, content boxed in a 1.5px dashed translucent-muslin border like a garment care label. It opens with the logo mark (`src/assets/twg-logo-mark.svg`, `.care-mark`, also the favicon) sitting on a square selvage-white label plate — 3.6rem tall, 0.5rem 0.65rem padding, zero-radius per the system, because the navy silhouette needs a light plate to read on ink. Then the name in the 1.5rem care-name stamp, detail lines in 0.85rem small-print at 88% muslin, verse in italic Bitter 1.08rem, copyright dimmed to 62%. (Its three-step small-print register is a recorded detector ignore, not a drift.)

### Cut Edges (`.cut-edge`)
- 14px repeat-x zigzag strip in ink/orange/muslin variants, flipped as needed; always placed where two fabric fields meet, tinted to match the field it "belongs" to.

### Aperture (home window)
- A muslin-pinked opening in the orange cloth over an ink-deep backing, framing the real sewing-room photograph; the panel reveals with a clip-path scissors-cut animation (`inset(46% 4%)` → 0 over 1.2s) on intersection, fully skipped under `prefers-reduced-motion`.

## Do's and Don'ts

### Do:
- **Do** build every new surface as fabric bands: printed cloth (`.cloth-orange` / `.cloth-ink`) for statement sections, muslin for reading sections, cut edges at every field boundary.
- **Do** lay text over cloth via a muslin band or chip with the soft shadow (the bolt-band / title-band pattern) — that is the standard page-title treatment on stub pages.
- **Do** pick type sizes from the four recorded registers (stamp, mid-emphasis, reading, small-print) rather than minting new steps.
- **Do** use #9c3d00 for any small orange type on light grounds, and Ember Orange (#ff8a3c) for focus/underlines on ink.
- **Do** bring photographs in matted on selvage-white (0.45–0.5rem mat, soft shadow, an optional centered caps figcaption) or through a cut aperture — never full-bleed and never bare on the cloth.
- **Do** give hung or pinned objects a small `--tilt` (within ±2°) and the soft shadow; straighten on hover.
- **Do** keep body copy within `--measure` (66ch) and honor `prefers-reduced-motion` for any animation.
- **Do** use the dashed-stitch vocabulary consistently: dashed inner borders for labels/tags, dashed focus outlines, dashed threads and rules, dashed hover underlines, the sheet's hem.
- **Do** lay long letters as a muslin sheet (soft shadow, hem stitch) on the muslin-deep bolt, and put a stamp directly on cloth only when that cloth is plain-woven (crackle only).
- **Do** place letter photographs through the markdown convention (`"left"`, `"right"`, `"wide"`) with the first print after the greeting; captions stay optional and off by default.

### Don't:
- **Don't** round corners on surfaces or components; the only sanctioned radii are true circles (eyelets, registration dots) and the 1px hairline on the focus outline.
- **Don't** set small text in brand orange #e9670d, or long-form text directly on printed cloth.
- **Don't** add shadows to flat graphic devices (cut edges, tape, selvages, threads) or gradients/atmospheric glows to cloth grounds — texture comes only from the authored pattern tiles.
- **Don't** reintroduce the nonprofit template the world refuses: no full-bleed hero photograph, no icon-card grids; photographs enter through cut apertures or matted, tilted snapshots.
- **Don't** use a second display weight or a system font; the three families (Alfa Slab One, Archivo Variable, Bitter Variable) are the complete voice.
- **Don't** use logo blue #0484B1 outside the logo artwork; it is logo-reserved.
- **Don't** set running text directly on muslin-deep, and don't put the motif tile under a stamp; the bolt is a ground for sheets, and stamps on cloth get the plain weave.
- **Don't** index letters as teaser cards with "Read more" links; the News surface is the letters themselves, unrolled newest-first.
