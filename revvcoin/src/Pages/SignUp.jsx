import React from 'react'
import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  Img,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import style from "./Login.module.css";


const SignUp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {" "}
      <Text onClick={onOpen}>sign up </Text>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width="20rem" borderRadius="none">
          <Center>
            <Text fontSize="16px" padding="20px" fontWeight="bold" >
              SIGIN
            </Text>
          </Center>
          <ModalCloseButton />
          <ModalBody>
            <VStack
              align="center"
              width="200px"
              position="relative"
              left="32px"
            >
              <Center>
                <Img
                  src="https://www.revv.co.in/imgs/google-login.png"
                  width="230px"
                  height="43px"
                />
              </Center>
              <Center>
                <Img
                  src="https://www.revv.co.in/imgs/facebook-icon.png"
                  width="230px"
                  height="43px"
                />
              </Center>
            </VStack>
            <Stack>
              <Spacer />
              <Spacer />
              <Spacer />
              <Spacer />
              <Stack spacing={4}>
                <Input placeholder="Enter Email" />
              </Stack>
              <Spacer />
              <Spacer />
              <Spacer />
              <Center>
                <Button
                  className={style.login}
                  px={12}
                  mr={4}
                  colorScheme="#0ebaba"
                >
                  Proceed
                </Button>
              </Center>
              <Divider width="full" />
            </Stack>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SignUp