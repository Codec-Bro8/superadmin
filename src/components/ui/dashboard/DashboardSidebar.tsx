// /components/DashboardLayout.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@/styles/Dashboard.module.scss';
import Image from 'next/image';
import { mainNavItems, bottomNavItems } from '@/utils/DashboardNavItems';

const DashboardSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <motion.div
        className={styles.sidebar}
        animate={{ width: isOpen ? 250 : 60 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.logo} onClick={toggleSidebar}>
          {isOpen ? (
            <Image className={styles['logo-img']} src='/logo.png' alt='logo' width={110} height={34} />
          ) : (
            <Image className={styles['logo-img2']} src='/logo2.png' alt='logo' width={50} height={34} />
          )}
        </div>
        <nav className={`${styles.nav} ${isOpen ? 'px-5': 'px-2'}`}>
          {mainNavItems.map((item) => (
            <Link href={item.path} key={item.name}>
              <div 
                className={`${styles.navItem} 
                ${router.pathname === item.path ? styles.active : ''} `}
              >
                <span className={styles.icon}>{item.icon}</span>
                {isOpen && <span className={styles.text}>{item.name}</span>}
              </div>
            </Link>
          ))}
        </nav>
        <div className={`${styles.bottomNav} ${isOpen ? 'px-5': 'px-2'}`}>
          {bottomNavItems.map((item) => (
            <Link href={item.path} key={item.name}>
              <div 
                className={`${styles.navItem} 
                ${router.pathname === item.path ? styles.active : ''}`}
              >
                <span className={styles.icon}>{item.icon}</span>
                {isOpen && <span className={styles.text}>{item.name}</span>}
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardSideBar;
