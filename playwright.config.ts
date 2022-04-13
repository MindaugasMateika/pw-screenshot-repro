import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { open: 'on-failure' }]],
  use: {
    navigationTimeout: 60000,
    headless: false,
    actionTimeout: 15000,
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        baseURL: 'https://www.vinted.de',
        ...devices['Desktop Chrome'],
      },

    },
  ]
}

export default config;
