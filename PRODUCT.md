# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (static output), deployed to GitHub Pages via `withastro/action@v3` on Node 22 (user-confirmed 2026-08-30). Temporarily served at `rquellh.github.io/together-with-grace` with `BASE_PATH=/together-with-grace`; the custom domain is planned for later, so all internal URLs must stay base-path aware.

## Users

(Derived from the ministry's own site copy, not separately interviewed.)

- Primary: US-based supporters and prospective donors — church and sewing communities anywhere in the US — visiting to understand the work and give. The first material partners are in western Ohio (Upper Sandusky, St. Marys, Sidney, Lima, New Bremen), but site copy should not frame the board or supporters as Ohio-only; only the nonprofit's own address names the state.
- Secondary: prospective short-term missions-trip volunteers with sewing, jewelry-making, or business skills; existing supporters following news from Gabon.

## Product Purpose

The replacement for the ministry's website (user-confirmed 2026-09-07; it began on 2026-08-30 as a companion/experiment). The Wix site at togetherwithgrace.org is being retired and everything it does is being converted over to this Astro site, which will take the custom domain. Nothing on this site should point visitors to the Wix site going forward. A previous Astro build (Home + Give) was deliberately reset to zero on 2026-08-28; only the deploy workflow was kept.

Together with Grace itself: a 501(c)(3) (EIN 93-4192459, established November 2023) in Minster, OH that funds and supports Hands of Grace Ministry in Libreville, Gabon — sewing instruction, sewing-machine maintenance, business/financial-management and marketing training, a daily meal, and daily prayer and praise for widows and impoverished Gabonese women. Mission: "Empowering African women through a harmonious blend of practical skills and profound spirituality."

## Positioning

The founders are hands-on practitioners, not administrators: Vicki Quellhorst (President) has made 15 trips to Gabon teaching sewing and business since her calling in June 2013; Tim Quellhorst (Co-founder) has made 4 trips doing machine repair and outreach. Giving maps to concrete, named field costs rather than abstract tiers. Nearly every dollar goes to the field ("every dollar of your donation directly contributes," excepting card fees).

## Operating Context

- Field program in Libreville, Gabon, run by Hands of Grace Ministry (field staff, with the titles the old Who We Are page gave them: Delicate — Inventory Control; Rolande — Production Recorder/Transfer Courier; Nadege — Production Overseer; Yvonne — Housekeeping; Celine — Reporting Clerk; Marie Gabrielle — Translator). "Hands of Grace" is the Gabonese partner; do not conflate the two names.
- Facility: two sewing rooms, kitchen, office, 2.5 baths, guard room ($500/mo rent; $175/mo utilities).
- Board: Vicki Quellhorst (President), Sandy Meyer (VP), Chris Fyock (Treasurer), Sarah Lewan (Secretary), Deb Kramer. Tim Quellhorst is listed as Co-founder; Ryan Quellhorst is Tech Advisor and posts the news letters, which Vicki writes and signs ("Serving Him Together, Vicki Quellhorst"). Headshots for all thirteen people were exported from the Wix Who We Are page on 2026-09-08 (circular cutouts, in repo at `src/assets/photos/team/`, originals under `assets-src/team/`).
- US-side material partners, from the logos on the Wix About page, each verified against its own site or Facebook page on 2026-09-09: Sew Nice (Upper Sandusky, OH; sewnice.org), Cozy Cabin Quilts LLC (St. Marys, OH; Facebook only, its domain serves an empty directory), Believe Art From the Heart (Sidney, OH; believeartfromtheheart.com, http only, its logo matches the Wix one pixel for pixel), Heavenly Stitches (Lima, OH; heavenlystitchesquilts.com), and St. Peter's Church (303 N. Franklin St., New Bremen, OH; stpeterschurchnewbremen.org). The Wix page did not link the logos anywhere. Logo files exported 2026-09-08 to `src/assets/partners/` (originals under `assets-src/partners/`).
- Recruiting channel: short-term missions trips for people with sewing, jewelry-making, or business skills.

## Capabilities and Constraints

- Static site, no server. Giving runs on Givebutter (observed 2026-09-07 on the Wix donate page, which embeds a Givebutter Elements giving-form widget, id `pXPKNp`). The ministry's Giving Hub is givebutter.com/together-with-grace; the live campaign is "Website Donations", a Form ("collect") campaign at givebutter.com/UuiShf (campaign 193066, account 129451): one-time and monthly frequencies, suggested amounts $25–$500 one-time and $10–$250 monthly, no funds/designations configured, tips off (so Givebutter charges the 3% platform fee plus processing), donor fee-cover on, theme color `#7EB7E4` (off-brand; should become `#E9670D`). Givebutter's REST API needs a secret key and cannot be called from a static site; only the widget script's own endpoints are anonymous. Decision (2026-09-07): the Give page embeds Givebutter's inline Form widget (`<givebutter-giving-form campaign="UuiShf">` via `widgets.givebutter.com/latest.umd.cjs?acct=<16-char account id>`), gated in `src/config/givebutter.ts` (account id `Am6Iry37cjZNAR9u`, read from the public markup of givebutter.com/UuiShf; verified rendering the live campaign on 2026-09-07); if the id is ever emptied, the page falls back to a link to givebutter.com/UuiShf. No floating donate bubble, no goal bar (the campaign has no goal).
- The Wix site has a member-login area (Wix Site Members); whether this companion site needs any equivalent is **undecided**.
- Page scope beyond the previous build's Home and Give is **undecided**.
- Base-path awareness is a hard constraint until the custom domain is attached (a prior commit fixed exactly this).

## Brand Commitments

- Name: **Together with Grace**. Tagline: "Sharing God's Love with African Women."
- Binding (user-confirmed 2026-08-30): the existing visual identity — the orange `#E9670D` / dark navy `#002B3C` palette and the current logo — is intentional and must be honored in future design work.
- Observed on the current site but not separately confirmed as binding: Poppins and Avenir LT type; peach/orange tints `#fef6ed`, `#fdead2`, `#fda77f`, `#ff8044`; coral `#e84a43`. (`#116dff` is Wix editor blue, not brand.)
- Logo assets (obtained 2026-08-30 from the ministry's Google Drive, in repo at `src/assets/twg-logo-mark.svg` and `twg-logo-lockup.svg`, originals under `assets-src/Logos/`): a navy Africa silhouette with a white cross and an orange-and-blue handshake, plus a thin geometric wordmark. The logo's own palette is `#002B3C`, `#E9670D`, and a third brand color, blue `#0484B1`.
- Voice: warm, faith-centered, practical and logistics-forward (specific dollar-to-cost framing), first-person plural, unhurried. Scripture in active use: 1 Peter 4:10.

## Evidence on Hand

- Giving designations (from the current Donate page): $100 = a month of lunches for 25–30 women; $100 = sewing-machine/iron maintenance and repair; $500 = monthly rent; $175 = monthly utilities. Undesignated gifts go to these recurring costs.
- Founder story and trip counts (see Positioning); 501(c)(3) status and EIN.
- Real, unstaged program photos exist on the Wix site (phone-camera style, e.g. `IMG_1997.jpeg`); none are in this repo yet and would need export from Wix.
- News archive: 4 letters ("December 2023" posted Jan 19 2024, "July 2024" posted Jul 19 2024, "September 2025" posted Aug 19 2025, "April 2026" posted Mar 26 2026), written by Vicki and posted by Ryan; migrated verbatim with their photos into src/content/news/ on 2026-09-08.
- **Absent — do not fabricate:** testimonials, quantified impact stats (e.g. "N women trained"), press mentions, awards, third-party endorsements.

## Product Principles

1. **Truth over polish.** Every claim, number, and designation comes from the ministry's real materials; never invent impact stats, testimonials, or endorsements.
2. **Giving is concrete.** Preserve the dollar-to-cost framing ($100 feeds the center for a month) rather than abstract donation tiers.
3. **Faith is integral, not decorative.** Daily prayer, praise, and scripture are part of the program's substance; present them in the ministry's own warm, unhurried voice.
4. **This site is home.** Never send visitors to the Wix site; giving completes through Givebutter, and every other Wix page is being converted here.
5. **Built to be handed the domain.** Keep URLs base-path aware and content portable so promotion to the custom domain is a config change, not a rebuild.
