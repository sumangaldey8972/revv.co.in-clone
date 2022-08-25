import { Stack, Container, Flex, Img, Text, Center } from '@chakra-ui/react'
import React from 'react'
import style from "./Hyundai.module.css"
const Hyundai = () => {
  return (
    <>
      <Stack className={style.container} height="300">
        <Stack bgColor="white" direction="column">
          <Center>
            <Img
              className={style.hyundaiimg}
              src="https://www.revv.co.in/grapheneImages/newopen/logo_hyundai_sub_web@3x.png"
            />
          </Center>
          <Text>Powered by Revv</Text>
          <Text fontFamily="Poppins" fontSize="38" fontWeight="extrabold" >
            New Hyundai Car Subscription in Bangalore
          </Text>
          
        </Stack>
      </Stack>
    </>
  );
}

export default Hyundai