import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { blogPosts, formatPostDate } from "@/data/blog";
import { pageMetadata, webPageJsonLd } from "@/lib/seo";

const description =
  "Caption ideas, bio ideas and tips for using copy and paste fonts on Instagram, TikTok, Discord and more, from the CopyFontStyle team.";

export const metadata = pageMetadata({ title: "Blog", description, path: "/blog" });

export default function BlogIndexPage() {
  const posts = [...blogPosts].sort((a, b) => b.datePublished.localeCompare(a.datePublished));
  return (
    <div className="mx-auto max-w-6xl px-4 pb-8 pt-5 sm:px-6">
      <JsonLd data={webPageJsonLd({ title: "Blog", description, path: "/blog" })} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />
      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Blog</h1>
      <p className="mt-2 max-w-3xl text-ink-soft sm:text-lg">
        Caption ideas, bio ideas and practical tips for making your posts and profiles stand out.
      </p>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block h-full overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <Image
                src={post.image.src}
                width={post.image.width}
                height={post.image.height}
                alt=""
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full"
              />
              <div className="p-5">
                <p className="text-xs text-ink-soft">
                  <time dateTime={post.datePublished}>{formatPostDate(post.datePublished)}</time>
                </p>
                <h2 className="mt-1 text-lg font-bold leading-snug text-ink group-hover:text-accent">{post.h1}</h2>
                <p className="mt-2 text-sm text-ink-soft">{post.excerpt}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
