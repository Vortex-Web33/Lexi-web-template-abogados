---
name: LexCore
description: Editorial quiet-luxury law firm site — ivory/ink/bronze world, serif display, hairline rules, scrub-driven motion.
colors:
  ivory: "#f6f1e6"
  ivory-deep: "#efe8d8"
  watermark: "#e2d7bc"
  line: "#ded2ba"
  stone: "#7a6746"
  taupe: "#6d5c45"
  bronze: "#8f6f42"
  mocha: "#5f4a30"
  cocoa: "#433424"
  ink: "#2b2017"
typography:
  display:
    fontFamily: "Cormorant Garamond Variable, Cormorant Garamond, Georgia, serif"
    fontWeight: 600
    lineHeight: 1.1
  body:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    lineHeight: 1.7
  micro:
    fontFamily: "Inter Variable, Inter, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 500
    letterSpacing: "0.18em"
    textTransform: "uppercase"
  verdict:
    fontFamily: "Cormorant Garamond Variable, Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2.2rem, 4.4vw, 4.2rem)"
    fontWeight: 600
    lineHeight: 1.05
components:
  pill:
    backgroundColor: "{colors.mocha}"
    textColor: "{colors.ivory}"
    rounded: "9999px"
    padding: "14px 36px"
  hairline:
    backgroundColor: "{colors.line}"
    size: "1px"
  badge:
    backgroundColor: "{colors.ivory-deep}"
    textColor: "{colors.taupe}"
    rounded: "9999px"
  watermark-numeral:
    textColor: "{colors.watermark}"
---

## Overview

LexCore is a bilingual (en/es) static Astro site for a premium law firm (Madrid + Miami). The visual world is quiet luxury: warm ivory paper, ink text, bronze/bronze-adjacent accents, generous whitespace, hairline rules instead of shadows, and a serif display voice (Cormorant Garamond) reserved for headlines, verdicts, and quotes. Motion is scroll-driven but restrained: reveals, a pinned horizontal "shelf" walk on the case-study page, counters, and a circular stamp. All interactive motion is guarded by `prefers-reduced-motion`.

## Colors

The palette is defined once in `src/styles/global.css` `@theme` (Tailwind 4) and consumed exclusively through `--color-*` tokens — never inline hex.

- `ivory` (#f6f1e6) — page background.
- `ivory-deep` (#efe8d8) — raised surfaces, badge backgrounds.
- `watermark` (#e2d7bc) — oversized decorative numerals; low-contrast by design, must be `aria-hidden`.
- `line` (#ded2ba) — hairlines, dividers, borders (`border-line`).
- `stone` (#7a6746) — secondary text.
- `taupe` (#6d5c45) — meta text, badge text.
- `bronze` (#8f6f42) — accent accents (small marks, focus).
- `mocha` (#5f4a30) — primary action fills (pill buttons), caret.
- `cocoa` (#433424) — deep accents, hover states.
- `ink` (#2b2017) — body text, headlines.

Rule: stay within this warm, muted set. No saturated blues/reds/greens; no pure white or pure black.

## Typography

- **Body / UI**: Inter Variable (`font-sans`) — default, `antialiased`.
- **Display**: Cormorant Garamond Variable (`font-serif`) — page titles, section headlines, case verdicts, quotes. Sized with `clamp()` (e.g. verdict `clamp(2.2rem, 4.4vw, 4.2rem)`).
- **Micro-labels**: uppercase, `text-luxe-sm` (0.18em) for small meta (refs, tags, labels) and `text-luxe` / `tracking-luxe` (0.34em) for large uppercase headers. `text-luxe-sm` is the only small-tracking utility; `tracking-luxe-sm` does not exist.
- Headlines: `font-bold uppercase tracking-tight` on ink; verdicts stay serif, sentence-case, not tracked.

## Layout

- Max-width content columns with `px-6 md:px-14` page padding; centered hero.
- Hairline dividers (`border-line`) separate sections and internal columns; the second column in a row adds `md:border-l md:pl-10`.
- `overflow-x: clip` on `html`; sections use `px-6 pb-14 pt-16 md:px-14 md:pt-24` rhythm.
- Motion: Lenis smooth scroll; `data-reveal` fade-up via `src/scripts/motion.ts`; case-study uses a pinned horizontal shelf (`data-shelf` / `data-shelf-track` / `data-shelf-panel`, desktop `md:` only) with stacked-reveal fallback under 768px; progress HUD (`data-shelf-count`, `data-shelf-bar`).

## Elevation & Depth

No box shadows. Depth comes from hairlines, layered ivory surfaces (`ivory-deep`), fanned card rotations (hero spine cards, `-rotate-1` … `rotate-[1.5deg]`), and scroll animation (pinned shelf, clip-path reveals, stamp scale/rotation).

## Shapes

- Fully rounded pills (`rounded-full`) for buttons and small badges.
- Circles: case-stamp badges (SVG ring with `textPath` label, e.g. `stamp-ring-${ref}`), `aria-hidden` decorative.
- Square-ish hairline frames for content blocks; `rounded-none` elsewhere — radius is the exception, not the default.

## Components

- **Pill button** — `bg-mocha text-ivory rounded-full px-9 py-3.5` (CTA, nav link). Hover shifts toward `cocoa`. Optional `arrow-up-right` lucide icon.
- **Badge** — `bg-ivory-deep text-taupe rounded-full` small caps meta.
- **HorizontalScroll** — reusable pinned horizontal scrub (case-study Precedent Shelf). Wraps a slot of `data-horizontal-panel` articles; on `md+` adds `.hs-horizontal` (100svh, overflow hidden, row track, `border-l` panels) and pins the page via ScrollTrigger until the scrub finishes, then unpins; stacked + scroll reveals below 768px and under reduced motion; progress HUD (`data-horizontal-count` / `-bar` / `-total`); inner reveals via `data-hs-rise` / `data-hs-clip` / `data-hs-stamp` / `data-hs-count` with `containerAnimation`.
- **Case file (shelf panel)** — watermark ref numeral, ring stamp, serif verdict first, then threat/move columns, then outcome + tabular key figures with count-up.
- **Stat counters** — `CountUp.astro` counts values on reveal; figures parsed as `[^\d]*([\d.,]+).*` and localized with `Intl.NumberFormat(document.documentElement.lang)`.
- **Header/nav** — fixed, ivory/ink, `tracking-luxe` uppercase links, active underline.

## Do's and Don'ts

- Do stay inside the warm muted palette; never introduce saturated or cool colors.
- Do reserve serif for display/verdicts/quotes; UI copy stays Inter.
- Do use hairlines and tracking for structure; do not use shadows for elevation.
- Do use `text-luxe-sm` (0.18em) for small micro-labels and `text-luxe`/`tracking-luxe` (0.34em) for large headers; never `tracking-luxe-sm`.
- Do keep watermark numerals and stamps `aria-hidden`; always label interactive elements accessibly.
- Do mark redacted/anonymised content in UI (`redactionNote`); keep synthetic quotes attributed "(anonymised)"/"(anonimizado)".
- Do honor `prefers-reduced-motion` (no-preference branches via `matchMedia` in page scripts; `motion.ts` respects it globally).
- Do keep i18n parity: every visible string in `en` and `es` with matching structure and localized formatting.
- Don't animate layout properties; use transforms and `clip-path` only.
- Don't add saturation for emphasis — hierarchy comes from size, serif, and tracking.