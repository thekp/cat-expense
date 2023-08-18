import { Button, useDisclosure } from '@chakra-ui/react';
import { AddExpenseModal } from './AddExpenseModal';

export const AddExpenseButton = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Button onClick={onOpen} colorScheme="green" variant="solid" m="16px">
				Add Expense
			</Button>
			<AddExpenseModal isOpen={isOpen} onClose={onClose} />
		</>
	);
};
