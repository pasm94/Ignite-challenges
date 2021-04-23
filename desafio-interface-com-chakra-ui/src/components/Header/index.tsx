import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import Link from 'next/link';

interface HeaderProps {
  goBackIcon?: ReactNode;
}

export function Header({ goBackIcon }: HeaderProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      mx='auto'
      align='center'
      as='header'
      w='100%'
      maxW={1440}
      p={['3', '0']}
      bgColor='#ffffff'
      justify='center'
    >
      {goBackIcon && (
        <Link href='/'>
          <Text
            cursor='pointer'
            mr={['300px', '1200px']}
            position='absolute'
            color='gray.600'
            fontSize={['20px', '50px']}
          >
            <FiChevronLeft />
          </Text>
        </Link>
      )}

      {isWideVersion ? (
        <Image src='home/header.png' />
      ) : (
        [<Image src='home/headerMobile.png' />]
      )}
    </Flex>
  );
}
