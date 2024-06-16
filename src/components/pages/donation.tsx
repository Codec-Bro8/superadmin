import { Box, Grid } from "@chakra-ui/react"
import DonationDataBox from "../ui/databox/donationDataBox"
import { donors, TotaldashboardData } from "@/data/dashboardData"
import ContentLayout from "../layouts/contentLayout";
import AsideTwo from "../ui/dashboard/aside/aside2";
import LineChart from "../ui/dashboard/lineGraph";
import { lineGraphData } from "@/data/graphData";

const DonationsPage = () => {
    const Total = TotaldashboardData.donations.total;
    const Avg = TotaldashboardData.donations.average;
    const Donors = TotaldashboardData.donations.donor;

    

  return (
    <ContentLayout>
        <Box>
          <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6}>
            <DonationDataBox  
                data={Total.value} 
                title='Total donations' 
                increase={Total.increase}
                upload={Total.upload}
            />
            <DonationDataBox  
                data={Avg.value} 
                title='Average donations' 
                increase={Avg.increase}
                upload={Avg.upload}
            />
            <DonationDataBox  
                data={Donors.value} 
                title='Total donors' 
                increase={Donors.increase}
                upload={Donors.upload}
            />
          </Grid>
        </Box>
        <Box 
          display='flex'
          w='full'
          gap='2rem'
        >
          <Box w='70%'>
            <LineChart title="Donations" data={lineGraphData} />
          </Box>
          <Box w='30%'>
            <AsideTwo />
          </Box>
        </Box>
    </ContentLayout>
  )
}

export default DonationsPage