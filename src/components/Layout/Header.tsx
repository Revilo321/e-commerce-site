import Link from 'next/link';
import { Montserrat_Alternates } from 'next/font/google';
import React from 'react';

const monts = Montserrat_Alternates({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const Header: React.FC = () => {
  const routes = [
    { path: 'Home', href: '/homepage' },
    { path: 'Products', href: '/products' },
    { path: 'Account', href: '/account' },
  ];
  return (
    <header className={`shadow-md py-4 ${monts.className}`}>
      <div className="container mx-auto flex items-center justify-around">
        <nav>
          <ul className="flex space-x-10">
            {routes.map((route, i) => (
              <li key={i}>
                <Link href={route.href}>{route.path}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
