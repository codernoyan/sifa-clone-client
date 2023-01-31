/* eslint-disable linebreak-style */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

export default function Main() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-2 md:px-0">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
