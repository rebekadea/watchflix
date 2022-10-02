import type { AppProps } from 'next/app';
import { NextPageWithLayout } from './page';
import './globals.css';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
