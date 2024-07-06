import React from "react";
import { useEffect } from "react";
import { useApiStore } from "../../store/zusatndStore";
import DataBox from "../ui/databox/databox";
import { Box, Grid } from "@chakra-ui/react";
import { TotaldashboardData } from "@/data/dashboardData";
import ChurchTab from "../ui/tabs/churchtab";
import ContentLayout from "../layouts/contentLayout";

import { fetchApiData } from "../../service/request";

const ChurchesPage = () => {
  const { church, setChurch } = useApiStore();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const responseData = await fetchApiData("/user/getChurches");
  //     console.log("Response Data:", responseData);
  //     // setChurch(church);
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await fetchApiData("/user/getChurches");
        console.log("Response Data:", responseData);
      } catch (error) {
        console.error("Error fetching churches:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ContentLayout>
      <Box w="50%">
        <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6}>
          <DataBox type="Total church" data={TotaldashboardData.totalChurch} />
          <DataBox
            type="active churches"
            data={TotaldashboardData.activeChurch}
          />
        </Grid>
      </Box>
      <Box>
        <ChurchTab />
      </Box>
    </ContentLayout>
  );
};

export default ChurchesPage;
