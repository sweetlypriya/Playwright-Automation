import { Locator, Page } from "@playwright/test";
import { GenericUtils } from "../Utils/genericutils";

export class CommonPage extends GenericUtils {

    page: Page
    baseUrl: string

    constructor(page: Page) {
        super(page)
        this.page = page
        this.baseUrl = process.env.BASE_URL || ''
    }

    async launchUrl() {
        await this.goToUrl(`${this.baseUrl}/Login`)
    }

    async navigateViaDashboard(parent: string, child?: string) {
        await this.clickAction(this.page.getByText(parent).last())
        if (child) {
            await this.clickAction(this.page.locator('[class="rz-navigation-item-text"]').getByText(child).last())
        }
    }

    async verifyLoadingGetsDetached() {
        await this.waitForElements(this.page.locator('.rzi-circle-o-notch'), 'detached')

    }

    async clickAddButton() {
        await this.clickAction(this.page.getByRole('button', { name: 'Add' }))
    }

    async randomNumber() {
        const randomNum = await Math.floor(Math.random() * 10000)
        return randomNum
    }

    async inputValueInTextBox(locator: Locator) {
        const num = await this.randomNumber()
        await this.inputText(locator, `Text_${num}`)
        const inputValue = await locator.inputValue()
        return inputValue
    }

    async inputMailInTextBox(locator: Locator) {
        const num = await this.randomNumber()
        await this.inputText(locator, `textuser_${num}@gmail.com`)
        const inputValue = await locator.inputValue()
        return inputValue
    }
}