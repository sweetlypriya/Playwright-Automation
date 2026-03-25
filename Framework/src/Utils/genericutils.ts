import { expect, Locator, Page } from "@playwright/test"

//generic utils to store inbuilt playwright functions

export class GenericUtils {
    page: Page

    constructor(page: Page) {
        this.page = page
    }

    async goToUrl(url: string) {
        await this.page.goto(url)
    }

    async clickAction(locator: Locator) {
        await locator.click()
    }

    async inputText(locator: Locator, value: string) {
        await locator.fill(value)
    }

    async checkCheckBox(locator:Locator){
        await locator.check()
    }

    async waitForElements(locator: Locator, state: string) {
        if (state = 'visible') {
            await locator.waitFor({ state: "visible" })
        } else if (state = 'detached') {
            await locator.waitFor({ state: "detached" })
        } else if (state = 'attached') {
            await locator.waitFor({ state: "attached" })
        } else if (state = 'hidden') {
            await locator.waitFor({ state: "hidden" })
        }
    }

    async assertion(locator: Locator, assert: string) {
        if (assert = 'Visible') {
            await expect(locator).toBeVisible()
        } else if (assert = 'Attached') {
            await expect(locator).toBeAttached()
        } else if (assert = 'Checked') {
            await expect(locator).toBeChecked()
        } else if (assert = 'Defined') {
            await expect(locator).toBeDefined()
        } else if (assert = 'Disabled') {
            await expect(locator).toBeDisabled()
        } else if (assert = 'Editable') {
            await expect(locator).toBeEditable()
        } else if (assert = 'Empty') {
            await expect(locator).toBeEmpty()
        } else if (assert = 'Enabled') {
            await expect(locator).toBeEnabled()
        } else if (assert = 'Falsy') {
            await expect(locator).toBeFalsy()
        } else if (assert = 'Focused') {
            await expect(locator).toBeFocused()
        } else if (assert = 'Hidden') {
            await expect(locator).toBeHidden()
        } else if (assert = 'InViewport') {
            await expect(locator).toBeInViewport()
        } else if (assert = 'Null') {
            await expect(locator).toBeNull()
        } else if (assert = 'Truthy') {
            await expect(locator).toBeTruthy()
        } else if (assert = 'Undefined') {
            await expect(locator).toBeUndefined()
        }
    }
} 