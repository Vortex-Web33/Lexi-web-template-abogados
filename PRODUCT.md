# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Prospective clients of a premium international law firm: founders, boards and family offices (corporate, M&A, tax, regulatory matters) and individuals (family law), typically across Spain and the US (offices in Madrid and Miami). They arrive in high-stakes, time-sensitive, privacy-sensitive situations. Their job: choose a trustworthy, discreet, partner-led firm and book a free consultation.

## Product Purpose

LexCore provides intelligent legal solutions with expertise, precision and a client-centred mindset. Success for the site: the visitor trusts the firm enough to book a free consultation (contact page).

## Positioning

A premium cross-border firm where partners personally lead every matter — no hand-offs, no committees; the rigor of the courtroom with the discretion of a private practice. 30+ years of combined experience across 3 jurisdictions. Recognized by Chambers & Partners (Top Tier) and The Legal 500 (Leading Generalist Firm).

## Operating Context

Visitors arrive from search/social, read the site in English or Spanish, on desktop and mobile. The site sets a calm, editorial-luxe tone: warm ivory ground, ink/cocoa text, bronze/mocha accents, Inter + Cormorant Garamond, hairline rules, uppercase tracked labels, rotating medallions, GSAP reveal/parallax motion guarded by prefers-reduced-motion, Lenis smooth scroll.

## Capabilities and Constraints

- Bilingual EN/ES; all page copy lives in `src/i18n/en.ts` and `src/i18n/es.ts` (about section: title, intro, 3 paragraphs, 4 values, 4 stats).
- Keep all existing about copy verbatim; restructure and re-present freely. No invented factual claims (no new names, numbers, credentials, testimonials).
- Assets: `public/images/dama-justicia.jpg` (lady justice), `public/images/office.jpg`, `public/images/lady-justice.webp` (home hero), `public/images/og.jpg`.
- New structural sections (e.g., chronology, credentials presentation, closing CTA) must not invent facts.
- Existing motion vocabulary: `data-reveal`, GSAP matchMedia + prefers-reduced-motion guard, rotating circular text, counters, parallax.
- Static Astro build; performance and a11y (focus-visible, skip link, aria labels, keyboard menu) are established requirements.

## Brand Commitments

Name: LexCore. Voice: formal, precise, discreet, calm. Identity: warm editorial-luxe legal world — ivory/bronze/ink palette, Inter + Cormorant Garamond, hairline rules, uppercase tracked micro-labels, medallion/badge circular type, serif watermark words. Tagline: "Tu socio legal en cualquier situación" / "Your legal partner in any situation". Certificates: Chambers & Partners (Top Tier), The Legal 500 (Leading Generalist). CTA language: "Reserva consulta gratuita" / "Book a free consultation".

## Evidence on Hand

- Copy: `src/i18n/es.ts` + `src/i18n/en.ts` (about, hero, metrics, footer, contact).
- Images: `public/images/dama-justicia.jpg`, `public/images/lady-justice.webp`, `public/images/office.jpg`, `public/images/og.jpg`.
- Metrics: 30+ years, 500+ matters resolved, 95% client approval, 6,000+ clients worldwide.
- Certificates: Chambers & Partners (Top Tier), The Legal 500 (Leading Generalist Firm).
- Absences that must not be fabricated: team member names/photos, testimonial quotes, further statistics.

## Product Principles

1. Discretion is a feature: privacy and confidentiality are dramatized, never broken.
2. Partner-led accountability: one responsible advisor from first meeting to final judgment.
3. Precision over decoration: every element exact, nothing careless — the page must feel "lawyered".
4. Trust is earned through evidence (certificates, track record, years) presented as proof, not hype.
5. The visit ends in action: a clear, low-friction path to booking a free consultation.

## Accessibility & Inclusion

- Full bilingual parity (EN/ES) including html lang, hreflang, and aria labels.
- prefers-reduced-motion support (existing GSAP matchMedia guards), focus-visible styles, skip-to-content link, keyboard-accessible menu.