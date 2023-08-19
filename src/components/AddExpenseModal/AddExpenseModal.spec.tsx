import { test, expect } from '@playwright/experimental-ct-react';
import { StyleWrapper } from '@/utilities/StyleWrapper';
import { AddExpenseModal } from './AddExpenseModal';

// TODO: Stabalise this test
test.skip('AddExpenseModal', async ({ mount, page }) => {
	await mount(
		<StyleWrapper>
			<AddExpenseModal
				isOpen={true}
				onClose={() => {
					console.log('onClose');
				}}
			/>
		</StyleWrapper>,
	);

	expect(await page.screenshot()).toMatchSnapshot();
});
