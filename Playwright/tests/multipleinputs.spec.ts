import { test, expect } from '@playwright/test'

const users = [{ userName: "standard_user", passWord: "secret_sauce", expected: "Sauce Labs Backpack" },
{ userName: "problem_user", passWord: "secret_sauce", expected: "Sauce Labs Bike Light" }]

for(const user of users){
    test(`validate the login of ${user.userName}`,async({page})=>{

        await page.goto('https://www.saucedemo.com/')
        await page.getByPlaceholder('Username').fill(user.userName)
        await page.getByPlaceholder('Password').fill(user.passWord)
        await page.locator('[id="login-button"]').click()
        await expect(page.getByText(user.expected)).toBeVisible()


    })
}

