import { useState, useEffect, useContext } from 'react';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	Text,
	Flex,
	Highlight,
	Center,
	Skeleton,
	useToast,
} from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import { ExpenseForm } from '@/components/ExpenseForm/ExpenseForm';
import { getCatFact } from '@/api/catFactAPI';
import { CatExpenseContext } from '@/context/CatExpenseContext';
import { addCatExpense } from '@/api/catExpenseAPI';
import { CatExpense } from '@/types/CatExpense';

type Props = {
	isOpen: boolean;
	onClose: () => void;
	headerText: string;
};

export const AddExpenseModal = ({ isOpen, onClose, headerText }: Props) => {
	const [catData, setCatData] = useState('');
	const [isLoading, setLoading] = useState(true);
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

	const closeModal = () => {
		setCatData('');
		setLoading(true);
		onClose();
	};

	useEffect(() => {
		if (!isOpen) return;

		getCatFact().then((data) => {
			setCatData(data);
			setLoading(false);
		});
	}, [isOpen, setCatData, setLoading]);

	return (
		<Modal onClose={closeModal} isOpen={isOpen} isCentered>
			<ModalOverlay bg="none" backdropFilter="auto" backdropInvert="25%" backdropBlur="1px" />
			<ModalContent mx="8px">
				<ModalHeader>{headerText}</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<ExpenseForm closeModal={closeModal} handleSubmit={handleSubmit} />
				</ModalBody>
				<ModalFooter>
					<Flex direction="column" width="100%">
						<Button onClick={closeModal}>Close</Button>
						<Center mt="16px">
							<Skeleton startColor="pink.500" endColor="orange.500" isLoaded={!isLoading} width="100%">
								<Text data-testid="cat-fact" fontSize="md">
									<Highlight query="Cat Fact:" styles={{ px: '1', py: '1', bg: 'orange.100' }}>
										Cat Fact:
									</Highlight>{' '}
									{catData}
								</Text>
							</Skeleton>
						</Center>
					</Flex>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
