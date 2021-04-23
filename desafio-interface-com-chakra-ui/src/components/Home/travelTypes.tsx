import { Flex, Image, useBreakpointValue } from '@chakra-ui/react';

export function TravelTypes() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return isWideVersion ? (
    <Flex
      mx='auto'
      align='center'
      direction='row'
      maxW={1160}
      w='100%'
      justifyContent='space-between'
      pr='40px'
    >
      <Image src='home/travel-types/nightlife.png' />
      <Image src='home/travel-types/beach.png' />
      <Image src='home/travel-types/modern.png' />
      <Image src='home/travel-types/classic.png' />
      <Image src='home/travel-types/more.png' />
    </Flex>
  ) : (
    <Flex mt='10'>
      <Image src='home/travel-types/mobile.png' />
    </Flex>
  );
}
