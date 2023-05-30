import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 text-gray-700 py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; 2023 My E-commerce Store. All rights reserved.
        </p>
        <p className="text-sm">Contact: info@example.com</p>
      </div>
    </footer>
  );
};

export default Footer;
