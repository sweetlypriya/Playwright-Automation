import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';
import { config } from '../utils/config';

/**
 * AddRoleDialog object model
 */
export class AddRoleDialog extends BasePage {
  // Selectors
  readonly dialog: Locator;
  readonly roleNameInput: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    super(page);
    this.dialog = page.getByRole('dialog', { name: 'Add Application Role' });
    this.roleNameInput = page.locator('input[name="Name"]');
    this.saveButton = this.dialog.locator('button:has-text("Save")');
  }

  /**
   * Verify dialog is open
   */
  async verifyDialogOpen(): Promise<void> {
    await expect(this.dialog).toBeAttached({ timeout: config.timeouts.long });
  }

  /**
   * Enter role name
   */
  async enterRoleName(roleName: string): Promise<void> {
    await expect(this.roleNameInput).toBeVisible({ timeout: config.timeouts.long });
    await this.fillInput(this.roleNameInput, roleName);
  }

  /**
   * Click save button
   */
  async clickSave(): Promise<void> {
    await expect(this.saveButton).toBeVisible({ timeout: config.timeouts.long });
    await this.clickElement(this.saveButton);
  }

  /**
   * Wait for dialog to close
   */
  async waitForDialogClose(): Promise<void> {
    await expect(this.dialog).not.toBeVisible({ timeout: config.timeouts.long });
  }

  /**
   * Create a new role with the given name
   */
  async createRole(roleName: string): Promise<void> {
    await this.verifyDialogOpen();
    await this.enterRoleName(roleName);
    await this.clickSave();
    await this.waitForDialogClose();
  }
}
