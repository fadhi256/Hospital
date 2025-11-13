// src/components/MainLayout.jsx

import React from 'react';
import { useLocation } from 'react-router-dom';

const MainLayout = ({ children }) => {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

  // Only add top padding if we are NOT on the homepage
  const paddingClass = isHomePage ? '' : 'pt-32'; 

  return (
    <main className={`flex-grow ${paddingClass}`}>
      {children}
    </main>
  );
};

export default MainLayout;