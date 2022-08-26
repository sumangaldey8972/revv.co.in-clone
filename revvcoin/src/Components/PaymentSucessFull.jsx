import {
  Modal,
  ModalBody,
  Button,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentSucessFull = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  setTimeout(() => {
    setIsLoading(true);
  }, 6000);

  return (
    <>
      <Text onClick={onOpen}>Proceed</Text>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {" "}
            {isLoading ? (
                <Text>Enjoy Your Ride..</Text>
                ) : (
                <Text>PLease wait while your transaction is complete..</Text>
            )}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>{isLoading ? <h2> Payment is Successfull </h2> : <Spinner />}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PaymentSucessFull;
