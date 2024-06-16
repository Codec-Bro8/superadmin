import { Box, Text, Progress } from '@chakra-ui/react';
import { TotaldashboardData } from '@/data/dashboardData';
import React from 'react'

const Audience = () => {
  return (
    <Box p='3rem' bgColor='shade.3' borderRadius='8px'>
        <Box borderBottom='2px solid white' className='flex justify-between pb-4 mb-4'>
            <Text>Audience</Text>
            <Text>Sort</Text>
        </Box>
        <Box className='flex flex-col gap-4' borderRadius='10px'>
            <Text as={'h3'} fontWeight='bold'>Demographies</Text>
            <Box className='flex items-center'>
                <Text w='30%'>Male</Text>
                <Box w='70%' className='flex gap-8 justify-center items-center'>
                    <Progress value={90} size='sm' w='100%' borderRadius='full' />
                    <Text>{TotaldashboardData.totalMusic}</Text>
                </Box>
            </Box>
            <Box className='flex items-center' >
                <Text w='30%'>Female</Text>
                <Box w='70%' className='flex gap-8 justify-center items-center'>
                    <Progress value={90} size='sm' borderRadius='full' w='100%' />
                    <Text>{TotaldashboardData.totalMusic}</Text>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Audience