import { expect, Page } from "@playwright/test";
import { CommonPage } from "./common";

export class HomePage extends CommonPage {
    page: Page

    constructor(page: Page) {
        super(page)
        this.page = page
    }

    async verifyHomePage() {
        await this.waitForElements(this.page.locator('[class="rz-menu rz-profile-menu"]'), 'visible')
        await this.assertion(this.page.locator('[class="rz-menu rz-profile-menu"]'), 'Visible')
        await this.waitForElements(this.page.locator('[class="rz-button rz-button-md rz-variant-filled rz-primary rz-shade-default"]').first(),'visible')
        
    }

}