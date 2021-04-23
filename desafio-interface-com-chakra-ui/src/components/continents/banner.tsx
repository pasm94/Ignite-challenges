import { Flex, Image } from '@chakra-ui/react';

export function Banner() {
  return (
    <Flex w='100wh' maxW={1440} h={['150px', '500px']}>
      <Image src='home/europe/europe4.png' w='100%' />
    </Flex>
  );
}
