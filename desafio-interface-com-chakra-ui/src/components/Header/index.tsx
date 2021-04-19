import { Flex, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex
      as='header'
      w='100%'
      maxW={1440}
      mx='auto'
      align='center'
      bgColor='#ffffff'
    >
      <Image src='home/header.png' />
    </Flex>
  );
}
