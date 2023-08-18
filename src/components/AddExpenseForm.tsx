import { Formik, Field, Form } from 'formik';
import { Button, FormControl, FormLabel, FormErrorMessage, Input, VStack, Select } from '@chakra-ui/react';

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

const validateItemAmount = (value: string) => {
	if (!value) {
		return 'Item Amount is required';
	}
};

export const AddExpenseForm = () => {
	return (
		<Formik
			initialValues={{
				itemName: '',
				category: '',
				itemAmount: '',
			}}
			onSubmit={(values) => {
				alert(JSON.stringify(values, null, 2));
			}}
		>
			{({ handleSubmit, errors, touched }) => (
				<>
					<VStack spacing={4} align="flex-start">
						<FormControl isInvalid={!!errors.itemAmount && touched.itemAmount}>
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
								<option value="Accessory">Accessory</option>
								<option value="Food">Food</option>
								<option value="Toy">Toy</option>
								<option value="Furniture">Furniture</option>
							</Field>
							<FormErrorMessage>{errors.category}</FormErrorMessage>
						</FormControl>

						<FormControl isInvalid={!!errors.itemAmount && touched.itemAmount}>
							<FormLabel htmlFor="itemAmount">Item Amount</FormLabel>
							<Field as={Input} id="itemAmount" name="itemAmount" type="text" variant="filled" validate={validateItemAmount} />
							<FormErrorMessage>{errors.itemAmount}</FormErrorMessage>
						</FormControl>

						<Button type="submit" colorScheme="purple" width="full" onClick={() => handleSubmit()}>
							Submit
						</Button>
					</VStack>
				</>
			)}
		</Formik>
	);
};
