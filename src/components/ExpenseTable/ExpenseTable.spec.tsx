import { test, expect } from '@playwright/experimental-ct-react';
import { StyleWrapper } from '@/utilities/StyleWrapper';
import { ExpenseTable } from './ExpenseTable';
import { CatExpenseProvider } from '@/context/CatExpenseContext';

const mockCartExpenses = [
	{
		id: '1',
		itemName: 'Whiskers Cat Food',
		category: 'Food',
		itemAmount: 10,
	},
	{
		id: '2',
		itemName: 'Self cleaning cat litter box',
		category: 'Furniture',
		itemAmount: 500,
	},
	{
		id: '3',
		itemName: 'Diamond Cat collar',
		category: 'Accessory',
		itemAmount: 1000,
	},
];

test('ExpenseTable', async ({ mount }) => {
	const component = await mount(
		<CatExpenseProvider catExpenses={mockCartExpenses}>
			<StyleWrapper>
				<ExpenseTable />
			</StyleWrapper>
		</CatExpenseProvider>,
	);

	expect(await component.screenshot()).toMatchSnapshot();
});
