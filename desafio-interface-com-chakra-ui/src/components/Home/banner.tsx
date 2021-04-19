import { Flex, Image } from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex w='100wh' maxW={1440} h={368}>
      <Image src='home/banner.png' w='100%' />
    </Flex>
  );
}
