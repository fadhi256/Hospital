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
import ServicesDetail from './pages/ServicesDetail';

function App() {
  return (
    <> 
      <ScrollToTop />
      <TopBar />
      <Navbar />
      
      <MainLayout> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServicesDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
      
      <Footer />
    </>
    
  );
}

export default App;