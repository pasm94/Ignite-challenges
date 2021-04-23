import { Flex, Image, useBreakpointValue } from '@chakra-ui/react';

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return isWideVersion ? (
    <Flex w='100wh' maxW={1440} h={368}>
      <Image src='home/banner.png' w='100%' />
    </Flex>
  ) : (
    <Flex w='100vw'>
      <Image src='home/bannerMobile.png' w='100%' />
    </Flex>
  );
}
