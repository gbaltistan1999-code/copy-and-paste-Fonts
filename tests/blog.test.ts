import { describe, expect, it } from "vitest";
import { blogPosts, formatPostDate, instagramCaptionCount, instagramCaptionGroups } from "@/data/blog";

describe("blog posts", () => {
  it("has unique, valid slugs, titles and descriptions", () => {
    for (const key of ["slug", "title", "description", "h1"] as const) {
      const values = blogPosts.map((p) => p[key]);
      expect(new Set(values).size, `duplicate ${key}`).toBe(values.length);
    }
    for (const p of blogPosts) {
      expect(p.slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
      expect(p.description.length, p.slug).toBeGreaterThan(70);
      expect(p.description.length, p.slug).toBeLessThanOrEqual(170);
      expect(p.image.src.startsWith("/")).toBe(true);
      expect(p.image.alt.length).toBeGreaterThan(10);
      expect(p.dateModified >= p.datePublished).toBe(true);
      expect(p.faqs.length).toBeGreaterThanOrEqual(4);
    }
  });

  it("formats dates without timezone drift", () => {
    expect(formatPostDate("2026-11-12")).toBe("November 12, 2026");
  });
});

describe("instagram captions post", () => {
  const post = blogPosts.find((p) => p.slug === "instagram-captions")!;

  it("headline number matches the real caption count", () => {
    const claimed = Number(post.h1.match(/^(\d+)/)?.[1]);
    expect(claimed).toBe(instagramCaptionCount);
    expect(post.title.startsWith(`${instagramCaptionCount} `)).toBe(true);
  });

  it("has no duplicate captions or group ids", () => {
    const all = instagramCaptionGroups.flatMap((g) => g.captions);
    expect(new Set(all).size).toBe(all.length);
    const ids = instagramCaptionGroups.map((g) => g.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
