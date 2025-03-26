import React from 'react'
import Navbar from '../Navbar/index.jsx';
import Footer from '../Footer/index.jsx';
import { BrowserRouter as Router } from "react-router-dom";
import Hero from '../Hero/index.jsx';
import RoutePage from '../Route/index.jsx';

const Layout = () => {
  return (
    <div>
     
        <Navbar />
        <div className='h-full'>
          <RoutePage />
        </div>
        <Footer />
  
    </div>

  )
}

export default Layout;