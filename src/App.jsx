// src/App.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom'; 

// Import your components
import ScrollToTop from './components/ScrollToTop'; 
import TopBar from './components/TopBar'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    // 2. DO NOT wrap with <BrowserRouter> here
    <> 
      <ScrollToTop />
      <TopBar />
      <Navbar />
      
      {/* 3. Adjust padding to match your sticky header height */}
      <MainLayout> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
      
      <Footer />
    </>
    
  );
}

export default App;