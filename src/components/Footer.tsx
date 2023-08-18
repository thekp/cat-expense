import { Link as ChakraLink, Flex, Text, FlexProps, Container, ListIcon } from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';
import Image from 'next/image';

export const Footer = (props: FlexProps) => (
	<Flex as="footer" borderTop="1px" borderColor="lightgray" bg="white" position="fixed" width="100%" bottom={0} py={3} {...props}>
		<Flex margin="0 auto">
			<ChakraLink isExternal href="https://thekp.dev/" flexGrow={1} mr={2} display="flex" alignItems="center">
				<Image src="/khoa.png" alt="Close up of Khoa's face" width={20} height={20} style={{ paddingRight: '4px' }} />
				Created by Khoa Phan <LinkIcon pl="4px" />
			</ChakraLink>
		</Flex>
	</Flex>
);
