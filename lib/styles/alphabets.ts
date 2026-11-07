/**
 * Character maps for every style.
 *
 * Most styles come from the Unicode "Mathematical Alphanumeric Symbols" block
 * (U+1D400–U+1D7FF). A few letters in that block are reserved holes because
 * the characters were already encoded earlier in "Letterlike Symbols"
 * (U+2100–U+214F). Those letters are listed as `exceptions`.
 *
 * Reference: https://www.unicode.org/charts/PDF/U1D400.pdf
 */
import { LOWER, UPPER, mergeMaps, offsetMap, pairMap, type CharMap } from "./unicode";

// ---------- Mathematical Alphanumeric Symbols ----------

export const boldSerif = offsetMap({ upper: 0x1d400, lower: 0x1d41a, digits: 0x1d7ce });

export const italicSerif = offsetMap({
  upper: 0x1d434,
  lower: 0x1d44e,
  exceptions: { h: "ℎ" }, // ℎ PLANCK CONSTANT
});

export const boldItalicSerif = offsetMap({ upper: 0x1d468, lower: 0x1d482 });

export const script = offsetMap({
  upper: 0x1d49c,
  lower: 0x1d4b6,
  exceptions: {
    B: "ℬ", // ℬ
    E: "ℰ", // ℰ
    F: "ℱ", // ℱ
    H: "ℋ", // ℋ
    I: "ℐ", // ℐ
    L: "ℒ", // ℒ
    M: "ℳ", // ℳ
    R: "ℛ", // ℛ
    e: "ℯ", // ℯ
    g: "ℊ", // ℊ
    o: "ℴ", // ℴ
  },
});

export const boldScript = offsetMap({ upper: 0x1d4d0, lower: 0x1d4ea });

export const fraktur = offsetMap({
  upper: 0x1d504,
  lower: 0x1d51e,
  exceptions: {
    C: "ℭ", // ℭ
    H: "ℌ", // ℌ
    I: "ℑ", // ℑ
    R: "ℜ", // ℜ
    Z: "ℨ", // ℨ
  },
});

export const doubleStruck = offsetMap({
  upper: 0x1d538,
  lower: 0x1d552,
  digits: 0x1d7d8,
  exceptions: {
    C: "ℂ", // ℂ
    H: "ℍ", // ℍ
    N: "ℕ", // ℕ
    P: "ℙ", // ℙ
    Q: "ℚ", // ℚ
    R: "ℝ", // ℝ
    Z: "ℤ", // ℤ
  },
});

export const boldFraktur = offsetMap({ upper: 0x1d56c, lower: 0x1d586 });
export const sans = offsetMap({ upper: 0x1d5a0, lower: 0x1d5ba, digits: 0x1d7e2 });
export const boldSans = offsetMap({ upper: 0x1d5d4, lower: 0x1d5ee, digits: 0x1d7ec });
export const italicSans = offsetMap({ upper: 0x1d608, lower: 0x1d622 });
export const boldItalicSans = offsetMap({ upper: 0x1d63c, lower: 0x1d656 });
export const monospace = offsetMap({ upper: 0x1d670, lower: 0x1d68a, digits: 0x1d7f6 });

/** Reserved (unassigned) code points inside the math block. Never output these. */
export const MATH_BLOCK_HOLES: readonly number[] = [
  0x1d455, 0x1d49d, 0x1d4a0, 0x1d4a1, 0x1d4a3, 0x1d4a4, 0x1d4a7, 0x1d4a8, 0x1d4ad, 0x1d4ba,
  0x1d4bc, 0x1d4c4, 0x1d506, 0x1d50b, 0x1d50c, 0x1d515, 0x1d51d, 0x1d53a, 0x1d53f, 0x1d545,
  0x1d547, 0x1d548, 0x1d549, 0x1d551,
];

// ---------- Enclosed alphanumerics ----------

const circledDigits = offsetMap({ digits: 0x2460 - 1, exceptions: { "0": "⓪" } });
// 0x2460 is ① so "1" maps to 0x2460; the generic offset starts at "0", hence -1.
export const circled = mergeMaps(offsetMap({ upper: 0x24b6, lower: 0x24d0 }), circledDigits);

export const negativeCircled = mergeMaps(
  offsetMap({ upper: 0x1f150, lower: 0x1f150 }),
  offsetMap({ digits: 0x2776 - 1, exceptions: { "0": "⓿" } }),
);

