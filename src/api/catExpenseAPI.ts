import { CatExpense } from '@/types/CatExpense';

const baseUrl = 'http://localhost:3001';

export const getAllCatExpenses = async (): Promise<CatExpense[]> => {
	const res = await fetch(`${baseUrl}/catExpenses`, { cache: 'no-store' });
	const catExpenses = await res.json();
	return catExpenses;
};

export const addCatExpense = async (catExpense: CatExpense): Promise<CatExpense> => {
	const res = await fetch(`${baseUrl}/catExpenses`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(catExpense),
	});
	const catExpenses = await res.json();
	return catExpenses;
};

export const deleteCatExpense = async (id: string): Promise<void> => {
	await fetch(`${baseUrl}/catExpenses/${id}`, {
		method: 'DELETE',
	});
};

export const editCatExpense = async (catExpense: CatExpense): Promise<CatExpense> => {
	const res = await fetch(`${baseUrl}/catExpenses/${catExpense.id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(catExpense),
	});
	const updatedCatExpense = await res.json();
	return updatedCatExpense;
};
