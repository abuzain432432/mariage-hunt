import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react';
import React from 'react';

export default function AllowLocationModal({
  isActive,
}: {
  isActive: boolean;
}) {
  return (
    <Modal isOpen={isActive}>
      <ModalContent>
        <ModalHeader className='flex flex-col gap-1'>
          <h2 className='text-xl'>Location Permission</h2>
        </ModalHeader>
        <ModalBody>
          <p>
            We need your location to provide a better experience and
            show you people near you. Please allow location permission
            to continue by clicking on the button bellow
          </p>
        </ModalBody>
        <ModalFooter>
          <Button
            className='text-white font-medium text-lg'
            color='success'
          >
            Allow
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
