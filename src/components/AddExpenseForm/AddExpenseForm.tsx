import { Formik, Field, Form } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import { Button, FormControl, FormLabel, FormErrorMessage, Input, VStack, Select, useToast } from '@chakra-ui/react';
import { addCatExpense } from '@/api/catExpenseAPI';
import { CatExpense } from '@/types/CatExpense';
import { ItemCategories } from '@/types/ItemCategories';
import { useContext } from 'react';
import { CatExpenseContext } from '@/context/CatExpenseContext';

type Props = {
	closeModal: () => void;
};

const validateItemName = (value: string) => {
	if (!value) {
		return 'Item Name is required';
	}
};

const validateItemCategory = (value: string) => {
	if (!value) {
		return 'Category is required';
	}
};

export const AddExpenseForm = ({ closeModal }: Props) => {
	const { catExpensesState, updateCatExpenses } = useContext(CatExpenseContext);
	const toast = useToast();

	const handleSubmit = async (value: CatExpense) => {
		const payload = {
			...value,
			id: uuidv4(),
		};
		const cartExpense = await addCatExpense(payload);
		updateCatExpenses([...catExpensesState, cartExpense]);
		closeModal();
		toast({
			title: 'Cat Expense Added',
			description: "Good job! You've added a new cat expense.",
			status: 'success',
			duration: 3000,
			isClosable: true,
			position: 'bottom-right',
		});
	};

	return (
		<Formik
			initialValues={{
				id: '',
				itemName: '',
				category: '',
				itemAmount: 0,
			}}
			onSubmit={handleSubmit}
		>
			{({ errors, touched }) => (
				<Form>
					<VStack spacing={4} align="flex-start">
						<FormControl isInvalid={!!errors.itemName && touched.itemName}>
							<FormLabel htmlFor="itemName">Item Name</FormLabel>
							<Field as={Input} id="itemName" name="itemName" type="text" variant="filled" validate={validateItemName} />
							<FormErrorMessage>{errors.itemName}</FormErrorMessage>
						</FormControl>

						<FormControl isInvalid={!!errors.category && touched.category}>
							<FormLabel htmlFor="category">Category</FormLabel>
							<Field
								as={Select}
								id="category"
								name="category"
								type="text"
								variant="filled"
								placeholder="Select category"
								validate={validateItemCategory}
							>
								{Object.keys(ItemCategories).map((category) => (
									<option key={category} value={category}>
										{category}
									</option>
								))}
							</Field>
							<FormErrorMessage>{errors.category}</FormErrorMessage>
						</FormControl>

						<FormControl>
							<FormLabel htmlFor="itemAmount">Item Amount</FormLabel>
							<Field as={Input} id="itemAmount" name="itemAmount" type="number" variant="filled" />
						</FormControl>

						<Button type="submit" colorScheme="purple" width="full">
							Submit
						</Button>
					</VStack>
				</Form>
			)}
		</Formik>
	);
};
