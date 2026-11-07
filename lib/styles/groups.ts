import type { FontStyle, StyleCategory } from "@/types";

export interface StyleGroup {
  key: string;
  label: string;
  categories: StyleCategory[];
}

/** Tabs / sections shown in the generator, in display order. Every category must appear once. */
export const STYLE_GROUPS: readonly StyleGroup[] = [
  { key: "bold-italic", label: "Bold & Italic", categories: ["serif", "sans"] },
  { key: "cursive", label: "Cursive", categories: ["script"] },
  { key: "gothic", label: "Gothic", categories: ["gothic"] },
  { key: "squiggle", label: "Squiggle", categories: ["squiggle"] },
  { key: "fantasy", label: "Fantasy", categories: ["fantasy"] },
  { key: "russian", label: "Russian & Lookalike", categories: ["lookalike"] },
  { key: "bubble", label: "Bubble & Boxed", categories: ["enclosed"] },
  { key: "small", label: "Small Text", categories: ["small"] },
  { key: "cute", label: "Cute & Emoji", categories: ["cute"] },
  { key: "attitude", label: "Attitude", categories: ["attitude"] },
  { key: "decorated", label: "Decorated", categories: ["decorative"] },
  { key: "lines", label: "Lines & Glitch", categories: ["lines", "glitch"] },
  { key: "wide-flipped", label: "Wide & Flipped", categories: ["transform"] },
];

export interface GroupedItems<T> {
  group: StyleGroup;
  items: T[];
}

/** Splits items into groups (keeping their original order) and drops empty groups. */
export function groupByStyle<T extends { style: FontStyle }>(items: T[]): GroupedItems<T>[] {
  return STYLE_GROUPS.map((group) => ({
    group,
    items: items.filter((item) => group.categories.includes(item.style.category)),
  })).filter((g) => g.items.length > 0);
}
