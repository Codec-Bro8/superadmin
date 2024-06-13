import React from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel, Box, Stat, StatLabel, StatNumber } from '@chakra-ui/react';
import LineChart from '../dashboard/lineGraph';
import { lineGraphData } from '@/data/graphData';


interface DashboardTabProps {
    tabsData: TabData[];
}

const DashboardTab: React.FC<DashboardTabProps> = ({ tabsData }) => {
    return (
        <Box>
            <Tabs isFitted variant='unstyled'>
                <TabList bgColor={'shade.3'} p='10px' borderRadius='10px'>
                    {tabsData.map((tab, index) => (
                        <Tab 
                            key={index} 
                            _selected={{ color: 'white', bg: 'shade.4' }}
                            borderRadius='10px'
                            p='1.2rem'
                        >
                            {tab.title}
                        </Tab>
                    ))}
                </TabList>
                <TabPanels>
                    {tabsData.map((tab, index) => (
                        <TabPanel key={index}>
                            <div>
                                <div className='flex gap-6'>
                                    {tab.avgWatchTime && (
                                        <Stat>
                                            <StatLabel>Avg Watch Time</StatLabel>
                                            <StatNumber>{tab.avgWatchTime}</StatNumber>
                                        </Stat>
                                    )}
                                    {tab.likes && (
                                        <Stat>
                                            <StatLabel>Likes</StatLabel>
                                            <StatNumber>{tab.likes}</StatNumber>
                                        </Stat>
                                    )}
                                    {tab.engagements && (
                                        <Stat>
                                            <StatLabel>Engagements</StatLabel>
                                            <StatNumber>{tab.engagements}</StatNumber>
                                        </Stat>
                                    )}
                                    {tab.avgListeningDuration && (
                                        <Stat>
                                            <StatLabel>Avg Listen Duration</StatLabel>
                                            <StatNumber>{tab.avgListeningDuration}</StatNumber>
                                        </Stat>
                                    )}
                                    {tab.uniqueListeners && (
                                        <Stat>
                                            <StatLabel>Unique Listeners</StatLabel>
                                            <StatNumber>{tab.uniqueListeners}</StatNumber>
                                        </Stat>
                                    )}
                                    {tab.shareRate && (
                                        <Stat>
                                            <StatLabel>Share Rate</StatLabel>
                                            <StatNumber>{tab.shareRate}</StatNumber>
                                        </Stat>
                                    )}
                                    {tab.download && (
                                        <Stat>
                                            <StatLabel>Downloads</StatLabel>
                                            <StatNumber>{tab.download}</StatNumber>
                                        </Stat>
                                    )}
                                    {tab.avgReadTime && (
                                        <Stat>
                                            <StatLabel>Avg Read Time</StatLabel>
                                            <StatNumber>{tab.avgReadTime}</StatNumber>
                                        </Stat>
                                    )}
                                    {tab.pageViews && (
                                        <Stat>
                                            <StatLabel>Page Views</StatLabel>
                                            <StatNumber>{tab.pageViews}</StatNumber>
                                        </Stat>
                                    )}
                                    {tab.contentLikes && (
                                        <Stat>
                                            <StatLabel>Content Likes</StatLabel>
                                            <StatNumber>{tab.contentLikes}</StatNumber>
                                        </Stat>
                                    )}
                                    {tab.contentShares && (
                                        <Stat>
                                            <StatLabel>Content Shares</StatLabel>
                                            <StatNumber>{tab.contentShares}</StatNumber>
                                        </Stat>
                                    )}
                                </div>
                                <div>
                                    <LineChart title={tab.title} data={lineGraphData} />
                                </div>
                            </div>
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default DashboardTab;
