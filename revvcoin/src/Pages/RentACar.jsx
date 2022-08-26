import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import CarCard from "../Components/CarCard";
import Footer from "../Components/Footer";
import { data } from "../Data/data";

const RentACar = () => {
  const [user, setUser] = useState(data);
  console.log(user);

  return (
    <div>
      <Flex
        width="40rem"
        m="auto"
        mb="4"
        boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3)
        0px 3px 7px -3px;"
      >
        <Box pl="8">
          <Text
            fontSize="16"
            fontFamily="Poppins"
            fontWeight="extrabold"
            color="#0ebaba "
          >
            Unboxed Car
          </Text>
          <Text
            fontSize="12"
            fontFamily="Poppins"
            fontWeight="thin"
            color="#8b8392"
          >
            As good as new
          </Text>
        </Box>
      </Flex>
      {user.map((item) => (
        <CarCard
          key={item.id}
          id={item.id}
          name={item.name}
          type={item.type}
          fuel_type={item.fuel_type}
          gear_type={item.gear_type}
          amount={item.amount}
          squreOf_amount={item.squreOf_amount}
          img={item.img_url}
        />
      ))}
      <Footer />
    </div>
  );
};

export default RentACar;

//
