import { Component } from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ExploreGardeners from "../pages/ExploreGardeners";
import GardenTip from "../pages/GardenTip";

import PrivateRoute from "../provider/PrivateRoute";
import MyTips from './../pages/MyTips';
import ErrorPage from './../pages/ErrorPage';
import BrowserTips from "../pages/BrowserTips";
import TipDetails from "../pages/TipDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout ,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true,
        loader: () => fetch('http://localhost:3000/featured-gardeners'),
        Component: Home, 
      },
      { path: "/login", Component: Login, },
      { path: "/signup", Component: Signup, },
      { path: "/exploregardeners", Component: ExploreGardeners, },
      { path: "/browsertips",
        loader: () => fetch('http://localhost:3000/gardens'),
         Component: BrowserTips, 
        },
      { path: "/gardentip", element: <PrivateRoute>
        <GardenTip></GardenTip>
      </PrivateRoute> , },
      { path: "/mytips",               
        element: 
      <PrivateRoute>
          <MyTips></MyTips>
      </PrivateRoute> , },
      { path: "/browsertips/:id",
        loader: ({params}) => fetch(`http://localhost:3000/gardens/${params.id}`),
         Component: TipDetails,
         },
    ],
  },
]);