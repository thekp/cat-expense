import React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import { Box } from '@chakra-ui/react';
import { getAllCatExpenses } from '@/api/catExpenseAPI';
import { CatExpense } from '@/types/CatExpense';
import { Header } from '../components/Header';
import { PageContainer } from '../components/PageContainer';
import { Footer } from '../components/Footer';
import { ExpenseTable } from '@/components/ExpenseTable';
import { CatExpenseProvider } from '@/context/CatExpenseContext';

type Props = {
	catExpenses: CatExpense[];
};

export const CatExpensesPage: NextPage<Props> = ({ catExpenses }: Props) => (
	<CatExpenseProvider>
		<PageContainer minHeight="100vh">
			<Header />
			<Box as="main" m="16px" flexGrow="1">
				<Box display="grid">
					<ExpenseTable catExpenses={catExpenses} />
				</Box>
			</Box>
			<Footer />
		</PageContainer>
	</CatExpenseProvider>
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
