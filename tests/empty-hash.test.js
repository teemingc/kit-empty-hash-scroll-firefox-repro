import { expect, test } from '@playwright/test';

test('going back from a # link restores the scroll position', async ({ page }) => {
	await page.goto('/');
	// the router sets this when it starts
	await page.waitForFunction(() => history.scrollRestoration === 'manual');

	const link = page.locator('a[href="#"]');
	await link.scrollIntoViewIfNeeded();
	const scroll_y = await page.evaluate(() => scrollY);
	expect(scroll_y).toBeGreaterThan(0);

	await link.click();
	await page.waitForURL('/#');
	await expect.poll(() => page.evaluate(() => scrollY)).toBe(0);

	await page.goBack();
	await page.waitForURL('/');
	// fails in Firefox: the page stays at the top
	await expect.poll(() => page.evaluate(() => scrollY)).toBe(scroll_y);
});
