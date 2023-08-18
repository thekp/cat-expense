import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button } from '@chakra-ui/react';
import { AddExpenseForm } from './AddExpenseForm';

type Props = {
	isOpen: boolean;
	onClose: () => void;
};

export const AddExpenseModal = ({ isOpen, onClose }: Props) => {
	return (
		<Modal onClose={onClose} isOpen={isOpen} isCentered>
			<ModalOverlay bg="none" backdropFilter="auto" backdropInvert="25%" backdropBlur="1px" />
			<ModalContent mx="8px">
				<ModalHeader>Add Cat Expense</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<AddExpenseForm />
				</ModalBody>
				<ModalFooter>
					<Button onClick={onClose}>Close</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
