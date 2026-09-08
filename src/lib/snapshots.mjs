// Authoring convention
// ---------------------
// Letters are plain markdown. A photo is placed left or right of the text
// (or spans the full width) by putting a `title` on its own markdown image,
// on a line by itself:
//
//   ![alt text](./photo.jpg "left")
//   ![alt text](./photo.jpg "right")
//   ![alt text](./photo.jpg "wide")
//   ![alt text](./photo.jpg "left | The class at their machines")
//
// The word before an optional `|` picks the side (case-insensitive, trimmed;
// anything missing/unrecognized falls back to "wide"). Text after the first
// `|` becomes a <figcaption>. A paragraph whose only real content is one
// image is rendered as:
//
//   <figure class="snap snap-left">
//     <img ... >               <!-- no title, no stray class -->
//     <figcaption class="caps">The class at their machines</figcaption>
//   </figure>
//
// Images that share a paragraph with other text are left completely alone.
//
// Why this is a HAST plugin, not an MDAST one
// --------------------------------------------
// Astro 7's Sätteri processor (@astrojs/markdown-satteri/dist/satteri-processor.js,
// `createSatteriMarkdownProcessor`) builds its hast plugin list as:
//
//   [highlight?, ...userHastPlugins, createImageMarkerPlugin(), createHeadingIdsPlugin()]
//
// `createImageMarkerPlugin` (same file) reads every remaining property on an
// `<img>` — title included — packs them into a JSON `__ASTRO_IMAGE_`
// attribute, and strips the rest. That packed attribute is what later
// becomes the optimized `<img src srcset width height>`. So any `title`
// still on the node when image-marker visits it ends up as a real `title=`
// attribute on the built image. To keep it off, our plugin must run and land
// its edits *before* image-marker's visit — which Astro's plugin order
// already guarantees (user hast plugins are pushed ahead of image-marker).
//
// What's left is whether "before" actually means "applied to the tree before
// the next plugin walks it", or whether every hast plugin sees the same
// original tree and mutations are merged at the end (in which case stripping
// `title` here could be invisible to image-marker, or a later plugin could
// clobber our replacement). Read from satteri's own compile step
// (node_modules/satteri/dist/compile.js, `runHastPluginsCollectLast`): every
// plugin but the very last one in the list runs its passes and immediately
// calls `visitHastHandle`, whose own doc comment
// (node_modules/satteri/dist/hast/hast-visitor.d.ts) says it dispatches
// visits *and* "applies mutations back to the handle" in the same call. Only
// the last plugin overall (`createHeadingIdsPlugin`, not us) has its final
// pass collected and fused into the render step instead of applied early.
// So plugins run as sequential passes over one persistent handle: our
// replacement is committed to the real tree before image-marker's own,
// separate walk begins, and image-marker walks the *current* tree, so it
// finds and processes the `<img>` we (re)built exactly like a parsed one —
// as long as it has no `title` property, which we make sure of by building a
// fresh properties object that omits it, rather than mutating the original
// node in place.
//
// This all happens within one hast plugin (one `element` visitor filtered to
// `p`), so it's one pass: we inspect the paragraph's children directly
// (no separate `img` subscription needed) and call `ctx.replaceNode` once
// per matching paragraph, handing back a plain object tree (figure > img [>
// figcaption]) — satteri's `emitHastOp` (hast-visitor.js) encodes any plain
// object with `type`/`tagName`/`properties`/`children`, so a hand-built node
// needs nothing else.

const SIDES = new Set(['left', 'right', 'wide']);

function isBlankText(node) {
  return node.type === 'text' && (node.value ?? '').trim() === '';
}

function parseTitle(rawTitle) {
  const title = rawTitle ?? '';
  const barIndex = title.indexOf('|');
  const sidePart = barIndex === -1 ? title : title.slice(0, barIndex);
  const captionPart = barIndex === -1 ? '' : title.slice(barIndex + 1);
  const normalizedSide = sidePart.trim().toLowerCase();
  const side = SIDES.has(normalizedSide) ? normalizedSide : 'wide';
  const caption = captionPart.trim();
  return { side, caption };
}

/**
 * The hast plugin implementing the snapshot-figure convention. Wraps a
 * paragraph whose only meaningful child is an image in
 * `<figure class="snap snap-{side}">`, strips the image's `title`, and adds
 * a `<figcaption class="caps">` when a caption was given.
 */
function snapshotHastPlugin() {
  return {
    name: 'snapshot-figures',
    element: {
      filter: ['p'],
      visit(node, ctx) {
        const children = node.children ?? [];
        const meaningful = children.filter((child) => !isBlankText(child));
        if (meaningful.length !== 1) return;

        const [only] = meaningful;
        if (only.type !== 'element' || only.tagName !== 'img') return;

        const props = only.properties ?? {};
        const { title, ...imgProps } = props;
        const { side, caption } = parseTitle(typeof title === 'string' ? title : '');

        // Responsive sizes for the print: Astro's image pipeline reads these
        // packed properties and emits a srcset, so a 16rem print does not ship
        // the 2000px master. Authors may override any of them on the image.
        // (`layout: 'constrained'` makes Astro derive a srcset from the scalar
        // width; an explicit `widths` array cannot survive the hast property
        // encoding, which space-joins lists.)
        const responsive =
          side === 'wide'
            ? { layout: 'constrained', width: 1600, sizes: '(max-width: 480px) 92vw, (max-width: 900px) 32rem, (max-width: 1100px) 46rem, 50rem' }
            : { layout: 'constrained', width: 1200, sizes: '26rem' };
        // Side prints are sized in CSS by a fit box (width/height auto with
        // max-width/max-height). A browser derives an auto-sized image's
        // intrinsic width from `sizes`, so the hint is held at the largest box
        // (26rem) rather than a per-breakpoint value; the CSS then caps it.

        const imgNode = {
          type: 'element',
          tagName: 'img',
          properties: { ...responsive, ...imgProps },
          children: [],
        };

        const figureChildren = [imgNode];
        if (caption !== '') {
          figureChildren.push({
            type: 'element',
            tagName: 'figcaption',
            properties: { className: ['caps'] },
            children: [{ type: 'text', value: caption }],
          });
        }

        const figureNode = {
          type: 'element',
          tagName: 'figure',
          properties: { className: ['snap', `snap-${side}`] },
          children: figureChildren,
        };

        ctx.replaceNode(node, figureNode);
      },
    },
  };
}

/**
 * Factory for astro.config.mjs: `satteri({ ...snapshotPlugins() })`.
 * No mdast plugin is needed — see the note above.
 */
export function snapshotPlugins() {
  return {
    mdastPlugins: [],
    hastPlugins: [snapshotHastPlugin()],
  };
}

export { snapshotHastPlugin };
