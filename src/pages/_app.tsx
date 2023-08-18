import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { baseTheme } from '@/styles/baseTheme';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<ChakraProvider theme={baseTheme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
};

export default MyApp;
