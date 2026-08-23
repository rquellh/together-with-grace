---
name: Together with Grace
description: The Pattern Sheet — a deep-teal cutting mat with a real one-inch grid, white tissue pattern pieces as content, orange reserved for marks and the action.
colors:
  mat: "#002b3c"
  blue: "#0484b1"
  orange: "#e9670d"
  ink: "#111111"
  tissue: "#ffffff"
  tissue-translucent: "rgba(255, 255, 255, 0.97)"
  tissue-ink-2: "#3c4b52"
  mat-ink: "#ffffff"
  mat-ink-2: "#bfe0ee"
  grid-major: "rgba(4, 132, 177, 0.42)"
  grid-minor: "rgba(4, 132, 177, 0.16)"
typography:
  monumental:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "8rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
  display:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "3.5rem"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "normal"
  headline:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "normal"
  title:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "normal"
  lead:
    fontFamily: "Atkinson Hyperlegible, Segoe UI, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  body:
    fontFamily: "Atkinson Hyperlegible, Segoe UI, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.04em"
  # Secondary and responsive steps actually shipped (see prose): each is a named use, not a free size.
  monumental-mobile:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "4.5rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
  monumental-tablet:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "5rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
  numeral:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "normal"
  tagline:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "2.75rem"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "normal"
  tagline-mobile:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "normal"
  menu-link:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "normal"
  unit-caps:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "normal"
  lead-mobile:
    fontFamily: "Atkinson Hyperlegible, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  body-small:
    fontFamily: "Atkinson Hyperlegible, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  caption:
    fontFamily: "Atkinson Hyperlegible, Segoe UI, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  nav-link:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.04em"
  micro-label:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.08em"
  flag-label:
    fontFamily: "Barlow Condensed, Arial Narrow, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.04em"
rounded:
  none: "0px"
  sleeve: "96px"
spacing:
  quarter: "24px"
  half: "48px"
  unit: "96px"
components:
  stamp-button-solid:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  stamp-button-solid-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.orange}"
  stamp-button-outline-tissue:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  stamp-button-outline-mat:
    backgroundColor: "transparent"
    textColor: "{colors.mat-ink}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  stamp-button-outline-hover:
    backgroundColor: "transparent"
    textColor: "{colors.orange}"
  piece:
    backgroundColor: "{colors.tissue-translucent}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.half}"
  text-input:
    backgroundColor: "{colors.tissue}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "10px 24px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.mat-ink-2}"
    typography: "{typography.label}"
  tape-flag:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.ink}"
    width: "74px"
    height: "37px"
---

# Design System: Together with Grace

## Overview

**Creative North Star: "The Pattern Sheet"**

The whole site is one sewing pattern laid out on a cutting mat. The ground is a deep-teal mat printed with a real one-inch grid (96 CSS px per inch, with half-inch minor lines); on top of it sit white tissue pattern pieces, and those pieces are where all the content lives. Every piece carries what a real pattern piece carries: a printed label in the top-right corner ("PIECE 1 · FRONT / CUT 1"), orange notches on its left and top edges, and a rotated GRAINLINE arrow running down its right gutter. Numbers are the sewing-center's own numbers, drawn at monumental size; illustration is black line diagrams, not photography-as-decoration. The one photograph on the home page is a plate pinned to the mat, with a tissue caption strip.

Density is generous and literal: spacing is measured in inches, not abstract steps, so pieces register to the grid behind them. The site is flat by decree; depth comes only from one thing lying over another (the photo plate overlapping Piece 1 by exactly one inch, the tissue at 97% opacity letting the grid ghost through). Motion is a single authored event: on Home, pieces and the plate settle onto the mat on load, staggered by their `--i` index. Everything else is still.

Confirmed rejections, evidenced by the build: no photo-hero, no three-pillar row, no stat counters, no cards, no box shadows, no decorative gradients, no cream "paper" tint (tissue is pure white), no stitch or thread motifs, no stock imagery, no icon glyphs.

