import { chromium } from "@playwright/test";

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const pages = ["/", "/about", "/projects", "/projects/ecommerce-web-application", "/testing-lab", "/skills", "/experience", "/resume", "/contact"];
  for (const p of pages) {
    await page.goto("http://localhost:3100" + p, { waitUntil: "networkidle" });
    await page.screenshot({ path: `shots${p === "/" ? "-home" : p.replace(/\//g, "-")}.png`, fullPage: true });
    console.log("captured", p);
  }
  await browser.close();
})();
