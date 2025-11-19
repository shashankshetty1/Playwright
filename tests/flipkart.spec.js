const { test, expect } = require('@playwright/test');

test('Automate Flipkart - Search Product', async ({ page }) => {
  // Open Flipkart
  await page.goto('https://www.flipkart.com');

  await page.waitForTimeout(3000);

  // Close the login popup if it appears
  const closeBtn = page.locator('button:has-text("✕")');
  if (await closeBtn.isVisible()) {
    await closeBtn.click();
  }

  await page.waitForTimeout(2000);

  // Search for a product  
  await page.locator('input[title="Search for Products, Brands and More"]').fill('iPhone 13');
  await page.keyboard.press('Enter');

  await page.waitForTimeout(2000);

  // Wait for results
  await page.waitForSelector('div._75nlfW'); // Product item wrapper

  // Click the first product in results
  await page.locator('div._75nlfW').first().click();

  // Flipkart opens product in a new tab → handle new page
  const pages = page.context().pages();
  const productPage = pages[pages.length - 1];

  // Wait for the product title
  await productPage.waitForSelector('span.B_NuCI');



  expect(title.length).toBeGreaterThan(0);
});
