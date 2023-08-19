import { useState, useEffect } from 'react';
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
} from '@chakra-ui/react';
import { AddExpenseForm } from '../AddExpenseForm/AddExpenseForm';
import { getCatFact } from '@/api/catFactAPI';

type Props = {
	isOpen: boolean;
	onClose: () => void;
};

export const AddExpenseModal = ({ isOpen, onClose }: Props) => {
	const [catData, setCatData] = useState('');
	const [isLoading, setLoading] = useState(true);

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
				<ModalHeader>Add Cat Expense</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<AddExpenseForm closeModal={closeModal} />
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
