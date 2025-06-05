import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:5175/");
  await page.getByRole("combobox").selectOption("Venusaur");
  await expect(page.getByLabel("attack-value")).toHaveText('82');
});
