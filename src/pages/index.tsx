import React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import { getAllCatExpenses } from '@/api/catExpenseAPI';
import { CatExpense } from '@/types/CatExpense';
import { Layout } from '@/components/organisms/layout/Layout';

type Props = {
	catExpenses: CatExpense[];
};

export const CatExpensesPage: NextPage<Props> = ({ catExpenses }: Props) => {
	return (
		<Layout>
			<p>test</p>

			<table>
				<tr>
					<th>Item Name</th>
					<th>Category</th>
					<th>Amount</th>
				</tr>
				{catExpenses.map((catExpense) => (
					<tr>
						<td>{catExpense.name}</td>
						<td>{catExpense.category}</td>
						<td>{catExpense.amount}</td>
					</tr>
				))}
			</table>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const catExpenses = await getAllCatExpenses();

	return {
		props: {
			catExpenses: catExpenses,
		},
	};
};

export default CatExpensesPage;
