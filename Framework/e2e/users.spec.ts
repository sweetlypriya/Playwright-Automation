import { test } from '../src/Config/fixtures'
import { HomePage } from '../src/Pages/home'
import { UsersPage } from '../src/Pages/users'

test.describe('Users Page Test Cases', async () => {

    let home: HomePage
    let users: UsersPage
    test.beforeEach(async ({ pageWithLogin }) => {
        home = new HomePage(pageWithLogin)
        users = new UsersPage(pageWithLogin)
    })

    test('TC_1 Verify Users page loads', async () => {

        await home.verifyHomePage()
        await home.navigateViaDashboard('Administrator', 'Users')
        await users.verifyLoadingGetsDetached()
        await users.verifyUsersPageLoaded()
    })

    test('TC_2 Verify user creation with valid details', async () => {

        await home.verifyHomePage()
        await home.navigateViaDashboard('Administrator', 'Users')
        await users.verifyLoadingGetsDetached()
        await users.verifyUsersPageLoaded()
        await users.addNewUser()

    })

    test('TC_3 Verify validation when required fields are empty', async () => {

        await home.verifyHomePage()
        await home.navigateViaDashboard('Administrator', 'Users')
        await users.verifyLoadingGetsDetached()
        await users.verifyUsersPageLoaded()
        await users.verifyLeavingFieldsEmpty()

    })

    test('TC_4 Verify the Filter Functionality', async () => {

        await home.verifyHomePage()
        await home.navigateViaDashboard('Administrator', 'Users')
        await users.verifyLoadingGetsDetached()
        await users.verifyUsersPageLoaded()
        await users.verifyFilterFunctionality()

    })

})