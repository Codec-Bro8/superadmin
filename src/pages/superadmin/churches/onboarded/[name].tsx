import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Box, Tabs, TabList, TabPanels, TabPanel, Text, Button } from '@chakra-ui/react';
import { MdDeleteOutline } from 'react-icons/md';
import CustomTab from '@/components/ui/tabs/customTab';
import { onboardedChurchData } from '@/data/churchData';
import ContentLayout from '@/components/layouts/contentLayout';
import DeleteModal from '@/components/ui/disclosure/deleteMdal';
import StyledSelect from '@/components/ui/input/select';

interface RouterQuery {
  name?: string;
}

interface Video {
  coverImg: string;
  title: string;
  date: string;
}

interface Music {
  image: string;
  title: string;
  singer: string;
}

interface Blog {
  image: string;
  title: string;
  date: string;
}

interface Devotional {
  title: string;
  date: string;
  preview: string;
}

const OnboardedChurchDetail: React.FC = () => {
  const router = useRouter();
  const { name } = router.query as RouterQuery;

  // Find the church data based on the name from query params
  const churchData = onboardedChurchData.find((church: any) => church.churchName === name);

  if (!churchData) {
    return <Box>Error: Church not found</Box>;
  }

  const [modalState, setModalState] = useState({ isOpen: false, message: '', onDelete: () => {} });

  const handleOpenModal = (message: string, onDelete: () => void) => {
    setModalState({ isOpen: true, message, onDelete });
  };

  const handleCloseModal = () => setModalState({ isOpen: false, message: '', onDelete: () => {} });

  return (
    <ContentLayout>
      <Box>
        <Tabs variant='soft-rounded'>
          <Box className='flex justify-between items-center'>
            <TabList className='flex gap-5'>
              <CustomTab>Videos</CustomTab>
              <CustomTab>Music</CustomTab>
              <CustomTab>Blogs</CustomTab>
              <CustomTab>Devotionals</CustomTab>
            </TabList>
            <StyledSelect placeholder='Sort by' w='10%'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </StyledSelect>
          </Box>
          <TabPanels>
            <TabPanel className='flex gap-3'>
              {churchData.videos.map((video: Video, index: number) => (
                <Box key={index} p={4} fontSize='small' w='20%'>
                  <Box className='relative'>
                    <img src={video.coverImg} alt={video.title} width='150%' />
                    <Text as='span' className='absolute bg-shade-1 top-1 right-3 rounded-md p-2'>20:00</Text>
                  </Box>
                  <Box>
                    <Text fontWeight='bold'>{video.title}</Text>
                    <Text>{name}</Text>
                    <Box className='flex justify-between items-start'>
                      <Text fontSize='x-small'>{video.date}</Text>
                      <Button
                        bg='none'
                        width='fit-content'
                        color='white.1'
                        _hover={{ bg: 'primary' }}
                        onClick={() => handleOpenModal('Are you sure you want to delete this video?', () => {
                          // Perform delete action
                          console.log('Video deleted');
                          handleCloseModal();
                        })}
                      >
                        <MdDeleteOutline />
                      </Button>
                    </Box>
                  </Box>
                </Box>
              ))}
            </TabPanel>
            <TabPanel className='flex gap-3'>
              {churchData.music.map((music: Music, index: number) => (
                <Box key={index} p={4} fontSize='small' w='20%'>
                  <Box className='relative'>
                    <img src={music.image} alt={music.title} width='150%' />
                    <Text as='span' className='absolute bg-shade-1 top-1 right-3 rounded-md p-2'>05:00</Text>
                  </Box>
                  <Box>
                    <Text fontWeight='bold'>{music.title}</Text>
                    <Box className='flex justify-between items-start'>
                      <Text fontSize='x-small'>{music.singer}</Text>
                      <Button
                        bg='none'
                        width='fit-content'
                        color='white.1'
                        _hover={{ bg: 'primary' }}
                        onClick={() => handleOpenModal('Are you sure you want to delete this music?', () => {
                          // Perform delete action
                          console.log('Music deleted');
                          handleCloseModal();
                        })}
                      >
                        <MdDeleteOutline />
                      </Button>
                    </Box>
                  </Box>
                </Box>
              ))}
            </TabPanel>
            <TabPanel className='flex gap-3'>
              {churchData.blogs.map((blog: Blog, index: number) => (
                <Box key={index} p={4} fontSize='small' w='20%'>
                  <Box className='relative rounded-xl'>
                    <img src={blog.image} alt={blog.title} width='150%' className='rounded-xl' />
                    <Text as='span' className='absolute bg-shade-1 top-1 right-3 rounded-md p-2 text-xs'>{blog.date}</Text>
                    <Box bg='shade.3' pos='absolute' bottom='0px' w='100%' p='1.5rem' borderRadius='8px'>
                      <Text fontWeight='bold'>{blog.title}</Text>
                      <Box className='flex justify-between items-start'>
                        <Text fontSize='x-small'>{blog.date}</Text>
                        <Button
                          bg='none'
                          width='fit-content'
                          color='white.1'
                          _hover={{ bg: 'primary' }}
                          onClick={() => handleOpenModal('Are you sure you want to delete this blog?', () => {
                            // Perform delete action
                            console.log('Blog deleted');
                            handleCloseModal();
                          })}
                        >
                          <MdDeleteOutline />
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </TabPanel>
            <TabPanel className='flex gap-3'>
              {churchData.devotionals.map((devotional: Devotional, index: number) => (
                <Box key={index} p='1rem' bg='shade.3' borderRadius='8px' w='20%' display='flex' flexDir='column' gap='1rem'>
                  <Text as='h3' fontSize='large'>{devotional.title}</Text>
                  <Text fontSize='small'>{devotional.date}</Text>
                  <p>{devotional.preview}</p>
                  <Box className='flex justify-end'>
                    <Button
                      bg='none'
                      width='fit-content'
                      color='white.1'
                      _hover={{ bg: 'primary' }}
                      onClick={() => handleOpenModal('Are you sure you want to delete this devotional?', () => {
                        // Perform delete action
                        console.log('Devotional deleted');
                        handleCloseModal();
                      })}
                    >
                      <MdDeleteOutline />
                    </Button>
                  </Box>
                </Box>
              ))}
            </TabPanel>
          </TabPanels>
        </Tabs>
        <DeleteModal
          isOpen={modalState.isOpen}
          onClose={handleCloseModal}
          message={modalState.message}
          onDelete={modalState.onDelete}
        />
      </Box>
    </ContentLayout>
  );
};

export default OnboardedChurchDetail;
