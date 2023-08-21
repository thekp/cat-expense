import { CatExpenseContext } from '@/context/CatExpenseContext';
import { CatExpense } from '@/types/CatExpense';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Checkbox } from '@chakra-ui/react';
import { useCallback, useContext, useMemo } from 'react';
import { EditExpenseButton } from '@/components/EditExpenseButton/EditExpenseButton';

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
	const itemIdWithHighestAmount = useMemo(() => getItemIdWithHighestAmount(catExpensesState), [catExpensesState]);

	const handleCheckboxChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			event.preventDefault();
			if (selectedItems.includes(event.target.value)) {
				updateSelectedItems([...selectedItems.filter((id) => id !== event.target.value)]);
				return;
			}

			updateSelectedItems([...selectedItems, event.target.value]);
		},
		[selectedItems, updateSelectedItems],
	);

	return (
		<TableContainer overflowX="auto" overflowY="auto">
			<Table data-component="cat-expense-table" variant="simple" colorScheme="purple">
				<Thead>
					<Tr>
						<Th></Th>
						<Th {...tableHeaderStyles}>Item</Th>
						<Th {...tableHeaderStyles}>Category</Th>
						<Th {...tableHeaderStyles} isNumeric>
							Amount (THB)
						</Th>
						<Th></Th>
					</Tr>
				</Thead>
				<Tbody>
					{catExpensesState.map((catExpense) => (
						<Tr
							data-component="cat-expense-row"
							key={catExpense.id}
							bg={itemIdWithHighestAmount.includes(catExpense.id) ? 'pink' : ''}
							_dark={{ bg: itemIdWithHighestAmount.includes(catExpense.id) ? 'purple' : '' }}
						>
							<Td>
								<Checkbox data-component="cat-expense-checkbox" value={catExpense.id} onChange={handleCheckboxChange} colorScheme="purple" />
							</Td>
							<Td>{catExpense.itemName}</Td>
							<Td>{catExpense.category}</Td>
							<Td isNumeric>{catExpense.itemAmount}</Td>
							<Td>
								<EditExpenseButton catExpense={catExpense} />
							</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	);
};
