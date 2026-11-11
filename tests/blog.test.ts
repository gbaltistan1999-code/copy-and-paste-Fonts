import { describe, expect, it } from "vitest";
import { blogPosts, formatPostDate, instagramCaptionCount, instagramCaptionGroups } from "@/data/blog";
import { authors, getAuthor } from "@/data/authors";
import {
  CAPTION_FONT_OPTIONS,
  MIXED_STYLE_IDS,
  assignMixedStyles,
  captionStyleId,
  captionText,
  styleCaption,
} from "@/lib/caption-styles";
import { getStyle } from "@/lib/styles";

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

  it("credits every post to an existing author", () => {
    for (const p of blogPosts) expect(getAuthor(p.author), p.slug).toBeDefined();
    for (const a of authors) {
      expect(a.slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
      expect(a.bio.length).toBeGreaterThan(20);
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

  it("stores every caption as plain, readable words", () => {
    for (const c of instagramCaptionGroups.flatMap((g) => g.captions)) {
      // No math-alphanumeric, circled or small-caps letters in the stored text.
      expect(captionText(c)).not.toMatch(/[\u{1D400}-\u{1D7FF}Ⓐ-ⓩᴀ-ᴫꜰ-ꟿ]/u);
    }
  });

  const all = instagramCaptionGroups.flatMap((g) => g.captions);
  const mixed = assignMixedStyles(all);

  it("keeps the writer's original look for pinned captions", () => {
    const styledAs = (t: string) => {
      const i = all.findIndex((c) => captionText(c) === t);
      return styleCaption(all[i], mixed[i], "mixed");
    };
    expect(styledAs("golden hour thoughts")).toBe("𝓰𝓸𝓵𝓭𝓮𝓷 𝓱𝓸𝓾𝓻 𝓽𝓱𝓸𝓾𝓰𝓱𝓽𝓼");
    expect(styledAs("less noise, more peace")).toBe("ʟᴇꜱꜱ ɴᴏɪꜱᴇ, ᴍᴏʀᴇ ᴘᴇᴀᴄᴇ");
    expect(styledAs("slow mornings are my favorite")).toBe("𝘴𝘭𝘰𝘸 𝘮𝘰𝘳𝘯𝘪𝘯𝘨𝘴 𝘢𝘳𝘦 𝘮𝘺 𝘧𝘢𝘷𝘰𝘳𝘪𝘵𝘦");
    expect(styledAs("stay sweet")).toBe("ⓢⓣⓐⓨ ⓢⓦⓔⓔⓣ");
    expect(styledAs("Home is wherever I'm happy")).toBe("𝘏𝘰𝘮𝘦 𝘪𝘴 𝘸𝘩𝘦𝘳𝘦𝘷𝘦𝘳 𝘐'𝘮 𝘩𝘢𝘱𝘱𝘺");
    expect(styledAs("Bet on yourself.")).toBe("𝗕𝗲𝘁 𝗼𝗻 𝘆𝗼𝘂𝗿𝘀𝗲𝗹𝗳.");
  });

  it("gives neighboring captions different fonts in Mixed mode and supports every picker option", () => {
    expect(mixed.length).toBe(all.length);
    for (let i = 1; i < mixed.length; i++) expect(mixed[i], `caption ${i}`).not.toBe(mixed[i - 1]);
    expect(captionStyleId(mixed[0], "plain")).toBeNull();
    expect(captionStyleId(mixed[0], "fraktur")).toBe("fraktur");
    for (const id of [...MIXED_STYLE_IDS, ...CAPTION_FONT_OPTIONS.map((o) => o.id)]) {
      if (id === "mixed" || id === "plain") continue;
      expect(getStyle(id), id).toBeDefined();
    }
    expect(styleCaption("Just vibing.", mixed[0], "plain")).toBe("Just vibing.");
  });

  it("has no duplicate captions or group ids", () => {
    const all = instagramCaptionGroups.flatMap((g) => g.captions.map(captionText));
    expect(new Set(all).size).toBe(all.length);
    const ids = instagramCaptionGroups.map((g) => g.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
