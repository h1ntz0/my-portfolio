import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const pages = [
  "/",
  "/about",
  "/projects",
  "/projects/ecommerce-web-application",
  "/testing-lab",
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
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2aa"])
      .analyze();
    const blocking = results.violations.filter((v) =>
      ["serious", "critical"].includes(v.impact ?? "")
    );
    expect(blocking.map((v) => v.id)).toEqual([]);
  });
});
