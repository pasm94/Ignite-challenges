import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import Flag from 'react-flagkit';

export function TopHundred() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      flexDir='column'
      mb='10'
      width='100%'
      maxW={1160}
      justifyContent='start'
      mt={['40px', '80px']}
    >
      <Text
        fontFamily='Poppins'
        fontWeight='500'
        ml={['5', '0']}
        fontSize={['28px', '36px']}
        color='gray.600'
        mb={['0', '10']}
      >
        Cidades + 100
      </Text>

      <Flex
        display={['flex', 'grid']}
        gridTemplateColumns='1fr 1fr 1fr 1fr'
        justifyContent='space-between'
        alignItems='center'
        flexDirection='column'
        w='100%'
      >
        <Flex
          bgColor='#FFF'
          w={['75%', '90%']}
          flexDir='column'
          mt={['4', '0']}
          border='solid 1.5px gold'
          borderRadius='5'
        >
          <Image src='home/europe/germany.jpg' borderRadius='5px 5px 0px 0px' />
          <Flex
            flexDir='column'
            display='grid'
            gridTemplateColumns='1fr 1fr'
            alignItems='center'
            alignContent='center'
          >
            <div>
              <Text
                fontFamily='Poppins'
                fontWeight='600'
                fontSize='22px'
                color='gray.600'
                mt='3'
                ml='5'
              >
                Munique
              </Text>
              <Text
                fontFamily='Poppins'
                fontWeight='500'
                fontSize='1xl'
                color='gray.400'
                mt='3'
                ml='5'
              >
                Alemanha
              </Text>
            </div>
            <div>
              <Flex ml='10' w='50px' pt='3'>
                <Flag
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                  }}
                  country='DE'
                />
              </Flex>
            </div>
          </Flex>
        </Flex>

        <Flex
          bgColor='#FFF'
          w={['75%', '90%']}
          flexDir='column'
          mt={['4', '0']}
          border='solid 1.5px gold'
          pb='5'
          borderRadius='5'
        >
          <Image src='home/europe/france.jpg' borderRadius='5px 5px 0px 0px' />{' '}
          <Flex
            flexDir='column'
            display='grid'
            gridTemplateColumns='1fr 1fr'
            alignItems='center'
            alignContent='center'
          >
            <div>
              <Text
                fontFamily='Poppins'
                fontWeight='600'
                fontSize='22px'
                color='gray.600'
                mt='3'
                ml='5'
              >
                Paris
              </Text>
              <Text
                fontFamily='Poppins'
                fontWeight='500'
                fontSize='1xl'
                color='gray.400'
                mt='3'
                ml='5'
              >
                França
              </Text>
            </div>
            <div>
              <Flex ml='10' w='50px' pt='3'>
                <Flag
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                  }}
                  country='FR'
                />
              </Flex>
            </div>
          </Flex>
        </Flex>
        <Flex
          bgColor='#FFF'
          w={['75%', '90%']}
          flexDir='column'
          mt={['4', '0']}
          border='solid 1.5px gold'
          borderRadius='5'
          pb='5'
        >
          <Image src='home/europe/italy.jpg' borderRadius='5px 5px 0px 0px' />{' '}
          <Flex
            flexDir='column'
            display='grid'
            gridTemplateColumns='1fr 1fr'
            alignItems='center'
            alignContent='center'
          >
            <div>
              <Text
                fontFamily='Poppins'
                fontWeight='600'
                fontSize='22px'
                color='gray.600'
                mt='3'
                ml='5'
              >
                Roma
              </Text>
              <Text
                fontFamily='Poppins'
                fontWeight='500'
                fontSize='1xl'
                color='gray.400'
                mt='3'
                ml='5'
              >
                Itália
              </Text>
            </div>
            <div>
              <Flex ml='10' w='50px' pt='3'>
                <Flag
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                  }}
                  country='IT'
                />
              </Flex>
            </div>
          </Flex>
        </Flex>
        <Flex
          bgColor='#FFF'
          w={['75%', '90%']}
          flexDir='column'
          mt={['4', '0']}
          border='solid 1.5px gold'
          pb='5'
          borderRadius='5'
        >
          <Image src='home/europe/england.jpg' borderRadius='5px 5px 0px 0px' />{' '}
          <Flex
            flexDir='column'
            display='grid'
            gridTemplateColumns='1fr 1fr'
            alignItems='center'
            alignContent='center'
          >
            <div>
              <Text
                fontFamily='Poppins'
                fontWeight='600'
                fontSize='22px'
                color='gray.600'
                mt='3'
                ml='5'
              >
                Londres
              </Text>
              <Text
                fontFamily='Poppins'
                fontWeight='500'
                fontSize='1xl'
                color='gray.400'
                mt='3'
                ml='5'
              >
                Reino Unido
              </Text>
            </div>
            <div>
              <Flex ml='10' w='50px' pt='3'>
                <Flag
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                  }}
                  country='GB'
                />
              </Flex>
            </div>
          </Flex>
        </Flex>
        <Flex
          bgColor='#FFF'
          w={['75%', '90%']}
          flexDir='column'
          mt={['4', '10']}
          border='solid 1.5px gold'
          pb='5'
          borderRadius='5'
        >
          <Image src='home/europe/england.jpg' borderRadius='5px 5px 0px 0px' />{' '}
          <Flex
            flexDir='column'
            display='grid'
            gridTemplateColumns='1fr 1fr'
            alignItems='center'
            alignContent='center'
          >
            <div>
              <Text
                fontFamily='Poppins'
                fontWeight='600'
                fontSize='22px'
                color='gray.600'
                mt='3'
                ml='5'
              >
                Praga
              </Text>
              <Text
                fontFamily='Poppins'
                fontWeight='500'
                fontSize='1xl'
                color='gray.400'
                mt='3'
                ml='5'
              >
                República Tcheca
              </Text>
            </div>
            <div>
              <Flex ml='10' w='50px' pt='3'>
                <Flag
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                  }}
                  country='CZ'
                />
              </Flex>
            </div>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
