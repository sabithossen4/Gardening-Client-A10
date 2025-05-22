import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div >
      <div className="max-w-11/12 mx-auto "><Navbar></Navbar></div>
      <div className="max-w-[1280px] mx-auto">
        <div className="min-h-[calc(100vh-425px)]"><Outlet></Outlet></div>
      <div><Footer></Footer></div>
      </div>
    </div>
  );
};

export default HomeLayout;
