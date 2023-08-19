import { test, expect } from '@playwright/experimental-ct-react';
import { StyleWrapper } from '@/utilities/StyleWrapper';
import { DeleteExpenseButton } from './DeleteExpenseButton';

test('DeleteExpenseButton', async ({ mount }) => {
	const component = await mount(
		<StyleWrapper>
			<DeleteExpenseButton />
		</StyleWrapper>,
	);

	expect(await component.screenshot()).toMatchSnapshot();
});
