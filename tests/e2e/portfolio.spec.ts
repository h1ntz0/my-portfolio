import { test, expect } from "@playwright/test";

test.describe("Portfolio core flows", () => {
  test.skip(({ isMobile }) => isMobile, "Desktop-only flow");

  test("TC-WEB-001 Homepage loads with hero", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/QA Tester/);
    await expect(page.getByText(/I break software/)).toBeVisible();
    await expect(page.getByText(/so users don't have to/)).toBeVisible();
    // The hero should be personal, not a dashboard
    await expect(page.getByText("Test Run #QA-024")).toHaveCount(0);
  });

  test("TC-WEB-002 Navigation works", async ({ page }) => {
    await page.goto("/");
    const nav = page.getByRole("navigation", { name: "Main" });
    await nav.getByRole("link", { name: "Work" }).click();
    await expect(page).toHaveURL(/\/projects$/);
    await expect(
      page.getByRole("heading", { name: /Things I've built/ })
    ).toBeVisible();

    await nav.getByRole("link", { name: "Testing Lab" }).click();
    await expect(page).toHaveURL(/\/testing-lab$/);
    await expect(
      page.getByRole("heading", { name: /QA Testing Lab/ })
    ).toBeVisible();
  });

  test("TC-WEB-003 Work shows real GitHub repos", async ({ page }) => {
    await page.goto("/projects");
    await expect(page.getByRole("link", { name: /Ranime/ })).toBeVisible();
    // All repo links point to the real GitHub account
    const href = await page.getByRole("link", { name: /Ranime/ }).getAttribute("href");
    expect(href).toMatch(/github\.com\/h1ntz0\/Ranime/);
  });

  test("TC-WEB-004 Home shows selected work repos", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", { name: /Selected work|Karya pilihan/ })
    ).toBeVisible();
    await expect(page.getByText("Ranime").first()).toBeVisible();
  });

  test("TC-WEB-005 CV download link works", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "CV", exact: true }).click();
    await expect(page).toHaveURL(/\/resume/);
    await expect(page.getByRole("heading", { name: "CV" })).toBeVisible();
    await expect(page.getByRole("button", { name: /Download CV/ })).toBeVisible();
  });

  test("TC-WEB-006 Contact form validation", async ({ page }) => {
    await page.goto("/contact");
    await page.getByRole("button", { name: "Send Message" }).click();
    await expect(page.getByText("Name is required.")).toBeVisible();
    await expect(page.getByText("Email is required.")).toBeVisible();
  });

  test("TC-WEB-008 Testing Lab interactive tabs and simulator", async ({ page }) => {
    await page.goto("/testing-lab");
    await expect(page.getByRole("heading", { name: "QA Testing Lab" })).toBeVisible();
    await expect(page.getByText("TC-AUTH-001")).toBeVisible();

    // Switch to API Simulator tab
    await page.getByRole("button", { name: /API Simulator/i }).click();
    await expect(page.getByText("https://api.arrofi.qa/api/v1/auth/login")).toBeVisible();

    // Switch to Defect tab
    await page.getByRole("button", { name: /Defect/i }).click();
    await expect(page.getByText("BUG-RNM-001")).toBeVisible();
  });
});

test.describe("Mobile navigation", () => {
  test.skip(({ isMobile }) => !isMobile, "Mobile-only flow");

  test("TC-WEB-007 Mobile hamburger menu works", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    await page.getByRole("button", { name: "Open menu" }).click();
    await page.getByRole("link", { name: "Work", exact: true }).click();
    await expect(page).toHaveURL(/\/projects/);
  });
});
