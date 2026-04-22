import { Page, Locator } from '@playwright/test';

/**
 * BasePage class provides common functionality for all page objects
 */
export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /**
   * Navigate to a URL
   */
  async goto(url: string): Promise<void> {
    await this.page.goto(url);
  }

  /**
   * Wait for a locator to be visible
   */
  async waitForElement(locator: Locator, timeout = 30000): Promise<void> {
    await locator.waitFor({ state: 'visible', timeout });
  }

  /**
   * Wait for multiple seconds
   */
  async waitForTimeout(ms: number): Promise<void> {
    await this.page.waitForTimeout(ms);
  }

  /**
   * Check if element is visible
   */
  async isElementVisible(locator: Locator): Promise<boolean> {
    try {
      return await locator.isVisible({ timeout: 5000 });
    } catch {
      return false;
    }
  }

  /**
   * Fill input with value
   */
  async fillInput(locator: Locator, value: string): Promise<void> {
    await locator.fill(value);
  }

  /**
   * Click element
   */
  async clickElement(locator: Locator): Promise<void> {
    await locator.click();
  }

  /**
   * Get text from element
   */
  async getText(locator: Locator): Promise<string | null> {
    return await locator.textContent();
  }
}
