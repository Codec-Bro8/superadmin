import { HomeIcon, AnalyticsIcon, ChurchesIcon, UsersIcon, DonationsIcon, NotificationIcon, ReportIcon, LogoutIcon } from "../components/ui/svg/svg";

export const mainNavItems: ISidebarProps[] = [
  { 
    name: 'Home', 
    path: '/superadmin/home', 
    icon: <HomeIcon />,
  },
  { 
    name: 'Analytics', 
    path: '/superadmin/analytics', 
    icon: <AnalyticsIcon /> 
  },
  { 
    name: 'Churches', 
    path: '/superadmin/churches', 
    icon: <ChurchesIcon /> 
  },
  { 
    name: 'Users', 
    path: '/superadmin/users', 
    icon: <UsersIcon /> 
  },
  { 
    name: 'Donations', 
    path: '/superadmin/donations', 
    icon: <DonationsIcon /> 
  },
  { 
    name: 'Notifications', 
    path: '/superadmin/notifications', 
    icon: <NotificationIcon /> 
  },
];

export const bottomNavItems: ISidebarProps[] = [
  { 
    name: 'Report Content', 
    path: '/superadmin/report-content', 
    icon: <ReportIcon />,
  },
  { 
    name: 'Logout', 
    path: '/superadmin/logout', 
    icon: <LogoutIcon /> 
  },
];
