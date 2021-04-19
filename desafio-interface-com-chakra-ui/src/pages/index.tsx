import { Flex, Button, Stack, Divider, Text } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Banner } from '../components/Home/banner';
import { TravelTypes } from '../components/Home/travelTypes';

export default function Home() {
  return (
    <Flex w='100vw' maxW='100%' align='center' flexDir='column'>
      <Header />
      <Banner />
      <TravelTypes />
      <Divider
        orientation='horizontal'
        colorScheme='gray'
        borderTop='2px'
        w='90px'
        mt='80px'
        mb='52px'
        borderRadius='8px'
      />
      <Text
        fontFamily='Poppins'
        fontWeight='500'
        fontSize='36px'
        color='gray.600'
      >
        Vamos nessa?
      </Text>
      <Text
        fontFamily='Poppins'
        fontWeight='500'
        fontSize='36px'
        color='gray.600'
      >
        Então escolha seu continente
      </Text>
    </Flex>
  );
}
