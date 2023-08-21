import { Button, useDisclosure } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';

export const EditExpenseButton = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Button onClick={onOpen} colorScheme="pink" variant="solid" m="16px">
				<EditIcon />
			</Button>
			{/* <AddExpenseModal isOpen={isOpen} onClose={onClose} />{' '} */}
		</>
	);
};
