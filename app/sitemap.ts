import type { MetadataRoute } from "next";
import { fontPages } from "@/data/pages";
import { blogPosts } from "@/data/blog";
import { absoluteUrl } from "@/lib/site-config";

/** Only canonical, indexable pages. Uses the configured domain, never env vars. */
export default function sitemap(): MetadataRoute.Sitemap {
  const core: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/blog", priority: 0.6, changeFrequency: "weekly" },
    { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
    { path: "/about", priority: 0.4, changeFrequency: "yearly" },
    { path: "/contact", priority: 0.3, changeFrequency: "yearly" },
    { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
    { path: "/terms-and-conditions", priority: 0.2, changeFrequency: "yearly" },
    { path: "/cookie-policy", priority: 0.2, changeFrequency: "yearly" },
    { path: "/disclaimer", priority: 0.2, changeFrequency: "yearly" },
  ];

  return [
    ...core.map((c) => ({ url: absoluteUrl(c.path), priority: c.priority, changeFrequency: c.changeFrequency })),
    ...fontPages.map((p) => ({
      url: absoluteUrl(`/${p.slug}`),
      priority: p.kind === "style" ? 0.8 : 0.7,
      changeFrequency: "monthly" as const,
    })),
    ...blogPosts.map((p) => ({
      url: absoluteUrl(`/blog/${p.slug}`),
      lastModified: p.dateModified,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    })),
  ];
}
