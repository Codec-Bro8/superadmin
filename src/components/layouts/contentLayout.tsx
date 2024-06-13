import React from 'react'
import { Box } from '@chakra-ui/react';

interface IContentLayoutProps{
    children: React.ReactNode;
}

const ContentLayout = ({children}:IContentLayoutProps) => {
  return (
    <Box
        w='100%'
        overflowY='auto'
        display='flex'
        h='80vh'
        flexDirection='column'
        gap='1rem'
    >
        {children}
    </Box>
  )
}

export default ContentLayout;