import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Home from '../../Pages/Home';
import Carpark from '../../Pages/Carpark';
import PrivacyPolicy from '../../Pages/kvkk';
import CookiePolicy from '../../Pages/CookiePolicy';
import About from '../../Pages/About';
import Contact from '../../Pages/Contact';
import { useEffect } from 'react';
import Loading from '../Loading';


const RoutePage = () => {

  const location=useLocation();
  const [loading, setLoading] = useState(false);
 useEffect(() => {
    // Sayfa değişince loading başlat
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 100); 
    return () => clearTimeout(timeout);
  }, [location.pathname]);


  return loading ? (
    <Loading />
  ) : (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/carpark" element={<Carpark />} />
        <Route path="/KVKK" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About />} />
      </Routes>
  )
}

export default RoutePage