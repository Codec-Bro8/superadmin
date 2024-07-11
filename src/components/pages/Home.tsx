import React from "react";
import DataBox from "../ui/databox/databox";
import { Box, Grid } from "@chakra-ui/react";
import { donors, TotaldashboardData } from "@/data/dashboardData";
import BarChart from "../ui/dashboard/barGraph";
import { barGraphData, GraphicalStyle } from "@/data/graphData";
import AsideBar from "../ui/dashboard/aside/aside";
import ContentLayout from "../layouts/contentLayout";
import TopLocationDonor from "../ui/dashboard/Locationdonor";
import { useApiStore } from "@/store/zusatndStore";

const HomePage = () => {
  const { church, users } = useApiStore();

  return (
    <ContentLayout>
      <Box className="flex ">
        <Box w="70%" className="flex flex-col gap-8">
          <Box>
            <Grid
              templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
              gap={6}
            >
              <DataBox type="Total church" data={church.length} />
              <DataBox type="Total users" data={users.length} />
              <DataBox
                type="active users"
                data={TotaldashboardData.activeUsers}
              />
            </Grid>
          </Box>
          <Box bgColor="shade.3" borderRadius="10px">
            <BarChart
              title="Donation Analytics"
              data={barGraphData}
              styles={GraphicalStyle}
            />
          </Box>
          <TopLocationDonor title="Top location views" donors={donors} />
        </Box>
        <Box w="30%" p="1.5rem">
          <AsideBar />
        </Box>
      </Box>
    </ContentLayout>
  );
};

export default HomePage;
