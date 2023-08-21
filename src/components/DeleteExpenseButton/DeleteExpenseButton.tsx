import { useContext } from 'react';
import { Button, useToast, Text } from '@chakra-ui/react';
import { deleteCatExpense } from '@/api/catExpenseAPI';
import { CatExpenseContext } from '@/context/CatExpenseContext';
import { DeleteIcon } from '@chakra-ui/icons';

export const DeleteExpenseButton = () => {
	const { selectedItems, updateSelectedItems, catExpensesState, updateCatExpenses } = useContext(CatExpenseContext);
	const toast = useToast();

	const deleteExpenses = async () => {
		await Promise.all(selectedItems.map((id) => deleteCatExpense(id)));
		const newCatExpenses = catExpensesState.filter((catExpense) => !selectedItems.includes(catExpense.id));

		updateSelectedItems([]);
		updateCatExpenses(newCatExpenses);
		toast({
			title: 'Cat Expense(s) Deleted',
			description: "Okie! You've deleted your cat expense(s).",
			status: 'info',
			duration: 3000,
			isClosable: true,
			position: 'bottom-right',
		});
	};

	return (
		<Button isDisabled={selectedItems.length < 1} colorScheme="red" variant="outline" m="16px" onClick={deleteExpenses}>
			<DeleteIcon />
			<Text ml="4px"> Delete Expense</Text>
		</Button>
	);
};
