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
  });

  test("TC-WEB-003 Project filter works", async ({ page }) => {
    await page.goto("/projects");
    await page.getByRole("button", { name: "Database" }).click();
    await expect(
      page.getByText("Inventory Management System")
    ).toBeVisible();
  });

  test("TC-WEB-004 Project detail opens", async ({ page }) => {
    await page.goto("/projects");
    await page.getByRole("link", { name: /E-Commerce Web Application/ }).first().click();
    await expect(page).toHaveURL(/\/projects\/ecommerce-web-application/);
    await expect(
      page.getByRole("heading", { name: "E-Commerce Web Application" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Defects Found" })
    ).toBeVisible();
  });

  test("TC-WEB-005 Testing Lab loads", async ({ page }) => {
    await page.goto("/testing-lab");
    await expect(
      page.getByRole("heading", { name: "A live window into my QA work" })
    ).toBeVisible();
    await expect(page.getByPlaceholder("Search test cases...")).toBeVisible();
  });

  test("TC-WEB-006 Bug report detail opens", async ({ page }) => {
    await page.goto("/testing-lab");
    await page.locator('[data-bug="BUG-014"]').getByRole("button", { name: "View Details" }).click();
    await expect(page.getByRole("dialog")).toBeVisible();
    await expect(page.getByText("Steps to Reproduce")).toBeVisible();
  });

  test("TC-WEB-007 Resume link works", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Resume", exact: true }).click();
    await expect(page).toHaveURL(/\/resume/);
    await expect(
      page.getByRole("heading", { name: "Resume" })
    ).toBeVisible();
  });

  test("TC-WEB-008 Contact form validation", async ({ page }) => {
    await page.goto("/contact");
    await page.getByRole("button", { name: "Send Message" }).click();
    await expect(page.getByText("Name is required.")).toBeVisible();
    await expect(page.getByText("Email is required.")).toBeVisible();
  });
});

test.describe("Mobile navigation", () => {
  test.skip(({ isMobile }) => !isMobile, "Mobile-only flow");

  test("TC-WEB-009 Mobile hamburger menu works", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    await page.getByRole("button", { name: "Open menu" }).click();
    await page.getByRole("link", { name: "Lab", exact: true }).click();
    await expect(page).toHaveURL(/\/testing-lab/);
  });
});
