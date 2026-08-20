export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export type Segment = { t: string; strong?: boolean };

export interface Translation {
  lang: "en" | "es";
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
    authority: string[];
    badges: { initials: string; quote: string; role: string }[];
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
    columns: { heading: string; links: string[] }[];
    rights: string;
    madeWith: string;
  };
  about: {
    title: string;
    intro: string;
    paragraphs: string[];
    values: { title: string; text: string }[];
    stats: { value: string; label: string }[];
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
    cases: {
      client: string;
      sector: string;
      challenge: string;
      solution: string;
      result: string;
      tag: string;
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
    };
    offices: { city: string; address: string; phone: string; email: string }[];
  };
}
