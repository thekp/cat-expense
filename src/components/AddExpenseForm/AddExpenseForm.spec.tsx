import { test, expect } from '@playwright/experimental-ct-react';
import { StyleWrapper } from '@/utilities/StyleWrapper';
import { AddExpenseForm } from './AddExpenseForm';

test('AddExpenseForm', async ({ mount }) => {
	const component = await mount(
		<StyleWrapper>
			<AddExpenseForm
				closeModal={() => {
					console.log('closeModal');
				}}
			/>
		</StyleWrapper>,
	);

	expect(await component.screenshot()).toMatchSnapshot();
});
