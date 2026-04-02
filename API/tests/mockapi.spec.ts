import { test, expect } from '@playwright/test'

test.describe('Mock API Response and Request', async () => {
    test('Mock Api response using route.fulfill()', async ({ page }) => {
        await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/network-mocking')
        await page.route('https://playwright-mastery-academy-app.vercel.app/api/practice/network/flags', async (route) => {
            await route.fulfill({
                body: JSON.stringify({

                    source: "mocked-api",
                    delayMs: 1852,
                    flags: {
                        betaDashboard: "disabled",
                        aiInsights: true,
                        mcpAssist: "mock-mode",
                        smartRetries: false
                    },
                    message: "Mock flags loaded from endpoint."

                })
            })
        })
        await page.getByTestId('net-flags-btn').click()

    })

    test('Abort Api response',async({page})=>{
        await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/network-mocking')
        await page.route('https://playwright-mastery-academy-app.vercel.app/api/practice/network/orders',route=>route.abort())
        await page.getByTestId('net-orders-btn').click()
    })

    test('Mock headers using route.continue()',async({page})=>{
        await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/network-mocking')
        await page.route('https://playwright-mastery-academy-app.vercel.app/api/practice/network/profile',async(route)=>{
            const headers={
                ...route.request().headers(),
                "x-intercept-source":"playwright-test"
            }
            await route.continue({headers})
        })
        await page.getByTestId('net-continue-btn').click()
        await page.waitForResponse('https://playwright-mastery-academy-app.vercel.app/api/practice/network/profile')
    })
})