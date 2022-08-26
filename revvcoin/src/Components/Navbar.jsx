import React from "react";
import { Flex, Spacer, Box, Img, Text, Button, Center } from "@chakra-ui/react";
import style from "./Navbar.module.css";
import "@fontsource/poppins";
import Login from "../Pages/Login";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Flex
    mb='2'
      boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
    >
      <Spacer />
      <Link to="/">
        <Box pt="3">
          <Img src="https://www.revv.co.in/grapheneImages/newopen/logo.svg" />
          <Text className={style.logoPtag}>Sanitised.Safe</Text>
        </Box>
      </Link>
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />

      <Box pt="3" mr="20">
        <Button variant="outline">
          <Link to="/hyundai">
            <Text>Hyundai Subscription</Text>{" "}
          </Link>
        </Button>
      </Box>
      <Box pt="3" mr="10">
        <Button variant="outline">
          <Text>Mahindra Subscription</Text>{" "}
        </Button>
      </Box>
      <Center pt="3">FAQs</Center>
      <Center pt="3">
        <Text ml="10">
          <Login />
        </Text>
      </Center>
      <Spacer />
    </Flex>
  );
};

export default Navbar;
