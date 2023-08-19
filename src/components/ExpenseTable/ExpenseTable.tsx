import { CatExpenseContext } from '@/context/CatExpenseContext';
import { CatExpense } from '@/types/CatExpense';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Checkbox, CardFooter } from '@chakra-ui/react';
import { useContext } from 'react';

const tableHeaderStyles = {
	color: 'purple',
	fontSize: 'large',
	_dark: {
		color: 'pink',
	},
};

const getItemIdWithHighestAmount = (catExpenses: CatExpense[]) => {
	const highestAmount = Math.max(...catExpenses.map((catExpense) => catExpense.itemAmount));
	const itemWithHighestAmount = catExpenses.filter((catExpense) => catExpense.itemAmount === highestAmount);
	const itemIds = itemWithHighestAmount.map((item) => item.id);

	return itemIds;
};

export const ExpenseTable = () => {
	const { selectedItems, updateSelectedItems, catExpensesState } = useContext(CatExpenseContext);
	const itemIdWithHighestAmount = getItemIdWithHighestAmount(catExpensesState);

	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		updateSelectedItems([...selectedItems, event.target.value]);
	};

	return (
		<TableContainer overflowX="auto" overflowY="auto">
			<Table variant="simple" colorScheme="purple">
				<Thead>
					<Tr>
						<Th></Th>
						<Th {...tableHeaderStyles}>Item</Th>
						<Th {...tableHeaderStyles}>Category</Th>
						<Th {...tableHeaderStyles} isNumeric>
							Amount (THB)
						</Th>
					</Tr>
				</Thead>
				<Tbody>
					{catExpensesState.map((catExpense) => (
						<Tr key={catExpense.id} bg={itemIdWithHighestAmount.includes(catExpense.id) ? 'pink' : ''}>
							<Td>
								<Checkbox value={catExpense.id} onChange={handleCheckboxChange} colorScheme="purple" />
							</Td>
							<Td>{catExpense.itemName}</Td>
							<Td>{catExpense.category}</Td>
							<Td isNumeric>{catExpense.itemAmount}</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	);
};
