import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { deleteCatExpense } from '@/api/catExpenseAPI';
import { CatExpenseContext } from '@/context/CatExpenseContext';
import { Button } from '@chakra-ui/react';

export const DeleteExpenseButton = () => {
	const router = useRouter();
	const { selectedItems, updateSelectedItems } = useContext(CatExpenseContext);

	const deleteExpenses = async () => {
		selectedItems.forEach(async (id) => {
			await deleteCatExpense(id);
		});

		updateSelectedItems([]);
		router.refresh();
	};

	return (
		<Button isDisabled={selectedItems.length < 1} colorScheme="red" variant="outline" m="16px" onClick={deleteExpenses}>
			Delete Expense
		</Button>
	);
};
