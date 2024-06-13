import { Box, Grid } from "@chakra-ui/react"
import AnalyticsDataBox from "../ui/databox/analyticsDataBox"
import { TotaldashboardData } from "@/data/dashboardData"
import DashboardTab from "../ui/tabs/tabs"
import { tabsData } from "@/data/tabData"
import AsideBar from "../ui/dashboard/aside/aside"
import ContentLayout from "../layouts/contentLayout"

const AnalyticsPage = () => {
  return (
    <ContentLayout>
      <Box w='full' className="flex gap-8 flex-col">
        <Box>
          <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6}>
            <AnalyticsDataBox type="video" data={TotaldashboardData.totalVideos} />
            <AnalyticsDataBox type="music" data={TotaldashboardData.totalMusic} />
            <AnalyticsDataBox type="blog" data={TotaldashboardData.totalBlogs} />
            <AnalyticsDataBox type="devotional" data={TotaldashboardData.totalDevotional} />
          </Grid>
        </Box>
        <Box 
          display='flex'
          w='full'
          gap='2rem'
        >
          <Box w='70%'>
            <DashboardTab tabsData={tabsData} />
          </Box>
          <Box w='30%'>
            <AsideBar />
          </Box>
        </Box>
      </Box>
    </ContentLayout>
  )
}

export default AnalyticsPage