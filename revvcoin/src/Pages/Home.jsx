import React from "react";
import {
  Container,
  HStack,
  Box,
  Text,
  Flex,
  Img,
  Center,
  Button,
  Stack,
} from "@chakra-ui/react";
import "@fontsource/poppins";
import SelectLocation from "./SelceLocation";
import CarouselComponents from "../Components/Carousel";
import style from "./Home.module.css";

import Footer from "../Components/Footer";
const Home = () => {
  return (
    <>
      <Container
        border="2px solid black"
        fontFamily="Poppins"
        width="490px"
        mt="10"
        position="relative"
        top="20"
        left="-300"
        p="6"
      >
        <Container width="430" height="420" mt="10" mb="10">
          {" "}
          <HStack spacing="2rem" p="4" bg="#49a6ba" borderRadius="16">
            <Box bg="white" borderRadius="16">
              <Text fontSize="20px" fontWeight="extrabold" pl="2" pr="2" mt="2">
                Rentals
              </Text>
              <Text fontSize="14px" pr="10" pl="10" mb="2">
                For hours & days
              </Text>
            </Box>
            <Box bg="">
              <Text fontSize="20px" fontWeight="extrabold" color="white">
                Subscription
              </Text>
              <Text fontSize="14px" color="white">
                For months & years
              </Text>
            </Box>
          </HStack>
          <Flex mt="10" direction="column">
            <Center m="auto">
              <Img
                src="https://www.revv.co.in/imgs/logo-rentals.svg"
                alt="rental logo"
              />
            </Center>
            <Text fontSize="18">Self drives car rentals in India </Text>
          </Flex>
          <Flex
            direction="column"
            border="1px solid grey"
            borderRadius="13"
            mt="4"
          >
            <Center>
              <Img src="https://www.revv.co.in/assets/RentalImages/HomeScreen/locationRental.svg" />

              <Text ml="4" p="4" cursor="pointer">
                <SelectLocation />
              </Text>
            </Center>
            <Flex direction="row" borderTop="1px solid grey">
              <Box ml="6">
                {" "}
                <Text mb="6" mt="4">
                  {" "}
                  Start Time
                </Text>{" "}
              </Box>
              <Box ml="16" borderLeft="1px solid grey">
                {" "}
                <Text ml="4" mb="6" mt="4">
                  End Time{" "}
                </Text>
              </Box>
            </Flex>
          </Flex>
          <Box width="400" mt="6" borderRadius="12" bg="#a4ddda">
            <Text
              p="4"
              fontSize="18"
              fontWeight="extrabold"
              color="white"
              cursor="pointer"
            >
              Search
            </Text>
          </Box>
        </Container>
      </Container>
      <div className={style.carouseldiv}>
        <CarouselComponents />
      </div>
      <Stack
        width="100rem"
        m="auto"
        bgColor="#f1f4f8"
        position="relative"
        top="-500"
      >
        <Box width="60rem" m="auto" mb="12">
          <Text
            fontSize="26px"
            fontFamily="Poppins"
            fontWeight="extrabold"
            color="#b1c9e4"
          >
            Featured
          </Text>
          <HStack spacing="15px">
            <Box>
              <Img
                borderRadius="14"
                src="https://revvselfdrivecar.s3.us-west-2.amazonaws.com/5+days.png"
              />
            </Box>
            <Box>
              <Img
                borderRadius="14"
                src="https://revvselfdrivecar.s3.us-west-2.amazonaws.com/10+days.png"
              />
            </Box>
            <Box>
              <Img
                borderRadius="14"
                src="https://revvselfdrivecar.s3.us-west-2.amazonaws.com/15+days.png"
              />
            </Box>
          </HStack>
        </Box>
      </Stack>
      <Box m="auto" bgColor="#f1f4f8" position="relative" top="-500">
        <Footer />
      </Box>
    </>
  );
};

export default Home;
