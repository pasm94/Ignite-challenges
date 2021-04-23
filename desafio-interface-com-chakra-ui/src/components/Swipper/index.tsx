import { Flex, Link, Text } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export function SwiperCarousel() {
  return (
    <Flex
      w='100%'
      maxW='1240px'
      mx='auto'
      mb={['5', '10']}
      h={['250px', '450px']}
      // justify='center'
      // align='center'
      mt='10'
    >
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        style={{ width: '100%', flex: '1' }}
      >
        <SwiperSlide>
          <Link href='/europe'>
            <Flex
              bgSize='cover'
              w='100%'
              h='100%'
              alignItems='center'
              justify='center'
              direction='column'
              bgImage='url(home/europe/europe3.jpg)'
            >
              <Text color='#FFF' fontWeight='bold' fontSize={['3xl', '7xl']}>
                Europa
              </Text>
              <Text color='#FFF' fontWeight='bold' fontSize={['1xl', '4xl']}>
                O continente mais antigo
              </Text>
            </Flex>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href='/asia'>
            <Flex
              bgSize='cover'
              w='100%'
              h='100%'
              alignItems='center'
              justify='center'
              direction='column'
              bgImage='url(home/europe/asia.jpg)'
            >
              <Text color='#FFF' fontWeight='bold' fontSize={['3xl', '7xl']}>
                Ásia
              </Text>
              <Text
                color='#FFF'
                fontWeight='bold'
                fontSize={['1xl', '4xl']}
                textAlign='center'
              >
                Conheça o Muro da China, Taj Mahal e vários
                <br />
                outros monumentos históricos.
              </Text>
            </Flex>
          </Link>
        </SwiperSlide>
      </Swiper>
    </Flex>
  );
}
