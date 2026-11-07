/**
 * The list of every font style, in the order shown on the homepage
 * (most popular first). To add a style, add one entry here and a test.
 */
import type { FontStyle } from "@/types";
import * as A from "./alphabets";
import { between, combine, graphemes, mapAndReverse, mapText, reverseText, wrap, type CharMap } from "./unicode";
import { zalgo } from "./zalgo";

const m = (map: CharMap) => (text: string) => mapText(text, map);

const ASCII_LETTER = /^[A-Za-z]$/;

/** Cycles through several styles, one per Latin letter. Other characters are kept. */
const FREAKY_MAPS: CharMap[] = [A.boldScript, A.fraktur, A.doubleStruck, A.circled, A.tinyCaps, A.boldItalicSans];
function freakyMix(text: string): string {
  let i = 0;
  let out = "";
  for (const ch of text) {
    if (ASCII_LETTER.test(ch)) out += FREAKY_MAPS[i++ % FREAKY_MAPS.length].get(ch) ?? ch;
    else out += ch;
  }
  return out;
}

/** "aLtErNaTiNg" caps on Latin letters only, so other scripts are never changed. */
function alternatingCaps(text: string): string {
  let i = 0;
  let out = "";
  for (const ch of text) {
    if (ASCII_LETTER.test(ch)) out += i++ % 2 === 0 ? ch.toLowerCase() : ch.toUpperCase();
    else out += ch;
  }
  return out;
}

