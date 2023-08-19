import { test, expect } from '@playwright/test';
import { exec } from 'child_process';

test.describe('Verify Add Item', () => {
	test.beforeEach(() => {
		exec('git checkout src/data/catExpense.json');
	});

	test('should add a single item', async ({ page }) => {
		await page.goto('http://localhost:3000/');

		const addExpenseButton = page.getByRole('button', { name: 'Add Expense' });
		const addItemModal = page.getByText('Add Cat Expense');
		const itemNameInput = page.getByLabel('Item Name');
		const categoryInput = page.getByLabel('Category');
		const itemAmountInput = page.getByLabel('Item Amount');
		const submitButton = page.getByRole('button', { name: 'Submit' });
		const addExpenseToast = page.getByText('Cat Expense Added');

		await expect(addExpenseButton).toBeVisible();
		await addExpenseButton.click();

		await expect(addItemModal).toBeVisible();
		await itemNameInput.fill('Test Item');
		await categoryInput.selectOption('Toy');
		await itemAmountInput.fill('900000');
		await submitButton.click();

		await expect(addExpenseToast).toBeVisible();
	});
});
