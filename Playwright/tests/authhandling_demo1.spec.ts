import { test, expect, Browser, BrowserContext, Page, chromium } from '@playwright/test'

test.describe('Authentication handling to skip multiple logins', async () => {

    //declaring globally so than it can be accessible inside any blocks
    let browser : Browser
    let context : BrowserContext
    let page : Page

    test.beforeAll(async() => {
        //before all testcase open the url and login and store the cookies & session and close the window

        browser=await chromium.launch()
        context=await browser.newContext()
        page=await context.newPage()

        await page.goto('https://testcms.reco-claims.ca/Login')
        await page.getByRole('textbox',{name:'Username'}).fill('info+programmanager@xlgclaims.com')
        await page.getByRole('textbox',{name:'Password'}).fill('Test1234!')
        await page.getByRole('button',{name:'Login'}).click()

        await page.waitForURL('https://testcms.reco-claims.ca/')

        //storageState will store the cookies and session in the given path
        await context.storageState({path:'/Users/sweetlypriya/Documents/Playwright Automation Class/Playwright-Automation/Playwright/cookies.json'})

        await browser.close()

    })

    test.beforeEach(async()=>{
        browser=await chromium.launch()
        //injecting the stored cookies in beforeAll to the context
        //now we dont want to login each time
        context=await browser.newContext({storageState:'/Users/sweetlypriya/Documents/Playwright Automation Class/Playwright-Automation/Playwright/cookies.json'})
        page=await context.newPage()

        //it will directly get into the profile without login steps ,just by using the storage cookies and sessions from path
        await page.goto('https://testcms.reco-claims.ca/')
        
    })

    test('TC_1 Verify NewClaim button',async()=>{
        await expect(page.getByRole('button',{name:'New Claim'})).toBeVisible()
    })

    test('TC_2 Verify NewClaim button',async()=>{
        await expect(page.getByRole('button',{name:'New CD/CP Claim'})).toBeVisible()
    })

    test.afterAll((async()=>{
        await page.close()
        await context.close()
    }))

})
