import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer";
import Loading from "../pages/Loading";

const HomeLayout = () => {
  const {state} = useNavigation();
  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="max-w-11/12 mx-auto "><Navbar></Navbar></div>
      <div >
        <div className="min-h-[calc(100vh-425px)]">
          {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>   }
          </div>
      <div><Footer></Footer></div>
      </div>
    </div>
  );
};

export default HomeLayout;
