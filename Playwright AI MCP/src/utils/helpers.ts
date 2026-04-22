/**
 * Utility functions for tests
 */

/**
 * Generate a unique role name with format Test_${randomnumber}
 */
export function generateUniqueName(prefix = 'Test'): string {
  const randomNumber = Math.floor(Math.random() * 100000000);
  return `${prefix}_${randomNumber}`;
}

/**
 * Wait for a specific amount of time
 */
export async function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
