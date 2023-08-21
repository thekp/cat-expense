import { Button, useDisclosure } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { EditExpenseModal } from '@/components/EditExpenseModal/EditExpenseModal';
import { CatExpense } from '@/types/CatExpense';

type Props = {
	catExpense: CatExpense;
};

export const EditExpenseButton = ({ catExpense }: Props) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Button onClick={onOpen} colorScheme="pink" variant="solid" m="16px">
				<EditIcon />
			</Button>
			<EditExpenseModal isOpen={isOpen} onClose={onClose} headerText={`Edit expense for: ${catExpense.itemName}`} catExpense={catExpense} />
		</>
	);
};
