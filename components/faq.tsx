import { ChevronDown } from "lucide-react";
import { JsonLd } from "./json-ld";
import { faqJsonLd } from "@/lib/seo";
import type { FaqItem } from "@/types";

/** Visible FAQ list (native <details>, no JS) + matching FAQPage structured data. */
export function Faq({
  items,
  heading = "Frequently asked questions",
  id = "faq",
  withSchema = true,
}: {
  items: FaqItem[];
  heading?: string;
  id?: string;
  withSchema?: boolean;
}) {
  return (
    <section aria-labelledby={`${id}-heading`} className="mt-12">
      {withSchema && <JsonLd data={faqJsonLd(items)} />}
      <h2 id={`${id}-heading`} className="text-2xl font-bold tracking-tight">
        {heading}
      </h2>
      <div className="mt-4 divide-y divide-line rounded-xl border border-line bg-white">
        {items.map((item) => (
          <details key={item.question} className="group px-4 sm:px-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold text-ink [&::-webkit-details-marker]:hidden">
              <span className="text-base">{item.question}</span>
              <ChevronDown size={18} aria-hidden className="shrink-0 text-ink-soft transition-transform group-open:rotate-180" />
            </summary>
            <p className="pb-4 leading-relaxed text-ink-soft">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
