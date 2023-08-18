import { Flex, Heading } from '@chakra-ui/react';
import { DarkModeSwitch } from './DarkModeSwitch';

export const Header = ({ title }: { title: string }) => (
	<Flex
		as="header"
		justifyContent="space-between"
		width="100%"
		p="16px"
		borderBottom="1px"
		borderColor="lightgray"
		bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
		bgClip="text"
	>
		<Heading fontSize="32px">{title}</Heading>
		<DarkModeSwitch />
	</Flex>
);

Header.defaultProps = {
	title: 'Cat Expense Tracker',
};
