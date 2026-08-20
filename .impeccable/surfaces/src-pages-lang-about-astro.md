---
version: 1
slug: "src-pages-lang-about-astro"
primary_target: "src/pages/[lang]/about.astro"
related_targets: ["src/components/CountUp.astro"]
---

# Surface brief — About (Carta de los Socios)

## Scope

`src/pages/[lang]/about.astro` — single page rebuild inside the established LexCore editorial-luxe world. Palette, type, header/footer, motion vocabulary, and all incumbent about copy preserved verbatim. New reusable component `src/components/CountUp.astro`.

## Visitor Mode

Persuade — the visit ends in booking the free consultation (`/contact`).

## Audience & Job

Prospective clients of a premium cross-border firm (founders, boards, family offices, individuals): decide whether LexCore is trustworthy, discreet and partner-led, then book.

## Action / Proof / Content

Action: `t.hero.cta` (book free consultation) pinned at the closing signature block. Proof: certificates world carried by the letter's authority (Chambers & Partners, Legal 500 live in the site identity; no new claims added). Content: `t.about` fields unchanged (title, intro, paragraphs, values, stats) plus scaffolding: officeLine, salutation, marginNotes (3), psTitle, annexTitle, closing, added to `src/i18n/{types,es,en}`.

## Constraints

- No invented facts (no dates, names, figures beyond the incumbent stats).
- Bilingual parity EN/ES; all scaffolding copy in both files.
- Existing motion system: `data-reveal` / `data-reveal-group` / `data-reveal-clip` from `src/scripts/motion.ts`, guarded by prefers-reduced-motion; two authored moments: signature stroke draws itself (scoped GSAP in about.astro) and the enclosure figures count up (src/components/CountUp.astro, prop `value` = target number, deterministic locale grouping, aria-label with final value).

## Chosen Direction

Firm Correspondence / Letterhead — dealt structure 6 of 7, surface roll seed key `090bb0d8`; user locked card "Carta de los Socios" (THE ROLL).

Layout: centered masthead (double rules, LexCore., office line) over "LEXCORE" watermark → letter column (subject h1, salutation, drop-cap intro, 3 margin-note paragraphs) → P.S. commitments (2×2 value grid with bronze diamonds) backed full-bleed by Lady Justice at 7% opacity as a near-invisible watermark → enclosure figures (ruled rows, CountUp tabular Cormorant numerals) → closing (salutation close, signature with self-drawing flourish, confidentiality note, CTA).

## Unresolved

- Visual review pending real-browser capture (no browser tool in session); user to eyeball via `pnpm dev` before ship.
- Concurrent session redesigning services.astro currently leaves `astro check` red (caseStudy type drift in es/en) — unrelated to this surface; needs the other session's completion.