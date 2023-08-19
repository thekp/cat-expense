import { useContext } from 'react';
import { deleteCatExpense } from '@/api/catExpenseAPI';
import { CatExpenseContext } from '@/context/CatExpenseContext';
import { Button } from '@chakra-ui/react';

export const DeleteExpenseButton = () => {
	const { selectedItems, updateSelectedItems, catExpensesState, updateCatExpenses } = useContext(CatExpenseContext);

	const deleteExpenses = async () => {
		selectedItems.forEach(async (id) => {
			await deleteCatExpense(id);
		});
		const newCatExpenses = catExpensesState.filter((catExpense) => !selectedItems.includes(catExpense.id));

		updateSelectedItems([]);
		updateCatExpenses(newCatExpenses);
	};

	return (
		<Button isDisabled={selectedItems.length < 1} colorScheme="red" variant="outline" m="16px" onClick={deleteExpenses}>
			Delete Expense
		</Button>
	);
};
