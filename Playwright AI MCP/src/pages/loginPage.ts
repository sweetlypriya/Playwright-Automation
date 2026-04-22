import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './basePage';
import { config } from '../utils/config';

/**
 * LoginPage object model
 */
export class LoginPage extends BasePage {
  // Selectors
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly profileIcon: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator('input[name="Username"]');
    this.passwordInput = page.locator('input[name="Password"]');
    this.loginButton = page.getByRole('button', { name: /Login/i });
    this.profileIcon = page.locator('img.rz-gravatar');
  }

  /**
   * Navigate to login page
   */
  async navigateToLogin(): Promise<void> {
    await this.goto(config.loginUrl);
  }

  /**
   * Verify login page elements are visible
   */
  async verifyLoginPageVisible(): Promise<void> {
    await expect(this.usernameInput).toBeVisible({ timeout: config.timeouts.long });
    await expect(this.passwordInput).toBeVisible({ timeout: config.timeouts.long });
  }

  /**
   * Perform login with username and password
   */
  async login(username: string = config.credentials.username, password: string = config.credentials.password): Promise<void> {
    await this.verifyLoginPageVisible();
    
    await this.fillInput(this.usernameInput, username);
    await this.fillInput(this.passwordInput, password);

    // Click login button and wait for navigation to complete
    await Promise.all([
      this.page.waitForURL(config.baseUrl + '/', { timeout: config.timeouts.veryLong }),
      this.clickElement(this.loginButton),
    ]);

    // Verify login success by checking for profile icon
    await expect(this.profileIcon).toBeVisible({ timeout: config.timeouts.extraLong });
  }

  /**
   * Verify user is logged in
   */
  async verifyLoggedIn(): Promise<void> {
    await expect(this.profileIcon).toBeVisible({ timeout: config.timeouts.extraLong });
  }
}
