import React from 'react';

const Footer: React.FC = () => {
  //TODO: Improve Footer
  return (
    <footer className="bg-gray-600 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">Oliver Andersen E-Commerce build</p>
        <p className="text-sm">
          <a href="mailto:oliver.andersen12@hotmail.com">
            Contact: oliver.andersen12@hotmail.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
