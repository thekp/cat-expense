import { test, expect } from '@playwright/test';
import { exec } from 'child_process';

test.describe('Verify Delete Item', () => {
	test.beforeEach(() => {
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

		// await catExpenseCheckbox.first().click();
		// await catExpenseCheckbox.nth(1).click();
		// await deleteExpenseButton.click();
		// await expect(deleteExpenseToast).toBeVisible();
		// expect(await catExpenseTableRows.count()).toEqual(0);

		// await page.getByRole('row', { name: 'Whiskers Cat Food Food 10' }).getByRole('cell').first().click();
		// await page.getByRole('button', { name: 'Delete Expense' }).click();
		// await page.getByRole('row', { name: 'Self cleaning cat litter box Furniture 500' }).getByRole('cell').first().click();
		// await page.getByRole('row', { name: 'Diamond Cat collar Accessory 1000' }).locator('span').click();
		// await page.getByRole('button', { name: 'Delete Expense' }).click();
		// await page.locator('label').click();
		// await page.getByRole('button', { name: 'Delete Expense' }).click();
		// await page.getByText('Cat Expense(s) Deleted').click();
	});
});
