/** Intensity levels for the glitch (Zalgo) style. */
export type ZalgoIntensity = 1 | 2 | 3;

export interface ConvertOptions {
  /** Only used by glitch styles. Defaults to 2 (medium). */
  zalgoIntensity?: ZalgoIntensity;
}

export type StyleCategory =
  | "serif"
  | "sans"
  | "script"
  | "gothic"
  | "enclosed"
  | "small"
  | "transform"
  | "lines"
  | "glitch"
  | "decorative"
  | "lookalike";

export interface FontStyle {
  /** Stable, URL-safe identifier. Used for favorites and page configuration. */
  id: string;
  /** Human-readable name shown on the result card. */
  name: string;
  category: StyleCategory;
  /** Short note shown under the name (compatibility or usage hint). */
  note?: string;
  convert: (text: string, options?: ConvertOptions) => string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContentSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

export interface ExampleItem {
  label: string;
  /** Plain text that will be converted with `styleId` at build time. */
  text: string;
  styleId: string;
}

export interface FontPage {
  slug: string;
  kind: "style" | "platform";
  /** Short label used in navigation and breadcrumbs. */
  navLabel: string;
  /** Title tag without the brand suffix (the layout template adds it). */
  title: string;
  description: string;
  h1: string;
  intro: string;
  /** Styles shown in this page's generator, in display order. */
  styleIds: string[];
  placeholder: string;
  sections: ContentSection[];
  examples: ExampleItem[];
  faqs: FaqItem[];
  /** Slugs of related pages (style or platform). */
  related: string[];
}
