import { authorPath, authors } from "@/data/authors";
import { blogPosts } from "@/data/blog";
import { homeImages } from "@/data/home";
import { absoluteUrl } from "@/lib/site-config";

export interface ImageSitemapEntry {
  /** Page the images appear on. */
  page: string;
  /** Absolute image URLs. */
  images: string[];
}

/** Every content image on the site, grouped by the page that shows it. New posts and authors are picked up automatically. */
export function imageSitemapEntries(): ImageSitemapEntry[] {
  return [
    { page: absoluteUrl("/"), images: Object.values(homeImages).map((i) => absoluteUrl(i.src)) },
    { page: absoluteUrl("/blog"), images: blogPosts.map((p) => absoluteUrl(p.image.src)) },
    ...blogPosts.map((p) => ({ page: absoluteUrl(`/blog/${p.slug}`), images: [absoluteUrl(p.image.src)] })),
    ...authors.map((a) => ({ page: absoluteUrl(authorPath(a)), images: [absoluteUrl(a.image.src)] })),
  ].filter((e) => e.images.length > 0);
}

function escapeXml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

/** Google image sitemap (https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps). */
export function buildImageSitemap(entries: ImageSitemapEntry[]): string {
  const urls = entries
    .map(
      (e) =>
        `  <url>\n    <loc>${escapeXml(e.page)}</loc>\n${e.images
          .map((img) => `    <image:image>\n      <image:loc>${escapeXml(img)}</image:loc>\n    </image:image>`)
          .join("\n")}\n  </url>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;
}
