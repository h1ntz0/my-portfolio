import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

// Let entrance/reveal animations (typewriter ~2s, reveals ~0.7s) settle so
// axe audits the final, fully-visible state rather than mid-transition.
const SETTLE_MS = 2000;

const pages = [
  "/",
  "/about",
  "/projects",
  "/skills",
  "/experience",
  "/resume",
  "/contact",
];

test.describe("Accessibility (WCAG 2.2 AA)", () => {
  test.describe.configure({ mode: "serial" });

  for (const path of pages) {
    test(`axe: no serious/critical violations on ${path}`, async ({ page }) => {
      await page.goto(path, { waitUntil: "networkidle" });
      await page.waitForTimeout(SETTLE_MS);
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();

      const blocking = results.violations.filter((v) =>
        ["serious", "critical"].includes(v.impact ?? "")
      );

      expect(
        blocking.map((v) => `${v.id} (${v.impact}): ${v.help} — ${v.nodes.length} node(s)`),
        blocking.map((v) => v.help).join(" | ")
      ).toEqual([]);
    });
  }

  test("axe: light mode has no serious/critical violations on home", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    await page.evaluate(() => document.documentElement.classList.remove("dark"));
    await page.waitForTimeout(SETTLE_MS);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2aa"])
      .analyze();
    const blocking = results.violations.filter((v) =>
      ["serious", "critical"].includes(v.impact ?? "")
    );
    expect(blocking.map((v) => v.id)).toEqual([]);
  });

  test.describe("light mode", () => {
    test.describe.configure({ mode: "serial" });

    for (const path of pages) {
      test(`axe: light mode clean on ${path}`, async ({ page }) => {
        await page.goto(path, { waitUntil: "networkidle" });
        await page.evaluate(() =>
          document.documentElement.classList.remove("dark")
        );
        await page.waitForTimeout(SETTLE_MS);
        const results = await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
          .analyze();
        const blocking = results.violations.filter((v) =>
          ["serious", "critical"].includes(v.impact ?? "")
        );
        expect(
          blocking.map((v) => `${v.id}: ${v.help} — ${v.nodes.length}`),
          blocking.map((v) => v.help).join(" | ")
        ).toEqual([]);
      });
    }
  });
});
