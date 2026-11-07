/**
 * Glitch ("Zalgo") text: stacks random combining diacritical marks
 * (U+0300–U+036F) above, through and below each character.
 *
 * Output is deterministic for a given text and intensity (seeded PRNG), so
 * live previews do not flicker on every render and tests are repeatable.
 */
import type { ZalgoIntensity } from "@/types";
import { graphemes } from "./unicode";

function range(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

const ABOVE = [
  ...range(0x0300, 0x0315),
  0x031a, 0x033d, 0x033e, 0x033f, 0x0340, 0x0341, 0x0342, 0x0343, 0x0344, 0x0346,
  0x034a, 0x034b, 0x034c, 0x0350, 0x0351, 0x0352, 0x0357, 0x035b,
  ...range(0x0363, 0x036f),
];
const THROUGH = [0x0334, 0x0335, 0x0336, 0x0337, 0x0338, 0x0358, 0x0361, 0x035e, 0x035d];
const BELOW = [
  ...range(0x0316, 0x0319),
  ...range(0x031c, 0x0333),
  ...range(0x0339, 0x033c),
  0x0345, 0x0347, 0x0348, 0x0349, 0x034d, 0x034e, 0x0353, 0x0354, 0x0355, 0x0356,
  0x0359, 0x035a,
];

/** [min, max] marks per position for each intensity. */
const LEVELS: Record<ZalgoIntensity, { above: [number, number]; through: [number, number]; below: [number, number] }> = {
  1: { above: [0, 2], through: [0, 1], below: [0, 2] },
  2: { above: [1, 5], through: [0, 1], below: [1, 5] },
  3: { above: [4, 10], through: [1, 2], below: [4, 10] },
};

/** Small, fast seeded PRNG (mulberry32). */
function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hash(text: string): number {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function zalgo(text: string, intensity: ZalgoIntensity = 2): string {
  const level = LEVELS[intensity] ?? LEVELS[2];
  const random = mulberry32(hash(text) + intensity);
  const pick = (pool: number[], [min, max]: [number, number]) => {
    const count = min + Math.floor(random() * (max - min + 1));
    let marks = "";
    for (let i = 0; i < count; i++) {
      marks += String.fromCodePoint(pool[Math.floor(random() * pool.length)]);
    }
    return marks;
  };

  return graphemes(text)
    .map((g) =>
      /^\s+$/.test(g)
        ? g
        : g + pick(ABOVE, level.above) + pick(THROUGH, level.through) + pick(BELOW, level.below),
    )
    .join("");
}

/** Exposed for tests. */
export const ZALGO_MARKS = new Set([...ABOVE, ...THROUGH, ...BELOW]);
