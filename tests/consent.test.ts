import { describe, expect, it } from "vitest";
import { CONSENT_VERSION, createConsent, parseConsent, parseFavorites } from "@/lib/consent";

describe("consent parsing", () => {
  it("returns null when nothing is stored (banner must show)", () => {
    expect(parseConsent(null)).toBeNull();
    expect(parseConsent("")).toBeNull();
  });

  it("rejects malformed or outdated values", () => {
    expect(parseConsent("not json")).toBeNull();
    expect(parseConsent(JSON.stringify({ version: CONSENT_VERSION + 1, preferences: true }))).toBeNull();
    expect(parseConsent(JSON.stringify({ version: CONSENT_VERSION, preferences: "yes" }))).toBeNull();
  });

  it("round-trips a valid choice", () => {
    const state = createConsent(false, new Date("2026-01-01T00:00:00Z"));
    expect(parseConsent(JSON.stringify(state))).toEqual(state);
    expect(state.necessary).toBe(true);
    expect(state.preferences).toBe(false);
  });
});

describe("favorites parsing", () => {
  it("keeps only string ids", () => {
    expect(parseFavorites(JSON.stringify(["bold-serif", 3, null, "script"]))).toEqual(["bold-serif", "script"]);
    expect(parseFavorites("{bad")).toEqual([]);
    expect(parseFavorites(JSON.stringify({ a: 1 }))).toEqual([]);
  });
});
