import { Box, Text, Progress, Flex, CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { TotaldashboardData } from '@/data/dashboardData';
import { donors } from '@/data/dashboardData'

interface Donor {
    country: string;
    score: number;
}
  
interface TopLocationDonorProps {
    title: string;
    donors: Donor[];
}

const AsideTwo = () => {
    const TopLocationDonor: React.FC<TopLocationDonorProps> = ({ title, donors }) => {
        return (
            <Box bg='shade.3' p='2rem' borderRadius='10px' w='full' color='white'>
                <Text fontSize='xl' mb='4' fontWeight='bold'>{title}</Text>
                <Box className='flex justify-between items-center gap-4'>
                    <Box w='55%'>
                        <Flex direction='column' gap='4'>
                            {donors.map((donor, index) => (
                            <Flex key={index} justify='space-between' align='center'>
                                <Text>{donor.country}</Text>
                                <Text>{donor.score}%</Text>
                            </Flex>
                            ))}
                        </Flex>
                    </Box>
                    <Box position="relative" w='45%' p='4rem' h='70%'>
                        <Image src='/maps.png' alt='maps' layout='fill' objectFit='contain' />
                    </Box>
                </Box>
            </Box>
        );
    }



  return (
    <Box className='flex flex-col gap-6'>
        <Box className='flex flex-col gap-4' bg='shade.3' borderRadius='10px' p='2rem'>
            <Text as={'h3'} fontWeight='bold'>Demographies</Text>
            <Box className='flex justify-between items-center'>
                <Text>Male</Text>
                <Progress value={90} size='sm' w='50%' color='primary' borderRadius='full' />
                <Text>{TotaldashboardData.totalMusic}</Text>
            </Box>
            <Box className='flex justify-between items-center'>
                <Text>Female</Text>
                <Progress value={90} size='sm' w='50%' borderRadius='full' color='primary' />
                <Text>{TotaldashboardData.totalMusic}</Text>
            </Box>
        </Box>
        <TopLocationDonor title='Top location Views' donors={donors} />
    </Box>
  )
}

export default AsideTwo