import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { postContent } from "@/components/blog/post-content";
import { AuthorBox, AuthorByline } from "@/components/blog/author-card";
import { getAuthor } from "@/data/authors";
import { blogPosts, formatPostDate, getPost } from "@/data/blog";
import { blogPostingJsonLd, pageMetadata } from "@/lib/seo";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    ogType: "article",
    image: { url: post.image.src, width: post.image.width, height: post.image.height, alt: post.image.alt },
  });
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);
  const content = postContent[slug];
  const author = post && getAuthor(post.author);
  if (!post || !content || !author) notFound();
  const { Body, Closing } = content;
  const path = `/blog/${post.slug}`;

  return (
    <article className="mx-auto max-w-3xl px-4 pb-8 pt-5 sm:px-6">
      <JsonLd data={blogPostingJsonLd(post, author)} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.h1, path },
        ]}
      />

      <header className="mt-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{post.h1}</h1>
        <AuthorByline author={author}>
          {" · "}
          <time dateTime={post.datePublished}>{formatPostDate(post.datePublished)}</time>
          {post.dateModified !== post.datePublished && (
            <>
              {" · Updated "}
              <time dateTime={post.dateModified}>{formatPostDate(post.dateModified)}</time>
            </>
          )}
        </AuthorByline>
      </header>

      <Image
        src={post.image.src}
        width={post.image.width}
        height={post.image.height}
        alt={post.image.alt}
        priority
        sizes="(min-width: 768px) 720px, 100vw"
        className="mt-6 h-auto w-full rounded-2xl border border-line"
      />

      <div className="prose-content mt-6">
        <Body />
      </div>

      <Faq items={post.faqs} />

      {Closing && (
        <section aria-labelledby="closing-heading" className="prose-content mt-12">
          <h2 id="closing-heading" className="!mt-0">
            Find your caption and post it
          </h2>
          <Closing />
        </section>
      )}

      <AuthorBox author={author} />

      <p className="mt-10 border-t border-line pt-6 text-sm text-ink-soft">
        <Link href="/blog" className="font-medium text-accent underline underline-offset-2">
          ← Back to the blog
        </Link>
      </p>
    </article>
  );
}
