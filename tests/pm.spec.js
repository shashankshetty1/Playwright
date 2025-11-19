import { test, expect } from '@playwright/test';

test('Login Page Automation', async ({ page }) => {

  // 1. Navigate to the login page
  await page.goto('http://100.27.152.224:3000/login');

  // 2. Enter username
  await page.fill('input[name="email"]', 'shashank.shetty@veolia.com');

  // 3. Enter password
  await page.fill('input[name="password"]', 'Valid@123');

  // 4. Click Login button
  await page.click('button[type="submit"]');

  // 5. Wait for dashboard to load
  await expect(page).toHaveURL('http://100.27.152.224:3000/taskhub/mytasks');

  // --- Dashboard Creation Flow ---

  // Click Create Dashboard
  await page.getByRole('button', { name: 'Create Dashboard' }).click();

  // Wait
  await page.waitForTimeout(3000);

  // Take screenshot
  await page.screenshot({
    path: 'test-results/dashboard-creation-ss.png',
    fullPage: true
  });

  // Fill dashboard name
  await page.getByPlaceholder('Enter dashboard name').fill('My Test Dashboard');

  // Fill project search input
  await page.getByPlaceholder('Search projects', { exact: true }).fill('P - sales');

  await page.waitForTimeout(2000);
  

});
