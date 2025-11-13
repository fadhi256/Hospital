// src/components/ScrollToTop.jsx

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Get the current location object (pathname, search, hash, etc.)
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the pathname changes
    window.scrollTo(0, 0);

    // Dependency array: only re-run the effect when the pathname changes
  }, [pathname]);

  // This component doesn't render anything, it only manages a side effect
  return null;
};

export default ScrollToTop;