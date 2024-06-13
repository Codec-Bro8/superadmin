import { Box, Grid } from "@chakra-ui/react"
import DonationDataBox from "../ui/databox/donationDataBox"
import { TotaldashboardData } from "@/data/dashboardData"

const DonationsPage = () => {
    const Total = TotaldashboardData.donations.total;
    const Avg = TotaldashboardData.donations.average;
    const Donors = TotaldashboardData.donations.donor;

  return (
    <div className='flex w-full'>
      <Box w='full'>
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
      </Box>
    </div>
  )
}

export default DonationsPage