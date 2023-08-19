import { test, expect } from '@playwright/experimental-ct-react';
import { StyleWrapper } from '@/utilities/StyleWrapper';
import { Header } from './Header';

test('Header', async ({ mount }) => {
	const component = await mount(
		<StyleWrapper>
			<Header />
		</StyleWrapper>,
	);

	expect(await component.screenshot()).toMatchSnapshot();
});
