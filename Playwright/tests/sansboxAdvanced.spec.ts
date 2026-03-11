import { test, expect, chromium } from '@playwright/test'

test.describe('Interactive Playwright Sandbox Advanced', () => {
    test('TC_1 Dynamic Dropdown, Hidden Dropdown and Bootstrap Dropdown', async ({ page }) => {
        await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-advanced')

        //Dynamic Dropdown Group
        const dynamicGroup = 'Actions'
        await page.getByTestId('dynamic-group-select').selectOption(dynamicGroup)
        await expect(page.getByText(`Dynamic group selected: ${dynamicGroup}. Choose a dependent option.`)).toBeVisible()

        //Dynamic Dropdown Option
        const dynamicOption = 'drag and drop verification'
        await page.getByTestId('dynamic-option-select').selectOption(dynamicOption)
        await expect(page.getByText(`Dynamic dropdown selected: ${dynamicOption}.`)).toBeVisible()

        //Hidden Dropdown 
        const hiddenOption = 'Hidden - Advanced'
        await page.getByRole('button', { name: 'Reveal Hidden Dropdown' }).click()
        await expect(page.getByTestId('hidden-dropdown-select')).toBeVisible()
        await page.getByTestId('hidden-dropdown-select').selectOption(hiddenOption)

        //Bootstrap Dropdown - Dropdown without Select tag
        const dropDownBoot = 'Fast Track Batch'
        await page.getByTestId('bootstrap-dropdown-trigger').click()
        await page.getByRole('button', { name: dropDownBoot }).click()
        await expect(page.getByTestId('bootstrap-dropdown-value')).toBeVisible()
        await expect(page.getByText(`Bootstrap dropdown selected: ${dropDownBoot}.`)).toBeVisible()

    })
    test('TC_2 Dialogs and Popup', async ({ page }) => {

        await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-advanced')

        //Alert Button
        page.on('dialog', async dialog => {
            console.log(dialog.message());
            dialog.accept()
        })
        await page.getByTestId('alert-btn').click()
        await expect(page.getByText('Alert handled.')).toBeVisible()

        //confirm Alert
        page.on('dialog', async dialog2 => {
            console.log(dialog2.message());
            dialog2.dismiss()
        })
        await page.getByTestId('confirm-btn').click()
        await expect(page.getByText('Confirm dismissed.')).toBeVisible()

        page.on('dialog', async dialog3 => {
            console.log(dialog3.message());
            dialog3.accept()
        })
        await page.getByTestId('confirm-btn').click()
        await expect(page.getByText('Confirm accepted.')).toBeVisible()

        //prompt Alert
        page.on('dialog', async dialog4 => {
            console.log(dialog4.message());
            dialog4.accept('playwright')
        })
        await page.getByTestId('prompt-btn').click()
        await expect(page.getByText('Prompt value: playwright')).toBeVisible()

    })

    test('TC_3 Handling new Tabs', async () => {

        const browser = await chromium.launch()
        const context = await browser.newContext()
        const page = await context.newPage()

        await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-advanced')

        const [newPage] = await Promise.all([
            context.waitForEvent('page'), //start waiting for new tab to open even before clicking
            page.getByTestId('popup-link').click()
        ])

        await expect(newPage.getByText('Popup Opened Successfully')).toBeVisible()

        await page.bringToFront() // goes back to main page

        await expect(page.getByText('Dialogs and Popup')).toBeVisible()

    })

    test('TC_4 Handling new tab with right click', async () => {

        const browser = await chromium.launch()
        const context = await browser.newContext()
        const page = await context.newPage()

        await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-advanced')

        await page.getByTestId('popup-right-click-link').click()
        await expect(page.getByText('Direct click blocked. Use right click -> Open link in new tab.')).toBeVisible()

        const link = await page.getByTestId('popup-right-click-link').getAttribute('href') //get the link of new window 

        const pageTwo = await context.newPage()
        await pageTwo.goto(`https://playwright-mastery-academy-app.vercel.app/${link}`)
        await expect(pageTwo.getByText('Popup Opened Successfully')).toBeVisible()

    })

    test('TC_5 Drag and Drop + File Upload', async ({ page }) => {
        await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-advanced')

        //Drag and drop
        await page.getByTestId('drag-source').dragTo(page.getByTestId('drop-target'))
        await expect(page.getByText('Drop completed successfully.')).toBeVisible()

        //Single File Upload
        await page.getByTestId('file-upload-input').setInputFiles('/Users/sweetlypriya/Documents/Playwright Automation Class/Playwright-Automation/Playwright/Uploads/file1.txt')
        await expect(page.getByText('file1.txt uploaded successfully.')).toBeVisible()

        //Multiple file Upload
        await page.getByTestId('multi-file-upload-input').setInputFiles(['/Users/sweetlypriya/Documents/Playwright Automation Class/Playwright-Automation/Playwright/Uploads/file1.txt', '/Users/sweetlypriya/Documents/Playwright Automation Class/Playwright-Automation/Playwright/Uploads/file2.txt'])
        await expect(page.getByText('2 files uploaded: file1.txt, file2.txt.')).toBeVisible()
    })

    test('TC_6 File Download', async ({ page }) => {
        await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-advanced')

        //download pdf
        const [download] = await Promise.all([
            page.waitForEvent('download'),
            page.getByTestId('download-pdf-btn').click()
        ])
        const fileName = download.suggestedFilename()
        await download.saveAs(`/Users/sweetlypriya/Documents/Playwright Automation Class/Playwright-Automation/Playwright/Downloads/${fileName}`)
        await expect(page.getByText('practice-report.pdf download started.')).toBeVisible()

        //download csv
        const [downloadCsv] = await Promise.all([
            page.waitForEvent('download'),
            page.getByTestId('download-csv-btn').click()
        ])
        const fileName2 = downloadCsv.suggestedFilename()
        await download.saveAs(`/Users/sweetlypriya/Documents/Playwright Automation Class/Playwright-Automation/Playwright/Downloads/${fileName2}`)
        await expect(page.getByText('practice-data.csv download started.')).toBeVisible()

        //download xml
        const [downloadXml] = await Promise.all([
            page.waitForEvent('download'),
            page.getByTestId('download-xml-btn').click()
        ])
        const fileName3 = downloadXml.suggestedFilename()
        await download.saveAs(`/Users/sweetlypriya/Documents/Playwright Automation Class/Playwright-Automation/Playwright/Downloads/${fileName3}`)
        await expect(page.getByText('practice-data.xml download started.')).toBeVisible()

        //download txt
        const [downloadTxt] = await Promise.all([
            page.waitForEvent('download'),
            page.getByTestId('download-txt-btn').click()
        ])
        const fileName4 = downloadTxt.suggestedFilename()
        await download.saveAs(`/Users/sweetlypriya/Documents/Playwright Automation Class/Playwright-Automation/Playwright/Downloads/${fileName4}`)
        await expect(page.getByText('practice-notes.txt download started.')).toBeVisible()

    })

    test.describe('iFrame and Shadow DOM Practice Targets', () => {
        test('TC_7 Iframe Handling', async ({ page }) => {

            await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-advanced')

            const iframe = await page.frameLocator('#practice-iframe')
            await iframe.locator('#frame-input').fill('feb2026')
            await iframe.locator('#frame-save').click()
            await expect(iframe.getByText('Result: feb2026 saved')).toBeVisible()
        })
        test('TC_8 Shadow DOM Handling', async ({ page }) => {
            await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-advanced')

            const shadow = await page.getByTestId('shadow-host')
            await shadow.locator('#shadow-input').fill('Hello')
            await shadow.locator('#shadow-save').click()
            await expect(page.getByText('Result: Hello saved')).toBeVisible()

        })
    })

    test('TC_9 Practice and Interview Dates', async ({ page }) => {
        await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-advanced')

        //to type date directly
        await page.getByTestId('practice-date-picker').type('02-11-1993')
        await expect(page.getByText('Practice Date Selected: 1993-11-02')).toBeVisible()
        //using fill
        await page.getByTestId('practice-date-picker').fill('1993-11-02')
        await expect(page.getByText('Practice Date Selected: 1993-11-02')).toBeVisible()

        //for calenders we cannot type and need select from calendar
        const date = await page.getByTestId('interview-date-picker')
        await date.evaluate((dom, val) => {
            const html = dom as HTMLInputElement
            html.value = val as string
            html.dispatchEvent(new Event('input'))
            html.dispatchEvent(new Event('change'))


        }, '1993-11-02')
        await expect(page.getByText('Interview Date Selected: 1993-11-02')).toBeVisible()

    })

    test.describe('Wait Commands', () => {

        test('TC_10 Navigation Link', async ({ page }) => {
            await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-advanced')

            //waitForURL- when link take some time to open the url use waitForURL
            await page.getByTestId('wait-navigation-link').click()
            await page.waitForURL('https://playwright-mastery-academy-app.vercel.app/practice/popup?source=waitfornavigation')
            await expect(page.getByText('Popup Opened Successfully')).toBeVisible()

        })
        test('TC_11 Trigger API response', async ({ page }) => {
            await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-advanced')

            //waitForResponse - to wait until request sent and response get received
            await page.getByTestId('wait-response-btn').click()
            await page.waitForResponse('https://playwright-mastery-academy-app.vercel.app/api/practice/waits-status') //url from network->headers->request URL
            await expect(page.getByText('Trigger API Response Completed')).toBeVisible()

        })
        test('TC_11 WaitFor and waitForSelector Commantd',async({page})=>{
            await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-advanced')

            //waitFor - will wait for the element to be visible
            //state:visible
            await page.getByTestId('wait-response-btn').click()
            await page.getByText('Trigger API Response Completed').waitFor({state:'visible'})
            await expect(page.getByText('Trigger API Response Completed')).toBeVisible()

            //state:hidden-locator hidden in DOM should not be visible
            //state:attached-locator exist in DOM
            //state:detached-locator should not exist in DOM and should not be visible

            //waitForSelector - wait till the locator is visible
            //we can use only xpath/css not playwright locators
            await page.waitForSelector('//div[contains(text(),"Trigger API Response Completed")]')
            await expect(page.getByText('Trigger API Response Completed')).toBeVisible()

        })
        test('TC_12 waitForLoadState waits',async({page})=>{
            await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-advanced')

            //load - wait for DOM ready ,images loaded
            //speed - medium
            await page.getByTestId('wait-loadstate-practice-load-btn').click()
            await page.waitForLoadState('load')
            await expect(page.getByText('Test load State: Completed')).toBeVisible()

            //domcontentloaded - check only DOM is ready
            //speed - fast
            await page.getByTestId('wait-loadstate-practice-dom-btn').click()
            await page.waitForLoadState('domcontentloaded')
            await expect(page.getByText('Test DOMContentLoaded State: Completed')).toBeVisible()

            //networkidle - checks DOM ready , images loaded ,API calls finished
            //speed - slow compared to other two
            await page.getByTestId('wait-loadstate-practice-networkidle-btn').click()
            await page.waitForLoadState('networkidle')
            await expect(page.getByText('Test Network Idle State: Completed after 5.5s')).toBeVisible()
        })

    })
    test('TC 13 Mouse Actions',async({page})=>{
        await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-advanced')

        //mouse DOWN
        await page.getByTestId('mouse-downup-target').click()
        await page.mouse.down()
        await expect(page.getByText('Mouse down detected.')).toBeVisible()

        //Mouse UP
        await page.getByTestId('mouse-downup-target').click()
        await page.mouse.up()
        await expect(page.getByText('Mouse down + up detected.')).toBeVisible()

        //ScrollIntoViewIfNeeded - it will scroll the page till the locator given is found
        await page.getByTestId('mouse-wheel-target').scrollIntoViewIfNeeded()

        //Right click on the mouse
        await page.getByTestId('mouse-rightclick-target').click({button:'right'})
        //button:left click,middle click,right click
        await expect(page.getByText('Right click detected on target.')).toBeVisible()

        //to scroll down
        await page.getByTestId('mouse-wheel-target').hover()
        await page.mouse.wheel(0,300)
        //to scroll up
        await page.mouse.wheel(0,-300)
    })
    test('TC_14 Force Actions',async({page})=>{

        await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-advanced')

        //forcrfully it will do the following actions
        //before doing the action it will checks: 
         // 1)attached to DOM
         // 2)Visible
         // 3)Stable  4)Enable 
         // 5)not covered by another element

        await page.getByTestId('popup-right-click-link').click({force:true})
        await page.getByTestId('popup-right-click-link').dblclick({force:true})
        await page.getByTestId('popup-right-click-link').hover({force:true})
        await page.getByTestId('popup-right-click-link').check({force:true})
        await page.getByTestId('popup-right-click-link').uncheck({force:true})

    })
    test('TC_15 Screenshots',async({page})=>{
        await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-advanced')

        //1)Taking the element screenshot
        await page.getByTestId('wait-result-navigation').screenshot({path:'/Users/sweetlypriya/Documents/Playwright Automation Class/Playwright-Automation/Playwright/Screenshots/element.png'})

        //2)Taking the page screenshot
        await page.screenshot({path:'/Users/sweetlypriya/Documents/Playwright Automation Class/Playwright-Automation/Playwright/Screenshots/page.png'})

        //3)Taking full page screenshot
        await page.screenshot({path:'/Users/sweetlypriya/Documents/Playwright Automation Class/Playwright-Automation/Playwright/Screenshots/fullpage.png',fullPage:true})
    })


})