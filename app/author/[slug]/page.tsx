import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { authorPath, authors, getAuthor } from "@/data/authors";
import { blogPosts, formatPostDate } from "@/data/blog";
import { pageMetadata, profilePageJsonLd } from "@/lib/seo";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return authors.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) return {};
  return pageMetadata({
    title: `${author.name}, Author`,
    description: `${author.name} writes for CopyFontStyle. ${author.bio}`,
    path: authorPath(author),
    image: { url: author.image.src, width: author.image.width, height: author.image.height, alt: author.name },
  });
}

export default async function AuthorPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) notFound();
  const path = authorPath(author);
  const posts = blogPosts
    .filter((p) => p.author === author.slug)
    .sort((a, b) => b.datePublished.localeCompare(a.datePublished));

  return (
    <div className="mx-auto max-w-3xl px-4 pb-8 pt-5 sm:px-6">
      <JsonLd data={profilePageJsonLd(author)} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: author.name, path },
        ]}
      />

      <header className="mt-6 flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:text-left">
        <Image
          src={author.image.src}
          width={128}
          height={128}
          alt={`Photo of ${author.name}`}
          priority
          className="h-32 w-32 shrink-0 rounded-full border border-line object-cover shadow-sm"
        />
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft">Author</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">{author.name}</h1>
          <p className="mt-2 text-ink-soft sm:text-lg">{author.bio}</p>
          {author.links.length > 0 && (
            <ul className="mt-3 flex flex-wrap justify-center gap-3 text-sm sm:justify-start">
              {author.links.map((l) => (
                <li key={l.url}>
                  <a href={l.url} rel="me noopener" target="_blank" className="font-medium text-accent underline underline-offset-2">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </header>

      <section aria-labelledby="posts-heading" className="mt-12">
        <h2 id="posts-heading" className="text-2xl font-bold tracking-tight">
          Posts by {author.name}
        </h2>
        <ul className="mt-4 divide-y divide-line rounded-xl border border-line bg-white">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group flex items-center gap-4 p-4 hover:bg-mist/60">
                <Image
                  src={post.image.src}
                  width={post.image.width}
                  height={post.image.height}
                  alt=""
                  sizes="128px"
                  className="h-auto w-28 shrink-0 rounded-lg border border-line sm:w-32"
                />
                <div>
                  <p className="font-semibold leading-snug text-ink group-hover:text-accent">{post.h1}</p>
                  <p className="mt-1 text-xs text-ink-soft">
                    <time dateTime={post.datePublished}>{formatPostDate(post.datePublished)}</time>
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
