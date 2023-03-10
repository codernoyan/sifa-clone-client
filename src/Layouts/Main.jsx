/* eslint-disable linebreak-style */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

export default function Main() {
  return (
    <div>
      <Navbar />
      <div className="bg-grayBg">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
