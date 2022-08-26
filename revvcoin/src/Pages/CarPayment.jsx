import { Box, Flex, Img, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import { data } from "../Data/data";
import PaymentCard from "./PaymentCard";

const CarPayment = () => {
  const { id } = useParams();

  let car = data[id - 1];
  console.log("car", car.name);

  return (
    <>
      <PaymentCard
        name={car.name}
        amount={car.amount}
        squreOf_amount={car.squreOf_amount}
      />

      <Stack
        boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
        width="45rem"
        ml="8"
      >
        <Box>
          <Img src={car.img_url} />
        </Box>
        <Box>
          <Flex gap="20">
            <Box>
              <Flex direction="column" alignItems="center">
                <Img
                  width="27px"
                  height="27px"
                  src="https://www.revv.co.in/grapheneImages/PDP/product-images/condition.svg"
                />
                <Text fontSize="9">Condition</Text>
                <Text fontSize="13">Well Maintained</Text>
              </Flex>
            </Box>
            <Box>
              <Flex direction="column" alignItems="center">
                <Img
                  width="27px"
                  height="27px"
                  src="https://www.revv.co.in/grapheneImages/PDP/product-images/variant.svg"
                />
                <Text fontSize="9">Variant</Text>
                <Text fontSize="13">As per availability</Text>
              </Flex>
            </Box>
            <Box>
              <Flex direction="column" alignItems="center">
                <Img
                  width="27px"
                  height="27px"
                  src="https://www.revv.co.in/grapheneImages/PDP/product-images/transmission.svg"
                />
                <Text fontSize="9">Transmission Type</Text>
                <Text fontSize="13"> {car.gear_type} </Text>
              </Flex>
            </Box>
            <Box>
              <Flex direction="column" alignItems="center">
                <Img
                  width="27px"
                  height="27px"
                  src="https://www.revv.co.in/grapheneImages/PDP/product-images/fuel.svg"
                />
                <Text fontSize="9">Fuel type</Text>
                <Text fontSize="13"> {car.fuel_type} </Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Stack>

      <Footer />
    </>
  );
};

export default CarPayment;
// id: "1",
//     name: "Hyundai Santro",
//     type: "Unboxed",
//     fuel_type: "Petrol",
//     gear_type: "Automatic",
//     amount: "19699",
//     squreOf_amount: "21699",
//     img_url:
//       "https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/hyundai_santro.jpg",
