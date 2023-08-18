import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

export default class Document extends NextDocument {
	render() {
		return (
			<Html>
				<Head>
					<title>Meow Meow</title>
					<meta property="og:locale" content="en_GB" />
					<meta property="og:type" content="website" />
					{/* TODO Add page specific metadata */}
				</Head>
				<body>
					<ColorModeScript />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