export const squared = offsetMap({ upper: 0x1f130, lower: 0x1f130 });
export const negativeSquared = offsetMap({ upper: 0x1f170, lower: 0x1f170 });

export const parenthesized = mergeMaps(
  offsetMap({ upper: 0x1f110, lower: 0x249c }),
  // ⑴–⑼ exist, but there is no parenthesized zero, so "0" is left out.
  new Map(Array.from("123456789", (d, i) => [d, String.fromCodePoint(0x2474 + i)])),
);

// ---------- Fullwidth ----------

const fullwidthEntries: [string, string][] = [[" ", "　"]];
for (let cp = 0x21; cp <= 0x7e; cp++) {
  fullwidthEntries.push([String.fromCodePoint(cp), String.fromCodePoint(cp + 0xfee0)]);
}
export const fullwidth: CharMap = new Map(fullwidthEntries);

// ---------- Small letters ----------

const smallCapsLower = pairMap(LOWER, "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ");
/** Capitals stay capitals, lowercase letters become small capitals. */
export const smallCaps = smallCapsLower;
/** Every letter becomes a small capital. */
export const tinyCaps = mergeMaps(pairMap(UPPER, "ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ"), smallCapsLower);

// "q" has no widely supported superscript form, so it is left unchanged.
export const superscript = mergeMaps(
  pairMap(UPPER, "ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾQᴿˢᵀᵁⱽᵂˣʸᶻ"),
  pairMap(LOWER, "ᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖqʳˢᵗᵘᵛʷˣʸᶻ"),
  pairMap("0123456789+-=()", "⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾"),
);

// Unicode only has subscript forms for some letters; others stay unchanged.
const subscriptLetters: Record<string, string> = {
  a: "ₐ", e: "ₑ", h: "ₕ", i: "ᵢ", j: "ⱼ", k: "ₖ", l: "ₗ", m: "ₘ", n: "ₙ",
  o: "ₒ", p: "ₚ", r: "ᵣ", s: "ₛ", t: "ₜ", u: "ᵤ", v: "ᵥ", x: "ₓ",
};
export const subscript = mergeMaps(
  new Map(Object.entries(subscriptLetters)),
  new Map(Object.entries(subscriptLetters).map(([k, v]) => [k.toUpperCase(), v])),
  pairMap("0123456789+-=()", "₀₁₂₃₄₅₆₇₈₉₊₋₌₍₎"),
);

// ---------- Flipped and mirrored ----------

export const upsideDown: CharMap = mergeMaps(
  pairMap(LOWER, "ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz"),
  pairMap(UPPER, "∀ꓭƆꓷƎℲ⅁HIſꓘ˥WNOԀΌᴚS⊥∩ΛMX⅄Z"),
  pairMap("0123456789", "0ƖᄅƐㄣϛ9ㄥ86"),
  pairMap(".,'\"?!()[]{}<>&_;", "˙',„¿¡)(][}{><⅋‾؛"),
);

export const mirrored: CharMap = mergeMaps(
  pairMap(LOWER, "ɒdɔbɘʇǫʜiꞁʞlmnoqpɿꙅƚuvwxyz"),
  pairMap(UPPER, "AᙠƆᗡƎꟻᎮHIႱ⋊⅃MИOꟼϘЯƧTUVWXYƸ"),
  pairMap("()[]{}<>/\\?", ")(][}{><\\/⸮"),
);

// ---------- Lookalike alphabets (letters borrowed from other scripts) ----------

function bothCases(letters26: string): CharMap {
  return mergeMaps(pairMap(UPPER, letters26), pairMap(LOWER, letters26));
}

export const currency = bothCases("₳฿₵ĐɆ₣₲ⱧłJ₭Ⱡ₥₦Ø₱QⱤ₴₮ɄV₩ӾɎⱫ");
export const fauxCyrillic = mergeMaps(
  pairMap(UPPER, "ДБҀↁЄFБНІЈЌLМИФРQЯЅГЦVЩЖЧZ"),
  pairMap(LOWER, "аъсↁэfБЂіјкlмиорqѓѕтцvшхЎz"),
);
export const asianStyle = bothCases("卂乃匚ᗪ乇千Ꮆ卄丨ﾌҜㄥ爪几ㄖ卩Ɋ尺丂ㄒㄩᐯ山乂ㄚ乙");
