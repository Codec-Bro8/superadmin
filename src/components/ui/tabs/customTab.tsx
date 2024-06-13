import React, { ReactNode } from 'react';
import { Tab } from '@chakra-ui/react';

interface CustomTabProps {
  children: ReactNode;
}

const CustomTab = ({ children }: CustomTabProps) => {
  return (
    <Tab bg='shade.1' color='white' _selected={{ color: 'white.1', bg: 'primary' }}>
      {children} 
    </Tab>
  );
};

export default CustomTab;
