import React from 'react';
import { Box, Flex, Text, CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import Image from 'next/image';

interface Donor {
  country: string;
  score: number;
}

interface TopLocationDonorProps {
  title: string;
  donors: Donor[];
}

const TopLocationDonor: React.FC<TopLocationDonorProps> = ({ title, donors }) => {
  return (
    <Box bg='shade.3' p='4rem' borderRadius='10px' w='full' color='white' className='flex justify-between items-center'>
      <Box w='30%'>
        <Text fontSize='xl' mb='4' fontWeight='bold'>{title}</Text>
        <Flex direction='column' gap='4'>
            {donors.map((donor, index) => (
            <Flex key={index} justify='space-between' align='center'>
                <Text>{donor.country}</Text>
                <CircularProgress value={donor.score} color='primary' size='40px'>
                <CircularProgressLabel>{donor.score}</CircularProgressLabel>
                </CircularProgress>
            </Flex>
            ))}
        </Flex>
      </Box>
      <Box position="relative" w='70%' p='4rem' h='70%'>
        <Image src='/maps.png' alt='maps' layout='fill' objectFit='contain' />
      </Box>
    </Box>
  );
}

export default TopLocationDonor;
