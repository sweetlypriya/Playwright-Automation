import { Page } from "@playwright/test";
import { CommonPage } from "./common";

export class LoginPage extends CommonPage {

    page: Page
    userName: string
    passWord: string

    constructor(page: Page) {
        super(page)
        this.page = page
        this.userName=process.env.USER_NAME||''
        this.passWord=process.env.PASS_WORD||''
    }

    async userLogin() {
        await this.launchUrl()
        await this.page.getByRole('textbox', { name: 'Username' }).fill(this.userName)
        await this.page.getByRole('textbox', { name: 'Password' }).fill(this.passWord)
        await this.clickAction(this.page.getByRole('button', { name: 'Login' }))
    }
}