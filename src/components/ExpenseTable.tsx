import { CatExpenseContext } from '@/context/CatExpenseContext';
import { CatExpense } from '@/types/CatExpense';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Checkbox } from '@chakra-ui/react';
import { useContext } from 'react';

type Props = {
	catExpenses: CatExpense[];
};

const tableHeaderStyles = {
	color: 'purple',
	fontSize: 'large',
	_dark: {
		color: 'pink',
	},
};

export const ExpenseTable = ({ catExpenses }: Props) => {
	const { selectedItems, updateSelectedItems } = useContext(CatExpenseContext);

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
							Amount
						</Th>
					</Tr>
				</Thead>
				<Tbody>
					{catExpenses.map((catExpense) => (
						<Tr key={catExpense.id}>
							<Td>
								<Checkbox value={catExpense.id} onChange={handleCheckboxChange} />
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
