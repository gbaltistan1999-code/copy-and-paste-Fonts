import { CopyButton } from "./copy-button";
import { convertWith, getStyle } from "@/lib/styles";
import type { ExampleItem } from "@/types";

/**
 * Ready-to-copy examples. Converted on the server at build time, so the styled
 * text is in the HTML and only the small copy buttons need JavaScript.
 */
export function ExamplesGrid({ items }: { items: ExampleItem[] }) {
  return (
    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
      {items.map((item) => {
        const output = convertWith(item.styleId, item.text);
        const styleName = getStyle(item.styleId)?.name ?? "";
        return (
          <li key={item.label + item.styleId} className="flex items-center gap-3 rounded-xl border border-line bg-white p-3">
            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium text-ink-soft">
                {item.label} <span>· {styleName}</span>
              </p>
              <p className="preview-text mt-0.5 text-lg text-ink" aria-hidden="true">
                {output}
              </p>
              <span className="sr-only">
                {item.text} in {styleName} style
              </span>
            </div>
            <CopyButton text={output} label={`Copy "${item.text}" in ${styleName} style`} size="sm" />
          </li>
        );
      })}
    </ul>
  );
}
