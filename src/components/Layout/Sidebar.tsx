import Link from 'next/link';
import React from 'react';

const Sidebar: React.FC = () => {
  //TODO: Figure out actual categories
  return (
    <aside className="bg-gray-100 p-4">
      <h2 className="text-lg font-semibold mb-2">Categories</h2>
      <ul>
        <li>
          <Link href="/products?category=electronics">Electronics</Link>
        </li>
        <li>
          <Link href="/products?category=clothing">Clothing</Link>
        </li>
        <li>
          <Link href="/products?category=home">Home</Link>
        </li>
        <li>
          <Link href="/products?category=beauty">Beauty</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
