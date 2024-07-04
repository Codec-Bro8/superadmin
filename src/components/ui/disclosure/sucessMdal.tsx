// SuccessModal.tsx
import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button } from '@chakra-ui/react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose, message }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Success</ModalHeader>
      <ModalCloseButton />
      <ModalBody>{message}</ModalBody>
      <ModalFooter>
        <Button colorScheme='green' onClick={onClose}>Okay</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default SuccessModal;