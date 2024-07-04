import React , {useState} from 'react';
import { Box, Tabs, TabList, Tab, TabIndicator, TabPanels, TabPanel, Button, List, ListItem, Text, Popover, PopoverTrigger, PopoverContent } from '@chakra-ui/react';
import Link from 'next/link';
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import { onboardedChurches, newlyRegisteredChurches } from '@/data/churchData';
import DeleteModal from '../disclosure/deleteMdal';
const ChurchTab = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => setModalOpen(true);
    const handleCloseModal = () => setModalOpen(false);
    const handleDelete = () => {
        // Perform delete action
        handleCloseModal();
    };

    return (
        <Box>
            <Tabs position="relative" variant="unstyled">
                <TabList color='primary'>
                    <Tab>Onboarded</Tab>
                    <Tab>Newly Registered</Tab>
                </TabList>
                <TabIndicator mt="-1.5px" height="2px" bg="primary" borderRadius="1px" w='50px' />
                <TabPanels pt='1rem'>
                    <TabPanel>
                        <List spacing={3}>
                            {onboardedChurches.map((church) => (
                                <ListItem key={church.id}
                                    borderRadius='10px'
                                    bg='shade.3'
                                    p='1rem'
                                    className='flex justify-between items-center'
                                >
                                    <Link href={`/superadmin/churches/onboarded/${encodeURIComponent(church.name)}`} passHref>
                                        <Box className='flex gap-4 justify-start items-start' cursor="pointer">
                                            <Box w='48px' h='48px' borderRadius='50%' bg='white.2'></Box>
                                            <Box>
                                                <Text fontWeight="bold">{church.name}</Text>
                                                <Text>Manager: {church.manager}</Text>
                                                <Text>{church.followers} followers</Text>
                                            </Box>
                                        </Box>
                                    </Link>
                                    <Popover>
                                        <PopoverTrigger>
                                            <Button bg='none' color='white.1' _hover={{ bg: 'none' }} ><BsThreeDotsVertical color='white.1' fontSize='24px' /></Button>
                                        </PopoverTrigger>
                                        <PopoverContent width='fit-content' bg='black.1'>
                                            <Button bg='none' width='fit-content' color='white.1' _hover={{bg: 'primary'}} onClick={handleOpenModal} ><MdDeleteOutline /></Button>
                                        </PopoverContent>
                                    </Popover>
                                    <DeleteModal 
                                        isOpen={isModalOpen} 
                                        onClose={handleCloseModal} 
                                        message="Are you sure you want to delete this account?" 
                                        onDelete={handleDelete} 
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </TabPanel>
                    <TabPanel>
                        <List spacing={3}>
                            {newlyRegisteredChurches.map((church) => (
                                <ListItem
                                    key={church.id}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="space-between"
                                    borderRadius='10px'
                                    p='1rem'
                                >
                                    <Link href={`/superadmin/churches/newly-registered/${encodeURIComponent(church.name)}`} passHref>
                                        <Box className='flex gap-4 justify-start items-start' cursor="pointer">
                                            <Box w='48px' h='48px' borderRadius='50%' bg='white.2'></Box>
                                            <Box>
                                                <Text fontWeight="bold">{church.name}</Text>
                                                <Text>Manager: {church.manager}</Text>
                                            </Box>
                                        </Box>
                                    </Link>
                                    <Box>
                                        <Button colorScheme="green" mr={2}>Approve</Button>
                                        <Button colorScheme="red">Freeze</Button>
                                    </Box>
                                </ListItem>
                            ))}
                        </List>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default ChurchTab;