**Key Characteristics:**
- Deep-teal mat with a true inch grid as the ground of every page
- White tissue Pieces with printed label, orange notches, and grainline as the only container
- Orange reserved for marks and the action: arrows, notches, pins, tape flag, stamp button, selected state, focus, selection
- Barlow Condensed caps for every label and number; Atkinson Hyperlegible for prose
- 1.5px ink borders, square corners, black line diagrams at 2px stroke
- Depth by layering only; one load-time settle animation; everything else at rest

## Colors

The palette is the logo's four inks plus white tissue, with two tinted secondaries derived from them; nothing else is introduced.

### Primary
- **Cutting Mat** (`mat`): the page background on every page, carrying the grid. Also fills the punch-hole on tag pieces.
- **Mark Orange** (`orange`): pointer arrows, piece notches, pin heads, the tape flag, the solid stamp button, the monumental "$30", the checked amount/frequency, nav current underline, focus ring, text selection, caret. Never a background wash, never body text, never a heading except the monumental amount.

### Secondary
- **Grid Blue** (`blue`): links on tissue, the scrollbar thumb; tinted down to `grid-major` and `grid-minor` for the inch and half-inch grid lines, and lightened to `mat-ink-2`.

### Neutral
- **Ink** (`ink`): all text on tissue, every border (1.5px), diagram strokes, table rules, the dark face of a hovered solid stamp.
- **Tissue** (`tissue`) and **Tissue over Mat** (`tissue-translucent`): Piece surface and input fields; the 97% variant is the Piece background so the grid faintly shows through.
- **Tissue Ink 2** (`tissue-ink-2`): secondary prose on tissue (roles, notes, fee statements), tinted from the teal.
- **Mat Ink** (`mat-ink`) and **Mat Ink 2** (`mat-ink-2`): primary and secondary text directly on the mat (nav links, section intros, footer address, ruler marks).

### Named Rules
**The Orange Discipline Rule.** Orange is a mark, not a material. It may fill a notch, an arrow head, a pin head, a tape flag, or one stamp button, and it may color a selected or focused thing. It never tints a surface, a heading block, or a paragraph.

**The Two Surfaces Rule.** Text is either on tissue (ink, links in blue) or on the mat (white, links in `mat-ink-2`). Use `.on-tissue` / `.on-mat` to declare which; there is no third surface.

**The Logo Inks Rule.** `mat`, `blue`, `orange`, and black are the wordmark's own colors and must not drift; the logo is never recolored and sits in its own tag Piece in the nav.

## Typography

**Display Font:** Barlow Condensed (with Arial Narrow), self-hosted weights 500/600/700
**Body Font:** Atkinson Hyperlegible (with Segoe UI), self-hosted 400, 400 italic, 700

**Character:** Condensed uppercase labels read like the printed instructions on pattern tissue; the hyperlegible body keeps long donor copy comfortable for an older audience. Numbers are set in the condensed face at heroic sizes with tabular, lining figures.

### Hierarchy
- **Monumental** (700, 5rem → 8rem at 640px, line-height 1, -0.02em): the single "$30" on Home, in orange, with "a month" beside it at 1.5–2rem condensed 600 caps in ink. One per site.
- **Display / H1** (700, 2.5rem → 3.5rem at 640px, 0.95, uppercase): page titles. The Home tagline is deliberately demoted to 2rem → 2.75rem so the monumental amount leads.
- **Headline / H2** (700, 2.25rem, 1.05, uppercase): section heads, and the amount in the Yardage chart.
- **Title / H3** (700, 1.5rem, 1.05, uppercase): step titles, roll names (non-uppercase), frequency options, the stamp button at 1.125rem.
- **Lead** (400, 1.375rem, 1.55): first paragraph of a piece, the founders' verse in italic.
- **Body** (400, 1.125rem, 1.55): prose, max measure 65ch.
- **Label** (600, 0.75rem, 0.04em, uppercase): piece labels, table headers, form labels, footer nav, FOLD marks; nav links at 0.875rem; grainline at 0.7rem/0.08em; tape flag at 0.68rem.

### Named Rules
**The Condensed Caps Rule.** Anything that is a label, a heading, a number, or a button is Barlow Condensed, uppercase (numbers and staff names excepted), letter-spaced 0.04em at label size and tight (-0.02em) at monumental size. Prose never uses the condensed face.

**The Tabular Figures Rule.** Amounts, dates, and step numerals use `tabular-nums lining-nums` so columns of money align.

