import React from "react";
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
  useDisclosure,
  Select,
  Flex
} from "@chakra-ui/react";

const SelectLocation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Text onClick={onOpen}>Select Your Location</Text>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select City</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column">
              <Text cursor="pointer" color="gray.400" onClick={onClose}>
                Top Cities
              </Text>
              <hr />
              <Text
                _hover={{ bg: "#e6f8f8 ", color:"#0ebaba" }}
                transition=".3s"
                fontWeight="bold"
                onClick={onClose}
                cursor="pointer"
                mb="2"
                p="2"
              >
                Bangalore
              </Text>
              <Text
                _hover={{ bg: "#e6f8f8 ",  color:"#0ebaba" }}
                transition=".3s"
                fontWeight="bold"
                onClick={onClose}
                cursor="pointer"
                mb="2"
                p="2"
              >
                Hydrabad
              </Text>
              <Text
                _hover={{ bg: "#e6f8f8 ",  color:"#0ebaba" }}
                transition=".3s"
                fontWeight="bold"
                onClick={onClose}
                cursor="pointer"
                mb="2"
                p="2"
              >
                Delhi-NCR
              </Text>
              <Text
                _hover={{ bg: "#e6f8f8 ",  color:"#0ebaba" }}
                transition=".3s"
                fontWeight="bold"
                onClick={onClose}
                cursor="pointer"
                mb="2"
                p="2"
              >
                Chennai
              </Text>
              <Text
                _hover={{ bg: "#e6f8f8 ",  color:"#0ebaba" }}
                transition=".3s"
                fontWeight="bold"
                onClick={onClose}
                cursor="pointer"
                mb="2"
                p="2"
              >
                Pune
              </Text>
              <hr />
              <Text onClick={onClose} cursor="pointer" mb="2" color="gray.400">
                Other Cities
              </Text>
              <Text onClick={onClose} cursor="pointer" mb="2">
                kolkata
              </Text>
              <Text onClick={onClose} cursor="pointer" mb="2">
                Ahmedabad
              </Text>
              <Text onClick={onClose} cursor="pointer" mb="2">
                Bhubaneswar
              </Text>
              <Text onClick={onClose} cursor="pointer" mb="2">
                Chandigarh
              </Text>
              <Text onClick={onClose} cursor="pointer" mb="2">
                Coimbatore
              </Text>
              <Text onClick={onClose} cursor="pointer" mb="2">
                Jaipur
              </Text>
              <Text onClick={onClose} cursor="pointer" mb="2">
                Kochi
              </Text>
              <Text onClick={onClose} cursor="pointer" mb="2">
                Mangalore
              </Text>
              <Text onClick={onClose} cursor="pointer" mb="2">
                Mysore
              </Text>
              <Text onClick={onClose} cursor="pointer" mb="2">
                Nagpur
              </Text>
              <Text onClick={onClose} cursor="pointer" mb="2">
                Surat
              </Text>
              <Text onClick={onClose} cursor="pointer" mb="2">
                Tirupati
              </Text>
              <Text onClick={onClose} cursor="pointer" mb="2">
                Trivandrum
              </Text>
              <Text onClick={onClose} cursor="pointer" mb="2">
                Vadodara
              </Text>
              <Text onClick={onClose} cursor="pointer" mb="2">
                Vijayawada
              </Text>
              <Text onClick={onClose} cursor="pointer" mb="2">
                Vizag
              </Text>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default SelectLocation;
