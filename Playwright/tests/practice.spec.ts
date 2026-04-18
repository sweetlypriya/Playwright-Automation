import{test,expect, chromium} from '@playwright/test'

test.describe('Interactive Playwright Sandbox Basic', () => {
    test('TC_1 ', async ({ page }) => {
        await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-basic')

        //Single click
        await page.getByRole('button', { name: 'Single Click' }).click()

        await page.getByText('Single click completed.').isVisible()//return true or false if it is visible or not
        await page.getByText('Single click completed.').isHidden()//return true or false if it is hidden or not
        await page.getByText('Single click completed.').isChecked()//return true or false if it is checked or not
        await page.getByText('Single click completed.').isEnabled()//return true or false if it is enabled or not
        await page.getByText('Single click completed.').isDisabled()//return true or false if it is disabled or not
        await page.getByText('Single click completed.').isEditable()//return true or false if it is editable or not
       
        await expect(page.getByText('Single click completed.')).toBeVisible()//assertion to check if the element is visible or not
        await expect(page.getByText('Single click completed.')).toBeHidden()//assertion to check if the element is hidden or not
        await expect(page.getByText('Single click completed.')).toBeChecked()//assertion to check if the element is checked or not
        await expect(page.getByText('Single click completed.')).toBeEnabled()//assertion to check if the element is enabled or not
        await expect(page.getByText('Single click completed.')).toBeDisabled()//assertion to check if the element is disabled or not
        await expect(page.getByText('Single click completed.')).toBeEditable()//assertion to check if the element is editable or not
        await expect(page.getByText('Single click completed.')).toHaveText('Single click completed.')//assertion to check if the element has the expected text or not
        await expect(page.getByText('Single click completed.')).toHaveCSS('color', 'rgb(0, 128, 0)')//assertion to check if the element has the expected CSS property value or not
        await expect(page.getByText('Single click completed.')).toHaveAttribute('class', 'success-message')//assertion to check if the element has the expected attribute value or not
        await expect(page.getByText('Single click completed.')).toHaveClass(/success/)//assertion to check if the element has a class that matches the expected regex or not
        await expect(page.getByText('Single click completed.')).toHaveId('success-message')//assertion to check if the element has the expected id or not
        await expect(page.getByText('Single click completed.')).toHaveValue('')//assertion to check if the element has the expected value or not
        await expect(page).toHaveTitle('Success')//assertion to check if the element has the expected title or not
        await expect(page.getByText('Single click completed.')).toHaveCount(1)//assertion to check if the element has the expected count or not
        await expect(page.getByText('Single click completed.')).toHaveScreenshot('single-click-completed.png')//assertion to check if the element has the expected screenshot or not
        await expect(page.getByText('Single click completed.')).toBeInViewport()//assertion to check if the element is in the viewport or not
        
        page.on('dialog',async dialog=>{
            await dialog.message()//get the message of the alert
            await dialog.accept()//accept the alert
            await dialog.dismiss()//dismiss the alert
            await dialog.defaultValue()//get the default value of the prompt
            await dialog.type()//type in the prompt
            await dialog.accept('some value')//accept the prompt with some value
        })
        
       
    })

    test('TC_2 ', async () => {

        const browser=await chromium.launch()//launch the browser
        const context=await browser.newContext()//create a new browser context
        const page=await context.newPage()//create a new page in the browser context

        await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-basic')

         const [newPage]=await Promise.all([
            context.waitForEvent('page'),//wait for the new page to open
            page.getByRole('button', { name: 'Open New Tab' }).click()//click the button to open the new tab
        ])
})
})