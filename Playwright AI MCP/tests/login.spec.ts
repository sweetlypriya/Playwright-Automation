import { test, expect } from '@playwright/test';

test('Verify the user can login and verify the profile icon', async ({ page }) => {
  await page.goto('https://testcms.reco-claims.ca/Login');

  await expect(page.locator('input[name="Username"]')).toBeVisible({ timeout: 20000 });
  await expect(page.locator('input[name="Password"]')).toBeVisible({ timeout: 20000 });

  await page.fill('input[name="Username"]', 'info+programmanager@xlgclaims.com');
  await page.fill('input[name="Password"]', 'Test1234!');

  await Promise.all([
    page.waitForURL('https://testcms.reco-claims.ca/', { timeout: 60000 }),
    page.click('button:has-text("Login")'),
  ]);

  const profileIcon = page.locator('img.rz-gravatar');
  await expect(profileIcon).toBeVisible({ timeout: 30000 });
});
