/**
 * Low-level Unicode helpers used by every font style.
 *
 * Important rules:
 * - Always iterate by code point (for...of / Array.from), never by UTF-16 index,
 *   because most styled letters live above U+FFFF and take two UTF-16 units.
 * - Use grapheme clusters when adding or reordering marks so emoji sequences
 *   and accented letters are never split apart.
 */

export type CharMap = ReadonlyMap<string, string>;

export const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export const LOWER = "abcdefghijklmnopqrstuvwxyz";
export const DIGITS = "0123456789";

interface OffsetMapOptions {
  /** Code point of the styled "A". */
  upper?: number;
  /** Code point of the styled "a". */
  lower?: number;
  /** Code point of the styled "0". */
  digits?: number;
  /**
   * Letters that live outside the contiguous block (for example the
   * Letterlike Symbols ℎ, ℬ, ℭ). These override the computed offset so we
   * never output an unassigned "hole" code point.
   */
  exceptions?: Record<string, string>;
}

/** Builds a map from A–Z, a–z, 0–9 to a contiguous run of styled code points. */
export function offsetMap({ upper, lower, digits, exceptions }: OffsetMapOptions): CharMap {
  const map = new Map<string, string>();
  if (upper !== undefined) {
    for (let i = 0; i < 26; i++) map.set(UPPER[i], String.fromCodePoint(upper + i));
  }
  if (lower !== undefined) {
    for (let i = 0; i < 26; i++) map.set(LOWER[i], String.fromCodePoint(lower + i));
  }
  if (digits !== undefined) {
    for (let i = 0; i < 10; i++) map.set(DIGITS[i], String.fromCodePoint(digits + i));
  }
  if (exceptions) {
    for (const [from, to] of Object.entries(exceptions)) map.set(from, to);
  }
  return map;
}

/**
 * Builds a map from two equal-length strings, compared code point by code point.
 * Throws during development if the strings do not line up.
 */
export function pairMap(from: string, to: string): CharMap {
  const a = Array.from(from);
  const b = Array.from(to);
  if (a.length !== b.length) {
    throw new Error(`pairMap length mismatch: ${a.length} vs ${b.length}`);
  }
  const map = new Map<string, string>();
  a.forEach((ch, i) => map.set(ch, b[i]));
  return map;
}

/** Merges several maps; later maps win. */
export function mergeMaps(...maps: CharMap[]): CharMap {
  const merged = new Map<string, string>();
  for (const map of maps) for (const [k, v] of map) merged.set(k, v);
  return merged;
}

/**
 * Replaces each mapped code point. Unmapped characters (punctuation, emoji,
 * non-Latin scripts) are left unchanged, so we never output broken characters.
 *
 * Text is decomposed first (NFD) so accented letters such as "é" become a
 * styled base letter plus the original accent, then recomposed (NFC) so any
 * untouched characters return to their normal form.
 */
export function mapText(text: string, map: CharMap): string {
  let out = "";
  for (const ch of text.normalize("NFD")) out += map.get(ch) ?? ch;
  return out.normalize("NFC");
}

type GraphemeSegmenter = { segment(input: string): Iterable<{ segment: string }> };

const segmenter: GraphemeSegmenter | null =
  typeof Intl !== "undefined" && "Segmenter" in Intl
    ? new Intl.Segmenter(undefined, { granularity: "grapheme" })
    : null;

/** Splits text into user-perceived characters (grapheme clusters). */
export function graphemes(text: string): string[] {
  if (segmenter) return Array.from(segmenter.segment(text), (s) => s.segment);
  // Fallback for very old browsers: code points (still surrogate-safe).
  return Array.from(text);
}

const LINE_BREAK = /^(\r\n|\r|\n)$/;

/**
 * Appends combining marks after every grapheme (except line breaks), which is
 * how strikethrough, underline and similar "line" styles work.
 */
export function combine(text: string, marks: string): string {
  return graphemes(text)
    .map((g) => (LINE_BREAK.test(g) ? g : g + marks))
    .join("");
}

/** Reverses text by grapheme so emoji and accented letters stay intact. */
export function reverseText(text: string): string {
  return graphemes(text).reverse().join("");
}

/** Maps each single-code-point grapheme, then reverses (used for flips). */
export function mapAndReverse(text: string, map: CharMap): string {
  return graphemes(text)
    .map((g) => map.get(g) ?? g)
    .reverse()
    .join("");
}

/** Wraps text with decorations. Empty input stays empty. */
export function wrap(text: string, left: string, right: string): string {
  return text.trim() === "" ? text : `${left}${text}${right}`;
}

/** Inserts a separator between the letters of each word (spaces are kept). */
export function between(text: string, separator: string): string {
  return text
    .split(/(\s+)/)
    .map((part) => (/^\s*$/.test(part) ? part : graphemes(part).join(separator)))
    .join("");
}
