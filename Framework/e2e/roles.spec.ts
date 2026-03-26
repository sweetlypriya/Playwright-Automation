import { test } from '../src/Config/fixtures'
import { HomePage } from '../src/Pages/home'
import { RolesPage } from '../src/Pages/roles'

//we import {test} from fixtures instead of @playwright/test .so we can access the custom page fixture

test.describe('Roles Page TestCases', () => {

    //the instances have been created once and it will run before each test case.it avoids repeatation of instance creation in every testcase

    let home: HomePage
    let roles: RolesPage
    test.beforeEach(async ({ pageWithLogin }) => {
        home = new HomePage(pageWithLogin)
        roles = new RolesPage(pageWithLogin)
    });
    test('TC_1 Verify Roles page loads successfully', async () => {

        await home.verifyHomePage()
        await home.navigateViaDashboard('Administrator', 'Roles')
        //await roles.verifyLoadingGetsDetached()
        await roles.verifyRolesPageLoaded()
    })

    test('TC_2 Verify user can open Add Application Role popup', async () => {

        await home.verifyHomePage()
        await home.navigateViaDashboard('Administrator', 'Roles')
        //await roles.verifyLoadingGetsDetached()
        await roles.verifyRolesPageLoaded()
        await roles.clickAddButton()
        await roles.verifyAddApplicationRole()

    })

    test('TC_3 Verify user can create a new role', async () => {

        await home.verifyHomePage()
        await home.navigateViaDashboard('Administrator', 'Roles')
        //await roles.verifyLoadingGetsDetached()
        await roles.verifyRolesPageLoaded()
        await roles.clickAddButton()
        await roles.verifyAddApplicationRole()
        await roles.createNewRoleAndVerifyByFilter()
    })

    test('TC_4 Verify role cannot be created with duplicate name', async () => {

        await home.verifyHomePage()
        await home.navigateViaDashboard('Administrator', 'Roles')
        //await roles.verifyLoadingGetsDetached()
        await roles.verifyRolesPageLoaded()
        await roles.clickAddButton()
        await roles.verifyAddApplicationRole()
        await roles.createNewDuplicateRoleAndVerify()
    })


})