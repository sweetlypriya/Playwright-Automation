import { test } from '../src/Config/fixtures'
import { HomePage } from '../src/Pages/home'
import { RolesPage } from '../src/Pages/roles'

test.describe('Roles Page TestCases', () => {
    rolesPage: RolesPage
    test.beforeEach(async ({ pageWithLogin }) => {
        const rolesPage = new RolesPage(pageWithLogin)
    })
    test('TC_1 Verify Roles page loads successfully', async ({pageWithLogin}) => {

        const home = new HomePage(pageWithLogin)
        await home.verifyHomePage()
        await home.navigateViaDashboard()

        const roles = new RolesPage(pageWithLogin)
        await roles.verifyLoadingGetsDetached()
        await roles.verifyRolesPageLoaded()
    })

    test('TC_2 Verify user can open Add Application Role popup', async ({pageWithLogin}) => {

        const home = new HomePage(pageWithLogin)
        await home.verifyHomePage()
        await home.navigateViaDashboard()

        const roles = new RolesPage(pageWithLogin)
        await roles.verifyLoadingGetsDetached()
        await roles.verifyRolesPageLoaded()
        await roles.clickAddButton()
        await roles.verifyAddApplicationRole()

    })

    test('TC_3 Verify user can create a new role', async ({ pageWithLogin }) => {
        const home = new HomePage(pageWithLogin)
        await home.verifyHomePage()
        await home.navigateViaDashboard()

        const roles = new RolesPage(pageWithLogin)
        await roles.verifyLoadingGetsDetached()
        await roles.verifyRolesPageLoaded()
        await roles.clickAddButton()
        await roles.verifyAddApplicationRole()
        await roles.createNewRoleAndVerifyByFilter()
    })



})