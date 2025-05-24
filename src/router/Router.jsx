import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ExploreGardeners from "../pages/ExploreGardeners";
import GardenTip from "../pages/GardenTip";
import PrivateRoute from "../provider/PrivateRoute";
import MyTips from './../pages/MyTips';
import ErrorPage from './../pages/ErrorPage';
import BrowserTips from "../pages/BrowserTips";
import TipDetails from "../pages/TipDetails";
import UpdateTips from './../pages/UpdateTips';
import Signup from './../pages/Signup';
import Loading from "../pages/Loading";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout ,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true,
        loader: () => fetch('https://assignment-10-server-tau-peach.vercel.app/featured-gardeners'),
        hydrateFallbackElement : <Loading></Loading>,
        Component: Home, 
      },
      { path: "/login", Component: Login, },
      { path: "/signup", Component: Signup },
      { path: "/exploregardeners",
         Component: ExploreGardeners, },
      { path: "/browsertips",
        // loader: () => fetch('https://assignment-10-server-tau-peach.vercel.app/gardens'),
        // hydrateFallbackElement : <Loading></Loading>,
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
        loader: ({params}) => fetch(`https://assignment-10-server-tau-peach.vercel.app/gardens/${params.id}`),
        hydrateFallbackElement : <Loading></Loading>,
         element: <PrivateRoute>
          <TipDetails></TipDetails>
         </PrivateRoute>,
         },
         { path: "/update/:id",
          loader: ({params}) => fetch(`https://assignment-10-server-tau-peach.vercel.app/gardens/${params.id}`),
          hydrateFallbackElement : <Loading></Loading>,
          Component: UpdateTips, },
    ],
  },
]);