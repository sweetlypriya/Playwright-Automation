import { test, expect } from '@playwright/test'

test.describe('Advanced Table Pagination and Filtering Lab', () => {

    test('Basics of table', async ({ page }) => {
        await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/table-pagination')

        await expect(page.getByRole('heading', { name: 'Filter Controls' })).toBeVisible()

        const rowCount = await page.locator('tbody tr').count()
        console.log("rowCount===>" + rowCount);

        const firstRow = await page.locator('tbody tr').first().allTextContents()
        console.log("firstRow==>" + firstRow);


        const roleColumn = await page.locator('tbody tr td:nth-child(3)').allTextContents()
        console.log("roleColumn==>" + roleColumn);

    })

    test('Extract all data from whole table', async ({ page }) => {
        test.setTimeout(20000)
        await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/table-pagination')

        await page.getByTestId('table-search-input').fill('Test Lead')
        await page.getByTestId('filter-role').selectOption('Test Lead')
        await page.getByTestId('filter-status').selectOption('All Status')
        await page.getByTestId('filter-track').selectOption('All Tracks')
        await page.getByTestId('filter-experience').selectOption('All Experience')
        await page.getByTestId('filter-sort').selectOption('Experience Desc')

        const obj: { [key: string]: string[] } = {} //every value from table will get stored in this object as key:value pairs

        await page.getByTestId('page-size-select').selectOption('100') //change rows per page to maximum so that traverse will get reduced

        const rowCount = await page.locator('tbody tr').count()
        console.log("rowCount: " + rowCount)

        const pagination = await page.getByTestId('pagination-current').textContent() || '' //Page 1 of 6

        const splitted = pagination.split(' ')
        console.log(splitted[3]) //to get number of pages to traverse

        for (let i = 1; i < Number(splitted[3]); i++) { //to navigate to each page
            for (let j = 0; j < rowCount; j++) { //for that page it will print the row one by one
                const row = await page.locator('tbody tr').nth(j).locator('td').allTextContents()
                const objKey = row[0]
                obj[objKey] = row
            }
            await page.getByTestId('pagination-next').click()
        }
        console.log(JSON.stringify(obj))




    })
})