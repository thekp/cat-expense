import { createContext, useState } from 'react';
import { CatExpense } from '@/types/CatExpense';

type Props = {
	catExpenses: CatExpense[];
	children: React.ReactNode;
};

interface CatExpenseContextType {
	catExpensesState: CatExpense[];
	updateCatExpenses: (catExpense: CatExpense[]) => void;
	selectedItems: string[];
	updateSelectedItems: (ids: string[]) => void;
}

const defaultValue: CatExpenseContextType = {
	catExpensesState: [],
	updateCatExpenses: () => {},
	selectedItems: [],
	updateSelectedItems: () => {},
};

export const CatExpenseContext = createContext<CatExpenseContextType>(defaultValue);

export const CatExpenseProvider = ({ catExpenses, children }: Props) => {
	const [catExpensesState, setCatExpenses] = useState(catExpenses);
	const [selectedItems, setSelectedItems] = useState<string[]>([]);

	const updateCatExpenses = (catExpenses: CatExpense[]) => {
		setCatExpenses(catExpenses);
	};

	const updateSelectedItems = (ids: string[]) => {
		setSelectedItems(ids);
	};

	return (
		<CatExpenseContext.Provider
			value={{
				catExpensesState,
				updateCatExpenses,
				selectedItems,
				updateSelectedItems,
			}}
		>
			{children}
		</CatExpenseContext.Provider>
	);
};
