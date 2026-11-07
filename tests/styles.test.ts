import { describe, expect, it } from "vitest";
import { FONT_STYLES, convertWith, getStyle, getStyles } from "@/lib/styles";
import { MATH_BLOCK_HOLES } from "@/lib/styles/alphabets";
import { ZALGO_MARKS, zalgo } from "@/lib/styles/zalgo";
import { graphemes, reverseText } from "@/lib/styles/unicode";

const LONE_SURROGATE = /[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/;
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789";
const PUNCT = "Hello, world! (How's it going?) #1 @me 50% & more...";
const HOLES = new Set(MATH_BLOCK_HOLES);

function codePoints(s: string): number[] {
  return Array.from(s, (c) => c.codePointAt(0)!);
}

describe("style registry", () => {
  it("has at least 50 styles with unique ids and names", () => {
    expect(FONT_STYLES.length).toBeGreaterThanOrEqual(50);
    expect(new Set(FONT_STYLES.map((s) => s.id)).size).toBe(FONT_STYLES.length);
    expect(new Set(FONT_STYLES.map((s) => s.name)).size).toBe(FONT_STYLES.length);
  });

  it("looks up styles by id and preserves requested order", () => {
    expect(getStyle("bold-serif")?.name).toBe("Bold");
    expect(getStyles(["script", "nope", "bold-serif"]).map((s) => s.id)).toEqual(["script", "bold-serif"]);
    expect(() => convertWith("nope", "x")).toThrow();
  });
});

describe.each(FONT_STYLES.map((s) => [s.id, s] as const))("style %s", (_id, style) => {
  it("converts the full alphabet, digits and punctuation without broken output", () => {
    for (const input of [ALPHABET, PUNCT]) {
      const out = style.convert(input);
      expect(out.length).toBeGreaterThan(0);
      expect(LONE_SURROGATE.test(out)).toBe(false);
      expect(out).not.toContain("�");
      for (const cp of codePoints(out)) expect(HOLES.has(cp)).toBe(false);
    }
  });

  it("changes ordinary Latin text (is not a no-op)", () => {
    expect(style.convert("Hello World")).not.toBe("Hello World");
  });

  it("keeps emoji and non-Latin scripts intact", () => {
    const samples = ["😀", "👩‍💻", "Привет", "日本語", "مرحبا", "नमस्ते"];
    for (const sample of samples) {
      const out = style.convert(`a ${sample} b`);
      // The sample's code points must survive in order (styles may add marks between).
      const kept = codePoints(sample).every((cp) => codePoints(out).includes(cp));
      expect(kept, `${style.id} lost "${sample}" -> ${out}`).toBe(true);
    }
  });

  it("returns an empty string for empty input", () => {
    expect(style.convert("")).toBe("");
  });

  it("handles long input", () => {
    const long = "The quick brown fox jumps over the lazy dog. ".repeat(20);
    const out = style.convert(long);
    expect(LONE_SURROGATE.test(out)).toBe(false);
  });
});

describe("mathematical alphanumeric styles", () => {
  it("maps to astral code points (above U+FFFF) and counts as one character each", () => {
    const out = convertWith("bold-serif", "ABC");
    expect(out).toBe("𝐀𝐁𝐂");
    expect(out.length).toBe(6); // 3 surrogate pairs
    expect(Array.from(out).length).toBe(3);
    expect(convertWith("bold-serif", "az09")).toBe("𝐚𝐳𝟎𝟗");
  });

  it("uses Letterlike Symbols for the reserved holes", () => {
    expect(convertWith("italic-serif", "h")).toBe("ℎ");
    expect(convertWith("script", "BEFHILMR")).toBe("ℬℰℱℋℐℒℳℛ");
    expect(convertWith("script", "ego")).toBe("ℯℊℴ");
    expect(convertWith("fraktur", "CHIRZ")).toBe("ℭℌℑℜℨ");
    expect(convertWith("double-struck", "CHNPQRZ")).toBe("ℂℍℕℙℚℝℤ");
  });

  it("produces the expected samples", () => {
    expect(convertWith("script", "Hello")).toBe("ℋℯ𝓁𝓁ℴ");
    expect(convertWith("fraktur", "Gothic")).toBe("𝔊𝔬𝔱𝔥𝔦𝔠");
    expect(convertWith("double-struck", "Abc 1")).toBe("𝔸𝕓𝕔 𝟙");
    expect(convertWith("monospace", "code")).toBe("𝚌𝚘𝚍𝚎");
    expect(convertWith("bold-sans", "Hi 5")).toBe("𝗛𝗶 𝟱");
  });

  it("styles accented letters while keeping the accent", () => {
    const out = convertWith("bold-serif", "é");
    expect(out).toBe("𝐞́");
  });

  it("leaves punctuation and spaces untouched", () => {
    expect(convertWith("bold-serif", "a, b!")).toBe("𝐚, 𝐛!");
  });
});

describe("enclosed and small styles", () => {
  it("circles letters and digits including zero", () => {
    expect(convertWith("circled", "Ab0 9")).toBe("Ⓐⓑ⓪ ⑨");
    expect(convertWith("negative-circled", "ab10")).toBe("🅐🅑❶⓿");
  });

  it("squares letters as uppercase", () => {
    expect(convertWith("squared", "Ab")).toBe("🄰🄱");
    expect(convertWith("negative-squared", "z")).toBe("🆉");
  });

  it("converts small caps and superscript", () => {
    expect(convertWith("small-caps", "Hello")).toBe("Hᴇʟʟᴏ");
    expect(convertWith("tiny-caps", "Hello")).toBe("ʜᴇʟʟᴏ");
    expect(convertWith("superscript", "x2+1")).toBe("ˣ²⁺¹");
    expect(convertWith("subscript", "H2O")).toBe("ₕ₂ₒ");
  });

  it("converts fullwidth including the space", () => {
    expect(convertWith("fullwidth", "Hi!")).toBe("Ｈｉ！");
    expect(convertWith("fullwidth", "a b")).toBe("ａ　ｂ");
  });
});

describe("flipped styles", () => {
  it("turns text upside down and reverses order", () => {
    expect(convertWith("upside-down", "hello")).toBe("ollǝɥ");
    expect(convertWith("upside-down", "Hi?")).toBe("¿ᴉH");
  });

  it("reverses by grapheme so emoji sequences stay whole", () => {
    expect(reverseText("ab👩‍💻")).toBe("👩‍💻ba");
    expect(convertWith("upside-down", "a👍🏽")).toBe("👍🏽ɐ");
    expect(convertWith("reversed", "éa")).toBe("aé");
  });

  it("mirrors text", () => {
    expect(convertWith("mirrored", "abc")).toBe("ɔdɒ");
    expect(convertWith("mirrored", "(R)")).toBe("(Я)");
  });
});

describe("combining line styles", () => {
  it("adds one mark after every character, including spaces", () => {
    expect(convertWith("strikethrough", "ab c")).toBe("a̶b̶ ̶c̶");
    expect(convertWith("underline", "ab")).toBe("a̲b̲");
  });

  it("does not put marks on line breaks", () => {
    expect(convertWith("strikethrough", "a\nb")).toBe("a̶\nb̶");
  });

  it("stays correct on long input", () => {
    const input = "x".repeat(300);
    const out = convertWith("double-underline", input);
    expect(Array.from(out).length).toBe(600);
    expect(out.split("̳").length - 1).toBe(300);
  });

  it("attaches marks after the whole grapheme, not inside emoji", () => {
    expect(convertWith("strikethrough", "👩‍💻")).toBe("👩‍💻̶");
  });
});

describe("glitch (zalgo)", () => {
  it("is deterministic for the same input and intensity", () => {
    expect(zalgo("glitch", 2)).toBe(zalgo("glitch", 2));
  });

  it("only adds combining marks and keeps base letters in order", () => {
    const out = zalgo("Hello world", 3);
    const base = Array.from(out).filter((c) => !ZALGO_MARKS.has(c.codePointAt(0)!));
    expect(base.join("")).toBe("Hello world");
  });

  it("adds more marks at higher intensity", () => {
    const text = "The quick brown fox jumps over the lazy dog";
    const count = (s: string) => Array.from(s).length;
    expect(count(zalgo(text, 1))).toBeLessThan(count(zalgo(text, 2)));
    expect(count(zalgo(text, 2))).toBeLessThan(count(zalgo(text, 3)));
  });

  it("does not add marks to whitespace", () => {
    const out = zalgo("a b", 3);
    expect(graphemes(out)).toContain(" ");
  });

  it("respects the intensity option through the registry", () => {
    const style = getStyle("zalgo")!;
    expect(style.convert("abc", { zalgoIntensity: 1 })).toBe(zalgo("abc", 1));
  });
});

describe("decorated styles", () => {
  it("wraps text and leaves empty input empty", () => {
    expect(convertWith("corner-brackets", "hi")).toBe("『hi』");
    expect(convertWith("royal", "  ")).toBe("  ");
  });

  it("puts separators between letters of each word", () => {
    expect(convertWith("heart-between", "love you")).toBe("l♥o♥v♥e y♥o♥u");
    expect(convertWith("spaced", "ab cd")).toBe("a b   c d");
  });
});
