import { Formik, Field, Form } from 'formik';
import { useRouter } from 'next/navigation';
import {
	Button,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Input,
	VStack,
	Select,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberDecrementStepper,
	NumberIncrementStepper,
} from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import { addCatExpense } from '@/api/catExpenseAPI';
import { CatExpense } from '@/types/CatExpense';
import { ItemCategories } from '@/types/ItemCategories';

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

const NumberStepper = () => (
	<NumberInput defaultValue={1} min={1}>
		<NumberInputField />
		<NumberInputStepper>
			<NumberIncrementStepper />
			<NumberDecrementStepper />
		</NumberInputStepper>
	</NumberInput>
);

export const AddExpenseForm = ({ closeModal }: Props) => {
	const router = useRouter();

	const handleSubmit = async (value: CatExpense) => {
		console.log(value);
		const payload = {
			...value,
			id: uuidv4(),
		};
		await addCatExpense(payload);
		closeModal();
		router.refresh();
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
							<Field as={Input} id="itemName" name="itemName" type="text" validate={validateItemName} />
							<FormErrorMessage>{errors.itemName}</FormErrorMessage>
						</FormControl>

						<FormControl isInvalid={!!errors.category && touched.category}>
							<FormLabel htmlFor="category">Category</FormLabel>
							<Field as={Select} id="category" name="category" placeholder="Select category" validate={validateItemCategory}>
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
							<Field as={NumberStepper} id="itemAmount" name="itemAmount" type="number" />
							{/* <FormErrorMessage>{errors.itemAmount}</FormErrorMessage> */}
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