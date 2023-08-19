import { test, expect } from '@playwright/experimental-ct-react';
import { StyleWrapper } from '@/utilities/StyleWrapper';
import { Footer } from './Footer';

test('Footer', async ({ mount }) => {
	const component = await mount(
		<StyleWrapper>
			<Footer />
		</StyleWrapper>,
	);

	expect(await component.screenshot()).toMatchSnapshot();
});
