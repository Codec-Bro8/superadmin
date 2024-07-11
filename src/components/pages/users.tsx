import React from "react";
import DataBox from "../ui/databox/databox";
import { Box, Grid } from "@chakra-ui/react";
import { TotaldashboardData } from "@/data/dashboardData";
import LineChart from "../ui/dashboard/lineGraph";
import { lineGraphData } from "@/data/graphData";
import ContentLayout from "../layouts/contentLayout";
import Audience from "../ui/dashboard/audience";
import { useApiStore } from "@/store/zusatndStore";

const UserPage = () => {
  const { users } = useApiStore();
  return (
    <ContentLayout>
      <Box w="100%" display="flex" flexDirection="column" gap="2rem">
        <Box w="50%">
          <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6}>
            <DataBox type="Total users" data={users.length} />
            <DataBox
              type="active users"
              data={TotaldashboardData.activeUsers}
            />
          </Grid>
        </Box>
        <Box
          w="70%"
          borderRadius="10px"
          display="flex"
          flexDir="column"
          gap="3rem"
        >
          <LineChart title="Active users per week" data={lineGraphData} />
          <Audience />
        </Box>
      </Box>
    </ContentLayout>
  );
};

export default UserPage;
