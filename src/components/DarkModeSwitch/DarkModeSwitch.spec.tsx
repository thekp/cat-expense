import { test, expect } from '@playwright/experimental-ct-react';
import { StyleWrapper } from '@/utilities/StyleWrapper';
import { DarkModeSwitch } from './DarkModeSwitch';

test('DarkModeSwitch', async ({ mount }) => {
	const component = await mount(
		<StyleWrapper>
			<DarkModeSwitch />
		</StyleWrapper>,
	);

	expect(await component.screenshot()).toMatchSnapshot();
});
