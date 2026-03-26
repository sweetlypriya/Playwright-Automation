import { Locator, Page } from "@playwright/test";
import { CommonPage } from "./common";
import testData from "../TestData/testData.json"
import {usersHeadings} from "../Constants/constants"

const { passWord, confirmPassword } = testData

export class UsersPage extends CommonPage {
    page: Page
    usersHeading: Locator
    inputEmail: Locator
    inputPassword: Locator
    inputConfirmPassword: Locator
    aauSaveButton: Locator
    filterEmail: Locator

    constructor(page: Page) {
        super(page)
        this.page = page
        this.usersHeading = this.page.getByRole('heading', { name: 'Users' })
        this.inputEmail = this.page.locator('input[name="Email"]')
        this.inputPassword = this.page.locator('input[name="Password"]')
        this.inputConfirmPassword = this.page.locator('input[name="ConfirmPassword"]')
        this.aauSaveButton = this.page.getByRole('button', { name: 'Save' })
        this.filterEmail = this.page.locator('[class="rzi rz-grid-filter-icon "]').nth(1)
    }

    async verifyUsersPageLoaded() {
        await this.waitForElements(this.usersHeading, 'visible')
        await this.assertion(this.usersHeading, 'Visible')
        for(const heading of usersHeadings){
            await this.assertion(this.page.locator('[class="rz-column-title-content"]').getByText(heading).first(),'Visible')
        }
        await this.clickAddButton()
    }

    async addNewUser() {
        const email = await this.inputMailInTextBox(this.inputEmail)
        console.log(email);
        await this.clickAction(this.page.locator('[class="rz-dropdown valid rz-state-empty"]'))
        await this.waitForElements(this.page.locator('[class="rz-dropdown-items-wrapper"]').last(), 'visible')
        await this.clickAction(this.page.locator('[aria-label="Test_11406"]'))
        await this.inputText(this.inputPassword, passWord)
        await this.inputText(this.inputConfirmPassword, confirmPassword)
        await this.clickAction(this.page.locator('[class="rz-chkbox-box"]'))
        await this.clickAction(this.aauSaveButton)

    }

    async verifyLeavingFieldsEmpty() {
        await this.waitForElements(this.usersHeading, 'visible')
        await this.assertion(this.usersHeading, 'Visible')
        await this.clickAddButton()
        await this.clickAction(this.aauSaveButton)
        await this.waitForElements(this.page.getByText('Email is required'), 'visible')
        await this.assertion(this.page.getByText('Email is required'), 'Visible')
        await this.assertion(this.page.getByText('Password is required').first(), 'Visible')
        await this.assertion(this.page.getByText('Confirm Password is required'), 'Visible')
    }

    async verifyFilterFunctionality() {
        await this.waitForElements(this.usersHeading, 'visible')
        await this.assertion(this.usersHeading, 'Visible')
        await this.waitForElements(this.filterEmail, 'visible')
        await this.clickAction(this.filterEmail)
        await this.waitForElements(this.page.locator('[class="rz-dropdown"]').nth(15), 'visible')
        await this.inputText(this.page.locator('[class="rz-textbox rz-state-empty"]').nth(5), 'textuser_5127@gmail.com')
        await this.clickAction(this.page.getByRole('button', { name: 'Apply' }).last())
        await this.assertion(this.page.locator('[title="testuser_69144691@mail.com"]'), 'Visible')

    }
}