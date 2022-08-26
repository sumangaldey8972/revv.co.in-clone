import React from "react";
import { Box, Flex, Img, Spacer, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const CarCard = ({
  id,
  name,
  type,
  fuel_type,
  gear_type,
  amount,
  squreOf_amount,
  img,
}) => {
  return (
    <Link to={`/carddetail/${id}`}   >
      <Flex
        width="60rem"
        m="auto"
        mb="2"
        borderRadius="6"
        _hover={{
          border: "1px solid grey",
        }}
        boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
      >
        <Flex width="30rem">
          <Box>
            <Img mt="4" mb="4" width="40" height="20" src={img} />
          </Box>
          <Spacer />
          <Box>
            <Flex direction="column" p="4">
              <Box>
                <Text fontFamily="Poppins" fontSize="22" fontWeight="extrabold">
                  {name}
                </Text>
                <Text
                  color="#8b8392"
                  fontSize="14"
                  fontFamily="Poppins"
                  fontWeight="semibold"
                >
                  {type}
                </Text>
              </Box>
              <Spacer />
              <Box mt="4">
                <Stack direction="row" width="7rem" m="auto">
                  <Text
                    color="#8b8392"
                    fontSize="14"
                    fontFamily="Poppins"
                    fontWeight="semibold"
                  >
                    {fuel_type}
                  </Text>
                  <Text
                    color="#8b8392"
                    fontSize="14"
                    fontFamily="Poppins"
                    fontWeight="semibold"
                  >
                    {gear_type}
                  </Text>
                </Stack>
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Spacer />
        <Flex>
          <Box lineHeight="8" mt="4">
            <Text
              fontSize="22"
              fontFamily="Poppins"
              fontWeight="semibold"
              p="2"
            >
              ₹ {amount}/month{" "}
            </Text>
            <Text
              color="#8b8392"
              fontSize="18"
              fontFamily="Poppins"
              fontWeight="semibold"
              textDecoration="line-through"
            >
              ₹ {squreOf_amount}{" "}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Link>
  );
};

export default CarCard;
