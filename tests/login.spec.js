import { test, expect } from '@playwright/test';

// -------------------------
// VALID LOGIN
// -------------------------
test('Login with valid username & valid password', async ({ page }) => {
  await page.goto('http://100.27.152.224:3000/login');

  await page.fill('input[name="email"]', 'shashank.shetty@veolia.com');
  await page.fill('input[name="password"]', 'Valid@123');

  await page.click('button[type="submit"]');

  await expect(page).toHaveURL('http://100.27.152.224:3000/taskhub/mytasks');
});



// -------------------------
// VALID USERNAME + INVALID PASSWORD
// -------------------------
test('Login with valid username & invalid password', async ({ page }) => {
  await page.goto('http://100.27.152.224:3000/login');

  await page.fill('input[name="email"]', 'shashank.shetty@veolia.com');
  await page.fill('input[name="password"]', 'WrongPassword');

  await page.click('button[type="submit"]');

  // Expect an error message
await expect(page.getByText('Login failed. Try again')).toBeVisible({ timeout: 5000 });
});



// -------------------------
// INVALID USERNAME + VALID PASSWORD
// -------------------------
test('Login with invalid username & valid password', async ({ page }) => {
  await page.goto('http://100.27.152.224:3000/login');

  await page.fill('input[name="email"]', 'randomuser@test.com');
  await page.fill('input[name="password"]', 'Valid@123');

  await page.click('button[type="submit"]');

await expect(page.getByText('Login failed. Try again')).toBeVisible({ timeout: 5000 });
});



// -------------------------
// INVALID USERNAME + INVALID PASSWORD
// -------------------------
test('Login with invalid username & invalid password', async ({ page }) => {
  await page.goto('http://100.27.152.224:3000/login');

  await page.fill('input[name="email"]', 'wrong@test.com');
  await page.fill('input[name="password"]', 'Wrong123');

  await page.click('button[type="submit"]');

await expect(page.getByText('Login failed. Try again')).toBeVisible({ timeout: 5000 });
});
