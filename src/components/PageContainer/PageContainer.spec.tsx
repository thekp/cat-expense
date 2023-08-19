import { test, expect } from '@playwright/experimental-ct-react';
import { StyleWrapper } from '@/utilities/StyleWrapper';
import { PageContainer } from './PageContainer';

test('PageContainer', async ({ mount }) => {
	const component = await mount(
		<StyleWrapper>
			<PageContainer>
				<p>Mock Children Component</p>
			</PageContainer>
		</StyleWrapper>,
	);

	expect(await component.screenshot()).toMatchSnapshot();
});
