import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  //TODO: Make an array of links instead of hard coding each one.
  return (
    <header className="bg-gray-200 py-4">
      <div className="container mx-auto flex items-center justify-around">
        <nav>
          <ul className="flex space-x-10">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/cart">Cart</Link>
            </li>
            <li>
              <Link href="/account">Account</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
