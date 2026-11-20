import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: 'tests',
	webServer: { command: 'pnpm dev --port 4174 --strictPort', port: 4174 },
	use: { baseURL: 'http://localhost:4174' },
	projects: [
		{ name: 'firefox', use: { ...devices['Desktop Firefox'] } },
		{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }
	]
});
