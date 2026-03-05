import { test, expect } from '@playwright/test'

test.describe('Interactive Playwright Sandbox Basic', () => {
    test('TC_1 Click, Double Click, Hover, Tooltip, Static Dropdown', async ({ page }) => {
        await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-basic')

        //Single click
        await page.getByRole('button', { name: 'Single Click' }).click()
        await expect(page.getByText('Single click completed.')).toBeVisible()

        //Double Click
        await page.getByRole('button', { name: 'Double Click' }).dblclick()
        await expect(page.getByText('Double click completed.')).toBeVisible()

        //hover
        await page.getByRole('button', { name: 'Hover Target' }).hover()
        await expect(page.getByText('Hover triggered successfully.')).toBeVisible()

        //tooltip - if we hover it will show some description
        await page.getByRole('button', { name: 'Tooltip' }).hover()
        await expect(page.getByTestId('hover-tooltip')).toContainText('Tooltip verified')

        //Dropdown
        await page.locator('[data-testid="static-practice-select"]').selectOption('Hard - Dynamic waits and assertions')
        await expect(page.getByTestId('static-dropdown-status')).toContainText('Static dropdown selected: Hard')

    })

    test('TC_2 Inputs, Checkbox, Radio, Dropdown', async ({ page }) => {
        await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-basic')

        //inputs
        const name = 'priya'
        const email = 'testing@gmail.com'
        await page.getByPlaceholder('Enter your name').fill(name)
        await page.getByPlaceholder('student@academy.com').fill(email)

        //dropdown
        const track = 'CI/CD + Framework'
        await page.getByTestId('track-select').selectOption(track)

        //checkbox
        const checkbox = page.getByTestId('remember-checkbox')
        await checkbox.check()
        await expect(checkbox).toBeChecked()

        //radio button
        const radioButton = page.getByTestId('mode-api-radio')
        await radioButton.check()
        await expect(radioButton).toBeChecked()

        //click button
        await page.getByRole('button', { name: 'Submit Practice Form' }).click()
        await expect(page.getByTestId('form-status')).toContainText(`${name} submitted (${email}) for ${track}.`)

    })

    test('TC_3 Dynamic Waits, Keyboard', async ({ page }) => {
        await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-basic')

        //dynamic wait
        await page.getByTestId('async-load-btn').click()
        await page.waitForTimeout(20000) //wait till 20s to load if it loads before 20s moves to next line
        await expect(page.getByText('Async result loaded successfully.')).toBeVisible({ timeout: 3000 })

        //press and enter
        const value = 'priya'
        await page.getByPlaceholder('Type and press Enter').fill(value)
        await page.getByPlaceholder('Type and press Enter').press('Enter')
        await expect(page.getByText(`Command submitted: ${value}`)).toBeVisible()

    })

    test('TC_4 Text and Attribute Extraction', async ({ page }) => {
        await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-basic')

        //textContent - extract all child texts inside the given parent tag
        const textContent = await page.getByTestId('extract-textcontent-target').textContent()
        console.log("textContent==>" + textContent);

        //innerText - extract the text which is visible in UI
        const innerTextContent = await page.getByTestId('extract-textcontent-target').innerText()
        console.log("innerTextContent==>" + innerTextContent);

        //inputValue - will extract the input value entered in the text box
        await page.getByTestId('extract-inputvalue-target').fill('playwright')
        const inputValues = await page.getByTestId('extract-inputvalue-target').inputValue()
        console.log("inputValues==>" + inputValues)

        //getAttribute - will extract the attribute value from the given attribute name
        const attrValue = await page.getByTestId('extract-attribute-target').getAttribute('title')
        console.log("attrValue==>" + attrValue);

        //allInnerText - extract all the text from childs which is visible in UI inside the parent tag
        const allInnerText = await page.getByTestId('extract-list').allInnerTexts()
        console.log('allInnerText==>' + allInnerText)

        //textContent - extract all list of child texts from the inside of given parent tag
        const allTextContent = await page.getByTestId('extract-list').allTextContents()
        console.log('allTextContent==>' + allTextContent)

        await page.getByRole('button', { name: 'Mark Read Ops Complete' }).click()
        await expect(page.getByText('Read operation checks completed.')).toBeVisible()

    })
})