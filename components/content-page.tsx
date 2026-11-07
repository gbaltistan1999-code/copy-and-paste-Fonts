import { Breadcrumbs } from "./breadcrumbs";
import { JsonLd } from "./json-ld";
import { webPageJsonLd } from "@/lib/seo";

interface ContentPageProps {
  title: string;
  /** Used in breadcrumb + WebPage schema. */
  name: string;
  description: string;
  path: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

/** Shared layout for About, legal and other text pages. */
export function ContentPage({ title, name, description, path, lastUpdated, children }: ContentPageProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 pb-8 pt-5 sm:px-6">
      <JsonLd data={webPageJsonLd({ title: name, description, path })} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name, path },
        ]}
      />
      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
      {lastUpdated && <p className="mt-2 text-sm text-ink-soft">Last updated: {lastUpdated}</p>}
      <div className="prose-content mt-6">{children}</div>
    </article>
  );
}
