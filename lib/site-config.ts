import type { NavLink } from "@/types";

/**
 * Public, non-secret site configuration.
 * Change these values when reusing the project for another site.
 */
export const siteConfig = {
  name: "CopyFontStyle",
  /** Canonical origin. No trailing slash. */
  url: "https://copyfontstyle.com",
  primaryKeyword: "Copy and Paste Fonts",
  description:
    "Type once and get 80+ cool font styles you can copy and paste into Instagram, TikTok, Discord, games and more. Free, fast and converted privately in your browser.",
  language: "en",
  locale: "en_US",
  /**
   * LAUNCH REQUIREMENT: the site owner must supply a real contact email.
   * While this is an empty string, the Contact page shows a notice instead of
   * a mailto link, and the README flags it as a launch blocker.
   */
  contactEmail: "",
  /** Date shown on legal pages. Update whenever a policy changes. */
  legalLastUpdated: "November 8, 2026",
  maxInputLength: 300,
} as const;

export const fontNav: NavLink[] = [
  { href: "/cursive-fonts", label: "Cursive Fonts" },
  { href: "/bold-font", label: "Bold Font" },
  { href: "/italic-font", label: "Italic Font" },
  { href: "/bubble-letters", label: "Bubble Letters" },
  { href: "/small-caps-font", label: "Small Caps" },
  { href: "/gothic-font", label: "Gothic Font" },
  { href: "/aesthetic-fonts", label: "Aesthetic Fonts" },
  { href: "/glitch-text", label: "Glitch Text" },
  { href: "/upside-down-text", label: "Upside Down Text" },
  { href: "/strikethrough-text", label: "Strikethrough Text" },
  { href: "/underline-text", label: "Underline Text" },
];

export const platformNav: NavLink[] = [
  { href: "/instagram-fonts", label: "Instagram Fonts" },
  { href: "/discord-fonts", label: "Discord Fonts" },
  { href: "/tiktok-fonts", label: "TikTok Fonts" },
];

export const trustNav: NavLink[] = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

export const legalNav: NavLink[] = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms and Conditions" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export function absoluteUrl(path = "/"): string {
  if (path === "/" || path === "") return siteConfig.url;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
