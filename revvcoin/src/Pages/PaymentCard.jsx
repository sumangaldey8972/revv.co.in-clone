import React from "react";
import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import PaymentSucessFull from "../Components/PaymentSucessFull";
import { useAuthContext } from "../AppContext/AppContext";

const subscription = [
  {
    id: "1",
    month: "1",
    alias: "month",
    image: "https://www.revv.co.in/grapheneImages/PDP/flash.svg",
  },

  {
    id: "2",
    month: "2",
    alias: "month",
    image: "https://www.revv.co.in/grapheneImages/PDP/flash.svg",
  },
  {
    id: "3",
    month: "3",
    alias: "month",
    image: "https://www.revv.co.in/grapheneImages/PDP/flash.svg",
  },
  {
    id: "4",
    month: "6",
    alias: "month",
    image: "https://www.revv.co.in/grapheneImages/PDP/flash.svg",
  },
];

const PaymentCard = ({ name, amount, squreOf_amount }) => {

  const {user} = useAuthContext();

  return (
    <Flex
      direction="column"
      width="30rem"
      m="auto"
      borderRadius="12"
      boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
      position="fixed"
      left="50rem"
      top="6rem"
    >
      <Text fontFamily="Poppins" fontWeight="extrabold" fontSize="30" p="6">
        {name}
      </Text>
      <Box width="25rem" m="auto">
        <Text fontSize="20" fontFamily="Poppins" fontWeight="bold" mb="2">
          Subscription Tenure
        </Text>
        <Flex direction="row" width="18rem" m="auto" mb="5">
          {subscription.map((item) => (
            <Flex
              key={item.id}
              ml="2"
              border="1px solid black"
              width="16"
              borderRadius="4"
              boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
            >
              <Img width="8px" height="12px" src={item.image} />
              <Box>
                <Text
                  color="#8b8392"
                  fontSize="16px"
                  fontFamily="Poppins"
                  fontWeight="semibold"
                >
                  {item.month}
                </Text>
                <Text
                  color="#8b8392"
                  fontSize="12px"
                  fontFamily="Poppins"
                  fontWeight="semibold"
                >
                  {item.alias}
                </Text>
              </Box>
            </Flex>
          ))}
        </Flex>
      </Box>

      <Flex width="25rem" m="auto" p="4">
        <Text fontSize="32px" fontWeight="extrabold" mt="-3" mr="2">
          ₹ {amount}
        </Text>
        <Text fontSize="18px" fontWeight="bold" mr="2">
          /month
        </Text>
        <Text fontSize="18px" fontWeight="bold" mr="2" textDecoration="line-through" >
          ₹ {squreOf_amount}
        </Text>
        <Text
          color="#0ebaba"
          fontSize="18px"
          fontWeight="bold"
          fontFamily="Poppins"
          mr="2"
        >
          (11% Off)
        </Text>
      </Flex>

      <Box position="relative" top="-8" left="-16">
        (inclusive all taxes)
      </Box>

      <Box
        width="25rem"
        m="auto"
        p="4"
        bgColor="#1c81ab"
        mb="4"
        borderRadius="6"
      >
        <Text fontSize="16" fontWeight="extrabold" color="white" cursor="pointer" >
          <PaymentSucessFull/>
        </Text>
      </Box>
    </Flex>
  );
};

export default PaymentCard;
