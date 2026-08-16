import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  const pages = ["/", "/testing-lab"];
  for (const path of pages) {
    await page.goto("http://localhost:3100" + path, { waitUntil: "networkidle" });
    // switch to light mode
    await page.evaluate(() => {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
    });
    await page.waitForTimeout(200);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2aa"])
      .analyze();
    const blocking = results.violations.filter((v) =>
      ["serious", "critical"].includes(v.impact ?? "")
    );
    console.log(`${path} (light) serious/critical: ${blocking.length}`);
    blocking.slice(0, 6).forEach((v) => {
      console.log(`  ${v.id}: ${v.help} — ${v.nodes.length} node(s)`);
    });
  }
  await browser.close();
})();
