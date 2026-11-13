import type { FontPage } from "@/types";
import { stylePages as coreStylePages } from "./style-pages";
import { moreStylePages } from "./more-style-pages";
import { platformPages } from "./platform-pages";

export const stylePages: FontPage[] = [...coreStylePages, ...moreStylePages];

export const fontPages: FontPage[] = [...stylePages, ...platformPages];

const bySlug = new Map(fontPages.map((p) => [p.slug, p]));

export function getPage(slug: string): FontPage | undefined {
  return bySlug.get(slug);
}

export { platformPages };
