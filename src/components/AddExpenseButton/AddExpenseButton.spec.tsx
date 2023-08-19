import { test, expect } from '@playwright/experimental-ct-react';
import { StyleWrapper } from '@/utilities/StyleWrapper';
import { AddExpenseButton } from './AddExpenseButton';

test('AddExpenseButton', async ({ mount }) => {
	const component = await mount(
		<StyleWrapper>
			<AddExpenseButton />
		</StyleWrapper>,
	);

	expect(await component.screenshot()).toMatchSnapshot();
});
