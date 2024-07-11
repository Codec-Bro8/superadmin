import React, { useEffect } from "react";

import { useApiStore } from "../../store/zusatndStore";
import DataBox from "../ui/databox/databox";
import { Box, Grid } from "@chakra-ui/react";
import { TotaldashboardData } from "@/data/dashboardData";
import ChurchTab from "../ui/tabs/churchtab";
import ContentLayout from "../layouts/contentLayout";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/service/calls";

const ChurchesPage = () => {
  const { church, setChurch } = useApiStore();
  // const { data, error, isLoading } = useQuery({
  //   queryKey: ["church"],
  //   queryFn: fetchData,
  //   // enabled: hasToken,
  //   staleTime: 60 * 5 * 1000,
  // });

  // useEffect(() => {
  //   if (data) {
  //     setChurch(data);
  //   }
  // }, [data, setChurch]);

  // console.log(data);

  // // if (!isMounted || isLoading) {
  // //   return null; // or a loading spinner
  // // }
  return (
    <ContentLayout>
      <Box w="50%">
        <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6}>
          <DataBox type="Total church" data={church.length} />
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
