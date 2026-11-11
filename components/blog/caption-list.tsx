"use client";

import { createContext, useContext, useState } from "react";
import { CopyButton } from "@/components/copy-button";
import {
  CAPTION_FONT_OPTIONS,
  captionText,
  styleCaption,
  type Caption,
  type CaptionFontChoice,
} from "@/lib/caption-styles";

const FontChoiceContext = createContext<{ choice: CaptionFontChoice; setChoice: (c: CaptionFontChoice) => void }>({
  choice: "mixed",
  setChoice: () => {},
});

/** Shares the selected caption font between the picker and every caption list. */
export function CaptionFontProvider({ children }: { children: React.ReactNode }) {
  const [choice, setChoice] = useState<CaptionFontChoice>("mixed");
  return <FontChoiceContext.Provider value={{ choice, setChoice }}>{children}</FontChoiceContext.Provider>;
}

/** Sticky row of font chips that restyles all captions at once. */
export function CaptionFontPicker() {
  const { choice, setChoice } = useContext(FontChoiceContext);
  return (
    <div className="sticky top-16 z-20 -mx-4 mt-6 border-y border-line bg-white px-4 py-2.5 sm:mx-0 sm:rounded-xl sm:border sm:shadow-sm">
      <div className="flex items-center gap-3">
        <span id="caption-font-label" className="shrink-0 text-sm font-semibold text-ink">
          Caption font
        </span>
        <div
          role="radiogroup"
          aria-labelledby="caption-font-label"
          className="-my-1 flex gap-1.5 overflow-x-auto py-1 [scrollbar-width:none]"
        >
          {CAPTION_FONT_OPTIONS.map((o) => {
            const active = o.id === choice;
            return (
              <button
                key={o.id}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setChoice(o.id)}
                className={`shrink-0 rounded-full border px-3 py-1 text-sm font-medium transition-colors ${
                  active
                    ? "border-accent bg-accent text-white"
                    : "border-line bg-white text-ink-soft hover:border-accent hover:text-ink"
                }`}
              >
                {o.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/**
 * A grid of copyable captions. The styled version is the main (decorative) text; the plain words
 * underneath keep the caption readable by search engines and screen readers.
 */
export function CaptionList({ captions, mixedIds }: { captions: Caption[]; mixedIds: string[] }) {
  const { choice } = useContext(FontChoiceContext);
  return (
    <ul className="mt-4 grid list-none gap-2 pl-0 sm:grid-cols-2">
      {captions.map((caption, i) => {
        const plain = captionText(caption);
        const styled = styleCaption(caption, mixedIds[i], choice);
        const isStyled = styled !== plain;
        return (
          <li
            key={plain}
            className="mt-0 flex items-center justify-between gap-3 rounded-xl border border-line bg-white py-2 pl-4 pr-2 shadow-sm"
          >
            <div className="min-w-0">
              {isStyled && (
                <span aria-hidden="true" className="preview-text block text-[17px] leading-snug text-ink">
                  {styled}
                </span>
              )}
              <span className={isStyled ? "mt-0.5 block text-xs text-ink-soft" : "block text-[15px] leading-snug text-ink"}>
                {plain}
              </span>
            </div>
            <CopyButton text={styled} label={`Copy caption: ${plain}`} size="sm" variant="soft" />
          </li>
        );
      })}
    </ul>
  );
}
