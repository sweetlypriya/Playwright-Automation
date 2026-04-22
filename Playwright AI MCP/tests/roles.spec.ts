import { test, expect } from '../src/fixtures/authFixture';
import { generateUniqueName } from '../src/utils/helpers';

test('Verify Roles page loads successfully', async ({ rolesPage }) => {
  // Navigate to roles page
  await rolesPage.navigateToRoles();

  // Verify roles page is loaded with heading and table
  await rolesPage.verifyRolesPageLoaded();

  // Verify at least one role is displayed in the table
  await rolesPage.verifyRolesDisplayed();
});

test('Verify user can open Add Application Role popup', async ({ rolesPage, addRoleDialog }) => {
  // Navigate to roles page
  await rolesPage.navigateToRoles();

  // Verify roles page is loaded
  await rolesPage.verifyRolesPageLoaded();

  // Click Add button to open dialog
  await rolesPage.clickAddButton();

  // Verify dialog is opened
  await addRoleDialog.verifyDialogOpen();
});

test('Verify user can create a new role', async ({ rolesPage, addRoleDialog }) => {
  // Navigate to roles page
  await rolesPage.navigateToRoles();

  // Verify roles page is loaded
  await rolesPage.verifyRolesPageLoaded();

  // Generate a unique role name
  const roleName = generateUniqueName('Test');
  console.log(`Creating role: ${roleName}`);

  // Click Add button to open dialog
  await rolesPage.clickAddButton();

  // Create the new role
  await addRoleDialog.createRole(roleName);

  // Wait for the roles page to refresh
  await rolesPage.waitForTimeout(2000);

  // Filter by the new role name
  await rolesPage.filterByName(roleName);

  // Verify the role exists in the filtered results
  const roleExists = await rolesPage.verifyRoleExists(roleName);
  expect(roleExists).toBe(true);
});