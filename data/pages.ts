import type { FontPage } from "@/types";
import { stylePages } from "./style-pages";
import { platformPages } from "./platform-pages";

export const fontPages: FontPage[] = [...stylePages, ...platformPages];

const bySlug = new Map(fontPages.map((p) => [p.slug, p]));

export function getPage(slug: string): FontPage | undefined {
  return bySlug.get(slug);
}

export { stylePages, platformPages };
