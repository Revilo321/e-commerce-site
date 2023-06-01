import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';
import '@/styles/globals.css';
import Layout from '@/components/Layout/LayoutComponent';

const monts = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main className={monts.className}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
