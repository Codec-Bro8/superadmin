import React from 'react';
import DataBox from '../ui/databox/databox';
import { Box , Grid} from '@chakra-ui/react';
import { TotaldashboardData } from '@/data/dashboardData';
import ChurchTab from '../ui/tabs/churchtab';
import ContentLayout from '../layouts/contentLayout';

const ChurchesPage = () => {
  return (
    <ContentLayout>
      
      <Box w='50%'>
        <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6}>
          <DataBox type="Total church" data={TotaldashboardData.totalChurch} />
          <DataBox type="active churches" data={TotaldashboardData.activeChurch} />
        </Grid>
      </Box>
      <Box>
        <ChurchTab />
      </Box>
      
    </ContentLayout>
  )
}

export default ChurchesPage;