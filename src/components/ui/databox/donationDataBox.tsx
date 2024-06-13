import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { formatDistanceToNow, isBefore, subDays, subMonths, format } from 'date-fns';

interface DataBoxProps {
  title: string;
  data: number;
  increase: number;
  upload: string; // assuming upload is passed as a string in ISO format
}

const DonationDataBox: React.FC<DataBoxProps> = ({ title, data, increase, upload }) => {
  const uploadDate = new Date(upload);
  const now = new Date();

  const getFormattedDate = (date: Date): string => {
    const oneDayAgo = subDays(now, 1);
    const threeDaysAgo = subDays(now, 3);
    const oneMonthAgo = subMonths(now, 1);

    if (isBefore(date, oneMonthAgo)) {
      return format(date, 'MMMM do, yyyy');
    } else if (isBefore(date, threeDaysAgo)) {
      return formatDistanceToNow(date, { addSuffix: true });
    } else if (isBefore(date, oneDayAgo)) {
      return formatDistanceToNow(date, { addSuffix: true });
    } else {
      return formatDistanceToNow(date, { addSuffix: true });
    }
  };

  const formattedUploadDate = getFormattedDate(uploadDate);
  const increaseColor = increase > 0 ? 'green.500' : increase < 0 ? 'red.500' : 'gray.500';

  return (
    <Box
      justifyContent='start'
      gap='.2rem'
      background={'shade.3'}
      borderRadius='26px'
      p='2.6rem'
      display='flex'
      flexDirection='column'
      color='white.1'
    >
      <Text color='white.2'>{title}</Text>
      <Flex justify='start' flexDirection="column" alignItems="start">
        <Text fontSize="5xl" fontWeight="500">
          {title.includes('donor') ? '' : '$'}{data}
        </Text>
        <Text><Text as='span' color={increaseColor}>{increase > 0 ? '+' : ''}{increase}</Text> Than last month</Text>
        <Text as='small'>Updated {formattedUploadDate}</Text>
      </Flex>
    </Box>
  );
};

export default DonationDataBox;
