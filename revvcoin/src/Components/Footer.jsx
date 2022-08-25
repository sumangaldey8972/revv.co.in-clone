import { Box, HStack, Img, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <HStack
      width="60rem"
      m="auto"
      spacing="20"
      bgColor="white"
      borderRadius="12"
      pb='14'
    >
      <Box ml="8">
        <Img
          width="51"
          height="66"
          src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/logo/revv-logo.png"
        />
        <Text fontSize="12" fontFamily="Poppins">
          © 2022 Primemover Mobility Technologies Pvt Ltd. All rights reserved
        </Text>
      </Box>
      <Box>
        <Text
          p="2"
          _hover={{ fontWeight: "bold" }}
          transition=".2s"
          fontWeight="semibold"
        >
          Home
        </Text>
        <Text
          p="2"
          _hover={{ fontWeight: "bold" }}
          transition=".2s"
          fontWeight="semibold"
        >
          FAQs
        </Text>
        <Text
          p="2"
          _hover={{ fontWeight: "bold" }}
          transition=".2s"
          fontWeight="semibold"
        >
          Policy
        </Text>
        <Text
          p="2"
          _hover={{ fontWeight: "bold" }}
          transition=".2s"
          fontWeight="semibold"
        >
          Blog
        </Text>
      </Box>

      <Box >
        <VStack spacing="12">
          <Box>
            <Box>
              <Text
                fontSize="16"
                fontWeight="semibold"
                fontFamily="Poppins"
                mb="4"
                mt="6"
              >
                Social
              </Text>
            </Box>
            <Box>
              <HStack spacing="28px">
                <Box>
                  <Img
                    width="5"
                    height="6"
                    src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/social/facebook.png"
                  />
                </Box>
                <Box>
                  <Img
                    width="5"
                    height="6"
                    src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/social/twitter.png"
                  />
                </Box>
                <Box>
                  <Img
                    width="5"
                    height="6"
                    src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/social/instagram.png"
                  />
                </Box>
                <Box>
                  <Img
                    width="8"
                    height="6"
                    src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/social/youtube.png"
                  />
                </Box>
                <Box>
                  <Img
                    width="5"
                    height="6"
                    src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/social/linkedIn.png"
                  />
                </Box>
              </HStack>
            </Box>
          </Box>

          <Box>
            <VStack spacing="4">
              <Box>
                <Text>Download App Store</Text>
              </Box>
              <Box>
                <Img
                  width="4"
                  height="4"
                  src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/logo/appstore_apple.webp"
                />
                <Text>Download App Store</Text>
              </Box>
              <Box>
                <Img
                  width="4"
                  height="4"
                  src="https://www.revv.co.in/assets/RentalImages/HomeScreen/rental2021/logo/playstore_google.webp"
                />
                <Text>Download Google Play</Text>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </HStack>
  );
};

export default Footer;
