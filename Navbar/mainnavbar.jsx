import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './navbarcomponent.jsx';
import MainHome from '../../Modules/Home/mainhomemodule.jsx';
import Rentmodule from '../../Modules/Rent/rentmodule.jsx';
import Contact from '../../Modules/contact-us/contactUs.jsx';
// Import your other components

export default function MainNavbar() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/home" element={<MainHome />} />
        <Route path="/rent" element={<Rentmodule />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}


