import React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Card } from '@chakra-ui/react';
import { getAllCatExpenses } from '@/api/catExpenseAPI';
import { CatExpense } from '@/types/CatExpense';
import { Header } from '../components/Header';
import { PageContainer } from '../components/PageContainer';
import { Footer } from '../components/Footer';

type Props = {
	catExpenses: CatExpense[];
};

export const CatExpensesPage: NextPage<Props> = ({ catExpenses }: Props) => (
	<PageContainer minHeight="100vh">
		<Header />

		<Card as="main" m="16px" overflowX="auto">
			<TableContainer>
				<Table variant="striped">
					<Thead>
						<Tr>
							<Th>ID</Th>
							<Th>Name</Th>
							<Th>Category</Th>
							<Th isNumeric>Amount</Th>
						</Tr>
					</Thead>
					<Tbody>
						{catExpenses.map((catExpense) => (
							<Tr key={catExpense.id}>
								<Td>{catExpense.id}</Td>
								<Td>{catExpense.name}</Td>
								<Td>{catExpense.category}</Td>

								<Td isNumeric>{catExpense.amount}</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</TableContainer>
		</Card>
		<Footer />
	</PageContainer>
);

export default CatExpensesPage;

export const getStaticProps: GetStaticProps = async () => {
	const catExpenses = await getAllCatExpenses();

	return {
		props: {
			catExpenses: catExpenses,
		},
	};
};