export const FONT_STYLES: readonly FontStyle[] = [
  // ----- Most requested -----
  { id: "bold-serif", name: "Bold", category: "serif", convert: m(A.boldSerif) },
  { id: "italic-serif", name: "Italic", category: "serif", convert: m(A.italicSerif) },
  { id: "bold-italic-serif", name: "Bold Italic", category: "serif", convert: m(A.boldItalicSerif) },
  { id: "script", name: "Cursive Script", category: "script", convert: m(A.script) },
  { id: "bold-script", name: "Bold Cursive", category: "script", convert: m(A.boldScript) },
  { id: "fraktur", name: "Gothic (Fraktur)", category: "gothic", convert: m(A.fraktur) },
  { id: "bold-fraktur", name: "Bold Gothic", category: "gothic", convert: m(A.boldFraktur) },
  { id: "double-struck", name: "Double-Struck (Outline)", category: "serif", convert: m(A.doubleStruck) },
  { id: "bold-sans", name: "Bold Sans", category: "sans", convert: m(A.boldSans) },
  { id: "italic-sans", name: "Italic Sans", category: "sans", convert: m(A.italicSans) },
  { id: "bold-italic-sans", name: "Bold Italic Sans", category: "sans", convert: m(A.boldItalicSans) },
  { id: "sans", name: "Sans Serif", category: "sans", convert: m(A.sans) },
  { id: "monospace", name: "Monospace (Typewriter)", category: "sans", convert: m(A.monospace) },
  {
    id: "small-caps",
    name: "Small Caps",
    category: "small",
    note: "No small-cap “x” exists, so x stays the same.",
    convert: m(A.smallCaps),
  },
  { id: "tiny-caps", name: "All Small Caps", category: "small", convert: m(A.tinyCaps) },
  { id: "circled", name: "Bubble (Circled)", category: "enclosed", convert: m(A.circled) },
  {
    id: "negative-circled",
    name: "Black Bubble",
    category: "enclosed",
    note: "Letters are uppercase only.",
    convert: m(A.negativeCircled),
  },
  { id: "squared", name: "Squared", category: "enclosed", note: "Letters are uppercase only.", convert: m(A.squared) },
  {
    id: "negative-squared",
    name: "Black Squared",
    category: "enclosed",
    note: "Some devices show a few letters as emoji.",
    convert: m(A.negativeSquared),
  },
  { id: "fullwidth", name: "Fullwidth (Vaporwave)", category: "transform", convert: m(A.fullwidth) },
  { id: "upside-down", name: "Upside Down", category: "transform", convert: (t) => mapAndReverse(t, A.upsideDown) },
  { id: "strikethrough", name: "Strikethrough", category: "lines", convert: (t) => combine(t, "̶") },
  { id: "underline", name: "Underline", category: "lines", convert: (t) => combine(t, "̲") },
  {
    id: "zalgo",
    name: "Glitch (Zalgo)",
    category: "glitch",
    note: "Heavy glitch text can overlap nearby lines.",
    convert: (t, o) => zalgo(t, o?.zalgoIntensity ?? 2),
  },

  // ----- Decorated (aesthetic) -----
  { id: "royal", name: "Royal Wings", category: "decorative", convert: (t) => wrap(mapText(t, A.script), "꧁༺ ", " ༻꧂") },
  { id: "stars", name: "Shooting Stars", category: "decorative", convert: (t) => wrap(mapText(t, A.boldScript), "★彡 ", " 彡★") },
  { id: "sparkles", name: "Sparkles", category: "decorative", convert: (t) => wrap(mapText(t, A.boldSans), "⋆｡°✩ ", " ✩°｡⋆") },
  { id: "hearts", name: "Soft Hearts", category: "decorative", convert: (t) => wrap(mapText(t, A.italicSans), "♡ ", " ♡") },
  { id: "flowers", name: "Flowers", category: "decorative", convert: (t) => wrap(mapText(t, A.smallCaps), "✿ ", " ✿") },
  { id: "butterfly", name: "Butterfly", category: "decorative", convert: (t) => wrap(mapText(t, A.script), "ʚ ", " ɞ") },
  { id: "lenticular", name: "Vaporwave Brackets", category: "decorative", convert: (t) => wrap(mapText(t, A.fullwidth), "【", "】") },
  { id: "corner-brackets", name: "Corner Brackets", category: "decorative", convert: (t) => wrap(t, "『", "』") },
  { id: "music", name: "Music Notes", category: "decorative", convert: (t) => wrap(mapText(t, A.italicSerif), "♪♫ ", " ♫♪") },
  { id: "crown", name: "Crown", category: "decorative", convert: (t) => wrap(mapText(t, A.boldFraktur), "♔ ", " ♔") },
  { id: "sniper", name: "Gamer Sniper", category: "decorative", convert: (t) => wrap(mapText(t, A.boldSans), "▄︻デ ", " ══━一") },
  { id: "wave-between", name: "Wavy Separators", category: "decorative", convert: (t) => between(t, "≋") },
  { id: "heart-between", name: "Hearts Between", category: "decorative", convert: (t) => between(t, "♥") },
  { id: "dot-between", name: "Dotted", category: "decorative", convert: (t) => between(t, "·") },
  {
    id: "boxed-brackets",
    name: "Boxed Brackets",
    category: "decorative",
    convert: (t) =>
      t
        .split(/(\s+)/)
        .map((part) => (/^\s*$/.test(part) ? part : graphemes(part).map((c) => `[̲̅${c}̲̅]`).join("")))
        .join(""),
  },

  // ----- Lines and marks -----
  { id: "slash-through", name: "Slashed", category: "lines", convert: (t) => combine(t, "̸") },
  { id: "wavy-strike", name: "Wavy Strikethrough", category: "lines", convert: (t) => combine(t, "̴") },
  { id: "double-underline", name: "Double Underline", category: "lines", convert: (t) => combine(t, "̳") },
  { id: "overline", name: "Overline", category: "lines", convert: (t) => combine(t, "̅") },
  { id: "dots-below", name: "Dotted Underline", category: "lines", convert: (t) => combine(t, "̤") },
  { id: "cross-above", name: "Cross Above", category: "lines", convert: (t) => combine(t, "̽") },
  {
    id: "circle-overlay",
    name: "Circle Overlay",
    category: "enclosed",
    note: "Uses an enclosing mark; support varies by font.",
    convert: (t) => combine(t, "⃝"),
  },
  {
    id: "parenthesized",
    name: "Parenthesized",
    category: "enclosed",
    convert: m(A.parenthesized),
  },

  // ----- Small and transformed -----
  {
    id: "superscript",
    name: "Superscript (Tiny Text)",
    category: "small",
    note: "Unicode has no superscript “q”, so it stays the same.",
    convert: m(A.superscript),
  },
  {
    id: "subscript",
    name: "Subscript",
    category: "small",
    note: "Only some letters have subscript forms; others stay the same.",
    convert: m(A.subscript),
  },
  { id: "mirrored", name: "Mirrored", category: "transform", convert: (t) => mapAndReverse(t, A.mirrored) },
  { id: "reversed", name: "Reversed (Backwards)", category: "transform", convert: reverseText },
  {
    id: "spaced",
    name: "Spaced Out",
    category: "transform",
    convert: (t) =>
      t
        .split(/(\s+)/)
        .map((part) => (/^\s*$/.test(part) ? part.replace(/ /g, "   ") : graphemes(part).join(" ")))
        .join(""),
  },

  // ----- Lookalike letters -----
  {
    id: "currency",
    name: "Currency Symbols",
    category: "lookalike",
    note: "Lookalike symbols; screen readers read them as symbols.",
    convert: m(A.currency),
  },
  {
    id: "faux-cyrillic",
    name: "Faux Cyrillic",
    category: "lookalike",
    note: "Uses real Cyrillic letters that only look similar.",
    convert: m(A.fauxCyrillic),
  },
  {
    id: "asian-style",
    name: "Asian Style",
    category: "lookalike",
    note: "Borrows CJK characters that resemble Latin letters.",
    convert: m(A.asianStyle),
  },
  {
    id: "russian-caps",
    name: "Russian Caps",
    category: "lookalike",
    note: "Cyrillic and Greek lookalikes; Russian readers see different letters.",
    convert: m(A.russianCaps),
  },
  { id: "russian-smooth", name: "Russian Smooth", category: "lookalike", convert: m(A.russianSmooth) },
  { id: "greek-cyrillic", name: "Greek Cyrillic", category: "lookalike", convert: m(A.greekCyrillic) },

  // ----- Squiggle -----
  { id: "squiggle-thai", name: "Squiggle (Thai Style)", category: "squiggle", convert: m(A.squiggleThai) },
  { id: "squiggle-hooks", name: "Squiggle Hooks", category: "squiggle", convert: m(A.squiggleHooks) },
  { id: "squiggle-armenian", name: "Squiggle (Armenian Style)", category: "squiggle", convert: m(A.squiggleArmenian) },
  { id: "squiggle-curly", name: "Curly Squiggle", category: "squiggle", convert: m(A.squiggleCurly) },

  // ----- Fantasy -----
  {
    id: "tribal",
    name: "Tribal",
    category: "fantasy",
    note: "Uses Canadian Aboriginal syllabics that resemble Latin letters.",
    convert: m(A.tribal),
  },
  {
    id: "ethiopic",
    name: "Ethiopic Fantasy",
    category: "fantasy",
    note: "Uses Ethiopic letters, which Amharic readers read as real letters.",
    convert: m(A.ethiopic),
  },
  { id: "fantasy-strike", name: "Fantasy Strike", category: "fantasy", convert: m(A.fantasyStrike) },
  {
    id: "fantasy-arrows",
    name: "Fantasy Arrows",
    category: "fantasy",
    convert: (t) => wrap(mapText(t, A.squiggleHooks), "➶➶➶ ", " ➷➷➷"),
  },

  // ----- Cute & emoji -----
  { id: "cute-pets", name: "Cats & Dogs", category: "cute", convert: (t) => wrap(t, "🐱🐶 ", " 🐶🐱") },
  { id: "cute-paws", name: "Paws & Rainbows", category: "cute", convert: (t) => wrap(mapText(t, A.squiggleThai), "🐾🌈 ", " 🌈🐾") },
  { id: "cute-heart-eyes", name: "Heart Eyes", category: "cute", convert: (t) => wrap(mapText(t, A.tinyCaps), "😻😍 ", " 😍😻") },
  { id: "cute-clouds", name: "Cloudy", category: "cute", convert: (t) => wrap(mapText(t, A.script), "☁︎☁︎ ", " ☁︎☁︎") },
  { id: "cute-flowers", name: "Flower Garden", category: "cute", convert: (t) => wrap(mapText(t, A.boldScript), "🌺🌹 ", " 🌹🌺") },
  {
    id: "cute-sparkle-strike",
    name: "Sparkle Strike",
    category: "cute",
    convert: (t) => wrap(combine(t, "̶"), "⚡✨ ", " ✨⚡"),
  },
  { id: "cute-bow", name: "Pink Bow", category: "cute", convert: (t) => wrap(mapText(t, A.italicSans), "🎀 ", " 🎀") },

  // ----- Attitude -----
  { id: "attitude-kaomoji", name: "Kaomoji Smile", category: "attitude", convert: (t) => wrap(t, "(๑˘︶˘๑) ", "") },
  {
    id: "attitude-badge",
    name: "Black Badge",
    category: "attitude",
    note: "Letters are uppercase only; a few may show as emoji.",
    convert: (t) => wrap(mapText(t, A.negativeSquared), "✗ ", " ✗"),
  },
  { id: "attitude-diamond", name: "Diamond Squiggle", category: "attitude", convert: (t) => wrap(mapText(t, A.squiggleArmenian), "◈ ", " ◈") },
  { id: "attitude-royal-arrows", name: "Royal Arrows", category: "attitude", convert: (t) => wrap(t, "≿≺✦≻≾ ", " ≿≺✦≻≾") },
  { id: "attitude-pixel", name: "Pixel Fade", category: "attitude", convert: (t) => wrap(mapText(t, A.boldSans), "░▒▓ ", " ▓▒░") },
  { id: "attitude-vintage", name: "Vintage Swirl", category: "attitude", convert: (t) => wrap(mapText(t, A.script), "•´¯`•. ", " .•´¯`•") },
  {
    id: "attitude-russian-arrows",
    name: "Decorated Russian",
    category: "attitude",
    convert: (t) => wrap(mapText(t, A.russianCaps), "↤↤↤ ", " ↦↦↦"),
  },
  {
    id: "attitude-dance",
    name: "Dance Party",
    category: "attitude",
    convert: (t) => wrap(mapText(t, A.greekCyrillic), "-漫~*'¨¯¨'*·舞~ ", " ~舞*'¨¯¨'*·~漫-"),
  },
  {
    id: "freaky-mix",
    name: "Freaky Mix",
    category: "attitude",
    note: "Each letter uses a different style.",
    convert: freakyMix,
  },
  { id: "alternating-caps", name: "Alternating Caps", category: "attitude", convert: alternatingCaps },
];

const byId = new Map(FONT_STYLES.map((s) => [s.id, s]));

export function getStyle(id: string): FontStyle | undefined {
  return byId.get(id);
}

/** Returns styles for the given IDs in that order (unknown IDs are skipped). */
export function getStyles(ids?: readonly string[]): FontStyle[] {
  if (!ids) return [...FONT_STYLES];
  return ids.map((id) => byId.get(id)).filter((s): s is FontStyle => Boolean(s));
}

/** Convenience for server-rendered examples. */
export function convertWith(id: string, text: string): string {
  const style = byId.get(id);
  if (!style) throw new Error(`Unknown font style: ${id}`);
  return style.convert(text);
}
