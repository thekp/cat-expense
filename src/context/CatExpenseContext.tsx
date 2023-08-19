import { createContext, useState } from 'react';

type Props = {
	children: React.ReactNode;
};

interface CatExpenseContextType {
	selectedItems: string[];
	updateSelectedItems: (ids: string[]) => void;
}

const defaultValue: CatExpenseContextType = {
	selectedItems: [],
	updateSelectedItems: () => {},
};

export const CatExpenseContext = createContext<CatExpenseContextType>(defaultValue);

export const CatExpenseProvider = ({ children }: Props) => {
	const [selectedItems, setSelectedItems] = useState<string[]>([]);

	const updateSelectedItems = (ids: string[]) => {
		setSelectedItems(ids);
	};

	console.log(selectedItems);

	return (
		<CatExpenseContext.Provider
			value={{
				selectedItems,
				updateSelectedItems,
			}}
		>
			{children}
		</CatExpenseContext.Provider>
	);
};
