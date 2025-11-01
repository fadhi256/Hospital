import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white p-4 text-center">
      © {new Date().getFullYear()} Hospital Name. All rights reserved.
    </footer>
  );
};

export default Footer;