import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ExamplesGrid } from "@/components/examples-grid";
import { Faq } from "@/components/faq";
import { FontGenerator } from "@/components/font-generator";
import { JsonLd } from "@/components/json-ld";
import { PageLinks } from "@/components/page-links";
import { fontPages, getPage } from "@/data/pages";
import { pageMetadata, webApplicationJsonLd, webPageJsonLd } from "@/lib/seo";

type Params = { slug: string };

// Only the slugs defined in data/ exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return fontPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) return {};
  return pageMetadata({ title: page.title, description: page.description, path: `/${page.slug}` });
}

export default async function FontStylePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) notFound();

  const path = `/${page.slug}`;

  return (
    <article className="mx-auto max-w-6xl px-4 pb-8 pt-5 sm:px-6">
      <JsonLd data={webPageJsonLd({ title: page.title, description: page.description, path })} />
      <JsonLd data={webApplicationJsonLd({ name: `${page.navLabel} Generator`, path, description: page.description })} />
      <Breadcrumbs
        items={[
          { name: "Copy and Paste Fonts", path: "/" },
          { name: page.navLabel, path },
        ]}
      />

      <header className="mt-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{page.h1}</h1>
        <p className="mt-2 max-w-3xl text-ink-soft sm:text-lg">{page.intro}</p>
      </header>

      <section aria-label={`${page.navLabel} generator`} className="mt-5">
        <FontGenerator styleIds={page.styleIds} placeholder={page.placeholder} />
      </section>

      {/* Text content stays at a comfortable reading width; only the generator uses the full width. */}
      <div className="mx-auto max-w-4xl">
      <div className="cv-auto prose-content mt-12">
        {page.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs?.map((p) => <p key={p.slice(0, 40)}>{p}</p>)}
            {section.list && (
              <ul>
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <section aria-labelledby="examples-heading" className="mt-12">
        <h2 id="examples-heading" className="text-2xl font-bold tracking-tight">
          Ready-to-copy examples
        </h2>
        <p className="mt-2 text-ink-soft">Tap copy on any example, or type your own text in the generator above.</p>
        <ExamplesGrid items={page.examples} />
      </section>

      <Faq items={page.faqs} />

      <section aria-labelledby="related-heading" className="mt-12">
        <h2 id="related-heading" className="text-2xl font-bold tracking-tight">
          Related font styles
        </h2>
        <PageLinks slugs={page.related} />
        <p className="mt-6 text-ink-soft">
          Want every style in one place? Go back to the{" "}
          <Link href="/" className="font-medium text-accent underline underline-offset-2">
            full copy and paste fonts generator
          </Link>{" "}
          with 80+ styles.
        </p>
      </section>
      </div>
    </article>
  );
}
