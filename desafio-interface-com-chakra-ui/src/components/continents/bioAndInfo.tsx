import { FiInfo } from 'react-icons/fi';
import { Flex, Text } from '@chakra-ui/react';

export function BioAndInfo() {
  return (
    <Flex
      mt='80px'
      alignItems='center'
      justifyContent='space-between'
      width='100%'
      maxW={1160}
    >
      <Text
        w='600px'
        h='211px'
        fontFamily='Poppins'
        fontWeight='400'
        fontSize='24px'
        textAlign='justify'
        color='gray.600'
      >
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>
      <Flex
        display='grid'
        textAlign='center'
        gridTemplateColumns='0.8fr 1.1fr 1.1fr'
      >
        <Flex display='grid'>
          <Text
            fontSize='4xl'
            fontFamily='Poppins'
            fontWeight='600'
            mb='-6px'
            color='#FFBA08'
          >
            50
          </Text>
          <Text
            fontSize='2xl'
            fontFamily='Poppins'
            fontWeight='600'
            color='gray.700'
          >
            países
          </Text>
        </Flex>
        <Flex display='grid'>
          <Text
            fontSize='4xl'
            fontFamily='Poppins'
            fontWeight='600'
            color='#FFBA08'
            mb='-6px'
          >
            60
          </Text>
          <Text
            fontSize='2xl'
            fontFamily='Poppins'
            fontWeight='600'
            color='gray.700'
          >
            línguas
          </Text>
        </Flex>
        <Flex display='grid'>
          <Text
            fontSize='4xl'
            fontFamily='Poppins'
            fontWeight='600'
            mb='-6px'
            color='#FFBA08'
          >
            27
          </Text>
          <Text
            cursor='pointer'
            fontSize='2xl'
            fontFamily='Poppins'
            fontWeight='600'
            color='gray.700'
            display='flex'
            alignItems='center'
          >
            cidades +100
            <Text fontSize='15px' ml='2' color='gray.500'>
              <FiInfo style={{ strokeWidth: '3' }} />
            </Text>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
