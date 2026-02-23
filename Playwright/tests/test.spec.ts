import{test,expect} from '@playwright/test'

test('login validation',async({page})=>{
    await page.goto('https://automationexercise.com/')
})