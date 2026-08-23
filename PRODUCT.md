# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro, deployed as a static site to **GitHub Pages** (user decision, 2026-08-23). Consequences future work must respect:

- No server runtime. Anything dynamic (contact form, newsletter signup) needs a third-party endpoint or an embed. Candidate form services (Formspree, Web3Forms) are **undecided**; the contact form is required but may live on any platform.
- Newsletter signup provider is **undecided** (the Wix list is being retired along with the site).
- Donations embed or link to **Givebutter** (see Capabilities).

## Users

**Primary: prospective and current donors in the U.S.** — mostly people who already have a personal connection to the ministry: friends, church members, and business partners of founders Tim and Vicki Quellhorst in west-central Ohio (Minster, St. Marys, Sidney, Lima, Upper Sandusky). They arrive after hearing about the work in person or through a newsletter/trip update, and their job on the site is to **give or sponsor a student** with confidence that the money reaches real women in Gabon.

**Secondary audiences (confirmed by the current site's own calls to action):**

- **Existing supporters** following trip updates, prayer requests, and newsletters ("prayer warriors", "spirit led donors").
- **Volunteers** considering a short-term trip to Libreville to teach sewing, jewelry-making, or business skills.
- **Churches, businesses, and event hosts** who partner, buy center-made products, or run fundraisers (thread/needle drives, 5K, quilt raffle, sales table).

**Beneficiaries (not site users):** widows and impoverished women trained at the Hands of Grace center in Libreville, Gabon, and by extension their families and communities. They are the subject of the site, not its audience.

## Product Purpose

The website is the public front and giving channel for **Together with Grace**, a U.S. 501(c)(3) (EIN 93-4192459, established November 2023, headquartered at 15085 Timberwood Ln., Minster, OH 45865) that funds, trains, and supplies **Hands of Grace Ministry**, a sewing and business-training center for women in Libreville, Gabon.

This project is a **full replacement of the existing Wix site** (togetherwithgrace.org); Wix is retired when it ships. All current pages and the four blog posts migrate.

**Success** is a visitor giving — a one-time gift, a larger gift, or a $30 student sponsorship — and secondarily subscribing to updates or submitting a volunteer/event/prayer inquiry.

## Positioning

What a neighboring ministry could not truthfully copy:

- **Thirteen years of personal presence before incorporation.** Vicki has visited the center 15 times since being "called by God to this ministry in June 2013"; Tim has made four trips for machine repair and outreach. The founders teach the classes themselves and prepare local trainers.
- **A specific, named, working center with named staff.** Nadege (Production Overseer), Rolande (Production Recorder/Transfer Courier), Delicate (Inventory Control), Celine (Reporting Clerk), Marie Gabrielle (Translator/manager, recognized by the U.S. Embassy and the African Women Entrepreneurship Program), Yvonne (Housekeeping).
- **Self-sufficiency is literal, not aspirational.** Center-made products (lamp bases, bed runners and shams for a 130-room hotel, dolls sold through "Believe, Art from the Heart" in Sidney, OH, pagne fabric at the Libreville Airport Gift Shop) generate revenue that flows back to the center — $4,800 in sales by December 2023.
- **Practical skill and faith taught together every day.** Sewing, machine care, and business training alongside daily praise, prayer, and biblical mentoring, with the stated aim of women becoming "agents of change in their communities."

## Operating Context

- **Rhythm of the ministry:** one or two Gabon trips per year (Aug 26–Sep 18, 2024; Sep 24–Oct 15, 2025; Apr 27–May 18, 2026). Site updates and sponsorship drives cluster around these trips; blog cadence is roughly one post every 8–14 months, authored by Ryan Quellhorst (Tech Advisor).
- **Where people meet the ministry:** church presentations, local business partners, personal relationships, and the founders' own network — not search or social. The site is mostly a destination people are sent to, not discovered.
- **Operating scale:** monthly center budget ≈ $1,300–1,500; ~27 sewing students enrolled (July 2024); support covered ≈ 60.7% of operating expenses at that time. A bag of rice for daily meals ≈ $55–60.
- **Expansion in motion:** a second location in Port-Gentil and an invitation to speak at a July 2026 National Synod (from the April 2026 post).
- **Governance:** Vicki Quellhorst (President), Tim Quellhorst (Co-founder), Sandy Meyer (Vice President), Sarah Lewan (Secretary), Chris Fyock (Treasurer), Deb Kramer (Board Member), Ryan Quellhorst (Tech Advisor).

## Capabilities and Constraints

**Required on the new site**

- **Giving via Givebutter** (user decision), embedded on the page. A campaign already exists: the Wix Donate page embeds `<givebutter-widget id="pXPKNp">`; reuse that campaign id unless the user supplies a new one. The Give surface presents **$30 a month sponsors one student** (monthly recurring, user decision) as the anchor without capping ambition, and shows what other amounts do, using the ministry's own published use-of-funds lines (verbatim from the current Donate page):
  - **$100** — "Covers the cost of a nutritious lunch for 25 - 30 ladies throughout an entire month while they spend time at the sewing center."
  - **$100** — "Our monthly budget allocates funds for the ongoing maintenance of sewing machines and commercial irons, including any necessary repairs. This also facilitates the potential replacement of machines when needed."
  - **$175** — "Monthly utility expenses, including electricity, water, and internet, are vital components supported by your generous contribution."
  - **$500** — "Monthly rent for secure and well-appointed facilities, encompassing two sewing rooms, a kitchen, an office, two and a half baths, and guard room ensuring a safe and comfortable environment."
  - Fee statement (verbatim, keep): "With the exception of credit card transaction fees, every dollar of your donation directly contributes to empowering these women to launch a successful business." Also: "Unless otherwise specified, your donation will be used for one or many of the following recurring costs."
  - Whether the embedded widget can be pre-set to a chosen amount is **undecided**; do not promise it in the UI until verified against Givebutter's embed options.
- **Contact / Get Involved form** with the current intent options: Volunteer, Host an Event, Prayer Support, Donation. Platform is open (GitHub Pages cannot host the handler).
- **Newsletter signup.** Provider undecided.
- **Content pages carried over:** Home, About (mission, history, partners), What We Do (five program pillars), Who We Are (team roster), Donate, Take Action, News with the four existing posts (Dec 2023, Jul 2024, Sep 2025, Apr 2026).
- **Footer on every page:** the 501(c)(3) line with EIN and the mailing address (donors use it for checks and tax records).

**Explicitly dropped or undecided**

- The Wix **Member Login** area: purpose unknown; not carried over unless someone asks for it.
- **Public email and phone:** none exist on the current site. Do not invent one; the form is the contact path until the user supplies one.
- **Social links:** none are linked from the current site. An Instagram account "@hands_of_grace_ministry_" surfaced in search but is unverified — do not link it without confirmation.
- **Denomination / statement of faith:** none stated. The ministry describes itself as grounded in "biblical principles" and sharing "the gospel of Jesus Christ"; do not attribute a denomination.
- **Financials / 990s:** none published. Do not claim audited figures or overhead percentages beyond what the posts state.

**Terminology**

- **Together with Grace** — lowercase "with" is canonical (user decision). The U.S. nonprofit.
- **Hands of Grace Ministry** / "the center" — the Gabon-based ministry and sewing center that Together with Grace supports. Keep the two names distinct; the legal relationship between them is undocumented.
- **Students** — women enrolled in the sewing program; **sponsorship** — a donor covering a student's cost.
- **Trainers** — graduates prepared to teach and eventually run their own centers.
- **Pagne** — the West/Central African printed fabric the center works with and sells.

## Brand Commitments

- Name: **Together with Grace**. Tagline in current use: **"Sharing God's Love with African Women."**
- Voice: warm, faith-forward, personal — written by people who have been there, not an agency. Blog posts are first-person trip reports. Sewing imagery runs through the copy ("stitch together a future," "beyond needle and thread," "a thread of hope") and may be kept as a motif of language; it is not a visual mandate.
- Scripture in use: **1 Peter 4:10** — "Each of you should use whatever gift you have received to serve others, as faithful stewards of God's grace in its various forms." (Who We Are page.)
- Two mission statements coexist on the current site; treat the homepage version as the short form and the About version as the long form until the founders pick one:
  - Short: "Our mission is to use biblical principles to enable women to become agents of change in their communities."
  - Long: the About page "Our Mission" paragraph (migrate verbatim).
- **Logo: keep as-is (user decision, 2026-08-23).** Saved at `brand/logo-wordmark.svg` (extracted from the Wix header; wide lockup, viewBox 1356×187). Mark: an Africa silhouette in deep teal with a white cross over Gabon and a blue/orange handshake; wordmark "Together with Grace" in a thin geometric sans in black. Logo colors, exact: deep teal `#002B3C`, blue `#0484B1`, orange `#E9670D`, black `#000000`. Any visual world must harmonize with these; the logo is not recolored.
- Current homepage copy in use (may be edited for the new site, but is the founders' own wording): hero "Sharing God's Love with African Women" with the short mission statement beneath; section heads "About Together With Grace", "Our Approach", "HOW YOU CAN HELP", "All the Latest Updates", "Get to Know Us", "LATEST NEWS"; footer "STAY CONNECTED / Get the Latest News & Updates / SUBSCRIBE".

## Evidence on Hand

- **Photography on the current site** (stand-ins until the user supplies originals): homepage hero background, a portrait (2250×2603) in the About block, a landscape phone photo `IMG_1997.jpeg` in the Approach block, a landscape photo near the team block, three blog thumbnails; Donate page has a hero photo and a strip of five square face-cropped photos. Sources are `static.wixstatic.com/media/57454d_*` URLs; none carry alt text. Pull them before Wix is retired.
- **Photography: plentiful.** Many real photos from Gabon trips — the center, students, products, and trips — can be provided by the user. Design may lean on genuine imagery; no stock photography or generated "African women" imagery is acceptable as a substitute.
- **Facts with sources (from the current site and blog):** 27 students (Jul 2024); $4,800 in product sales (Dec 2023); 60.7% of operating expenses covered (Jul 2024); Marie Gabrielle's U.S. Embassy / AWEP recognition; three dated trips; Port-Gentil expansion (Apr 2026).
- **Partners (text only, no logos confirmed):** Sew Nice (Upper Sandusky, OH); "Believe, Art from the Heart" (Sidney, OH); unnamed partners in St. Marys, Sidney, and Lima, OH; Libreville Airport Gift Shop; an unnamed 130-room hotel.
- **Absent — must not be fabricated:** named testimonials or quotes from students, donors, or volunteers (the Dec 2023 post only paraphrases "testimonies"); cumulative impact totals (women trained, years served); press coverage; partner logos; financial statements. If a surface needs a testimonial, it must come from the founders, not be written.

## Product Principles

1. **The gift is the product.** Every page exists to make giving feel obvious, safe, and specific; $30 sponsors a student, and larger amounts are shown doing more, never discouraged.
2. **Real people, real place, real numbers.** Use the names, dates, figures, and photos the ministry actually has; concreteness is the credibility, and anything invented would undermine it.
3. **Written by people who were there.** Keep the founders' first-person warmth and the trip-report voice; the site should read like Vicki and Tim, not like a nonprofit template.
4. **Faith is stated plainly, not performed.** Biblical grounding is part of the program and is said directly; avoid both hiding it and decorating with it.
5. **Built to outlast the builder.** Static, cheap, and simple to update between trips by a volunteer tech advisor — no services that need babysitting.

## Accessibility & Inclusion

No product-specific standard was established. The donor base skews toward an older, church-connected audience; readable type sizes, strong contrast, and forms that work without JavaScript are a reasonable baseline. Record a formal target (e.g. WCAG 2.2 AA) here if the board sets one.
