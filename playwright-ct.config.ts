import { defineConfig, devices } from '@playwright/experimental-ct-react';
import path from 'path';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
	testDir: './src/components',
	/* The base directory, relative to the config file, for snapshot files created with toMatchSnapshot and toHaveScreenshot. */
	snapshotPathTemplate: '{testDir}/{testFileDir}/__screenshots__/{arg}{ext}',
	/* Maximum time one test can run for. */
	timeout: 10 * 1000,
	/* Run tests in files in parallel */
	fullyParallel: true,
	/* Fail the build on CI if you accidentally left test.only in the source code. */
	forbidOnly: !!process.env.CI,
	/* Retry on CI only */
	retries: process.env.CI ? 2 : 0,
	/* Opt out of parallel tests on CI. */
	workers: process.env.CI ? 1 : undefined,
	/* Reporter to use. See https://playwright.dev/docs/test-reporters */
	reporter: [['list'], ['html', { open: 'always' }]],
	/* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
	use: {
		/* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
		trace: 'on-first-retry',

		/* Port to use for Playwright component endpoint. */
		ctPort: 3100,

		ctViteConfig: {
			resolve: {
				alias: {
					'@/api': path.resolve('./src/api'),
					'@/components': path.resolve('./src/components'),
					'@/context': path.resolve('./src/context'),
					'@/data': path.resolve('./src/data'),
					'@/pages': path.resolve('./src/pages'),
					'@/styles': path.resolve('./src/styles'),
					'@/types': path.resolve('./src/types'),
					'@/utilities': path.resolve('./src/utilities'),
				},
			},
		},
	},
	expect: {
		toHaveScreenshot: {
			maxDiffPixelRatio: 0.02,
		},
	},
	/* Configure projects for major browsers */
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},
	],
});
