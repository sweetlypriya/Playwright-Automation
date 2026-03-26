import { test } from "../src/Config/fixtures";
import { ClaimsPage } from "../src/Pages/claims";
import { HomePage } from "../src/Pages/home";

test.describe('Claims Page Testcases', async () => {

    let home: HomePage
    let claims: ClaimsPage
    test.beforeEach(async ({ pageWithLogin }) => {
        home = new HomePage(pageWithLogin)
        claims = new ClaimsPage(pageWithLogin)
    })


    test('TC_1 Verify Claims page navigation', async () => {
        await home.verifyHomePage()
        await home.navigateViaDashboard('Claims')
        //await claims.verifyLoadingGetsDetached()
        await claims.verifyNewClaimsPage()

    })

    test('TC_2 Verify new claim creation with valid details', async () => {
        await home.verifyHomePage()
        await home.navigateViaDashboard('Claims')
        //await claims.verifyLoadingGetsDetached()
        await claims.clickNewClaims()
        await claims.step1NewClaimsTab()
        await claims.step2InsuredTab()
        await claims.fillAddInsuredFields()   

    })


})