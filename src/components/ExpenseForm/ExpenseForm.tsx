import { Formik, Field, Form } from 'formik';
import { Button, FormControl, FormLabel, FormErrorMessage, Input, VStack, Select } from '@chakra-ui/react';
import { CatExpense } from '@/types/CatExpense';
import { ItemCategories } from '@/types/ItemCategories';

type Props = {
	handleSubmit: (value: CatExpense) => void;
	initialValues: CatExpense;
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

const validateItemCategory = (value: string) => {
	if (!value) {
		return 'Category is required';
	}
};

const defaultFormVales = {
	id: '',
	itemName: '',
	category: '',
	itemAmount: 0,
};

export const ExpenseForm = ({ handleSubmit, initialValues = defaultFormVales }: Props) => {
	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
