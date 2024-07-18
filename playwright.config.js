// @ts-check
import {defineConfig, devices} from '@playwright/test'

export default defineConfig({
    testDir: './tests',
    fullyParallel: false,
    reporter: 'allure-playwright',
    use: {
        headless: false,
        screenshot: 'only-on-failure',
        video: {
            mode: 'on',
            size: {width: 1920, height: 1080},
        },
        viewport: null,
        launchOptions: {
            args: ['--start-maximized'],
        },
    },

    /* Configure projects for major browsers */
    projects: [
        {
            name: 'Google Chrome',
            use: {channel: 'chrome'},
        },
        {
            name: 'Microsoft Edge',
            use: { channel: 'msedge'},
        },
        // {
        //     name: 'firefox',
        //     use: { browserName: 'firefox' },
        // },
        // {
        //     name: 'webKit',
        //     use: { browserName: 'webkit' }
        // },
    ]
})
