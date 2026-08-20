import type { Translation } from "./types";

const en: Translation = {
  lang: "en",
  htmlLang: "en-US",
  meta: {
    title: "LexCore — Your Legal Partner in Every Situation",
    description:
      "LexCore is a premium law firm delivering smart legal solutions through expertise, precision and a client-focused mindset.",
    ogImage: "/images/og.jpg",
  },
  nav: {
    home: "Home",
    about: "About",
    caseStudy: "Case Study",
    services: "Services",
    contact: "Contact",
    cta: "Contact Us",
  },
  hero: {
    titleLine1: "Your Legal Partner in",
    titleLine2: "Every Situation",
    subtitle:
      "LexCore resolves complex legal matters with strategy, discretion and an unwavering commitment to your interests.",
    cta: "Book a Free Consultation",
    authority: [
      "18+ Years of Legal Excellence",
      "Admitted to Practice in 3 Jurisdictions",
      "Recognised by Chambers & Partners",
    ],
    badges: [
      {
        initials: "MK",
        quote: "They won a case two other firms had declined.",
        role: "Managing Director",
      },
      {
        initials: "AR",
        quote: "Precise, fast and utterly trustworthy.",
        role: "CEO, FinTech",
      },
    ],
  },
  statement: {
    segments: [
      { t: "At LexCore, we deliver " },
      { t: "smart legal solutions" },
      { t: " through " },
      { t: "expertise" },
      { t: ", " },
      { t: "precision" },
      { t: " and a " },
      { t: "client focused mindset" },
      { t: ". Backed by " },
      { t: "integrity" },
      { t: " and " },
      { t: "results" },
      { t: ", we support you " },
      { t: "every step of the way" },
      { t: "." },
    ],
  },
  metrics: [
    { value: "18+", label: "Years in Practice" },
    { value: "100+", label: "Legal Matters Resolved" },
    { value: "95%", label: "Client Approval" },
    { value: "6K+", label: "Clients Worldwide" },
  ],
  scrollBadge:
    "SCROLL TO EXPLORE · BOOK A CONSULTATION · SCROLL TO EXPLORE · BOOK A CONSULTATION ·",
  imageSection: {
    caption: "Counsel you can trust — in the boardroom and in the courtroom.",
  },
  footer: {
    tagline:
      "Smart legal solutions, delivered with integrity. Your legal partner in every situation.",
    columns: [
      {
        heading: "Practice Areas",
        links: [
          "Corporate Law",
          "Litigation",
          "Mergers & Acquisitions",
          "Family Law",
          "Tax Law",
        ],
      },
      {
        heading: "Firm",
        links: ["About", "Case Studies", "Our Team", "Careers"],
      },
      {
        heading: "Contact",
        links: [
          "Book a Consultation",
          "Madrid Office",
          "Miami Office",
          "hello@lexcore.law",
        ],
      },
    ],
    rights: "All rights reserved.",
    madeWith: "LexCore.",
  },
  about: {
    title: "A firm built on precision",
    intro:
      "For over eighteen years, LexCore has advised clients across borders — combining the rigour of the courtroom with the discretion of a private office.",
    paragraphs: [
      "Founded by senior counsel with backgrounds in international litigation, LexCore was built on a simple conviction: every client deserves a strategy as meticulous as the outcome they expect.",
      "Our partners personally lead each engagement. No hand-offs, no committees — a single accountable advisor from first meeting to final judgement.",
      "We act for founders, boards and families in high-stakes matters: corporate disputes, transactions, regulatory investigations and the sensitive cases that never make headlines.",
    ],
    values: [
      {
        title: "Integrity",
        text: "We tell you what you need to hear, not what you want to hear.",
      },
      {
        title: "Precision",
        text: "Every document, argument and deadline treated as decisive.",
      },
      {
        title: "Discretion",
        text: "The matters we handle stay in the room. Always.",
      },
      {
        title: "Results",
        text: "Strategy measured by outcomes, not billable hours.",
      },
    ],
    stats: [
      { value: "18+", label: "Years in Practice" },
      { value: "100+", label: "Legal Matters Resolved" },
      { value: "95%", label: "Client Approval" },
      { value: "6K+", label: "Clients Worldwide" },
    ],
  },
  services: {
    title: "Practice Areas",
    intro:
      "One firm, full spectrum coverage. Every LexCore practice is led by a partner with deep experience in that field.",
    items: [
      {
        index: "01",
        title: "Corporate Law",
        text: "Company formation, governance, shareholder agreements and ongoing counsel for boards and founders.",
      },
      {
        index: "02",
        title: "Litigation & Arbitration",
        text: "High-stakes dispute resolution in national courts and international arbitral tribunals.",
      },
      {
        index: "03",
        title: "Mergers & Acquisitions",
        text: "End-to-end deal support: due diligence, negotiation, structuring and closing.",
      },
      {
        index: "04",
        title: "Family Law",
        text: "Divorce, custody and inheritance matters handled with firmness and discretion.",
      },
      {
        index: "05",
        title: "Tax Law",
        text: "International structuring, controversy and compliance for individuals and companies.",
      },
      {
        index: "06",
        title: "Regulatory & Investigations",
        text: "Defence and remediation in regulatory investigations, including cross-border matters.",
      },
    ],
    cta: "Discuss your matter with us",
  },
  caseStudy: {
    title: "Case Studies",
    intro:
      "A selection of matters our clients have asked us to share. Names and sensitive details are redacted by design.",
    cases: [
      {
        client: "Cross-Border Manufacturing Group",
        sector: "M&A · Spain / USA",
        tag: "Acquisition Defence",
        challenge:
          "A hostile bid threatened the group’s independence six weeks before a critical financing round.",
        solution:
          "We structured a defensive alliance, negotiated a standstill and reworked the financing in parallel tracks.",
        result:
          "The bid was withdrawn; the group closed its round at a 22% higher valuation.",
      },
      {
        client: "Founder of SaaS Platform",
        sector: "Litigation · Tech",
        tag: "Arbitration",
        challenge:
          "A former investor filed arbitration claiming control rights over a platform now worth 10x the initial round.",
        solution:
          "A forensic review of board minutes and e-discovery exposed inconsistencies in the claimant’s case.",
        result:
          "Claim dismissed; our client recovered costs and retained full control.",
      },
      {
        client: "Family Office",
        sector: "Tax · Real Estate",
        tag: "International Structuring",
        challenge:
          "Exposure to double taxation across three jurisdictions on a €120M portfolio.",
        solution:
          "A treaty-based restructuring migrated the portfolio into a neutral, compliant holding structure.",
        result:
          "Effective tax burden reduced by 31% with full regulatory clearance.",
      },
    ],
    cta: "Read full case studies on request",
  },
  contact: {
    title: "Book a free consultation",
    intro:
      "Every engagement begins with a conversation. Tell us about your situation and we will respond within one business day.",
    form: {
      name: "Full name",
      email: "Email address",
      message: "Briefly describe your matter",
      submit: "Send request",
      note: "Confidential by default. We will never share your information.",
    },
    offices: [
      {
        city: "Madrid",
        address: "Paseo de la Castellana 120, 28046",
        phone: "+34 910 00 00 00",
        email: "madrid@lexcore.law",
      },
      {
        city: "Miami",
        address: "1000 Brickell Ave, Suite 800, FL 33131",
        phone: "+1 305 000 0000",
        email: "miami@lexcore.law",
      },
    ],
  },
};

export default en;
