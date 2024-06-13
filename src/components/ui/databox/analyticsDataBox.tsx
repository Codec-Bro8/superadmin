import React from 'react';
import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import { FaChurch, FaUsers, FaDollarSign, FaBell } from 'react-icons/fa'; // Example icons, adjust as necessary
import styles from '@/styles/DataBox.module.scss';

interface DataBoxProps {
  type: 'video' | 'music' | 'blog' | 'devotional';
  data: number;
}

const icons = {
  video: FaChurch,
  music: FaUsers,
  blog: FaDollarSign,
  devotional: FaBell,
};

const colors = {
  video: '#00D1FF',
  music: '#FF00B8',
  blog: '#FFD700',
  devotional: '#FF6347',
};

const AnalyticsDataBox: React.FC<DataBoxProps> = ({ type, data }) => {
  const IconComponent = icons[type];
  const bgColor = colors[type];

  return (
    <Box 
      justifyContent='start' 
      gap='1rem'
      background={'shade.3'}
      borderRadius='10px'
      p='1.2em'
      display='flex'
    >
      <Flex
        align="center"
        justifyContent="center"
        className={styles.iconBox}
        bg={bgColor}
        borderRadius="50%"
        p='1.2rem'
        w='3.4rem' h='3.4rem'
        color='black.1'
      >
        <Icon as={IconComponent} className={styles.icon} fontSize='28px' />
      </Flex>
      <Flex className={styles.textBox} justify='start' flexDirection="column" alignItems="start">
        <Text color='white' fontSize="2xl" fontWeight="bold" >{data}</Text>
        <Text className={styles.label}>Total {type.charAt(0).toUpperCase() + type.slice(1)}</Text>
      </Flex>
    </Box>
  );
};

export default AnalyticsDataBox;
