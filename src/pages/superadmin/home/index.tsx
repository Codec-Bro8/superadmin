import { NextPageWithLayoutProps } from '@/types/type';
import HomePage from '@/components/pages/Home';

const Home: NextPageWithLayoutProps = () => {
  return (
    <HomePage />
  );
};

// Define layoutProps for this page
Home.layoutProps = {
  title: "Welcome back👋",
  searchBarProp: "Search...",
};

export default Home;
