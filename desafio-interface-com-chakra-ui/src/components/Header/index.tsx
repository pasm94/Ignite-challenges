import { Flex, Image, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import Link from 'next/link';

interface HeaderProps {
  goBackIcon?: ReactNode;
}

export function Header({ goBackIcon }: HeaderProps) {
  return (
    <Flex
      as='header'
      w='100%'
      maxW={1440}
      mx='auto'
      align='center'
      bgColor='#ffffff'
    >
      {goBackIcon && (
        <Link href='/'>
          <Text
            cursor='pointer'
            ml='10'
            position='absolute'
            color='gray.600'
            fontSize='50px'
          >
            <FiChevronLeft />
          </Text>
        </Link>
      )}

      <Image src='home/header.png' />
    </Flex>
  );
}
