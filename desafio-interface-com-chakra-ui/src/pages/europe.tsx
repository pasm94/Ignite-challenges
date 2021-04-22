import { Flex, Text } from '@chakra-ui/react';
import { FiChevronLeft } from 'react-icons/fi';
import { Banner } from '../components/continents/banner';
import { BioAndInfo } from '../components/continents/bioAndInfo';
import { TopHundred } from '../components/continents/topHundred';
import { Header } from '../components/Header';

export default function Europe() {
  return (
    <Flex
      w='100vw'
      maxW='100%'
      align='center'
      flexDir='column'
      bgColor='#f2f5f7'
    >
      <Header goBackIcon />

      <Banner />
      <BioAndInfo />
      <TopHundred />
    </Flex>
  );
}
