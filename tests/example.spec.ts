import { test, expect, Page } from '@playwright/test';

test('check carrier list against snapshot', async ({ page }, testInfo) => {
  await page.goto('/')
  await page.locator('[data-icon-name="x"]').click()
  await page.locator('[id="onetrust-accept-btn-handler"]').click()
  await page.locator('[href="/member/signup/select_type?ref_url=%2F"]').click()
  await page.locator('[data-testid="auth-select-type--register-switch"]').click()
  await page.locator('[data-testid="auth-select-type--login-email"]').click()
  await page.locator('[id="username"]').fill('pw-screenshot-repro')
  await page.locator('[id="password"]').fill('testv123')
  await page.locator('[type="submit"]').click()
  await page.waitForNavigation()
  await page.goto('/settings/shipping')
  const screenshot = await page.locator('.pile').screenshot()
  // Comment assertion if not needed, it checks against chromium-darwin snapshot. 
  // For reference, expected screenshot is in root 'carriers-list-expected.png'
  expect(screenshot).toMatchSnapshot('carriers-list.png')
})
