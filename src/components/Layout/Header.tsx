import Link from 'next/link';
import { Montserrat_Alternates } from 'next/font/google';
import React from 'react';
import { useSession } from 'next-auth/react';

const monts = Montserrat_Alternates({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

//TODO:Cleanup design, add burgermenu
const Header: React.FC = () => {
  const { data: session } = useSession();
  const routes = [
    { path: 'Home', href: '/homepage' },
    { path: 'Products', href: '/products' },
  ];
  return (
    <header className={`shadow-md py-4 ${monts.className}`}>
      {session && (
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
          <Link className="text-xs" href="/api/auth/signout">
            Log ud
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
