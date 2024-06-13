import { Box, Text } from '@chakra-ui/react'
import { TotaldashboardData } from '@/data/dashboardData'
import { Progress } from '@chakra-ui/react'

const AsideBar = () => {
  return (
    <Box className='flex flex-col gap-6'>
        <Box className='flex flex-col gap-4' bg='shade.3' borderRadius='10px' p='2rem'>
            <Text as={'h3'} fontWeight='bold'>Total Uploads</Text>
            <Box className='flex justify-between items-start'>
                <Text>Video</Text>
                <Text>{TotaldashboardData.totalVideos}</Text>
            </Box>
            <Box className='flex justify-between items-start'>
                <Text>Music</Text>
                <Text>{TotaldashboardData.totalMusic}</Text>
            </Box>
            <Box className='flex justify-between items-start'>
                <Text>Blogs</Text>
                <Text>{TotaldashboardData.totalBlogs}</Text>
            </Box>
            <Box className='flex justify-between items-start'>
                <Text>Devotional</Text>
                <Text>{TotaldashboardData.totalDevotional}</Text>
            </Box>
        </Box>
        <Box className='flex flex-col gap-4' bg='shade.3' borderRadius='10px' p='2rem'>
            <Text as={'h3'} fontWeight='bold'>Demographies</Text>
            <Box className='flex justify-between items-center'>
                <Text>Male</Text>
                <Progress value={90} size='sm' w='50%' borderRadius='full' />
                <Text>{TotaldashboardData.totalMusic}</Text>
            </Box>
            <Box className='flex justify-between items-center'>
                <Text>Female</Text>
                <Progress value={90} size='sm' w='50%' borderRadius='full' />
                <Text>{TotaldashboardData.totalMusic}</Text>
            </Box>
        </Box>
    </Box>
  )
}

export default AsideBar