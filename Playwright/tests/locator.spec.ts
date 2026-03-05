import { test, expect, Page } from '@playwright/test'

test.describe('Locator Targets', () => {

    test('TC1_Easy locatores - getByRole , getByPlaceholder', async ({ page }) => {
        await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/locator-arena#locator-arena')
        await page.getByRole('button', { name: 'Start Practice' }).click()
        await page.getByRole('link', { name: 'Read Locator Guide' }).click()
        await page.getByPlaceholder('Type learner name').fill('priya')
        await page.getByRole('textbox', { name: 'Search by batch' }).fill('feb')
        const practiceSectionLogo = page.getByAltText('Practice section logo')
        await expect(practiceSectionLogo).toBeVisible()
        await page.locator('[data-testid="easy-status"]').click()
    })

    test('TC_2 Medium Locators - locator , getAltText', async ({ page }) => {
        await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/locator-arena#locator-arena')
        await page.locator('#medium-browser').selectOption('Firefox')
        await page.getByPlaceholder('Write your scenario steps here').fill('1)Learn Javascript2)learn Typescript3)learn Playwright')
        await page.getByRole('button', { name: 'Refresh Scenarios' }).click()
        const tcsLogo = page.getByAltText('Partner company mark')
        await expect(tcsLogo).toBeVisible()
        const workFlowList = await page.locator('[data-testid="medium-topic-list"]').allInnerTexts()
        const html = await page.locator('[data-testid="medium-topic-list"]').innerHTML()
        console.log("workFlowList==>" + workFlowList);
        console.log("html==>" + html)
        const mediumCardText = await page.locator('[data-testid="medium-card"]').innerText()
        console.log("mediumCardText==>" + mediumCardText);

    })

    test('TC_3 Hard Locators - Chaining , getBytext', async ({ page }) => {
        
        await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/locator-arena#locator-arena')
        
        const tableScenario = page.locator('table').getByText('Scenario').textContent()
        console.log("scenario1: " + tableScenario);
        const scenarioValue = await page.locator('table').getByText('Payment Retry').textContent()
        console.log("scenarioValue: " + scenarioValue);
        await page.locator('tr').getByRole('button').click()

        await page.getByRole('button', { name: 'Approve Candidate' }).click()

        await page.getByPlaceholder('Enter secure token').fill('abc1234')

        await expect(page.getByText('Panel status: Active')).toBeVisible()

        await expect(page.getByAltText('Hard challenge visual')).toBeVisible()

        await page.getByRole('button', { name: 'Launch Final Check' }).click()

    })

    test('TC_4 Filter Locator Challenges',async({page})=>{

        await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/locator-arena#locator-arena')

        await page.locator('button').filter({ hasText: 'Open Challenge' }).nth(1).click()
        await expect(page.getByText('Filter open clicked: Medium - Table Actions')).toBeVisible()

    })

        test('TC_5 Chaining Locator Challenges',async({page})=>{

        await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/locator-arena#locator-arena')

        await page.locator('[data-testid="chain-card-grid"]').locator('button').filter({hasText:'Run Scenario'}).nth(2).click()

        await expect(page.getByText('Chaining run clicked: Grid Module')).toBeVisible()

    })


})
