import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';
import '@/styles/globals.css';
import Layout from '@/components/Layout/LayoutComponent';
import { ProductProvider } from '@/context/ProductContext';
import { SessionProvider } from 'next-auth/react';

const monts = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ProductProvider>
        <Layout>
          <main className={monts.className}>
            <Component {...pageProps} />
          </main>
        </Layout>
      </ProductProvider>
    </SessionProvider>
  );
}
