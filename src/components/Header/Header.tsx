import { Flex, Heading, Box, Button, Center } from '@chakra-ui/react';
import { DarkModeSwitch } from '@/components/DarkModeSwitch/DarkModeSwitch';
import { AddExpenseButton } from '@/components/AddExpenseButton/AddExpenseButton';
import { DeleteExpenseButton } from '@/components/DeleteExpenseButton/DeleteExpenseButton';

export const Header = ({ title }: { title: string }) => (
	<Box
		as="header"
		bg="gray.50"
		color="black"
		position="sticky"
		_dark={{
			bg: 'gray.800',
			color: 'white',
		}}
		width="100%"
		p="16px"
		borderBottom="1px"
		borderColor="lightgray"
		top="0"
		zIndex="1"
	>
		<Flex justifyContent="space-between" bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)" bgClip="text">
			<Heading as="h1" fontSize="32px">
				{title}
			</Heading>
			<DarkModeSwitch />
		</Flex>

		<Center>
			<AddExpenseButton />
			<DeleteExpenseButton />
		</Center>
	</Box>
);

Header.defaultProps = {
	title: 'Cat Expense',
};
