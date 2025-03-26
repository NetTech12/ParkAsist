import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../../Pages/Home';
import Carpark from '../../Pages/Carpark';
import PrivacyPolicy from '../../Pages/kvkk';
import CookiePolicy from '../../Pages/cookiePolicy';
import About from '../../Pages/about';
import Contact from '../../Pages/contact';

const RoutePage = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/carpark" element={<Carpark />} />
        <Route path="/KVKK" element={<PrivacyPolicy />} />
        <Route path="/cookiePolicy" element={<CookiePolicy/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About />} />



      </Routes>
  )
}

export default RoutePage