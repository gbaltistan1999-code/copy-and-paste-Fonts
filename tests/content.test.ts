import { describe, expect, it } from "vitest";
import { fontPages } from "@/data/pages";
import { homeSamples } from "@/data/home";
import { getStyle } from "@/lib/styles";
import { fontNav, platformNav } from "@/lib/site-config";

describe("font page content", () => {
  it("has unique slugs, titles, descriptions and H1s", () => {
    for (const key of ["slug", "title", "description", "h1"] as const) {
      const values = fontPages.map((p) => p[key]);
      expect(new Set(values).size, `duplicate ${key}`).toBe(values.length);
    }
  });

  it("uses lowercase, hyphenated slugs", () => {
    for (const p of fontPages) expect(p.slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
  });

  it("keeps meta descriptions a sensible length", () => {
    for (const p of fontPages) {
      expect(p.description.length, p.slug).toBeGreaterThan(70);
      expect(p.description.length, p.slug).toBeLessThanOrEqual(170);
    }
  });

  it("references only existing styles", () => {
    for (const p of fontPages) {
      for (const id of p.styleIds) expect(getStyle(id), `${p.slug}: ${id}`).toBeDefined();
      for (const ex of p.examples) expect(getStyle(ex.styleId), `${p.slug}: ${ex.styleId}`).toBeDefined();
    }
    for (const ex of homeSamples) expect(getStyle(ex.styleId)).toBeDefined();
  });

  it("links only to existing related pages, never itself", () => {
    const slugs = new Set(fontPages.map((p) => p.slug));
    for (const p of fontPages) {
      expect(p.related.length).toBeGreaterThanOrEqual(3);
      for (const r of p.related) {
        expect(slugs.has(r), `${p.slug} -> ${r}`).toBe(true);
        expect(r).not.toBe(p.slug);
      }
    }
  });

  it("gives every page FAQs, examples and several sections", () => {
    for (const p of fontPages) {
      expect(p.faqs.length, p.slug).toBeGreaterThanOrEqual(4);
      expect(p.examples.length, p.slug).toBeGreaterThanOrEqual(4);
      expect(p.sections.length, p.slug).toBeGreaterThanOrEqual(3);
    }
  });

  it("lists every page in the navigation (no orphans)", () => {
    const navHrefs = new Set([...fontNav, ...platformNav].map((l) => l.href));
    for (const p of fontPages) expect(navHrefs.has(`/${p.slug}`), p.slug).toBe(true);
  });
});
