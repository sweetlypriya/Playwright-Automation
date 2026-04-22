import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';
import { config } from '../utils/config';

/**
 * RolesPage object model
 */
export class RolesPage extends BasePage {
  // Selectors
  readonly pageHeading: Locator;
  readonly rolesTable: Locator;
  readonly roleRows: Locator;
  readonly addButton: Locator;
  readonly nameColumnHeader: Locator;
  readonly filterInput: Locator;
  readonly applyButton: Locator;

  constructor(page: Page) {
    super(page);
    this.pageHeading = page.getByRole('heading', { name: 'Roles' });
    this.rolesTable = page.locator('table');
    this.roleRows = page.locator('table tbody tr');
    this.addButton = page.getByRole('button', { name: /Add/ });
    this.nameColumnHeader = page.locator('th:has-text("Name")');
    this.filterInput = page.locator('input[class*="filter"]').first();
    this.applyButton = page.locator('button:has-text("Apply")').first();
  }

  /**
   * Navigate to roles page
   */
  async navigateToRoles(): Promise<void> {
    await this.goto(config.rolesUrl);
  }

  /**
   * Verify roles page is loaded
   */
  async verifyRolesPageLoaded(): Promise<void> {
    await expect(this.pageHeading).toBeVisible({ timeout: config.timeouts.extraLong });
    await expect(this.rolesTable).toBeVisible({ timeout: config.timeouts.extraLong });
  }

  /**
   * Verify at least one role is displayed in the table
   */
  async verifyRolesDisplayed(): Promise<void> {
    const firstRow = this.roleRows.first();
    await expect(firstRow).toBeVisible({ timeout: config.timeouts.extraLong });
  }

  /**
   * Click Add button to open Add Role dialog
   */
  async clickAddButton(): Promise<void> {
    await expect(this.addButton).toBeVisible({ timeout: config.timeouts.extraLong });
    await this.clickElement(this.addButton);
  }

  /**
   * Click filter icon in Name column
   */
  async clickFilterIcon(): Promise<void> {
    const filterIcon = this.nameColumnHeader.locator('button, [role="button"]').first();
    await expect(filterIcon).toBeVisible({ timeout: config.timeouts.long });
    await this.clickElement(filterIcon);
    await this.waitForTimeout(1000);
  }

  /**
   * Filter roles by name
   */
  async filterByName(roleName: string): Promise<void> {
    await this.clickFilterIcon();
    
    // Wait for filter input to be visible
    await expect(this.filterInput).toBeVisible({ timeout: config.timeouts.long });
    await this.fillInput(this.filterInput, roleName);

    // Apply filter
    const isApplyVisible = await this.isElementVisible(this.applyButton);
    if (isApplyVisible) {
      await this.clickElement(this.applyButton);
    } else {
      await this.filterInput.press('Enter');
    }

    await this.waitForTimeout(1500);
  }

  /**
   * Get all role names from table rows
   */
  async getRoleNames(): Promise<string[]> {
    const count = await this.roleRows.count();
    const roleNames: string[] = [];

    for (let i = 0; i < count; i++) {
      const cellText = await this.roleRows.nth(i).locator('td').first().textContent();
      if (cellText) {
        roleNames.push(cellText.trim());
      }
    }

    return roleNames;
  }

  /**
   * Verify role exists in the table
   */
  async verifyRoleExists(roleName: string): Promise<boolean> {
    const roleNames = await this.getRoleNames();
    return roleNames.includes(roleName);
  }

  /**
   * Get role row count
   */
  async getRoleRowCount(): Promise<number> {
    return await this.roleRows.count();
  }
}
