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
import React from "react";
import style from "./Login.module.css";
import SignUp from "./SignUp";

const Login = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();



  return (
    <>
      <Text
        onClick={onOpen}
        fontSize="14px"
        fontWeight="semibold"
        cursor="pointer"
      >
        Login or SignUp
      </Text>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width="20rem" borderRadius="none">
          <Center>
            <Text fontWeight="semibold" fontSize="16px" padding="20px">
              LOGIN
            </Text>
          </Center>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <Stack spacing={4}>
                <Input placeholder="Enter Email" />
                <Input placeholder="Enter Password" />
                <Center>
                  <Text fontSize="13px" color="#0ebaba" fontWeight="semibold">
                    Send a new Password to my email ID
                  </Text>
                </Center>
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
                  Login
                </Button>
              </Center>
              <Center>
                <span>
                  <Text>Don't have a account yet ?</Text>
                </span>
                <Spacer />
                <span>
                  <Text fontSize="17px" color="#0ebaba" fontWeight="semibold">
                    <SignUp />
                  </Text>
                </span>
              </Center>
              <Divider width="full" />
            </Stack>
          </ModalBody>

          <ModalFooter>
            <VStack
              align="center"
              width="150px"
              position="relative"
              left="-58px"
            >
              <Center>
                <Img
                  src="https://www.revv.co.in/imgs/google-login.png"
                  width="200px"
                  height="41px"
                />
              </Center>
              <Center>
                <Img
                  src="https://www.revv.co.in/imgs/facebook-icon.png"
                  width="200px"
                  height="41px"
                />
              </Center>
            </VStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
