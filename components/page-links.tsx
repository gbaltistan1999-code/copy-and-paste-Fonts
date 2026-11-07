import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getPage } from "@/data/pages";
import { convertWith } from "@/lib/styles";

/** Grid of cards linking to style/platform pages, each with a styled sample. */
export function PageLinks({ slugs, sampleText = "Font Style" }: { slugs: string[]; sampleText?: string }) {
  return (
    <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {slugs.map((slug) => {
        const page = getPage(slug);
        if (!page) return null;
        const sample = convertWith(page.styleIds[0], page.kind === "platform" ? page.navLabel.replace(/ Fonts$/, "") : sampleText);
        return (
          <li key={slug}>
            <Link
              href={`/${slug}`}
              className="group flex h-full items-center justify-between gap-3 rounded-xl border border-line bg-white p-4 transition-colors hover:border-accent"
            >
              <span className="min-w-0">
                <span className="block font-semibold text-ink group-hover:text-accent">{page.navLabel}</span>
                <span className="preview-text mt-1 block max-h-8 overflow-hidden text-ink-soft" aria-hidden="true">
                  {sample}
                </span>
              </span>
              <ArrowRight size={18} aria-hidden className="shrink-0 text-ink-soft group-hover:text-accent" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
