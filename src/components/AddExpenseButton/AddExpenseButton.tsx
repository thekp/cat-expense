import { Button, Text, useDisclosure } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { AddExpenseModal } from '@/components/AddExpenseModal/AddExpenseModal';

export const AddExpenseButton = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Button onClick={onOpen} colorScheme="green" variant="solid" m="16px">
				<AddIcon />
				<Text ml="4px">Add Expense</Text>
			</Button>
			<AddExpenseModal isOpen={isOpen} onClose={onClose} headerText="Add Cat Expense" />
		</>
	);
};
