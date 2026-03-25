import { CommonPage } from "./common";
import { newClaimsSteps } from "../Constants/constants";

export class ClaimsPage extends CommonPage {
    async verifyNewClaimsPage() {
        await this.clickAction(this.page.locator('[class="rz-button-box"]').first())
        await this.waitForElements(this.page.locator('[class="rz-steps-title"]').getByText('New Claim').first(), 'visible')

        for (const step of newClaimsSteps) {
            await this.assertion(this.page.locator('[class="rz-steps-title"]').getByText(step).first(), 'Visible')
        }
    }
}