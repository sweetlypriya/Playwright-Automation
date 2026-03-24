import { expect, Locator, Page } from "@playwright/test";
import { CommonPage } from "./common";
import { GenericUtils } from "../Utils/genericutils";
import { log } from "node:console";

export class RolesPage extends CommonPage {

    page: Page
    aarTextBox: Locator
    aarSaveButton: Locator
    aarCancelButton: Locator

    constructor(page: Page) {
        super(page)
        this.page = page
        this.aarTextBox = this.page.locator('input[name="Name"]')
        this.aarSaveButton = this.page.getByRole('button', { name: 'Save' })
        this.aarCancelButton = this.page.getByRole('button', { name: 'Cancel' })
    }

    async verifyLoadingGetsDetached() {
        await this.waitForElements(this.page.locator('.rzi-circle-o-notch'), 'detached')

    }

    async verifyRolesPageLoaded() {
        await this.waitForElements(this.page.getByRole('heading', { name: 'Roles' }), 'visible')
        await expect(this.page.getByRole('heading', { name: 'Roles' })).toBeVisible()

    }

    async clickAddButton() {
        await this.page.getByRole('button', { name: 'Add' }).click()
    }

    async verifyAddApplicationRole() {
        await this.waitForElements(this.page.getByText('Add Application Role'), 'visible')
        await this.assertion(this.page.getByText('Add Application Role'), 'Visible')
        await this.assertion(this.aarTextBox, 'Visible')
        await this.assertion(this.aarSaveButton, 'Visible')
        await this.assertion(this.aarCancelButton, 'Visible')
    }

    async createNewRoleAndVerifyByFilter() {
        const inputValue = await this.inputValueInTextBox(this.aarTextBox)
        console.log(inputValue);
        await this.clickAction(this.aarSaveButton)
        await this.clickAction(this.page.locator('.rzi.rz-grid-filter-icon'))
        await this.page.locator('[class="rz-dropdown-label rz-inputtext "]').getByText('Contains').first().isVisible()
        await this.inputText(this.page.getByRole('textbox').nth(3), inputValue)
        await this.clickAction(this.page.getByRole('button', { name: 'Apply' }))
        await this.assertion(this.page.getByText(`${inputValue}`, { exact: true }),'Visible')
    }


}