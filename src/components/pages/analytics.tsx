import { Box, Grid } from "@chakra-ui/react";
import AnalyticsDataBox from "../ui/databox/analyticsDataBox";
import { TotaldashboardData } from "@/data/dashboardData";
import DashboardTab from "../ui/tabs/tabs";
import { tabsData } from "@/data/tabData";
import AsideBar from "../ui/dashboard/aside/aside";
import ContentLayout from "../layouts/contentLayout";
import AsideTwo from "../ui/dashboard/aside/aside2";
import { useApiStore } from "@/store/zusatndStore";

const AnalyticsPage = () => {
  const { videos, audios, blogs, devotion } = useApiStore();

  return (
    <ContentLayout>
      <Box w="full" className="flex gap-8 flex-col">
        <Box>
          <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6}>
            <AnalyticsDataBox type="video" data={videos.length} />
            <AnalyticsDataBox type="music" data={audios.length} />
            <AnalyticsDataBox type="blog" data={blogs.length} />
            <AnalyticsDataBox type="devotional" data={devotion.length} />
          </Grid>
        </Box>
        <Box display="flex" w="full" gap="2rem">
          <Box w="70%">
            <DashboardTab tabsData={tabsData} />
          </Box>
          <Box w="30%">
            <AsideTwo />
          </Box>
        </Box>
      </Box>
    </ContentLayout>
  );
};

export default AnalyticsPage;
