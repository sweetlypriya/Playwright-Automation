import { test } from "../src/Config/fixtures";
import { ClaimsPage } from "../src/Pages/claims";
import { HomePage } from "../src/Pages/home";

test.describe('Claims Page Testcases',async()=>{

    let home:HomePage
    let claims:ClaimsPage
    test.beforeEach(async({pageWithLogin})=>{
        home=new HomePage(pageWithLogin)
        claims=new ClaimsPage(pageWithLogin)
    })
    

    test('TC_1 Verify Claims page navigation',async()=>{
    await home.verifyHomePage()
        await home.navigateViaDashboard('Claims')
        await claims.verifyLoadingGetsDetached()
        await claims.verifyNewClaimsPage()

    })

})