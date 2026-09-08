---
version: 1
slug: "src-pages-news-index-astro"
primary_target: "src/pages/news/index.astro"
related_targets: ["src/pages/news/[slug].astro","src/components/Letter.astro"]
---

# News — surface brief

Scope: the News page (src/pages/news/index.astro), each letter's own page (src/pages/news/[slug].astro), and the shared letter component (src/components/Letter.astro). Letters live as markdown in src/content/news/<slug>/index.md with their photos beside them (README there explains the authoring convention). Visitor mode: Read.

Audience & job: existing supporters and prospective donors, arriving about equally from the site nav and from a shared link to one letter. They should be able to read Vicki's newest letter without clicking anything, find older letters, and share one letter by its own address.

Content & proof: the letters themselves, verbatim, signed "Serving Him Together, Vicki Quellhorst" (Vicki writes them; Ryan posts them). Photos are the trips' own phone pictures, two to five per letter. Nothing invented: no excerpts written for the page beyond each letter's one-sentence summary (used for link previews and the home teaser), no engagement counts, no stock imagery. Historical mentions of togetherwithgrace.org inside the letters stay as plain text, unlinked.

Chosen direction: The Bolt of Letters (seed fc81b4c0, surface scope, read mode; dealt lead, user-locked 2026-09-08; code-led). One length of muslin, letters newest first; each letter opens with a plain-woven orange date band stamped with its name between pinked edges; a sticky selvage rail carries the letters' names and marks the one under the reader; prints are matted on selvage white, tilted a hair, floated left and right by the markdown convention (`"left"` / `"right"` / `"wide"` title) and hung past the edge of the sheet on wide screens. Each letter's own page renders the same component with older/newer wayfinding and a cover-print link preview. The page ends on plain-woven ink with the Give and trip doors.

Constraints: Astro static, base-path aware; brand orange/navy binding; the Wix site is never linked. The letter column is 40rem; prints drop out of the float and go full width under 560px.

Unresolved: how Vicki herself adds letters without git (a CMS on top of the same markdown was discussed, not built); whether letters should ever carry photo captions (the convention supports them; none are used).
