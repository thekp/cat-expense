import React from 'react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { baseTheme } from '@/styles/baseTheme';

type Props = {
	children: React.ReactNode;
};

export { baseTheme, ChakraProvider, ColorModeScript };

export const StyleWrapper = ({ children }: Props) => {
	return (
		<ChakraProvider theme={baseTheme}>
			<ColorModeScript />

			{children}
		</ChakraProvider>
	);
};
