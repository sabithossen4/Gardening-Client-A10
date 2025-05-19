import { Component } from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ExploreGardeners from "../pages/ExploreGardeners";
import GardenTip from "../pages/GardenTip";
import MyTips from "../pages/MyTips";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout ,
    children: [
      { path: "/", Component: Home, },
      { path: "/login", Component: Login, },
      { path: "/signup", Component: Signup, },
      { path: "/exploregardeners", Component: ExploreGardeners, },
      { path: "/gardentip", Component: GardenTip, },
      { path: "/mytips", Component: MyTips, },
    ],
  },
]);