**The One Monumental Rule.** One number per page may be monumental. On Home it is $30. Every other amount steps down to headline size.

## Layout

The mat is a real inch grid: `--unit` 96px (1in), `--half` 48px, `--quarter` 24px, and these three are the only spacing steps. Fine adjustments inside components use 8/12/16/20px, never new named tokens. Body background draws major lines every 96px and minor lines every 48px from the top-left origin; at 1024px and up a ruler strip of inch marks runs along the top of the page.

Container: full width to 1440px, centered, padded 48px inline (96px at 1024px). Sections pad 48px block (96px at 1024px). Pieces pad 24px (48px at 640px, plus a 96px right gutter reserved for the grainline). Headings carry 48px above and 24px below; paragraphs 24px below.

Page grids are 12-column. Home hero: Piece 1 spans columns 1–8 at 1024px with the photo plate at 9–12 pulled left by exactly one inch plus the gap so it overlaps the piece's right edge by 96px. Steps: a 2x2 instruction sheet at 900px with unequal cells (7/5 then 5/7). Roll list: two columns at 768px. Update row: 3fr/2fr at 900px. Give: a single full-sheet Piece to 1296px; the amount plane is a column, becoming one row at 900px.

Breakpoints actually used: 640px (type, piece padding, arrow orientation), 768px (roll), 900px (nav collapse, steps grid, amount row), 1024px (container/section inch padding, hero overlap, ruler).

**The Inch Register Rule.** Every outer margin, padding, and gap is an inch, a half, or a quarter. If a value is not 24/48/96, it is an internal adjustment, not a layout decision.

## Elevation & Depth

There are no shadows anywhere in the build and no decorative gradients (the only `linear-gradient` calls draw the 1px grid lines). Depth is conveyed purely by layering: a tissue Piece lies on the mat at 97% opacity so the grid ghosts through; the photo plate lies on Piece 1 and is pinned with two orange-headed pins; a tape flag lies on an amount. Stacking order is expressed with z-index and overlap, never with a drop shadow or a lift.

**The Layering Only Rule.** If something needs to read as "on top", move it so it overlaps something else. Never add a shadow, glow, or gradient to fake height.

## Shapes

Square corners everywhere; the only radius in the system is the sleeve Piece's single 96px top-right corner, and the 50% punch-hole on a tag Piece. Borders are 1.5px solid ink on every tissue object (pieces, photo plate, stamp buttons, inputs, skip link) and 1px ink for internal rules (table rows, step folds, roll rows). On the mat, borders use `mat-ink-2` (nav toggle) or `grid-major` (footer rule).

Piece silhouettes are the recurring geometry: `rect` (plain), `bodice` (48px corner clipped off the top-right by clip-path), `sleeve` (96px top-right radius), `tag` (small inline label with a punch-hole, used for the logo). Marks are triangles and lines: 14px orange notches pointing inward, a 72x21px orange pointer arrow (line + triangle head), a 96px black grainline with arrowheads at both ends, the tape flag's clipped lower-right corner with a darker fold (#B84F08, its only off-token value).

## Components

### Piece (signature container)
The only container. Tissue background, 1.5px ink border, label in condensed caps at the top-right (in flow at the top-left below 640px), two orange notches on the left edge at 22% and 68%, one on the top edge at 30%, and a rotated GRAINLINE arrow in a 48px gutter at the right. Shapes: rect, bodice, sleeve, tag. Piece 1 alone prints the org line "TOGETHER WITH GRACE · LIBREVILLE, GABON" above its label. Pieces never nest and are never used as small cards; one piece is one section of the pattern.

### Buttons (StampButton)
- **Shape:** square (0 radius), 1.5px ink border, padding 12px 24px, Barlow Condensed 700 1.125rem uppercase 0.04em.
- **Solid:** orange fill, ink text; the primary action only (Sponsor a student, Give, Subscribe). Hover inverts to ink fill with orange text.
- **Outline:** transparent; on tissue ink border/text, on mat white border/text; hover turns border and text orange.
- **Active:** translates down 1px. **Focus:** 3px orange outline offset 3px.

