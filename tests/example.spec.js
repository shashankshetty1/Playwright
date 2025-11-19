const { test, expect } = require('@playwright/test');

test('Login and click Create Dashboard', async ({ page }) => {

  // 1. Go to login page
  await page.goto('http://100.27.152.224:3000/login');

  // --- FIXED CREDENTIALS ---
  const email = "shashank.shetty@veolia.com";
  const password = "YourPasswordHere";  // put real password

  // --- LOCATORS ---
  const emailLocator = page.locator('input[name="email"]');
  const passwordLocator = page.locator('input[type="password"]');
  const loginButton = page.getByRole('button', { name: 'Log in' });

  // 2. Wait for page to load
  await emailLocator.waitFor({ state: 'visible', timeout: 15000 });

  // 3. Fill login fields
  await emailLocator.fill(email);
  await passwordLocator.fill(password);

  // Screenshot before login
  await page.screenshot({ path: 'test-results/before-login.png', fullPage: true });

  // 4. Click Login
  await loginButton.click();

  // 5. Wait for dashboard home page to load
  await page.waitForTimeout(4000);  // or you can wait for some element unique to dashboard

  // 6. Locate "Create Dashboard" button
  const createDashboardBtn = page.getByRole('button', { name: 'Create Dashboard' });

  // 7. Wait for the button to become visible
  await createDashboardBtn.waitFor({ state: 'visible', timeout: 50000 });

  // 8. CLICK the button
  await createDashboardBtn.click();

  // Screenshot after clicking
  await page.screenshot({ path: 'test-results/after-click.png', fullPage: true });
});
