import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { buildImageSitemap, imageSitemapEntries } from "@/lib/image-sitemap";
import { siteConfig } from "@/lib/site-config";

describe("image sitemap", () => {
  const entries = imageSitemapEntries();

  it("lists only absolute site URLs for pages and images", () => {
    expect(entries.length).toBeGreaterThan(0);
    for (const e of entries) {
      expect(e.page.startsWith(siteConfig.url)).toBe(true);
      for (const img of e.images) expect(img.startsWith(`${siteConfig.url}/`)).toBe(true);
    }
  });

  it("points only at image files that exist in /public", () => {
    for (const img of entries.flatMap((e) => e.images)) {
      const file = join(process.cwd(), "public", img.slice(siteConfig.url.length));
      expect(existsSync(file), img).toBe(true);
    }
  });

  it("produces valid image sitemap XML and escapes special characters", () => {
    const xml = buildImageSitemap([{ page: "https://x.test/?a=1&b=2", images: ["https://x.test/i.png"] }]);
    expect(xml).toContain('xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"');
    expect(xml).toContain("<loc>https://x.test/?a=1&amp;b=2</loc>");
    expect(xml).toContain("<image:loc>https://x.test/i.png</image:loc>");
  });
});
