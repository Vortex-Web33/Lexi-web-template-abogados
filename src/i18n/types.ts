export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

export type Segment = { t: string; strong?: boolean };

export interface Translation {
  lang: 'en' | 'es';
  htmlLang: string;
  meta: {
    title: string;
    description: string;
    ogImage: string;
  };
  nav: {
    home: string;
    about: string;
    caseStudy: string;
    services: string;
    contact: string;
    cta: string;
  };
  hero: {
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    cta: string;
    imageAlt: string;
    authority: { title: string; text: string };
    certificates: { name: string; detail: string }[];
  };
  statement: {
    segments: Segment[];
  };
  metrics: {
    value: string;
    label: string;
  }[];
  scrollBadge: string;
  imageSection: {
    caption: string;
  };
  footer: {
    tagline: string;
    columns: { heading: string; links: { label: string; href: string }[] }[];
    rights: string;
    madeWith: string;
  };
  about: {
    title: string;
    intro: string;
    paragraphs: string[];
    values: { title: string; text: string }[];
    stats: { value: string; label: string }[];
    officeLine: string;
    salutation: string;
    marginNotes: string[];
    stampLabel: string;
    psTitle: string;
    annexTitle: string;
    closing: string;
  };
  services: {
    title: string;
    intro: string;
    items: { title: string; text: string; index: string }[];
    cta: string;
  };
caseStudy: {
    title: string;
    intro: string;
    redactionNote: string;
    labels: {
      threat: string;
      move: string;
      outcome: string;
      keyFigures: string;
      resolved: string;
      shelfHint: string;
    };
    cases: {
      ref: string;
      client: string;
      sector: string;
      tag: string;
      verdict: string;
      challenge: string;
      solution: string;
      result: string;
      figures: { value: string; label: string }[];
      quote: string;
      quoteAttribution: string;
    }[];
    cta: string;
  };
  contact: {
    title: string;
    intro: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
      note: string;
      success: string;
    };
    offices: { city: string; address: string; phone: string; email: string }[];
  };
}
