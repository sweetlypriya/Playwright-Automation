import { Locator, Page } from "@playwright/test";
import { GenericUtils } from "../Utils/genericutils";

export class CommonPage extends GenericUtils{

    page: Page
    baseUrl:string

    constructor(page: Page) {
        super(page)
        this.page = page
        this.baseUrl=process.env.BASE_URL||''
    }

    async launchUrl() {
        await this.goToUrl(`${this.baseUrl}/Login`)
    }

    async navigateViaDashboard() {
        await this.clickAction(this.page.getByText('Administrator'))
        await this.clickAction(this.page.locator('[class="rz-navigation-item-text"]').getByText('Roles').last())
    }

    async randomNumber(){
        const randomNum=await Math.floor(Math.random()*10000)
        return randomNum
    }

    async inputValueInTextBox(locator:Locator){
        const num=await this.randomNumber()
        await this.inputText(locator,`Text_${num}`)
        const inputValue=await locator.inputValue()
        return inputValue
    }
}