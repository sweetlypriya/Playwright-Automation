import { CommonPage } from "./common";
import { newClaimsSteps } from "../Constants/constants";
import { Locator, Page } from "@playwright/test";

export class ClaimsPage extends CommonPage {

    page: Page
    nextButton:Locator
    addInssureBtn:Locator
    registrantDropDown:Locator
    selectRegistrant:Locator
    registeredName:Locator

    constructor(page: Page) {
        super(page)
        this.page = page
        this.nextButton=this.page.locator('[class="rz-steps-next "]')
        this.addInssureBtn=this.page.locator('[class="rz-button rz-button-md rz-variant-filled rz-primary rz-shade-default"]')
        this.registrantDropDown=this.page.locator('[class="rz-dropdown-label rz-inputtext "]')
        this.selectRegistrant=this.page.locator('[class="rz-data-row  "]').last()
        this.registeredName=this.page.locator('[class="rz-textbox valid"]').first()
    }
    async verifyNewClaimsPage() {
        await this.clickAction(this.page.locator('[class="rz-button-box"]').first())
        await this.waitForElements(this.page.locator('[class="rz-steps-title"]').getByText('New Claim').first(), 'visible', 300000)

        for (const step of newClaimsSteps) {
            await this.assertion(this.page.locator('[class="rz-steps-title"]').getByText(step).first(), 'Visible')
        }
    }

    async clickNewClaims() {
        await this.clickAction(this.page.locator('[class="rz-button-box"]').first())
    }
    async step1NewClaimsTab(){
        await this.page.locator('[class="rz-inputtext  "]').fill('3/25/2026')
        //await this.clickAction(this.page.locator('[class="rz-state-default rz-datepicker-currentday"]'))
        await this.clickAction(this.page.getByText('Choose Initial Trigger'))
        await this.clickAction(this.page.locator('[aria-label="Ontario Human Rights"]'))
        await this.clickAction(this.nextButton)
    }
    async step2InsuredTab(){
        await this.waitForElements(this.addInssureBtn,'visible')
        await this.clickAction(this.addInssureBtn)
        await this.clickAction(this.registrantDropDown)
        await this.clickAction(this.selectRegistrant)
        const registrantName=await this.registrantDropDown.inputValue()
        console.log(registrantName);
        const registeredNameValue=this.registeredName.inputValue()
        console.log(registeredNameValue);
    
    }
    async fillAddInsuredFields(){
        
    }
}