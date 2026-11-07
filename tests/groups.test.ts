import { describe, expect, it } from "vitest";
import { FONT_STYLES } from "@/lib/styles";
import { STYLE_GROUPS, groupByStyle } from "@/lib/styles/groups";

describe("style groups", () => {
  it("assigns every style to exactly one group", () => {
    for (const style of FONT_STYLES) {
      const owners = STYLE_GROUPS.filter((g) => g.categories.includes(style.category));
      expect(owners.length, style.id).toBe(1);
    }
  });

  it("keeps every style when grouping, in original order within a group", () => {
    const items = FONT_STYLES.map((style) => ({ style }));
    const grouped = groupByStyle(items);
    expect(grouped.reduce((n, g) => n + g.items.length, 0)).toBe(FONT_STYLES.length);
    for (const g of grouped) {
      const order = g.items.map((i) => FONT_STYLES.indexOf(i.style));
      expect([...order].sort((a, b) => a - b)).toEqual(order);
    }
  });

  it("drops empty groups", () => {
    const only = FONT_STYLES.filter((s) => s.category === "script").map((style) => ({ style }));
    expect(groupByStyle(only).map((g) => g.group.key)).toEqual(["cursive"]);
  });
});
