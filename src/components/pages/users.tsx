import React from 'react';
import DataBox from '../ui/databox/databox';
import { Box , Grid} from '@chakra-ui/react';
import { TotaldashboardData } from '@/data/dashboardData';

const UserPage = () => {
  return (
    <div className='flex w-full'>
      <Box w='100%'>
        <Box w='50%'>
          <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6}>
            <DataBox type="Total users" data={TotaldashboardData.totalUsers} />
            <DataBox type="active users" data={TotaldashboardData.activeUsers} />
          </Grid>
        </Box>
        <Box>
          Graphs / datas
        </Box>
      </Box>
    </div>
  )
}

export default UserPage