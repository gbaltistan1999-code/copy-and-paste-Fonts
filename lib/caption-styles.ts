import { convertWith } from "@/lib/styles";

/**
 * A caption is stored as plain words (so search engines and screen readers can read it).
 * `style` pins the font used in "Mixed" mode; otherwise the font rotates.
 */
export type Caption = string | { text: string; style: string };

export function captionText(caption: Caption): string {
  return typeof caption === "string" ? caption : caption.text;
}

/** Readable styles that rotate in "Mixed" mode, ordered so neighbors look clearly different. */
export const MIXED_STYLE_IDS = [
  "bold-script",
  "bold-sans",
  "tiny-caps",
  "double-struck",
  "italic-serif",
  "monospace",
  "script",
  "bold-italic-sans",
  "circled",
  "bold-fraktur",
] as const;

/** "mixed", "plain", or a style id. */
export type CaptionFontChoice = string;

/** Options offered in the caption font picker. */
export const CAPTION_FONT_OPTIONS: { id: CaptionFontChoice; label: string }[] = [
  { id: "mixed", label: "Mixed" },
  { id: "bold-serif", label: "Bold" },
  { id: "bold-script", label: "Cursive" },
  { id: "italic-sans", label: "Italic" },
  { id: "tiny-caps", label: "Small caps" },
  { id: "double-struck", label: "Outline" },
  { id: "circled", label: "Bubble" },
  { id: "fraktur", label: "Gothic" },
  { id: "monospace", label: "Typewriter" },
  { id: "plain", label: "Plain" },
];

/**
 * Fonts for "Mixed" mode across a whole list: pinned captions keep their style, the rest rotate
 * through MIXED_STYLE_IDS, skipping any font that would match a neighbor.
 */
export function assignMixedStyles(captions: Caption[]): string[] {
  const pinned = (c: Caption | undefined) => (c && typeof c !== "string" ? c.style : undefined);
  const out: string[] = [];
  let r = 0;
  captions.forEach((c, i) => {
    const fixed = pinned(c);
    if (fixed) {
      out.push(fixed);
      return;
    }
    const avoid = new Set([out[i - 1], pinned(captions[i + 1])]);
    let id: string = MIXED_STYLE_IDS[r % MIXED_STYLE_IDS.length];
    while (avoid.has(id)) id = MIXED_STYLE_IDS[++r % MIXED_STYLE_IDS.length];
    out.push(id);
    r++;
  });
  return out;
}

/** Style id to use for a caption. `mixedId` comes from assignMixedStyles. Null means plain text. */
export function captionStyleId(mixedId: string, choice: CaptionFontChoice): string | null {
  if (choice === "plain") return null;
  return choice === "mixed" ? mixedId : choice;
}

/** The text to display and copy for a caption under the current font choice. */
export function styleCaption(caption: Caption, mixedId: string, choice: CaptionFontChoice): string {
  const id = captionStyleId(mixedId, choice);
  const text = captionText(caption);
  return id ? convertWith(id, text) : text;
}
