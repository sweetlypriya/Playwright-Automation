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

            //Navigation Link- when link take some time to open the url use waitForURL
            await page.getByTestId('wait-navigation-link').click()
            await page.waitForURL('https://playwright-mastery-academy-app.vercel.app/practice/popup?source=waitfornavigation')
            await expect(page.getByText('Popup Opened Successfully')).toBeVisible()

        })
        test('TC_11 Trigger API response', async ({ page }) => {
            await page.goto('https://playwright-mastery-academy-app.vercel.app/practice/sandbox-advanced')

            //Trigger API response - to wait until request sent and response received
            await page.getByTestId('wait-response-btn').click()
            await page.waitForResponse('https://playwright-mastery-academy-app.vercel.app/api/practice/waits-status')
            await expect(page.getByText('Trigger API Response Completed')).toBeVisible()

        })

    })


})