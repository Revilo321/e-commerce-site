import React from 'react';

const Sidebar: React.FC = () => {

  //TODO: Figure out actual categories
  return (
    <aside className="bg-gray-100 p-4">
      <h2 className="text-lg font-semibold mb-2">Categories</h2>
      <ul>
        <li>
          <a href="/products?category=electronics">Electronics</a>
        </li>
        <li>
          <a href="/products?category=clothing">Clothing</a>
        </li>
        <li>
          <a href="/products?category=home">Home</a>
        </li>
        <li>
          <a href="/products?category=beauty">Beauty</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
