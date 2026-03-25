import { test as baseTest, expect, Page } from '@playwright/test'
import { LoginPage } from '../Pages/login'

type LoginFixture = {
    pageWithLogin: Page
}

export const test = baseTest.extend<LoginFixture>({
    pageWithLogin: async ({ page }, use) => {
        const loginPage = new LoginPage(page)
        await loginPage.userLogin()
        await use(page)
    }
})