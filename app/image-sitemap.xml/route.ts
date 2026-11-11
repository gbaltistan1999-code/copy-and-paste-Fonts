import { buildImageSitemap, imageSitemapEntries } from "@/lib/image-sitemap";

// Generated at build time like the other sitemaps.
export const dynamic = "force-static";

export function GET() {
  return new Response(buildImageSitemap(imageSitemapEntries()), {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
