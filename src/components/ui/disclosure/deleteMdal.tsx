// DeleteModal.tsx
import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton} from '@chakra-ui/react';
import AuthBtn from '../Buttons/authbtn';

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  onDelete: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, onClose, message, onDelete }) => (
  <Modal isOpen={isOpen} onClose={onClose} size='md'>
    <ModalOverlay bg='#00000080' backdropFilter='blur(10px)' />
    <ModalContent bg='black.1' color='white' alignItems='center'>
      <ModalHeader>Confirm Delete</ModalHeader>
      <ModalCloseButton />
      <ModalBody>{message}</ModalBody>
      <ModalFooter className='flex gap-5'>
        <AuthBtn onClick={onDelete} p='1.5rem'>Delete</AuthBtn>
        <AuthBtn bg='black.4' p='1.5rem' onClick={onClose} color='white'>Cancel</AuthBtn>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default DeleteModal;


