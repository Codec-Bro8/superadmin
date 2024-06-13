// /components/layouts/DashboardLayout.tsx
import { ReactNode } from 'react';
import { Input, Text, InputGroup, InputLeftElement } from '@chakra-ui/react';
import DashboardSideBar from '../ui/dashboard/DashboardSidebar';
import styles from '@/styles/Dashboard.module.scss';
import Image from 'next/image';
import { CiSearch } from "react-icons/ci";

interface IDashboardLayoutProps {
  title?: string;
  searchBarProp?: string;
  children: ReactNode;
}

const DashboardLayout = ({ title, searchBarProp, children }: IDashboardLayoutProps) => {
  return (
    <div className={styles.container}>
      <DashboardSideBar />
      <div className={styles.content}>
        <div className={styles.dashboardHead}>
          {title ? <Text fontSize="2xl" fontWeight='medium' mb="4">{title}</Text>: <Text></Text>}
          <div className={styles.dashboardRightHead}>
            <div className={styles.input}>
              <InputGroup className='flex justify-center items-center' py='10px' px='20px' background={'shade.3'} >
                <InputLeftElement pointerEvents='none' h='100%'>
                  <CiSearch color='icon.1' fontSize='1.5rem' />
                </InputLeftElement>
                <Input variant='unstyled' type='text' placeholder={searchBarProp} background={'shade.3'}  />
              </InputGroup>
            </div>
            <div className={styles.userDiv}>
              <Image alt='userImg' src='/user.png' width={50} height={50} />
              <div>
                <Text as='p' fontSize='medium'>James Daniel</Text>
                <small>Administrator</small>
              </div>
            </div>
          </div>
        </div>
        <div >
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
