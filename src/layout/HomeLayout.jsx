import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const HomeLayout = () => {
  return (
    <div>
      <div className='max-w-11/12 mx-auto '>
        <Navbar></Navbar>
      </div>
      {import.meta.env.VITE_name}
      <Outlet></Outlet>
    </div>
  );
};

export default HomeLayout;