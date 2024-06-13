import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import DashboardLayout from '../components/layouts/DashboardLayout';
import '../styles/global.scss';
import { ChakraProvider } from '@chakra-ui/react';
import { NextPageWithLayoutProps } from '@/types/type'; 
import theme from '@/configs/chakraTheme';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayoutProps;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const router = useRouter();

  const isSuperAdminRoute = router.pathname.startsWith('/superadmin');

  if (isSuperAdminRoute) {
    const { layoutProps } = Component;

    return (
      <ChakraProvider theme={theme}>
        <DashboardLayout {...layoutProps}>
          <Component {...pageProps} />
        </DashboardLayout>
      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
