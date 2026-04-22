import { test as base, Page, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { RolesPage } from '../pages/rolesPage';
import { AddRoleDialog } from '../pages/addRoleDialog';

/**
 * Define custom fixture type
 */
type AuthFixtures = {
  authenticatedPage: Page;
  loginPage: LoginPage;
  rolesPage: RolesPage;
  addRoleDialog: AddRoleDialog;
};

/**
 * Create custom test with auth fixture
 */
export const test = base.extend<AuthFixtures>({
  authenticatedPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToLogin();
    await loginPage.login();
    
    // Pass the authenticated page to the test
    await use(page);
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  rolesPage: async ({ authenticatedPage }, use) => {
    const rolesPage = new RolesPage(authenticatedPage);
    await use(rolesPage);
  },

  addRoleDialog: async ({ authenticatedPage }, use) => {
    const addRoleDialog = new AddRoleDialog(authenticatedPage);
    await use(addRoleDialog);
  },
});

export { expect };
