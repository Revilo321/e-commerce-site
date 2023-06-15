import React, { ReactNode } from 'react';

import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <div className="pt-10">{/* <Footer /> */}</div>
    </div>
  );
};

export default Layout;