### Pointer Arrow
72x21px orange line with a filled triangular head, placed between a claim and its stamp ("$30 a month" → Sponsor a student). Rotates 90° to point down on narrow screens. Decorative (aria-hidden).

### Tape Flag
A 74x37px orange tab with ink outline and a darker folded corner, with a 0.68rem condensed caps label (SPONSOR, SELECTED). It marks the chosen amount. On Give it fades and rotates in (300ms) when an amount is checked, resting at -2°. There is exactly one flag visible per plane.

### Yardage Chart
A table inside a Piece: Gift / Covers / Per, 1px ink rules, label-size headers, amounts at 2.25rem condensed 700 that turn orange on row hover/focus. Rows are whole-row links via a stretched pseudo-element. The $30 row carries the SPONSOR tape flag.

### Steps (instruction sheet)
An ordered list inside a Piece. Each step: a 3rem condensed numeral beside a line Diagram (96px; 144px lg / 112px sm at 900px), then an H3 and body. Steps are separated by 1px ink fold rules with a small "FOLD" label at the end of each rule; at 900px the rules become the shared cell edges of a 2x2 grid.

### Diagram
96x96 SVG, no fill, ink stroke 2px, square caps, miter joins. Subjects are objects from the center (machine, meal, goods, building), drawn as plan-view line art. Never colored, never filled, never used as a glyph icon beside text.

### Inputs / Fields
Tissue background, 1.5px ink border, square, body font at 1.125rem, padding 10px 24px. Focus: 3px orange outline offset 2px. Radio/checkbox `accent-color` orange. On Give, amount radios are visually hidden and the label's amount turns orange when checked, with the focus ring drawn on the label.

### Navigation
The logo sits in a tag Piece (40px max-height wordmark). Desktop links (900px+) are condensed 600 caps 0.875rem in `mat-ink-2`, white on hover, white with a 2px orange underline when current; Give is a solid stamp. Under 900px a 24px three-line toggle (1.5px `mat-ink-2` border) opens a panel; the panel is server-rendered hidden and shown as a plain list without JS. Bar height is one inch (60px on mobile).

### Photo Plate
A figure with 1.5px ink border and tissue backing, two orange-headed pins rotated ±30° at its top corners, and a centered caption on tissue. Cropped to 4:3 below 1024px. Photographs are the ministry's own; never stock.

### Footer
A STAY CONNECTED Piece (newsletter form) to 640px wide, then the 501(c)(3) address in `mat-ink-2`, then a label-size link row above a 1px `grid-major` rule.

## Do's and Don'ts

### Do:
- **Do** put all content inside a Piece with its label, notches, and grainline; prose directly on the mat is limited to section intros and the footer address.
- **Do** measure every layout gap in inches: 24px, 48px, or 96px.
- **Do** use exactly one solid orange stamp per view as the action, with an orange pointer arrow leading into it where a claim precedes it.
- **Do** set amounts in Barlow Condensed 700 with tabular lining figures, and let one per page be monumental.
- **Do** keep all amounts on one plane and strike the chosen one forward with the single tape flag; do not box them.
- **Do** border tissue objects at 1.5px ink and rule their interiors at 1px ink.
- **Do** draw illustration as 2px ink line diagrams of real objects from the center.
- **Do** respect `prefers-reduced-motion`: the settle animation collapses to the resting state, and nothing is hidden before JS runs.

### Don't:
- **Don't** add box shadows, glows, or decorative gradients; depth is overlap only.
- **Don't** introduce cards, boxed stats, three-pillar rows, or a photo hero.
- **Don't** use orange as a background wash, heading color, or body text; it is reserved for arrows, notches, pins, the flag, the stamp, selected, focus, and selection.
- **Don't** add a kicker or eyebrow line above headings; the Piece label is the only small caps line, and it lives in the corner.
- **Don't** tint tissue toward cream; it is white (97% over the mat).
- **Don't** decorate with stitch, thread, needle, or dashed-line motifs.
- **Don't** use stock or generated imagery, icon fonts, or glyph icons beside text.
- **Don't** round corners beyond the sleeve Piece's 96px top-right corner and the tag punch-hole.
- **Don't** introduce a third text surface or a new color; the palette is the logo's inks plus white.
