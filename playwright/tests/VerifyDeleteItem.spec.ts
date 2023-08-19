import { test, expect } from '@playwright/test';
import { exec } from 'child_process';

test.describe('Verify Delete Item', () => {
	test.afterEach(() => {
		exec('git checkout src/data/catExpense.json');
	});

	test('should delete a single item', async ({ page }) => {
		await page.goto('http://localhost:3000/');

		const catExpenseTable = page.getByTestId('cat-expense-table');
		const catExpenseTableRows = page.getByTestId('cat-expense-row');
		const catExpenseCheckbox = page.getByTestId('cat-expense-checkbox');
		const deleteExpenseButton = page.getByRole('button', { name: 'Delete Expense' });
		const deleteExpenseToast = page.getByText('Cat Expense(s) Deleted');

		await expect(catExpenseTable).toBeVisible();
		expect(await catExpenseTableRows.count()).toEqual(3);
		await catExpenseCheckbox.first().click();
		await deleteExpenseButton.click();

		await expect(deleteExpenseToast).toBeVisible();
		expect(await catExpenseTableRows.count()).toEqual(2);
	});

	test('should delete multi items', async ({ page }) => {
		await page.goto('http://localhost:3000/');

		const catExpenseTable = page.getByTestId('cat-expense-table');
		const catExpenseTableRows = page.getByTestId('cat-expense-row');
		const catExpenseCheckbox = page.getByTestId('cat-expense-checkbox');
		const deleteExpenseButton = page.getByRole('button', { name: 'Delete Expense' });
		const deleteExpenseToast = page.getByText('Cat Expense(s) Deleted');

		await expect(catExpenseTable).toBeVisible();
		expect(await catExpenseTableRows.count()).toEqual(3);
		await catExpenseCheckbox.first().click();
		await catExpenseCheckbox.nth(1).click();
		await deleteExpenseButton.click();

		await expect(deleteExpenseToast).toBeVisible();
		expect(await catExpenseTableRows.count()).toEqual(1);
	});
});
