import { test, expect } from "@playwright/test";
import type { Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

// Let entrance/reveal animations (typewriter ~2s, reveals ~0.7s) settle so
// axe audits the final, fully-visible state rather than mid-transition.
const SETTLE_MS = 2000;

async function revealAll(page: Page) {
  await page.evaluate(() => {
    document
      .querySelectorAll("[data-reveal],[data-rule]")
      .forEach((node) => node.classList.add("is-in"));
  });
  await page.waitForTimeout(900);
}

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
      // Scroll-reveal holds off-screen sections at opacity 0 and axe skips
      // hidden nodes, so settle them before scanning the document.
      await revealAll(page);
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();

      const blocking = results.violations.filter((v) =>
        ["serious", "critical"].includes(v.impact ?? "")
      );

      expect(
        blocking.map((v) => `${v.id} (${v.impact}): ${v.help} [${v.nodes.length} node(s)]`),
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
          blocking.map((v) => `${v.id}: ${v.help} [${v.nodes.length}]`),
          blocking.map((v) => v.help).join(" | ")
        ).toEqual([]);
      });
    }
  });
});
