import {
  Stack,
  Container,
  Flex,
  Img,
  Text,
  Center,
  Spacer,
  Box,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import style from "./Hyundai.module.css";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
const Hyundai = () => {
  return (
    <>
      <Stack className={style.container} height="600">
        <Stack
          bgColor="white"
          direction="column"
          border="1px solid red"
          width="45rem"
          p="6"
          mt='7'
          borderRadius="6"
          position="relative"
          top="8"
        >
          <Center mt="8">
            <Img
              className={style.hyundaiimg}
              src="https://www.revv.co.in/grapheneImages/newopen/logo_hyundai_sub_web@3x.png"
            />
          </Center>
          <Text>Powered by Revv</Text>
          <Spacer />
          <Spacer />
          <Spacer />
          <Text fontFamily="Poppins" fontSize="38" fontWeight="extrabold">
            New Hyundai Car Subscription in Bangalore
          </Text>
          <Stack direction="row">
            <Box>
              <Center mt="12">
                <Img src="https://www.revv.co.in/assets/RentalImages/HomeScreen/locationIcon.png" />
              </Center>
            </Box>

            <Box width="90rem">
              <Text fontSize="22">City</Text>
              <Stack direction="row">
                <Box fontSize="32" fontFamily="Poppins" fontWeight="extrabold">
                  Bangalore
                </Box>
                <Spacer />
                <Box>
                  {" "}
                  <ChevronDownIcon />{" "}
                </Box>
              </Stack>
              <Divider color="grey" p="2" />
            </Box>
          </Stack>

          <Stack direction="row">
            <Box>
              <Center mt="6">
                <Img src="https://www.revv.co.in/assets/RentalImages/HomeScreen/calenderIcon.png" />
              </Center>
            </Box>

            <Stack direction="row" width="90rem">
              <Stack width="16rem" direction="row">
                {" "}
                <Text fontSize="32">Start Date</Text>
                <Spacer />
                <ChevronDownIcon />
              </Stack>

              <Spacer />

              <Box>
                <Text fontWeight="extrabold">DURATION</Text>
                <Text fontSize="32" fontWeight="extrabold" fontFamily="Poppins">
                  1,2,3 or 6 Months
                </Text>
              </Box>
            </Stack>
          </Stack>
          <Link to='/rent' >
            <Stack
              direction="row"
              width="16rem"
              p="4"
              borderRadius="6"
              bgColor="#1c81ab "
              cursor="pointer"
            >
              <Text
                fontSize="16"
                fontFamily="Poppins"
                fontWeight="semibold"
                color="white"
                letterSpacing="2"
              >
                {" "}
                Search{" "}
              </Text>
              <Spacer />
              <ChevronDownIcon />
            </Stack>
          </Link>
        </Stack>
      </Stack>
    </>
  );
};

export default Hyundai;
