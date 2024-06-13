import { NextPage } from 'next';

export type NextPageWithLayoutProps = NextPage & {
  layoutProps?: {
    title?: string;
    searchBarProp?: string;
  };
};
