import { chromium } from "@playwright/test";

const BASE = "http://localhost:3100";
const pages = [
  "/", "/about", "/projects", "/skills", "/experience", "/resume", "/contact",
];

const errors = [];
const overflow = [];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push("PAGEERROR: " + err.message));

  for (const path of pages) {
    await page.goto(BASE + path, { waitUntil: "networkidle" });
    const hasOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth + 1;
    });
    if (hasOverflow) overflow.push(path);
  }
  console.log("=== CONSOLE ERRORS ===");
  console.log([...new Set(errors)].slice(0, 20).join("\n") || "(none)");
  console.log("=== HORIZONTAL OVERFLOW ===");
  console.log(overflow.join("\n") || "(none)");

  // Mobile overflow check
  const mob = await browser.newPage({ viewport: { width: 375, height: 812 } });
  mob.on("console", (m) => { if (m.type() === "error") errors.push("MOBILE: " + m.text()); });
  const mobOverflow = [];
  for (const path of pages) {
    await mob.goto(BASE + path, { waitUntil: "networkidle" });
    const hasOverflow = await mob.evaluate(() =>
      document.documentElement.scrollWidth > document.documentElement.clientWidth + 1
    );
    if (hasOverflow) mobOverflow.push(path);
  }
  console.log("=== MOBILE (375px) OVERFLOW ===");
  console.log(mobOverflow.join("\n") || "(none)");

  await browser.close();
})();
