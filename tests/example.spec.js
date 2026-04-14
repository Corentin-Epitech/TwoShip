import { test, expect } from '@playwright/test';

test('game work', async ({ page }) => {
  await page.clock.install()
  await page.goto("http://localhost:3000/")
  const beforeImage = await page.screenshot()
  await page.locator("div.h").click()
  await page.clock.fastForward(30)
  const afterImage = await page.screenshot()
  expect(afterImage.toString('base64')).not.toMatch(beforeImage.toString('base64'))
})

test('Life reduce', async({ page }) => {
  await test.setTimeout(120000)
  
  await page.clock.install()
  await page.goto('http://localhost:3000/')
  
  await page.locator("h1").click()
  await page.waitForTimeout(15000)
  
  expect(await page.textContent('.h')).not.toMatch('100');
})



// test('example test', async ({ page }) => {
//   await page.goto('https://playwright.dev');
//   expect(page).toHaveScreenshot()
//   await page.locator("div.h").click()
//   await expect(page).toHaveScreenshot({ maxDiffPixels: 100 });
// });