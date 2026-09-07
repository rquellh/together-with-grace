# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (static output), deployed to GitHub Pages via `withastro/action@v3` on Node 22 (user-confirmed 2026-08-30). Temporarily served at `rquellh.github.io/together-with-grace` with `BASE_PATH=/together-with-grace`; the custom domain is planned for later, so all internal URLs must stay base-path aware.

## Users

(Derived from the ministry's own site copy, not separately interviewed.)

- Primary: US-based supporters and prospective donors — largely church and sewing communities in western Ohio (partners in Upper Sandusky, St. Marys, Sidney, Lima) — visiting to understand the work and give.
- Secondary: prospective short-term missions-trip volunteers with sewing, jewelry-making, or business skills; existing supporters following news from Gabon.

## Product Purpose

A companion/experimental rebuild of the ministry's website (user-confirmed 2026-08-30). The Wix site at togetherwithgrace.org remains canonical; this Astro site is a trial that may or may not replace it later. A previous Astro build (Home + Give) was deliberately reset to zero on 2026-08-28; only the deploy workflow was kept.

Together with Grace itself: a 501(c)(3) (EIN 93-4192459, established November 2023) in Minster, OH that funds and supports Hands of Grace Ministry in Libreville, Gabon — sewing instruction, sewing-machine maintenance, business/financial-management and marketing training, a daily meal, and daily prayer and praise for widows and impoverished Gabonese women. Mission: "Empowering African women through a harmonious blend of practical skills and profound spirituality."

## Positioning

The founders are hands-on practitioners, not administrators: Vicki Quellhorst (President) has made 15 trips to Gabon teaching sewing and business since her calling in June 2013; Tim Quellhorst (Co-founder) has made 4 trips doing machine repair and outreach. Giving maps to concrete, named field costs rather than abstract tiers. Nearly every dollar goes to the field ("every dollar of your donation directly contributes," excepting card fees).

## Operating Context

- Field program in Libreville, Gabon, run by Hands of Grace Ministry (field staff: Delicate, Rolande, Nadege, Yvonne, Celine, Marie Gabrielle as translator). "Hands of Grace" is the Gabonese partner; do not conflate the two names.
- Facility: two sewing rooms, kitchen, office, 2.5 baths, guard room ($500/mo rent; $175/mo utilities).
- Board: Vicki Quellhorst (President), Sandy Meyer (VP), Chris Fyock (Treasurer), Sarah Lewan (Secretary), Deb Kramer. Ryan Quellhorst is Tech Advisor and writes the news posts.
- US-side material partners: Sew Nice (Upper Sandusky, OH) plus organizations in St. Marys, Sidney, and Lima, OH.
- Recruiting channel: short-term missions trips for people with sewing, jewelry-making, or business skills.

## Capabilities and Constraints

- Static site, no server. Donations link out to the ministry's existing donation flow (user-confirmed 2026-08-30); the exact processor on the Wix site is unconfirmed (a Wix PayPal integration flag was observed but no confirmed button).
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
- News archive: 4 posts (Jan 18 2024, Jul 19 2024, Aug 19 2025, and "April 2026" dated Mar 26 2026), all authored by Ryan Quellhorst.
- **Absent — do not fabricate:** testimonials, quantified impact stats (e.g. "N women trained"), press mentions, awards, third-party endorsements.

## Product Principles

1. **Truth over polish.** Every claim, number, and designation comes from the ministry's real materials; never invent impact stats, testimonials, or endorsements.
2. **Giving is concrete.** Preserve the dollar-to-cost framing ($100 feeds the center for a month) rather than abstract donation tiers.
3. **Faith is integral, not decorative.** Daily prayer, praise, and scripture are part of the program's substance; present them in the ministry's own warm, unhurried voice.
4. **Defer to the canonical site.** As a companion/experiment, link out for donations and treat togetherwithgrace.org as the source of record until this site is promoted.
5. **Built to be handed the domain.** Keep URLs base-path aware and content portable so promotion to the custom domain is a config change, not a rebuild.
