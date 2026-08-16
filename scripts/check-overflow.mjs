import { chromium } from "@playwright/test";

const BASE = "http://localhost:3100";

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 375, height: 812 } });
  for (const path of ["/", "/testing-lab"]) {
    await page.goto(BASE + path, { waitUntil: "networkidle" });
    const offenders = await page.evaluate(() => {
      const results = [];
      const vw = document.documentElement.clientWidth;
      document.querySelectorAll("*").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.width > 0 && r.right > vw + 1) {
          const tag = el.tagName.toLowerCase();
          const cls = (el.className && String(el.className)) || "";
          results.push(`${tag}${cls ? "." + cls.split(" ")[0] : ""} right=${Math.round(r.right)} cls="${cls.slice(0, 80)}"`);
        }
      });
      return results.slice(0, 12);
    });
    console.log("=== " + path + " ===");
    console.log(offenders.join("\n") || "(none)");
  }
  await browser.close();
})();
