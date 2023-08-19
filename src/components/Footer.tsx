import { Link as ChakraLink, Flex, FlexProps } from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';
import Image from 'next/image';

export const Footer = (props: FlexProps) => {
	return (
		<Flex
			as="footer"
			borderTop="1px"
			borderColor="lightgray"
			position="sticky"
			bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
			width="100%"
			bottom={0}
			py={3}
			color="white"
			textAlign="center"
			_dark={{
				color: 'black',
			}}
			{...props}
		>
			<Flex margin="0 auto" direction="column" alignItems="center">
				<ChakraLink isExternal href="https://github.com/thekp/cat-expense" flexGrow={1} mr={2} display="flex" alignItems="center">
					See the code here <LinkIcon pl="4px" />
				</ChakraLink>
				<ChakraLink isExternal href="https://thekp.dev/" flexGrow={1} mr={2} display="flex" alignItems="center">
					<Image src="/khoa.png" alt="Close up of Khoa's face" width={20} height={20} style={{ paddingRight: '4px' }} />
					Created by Khoa Phan <LinkIcon pl="4px" />
				</ChakraLink>
			</Flex>
		</Flex>
	);
};
