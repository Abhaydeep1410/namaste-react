import React from "react";
import ReactDOM from "react-dom/client";

//default imports
import HeaderComponent from "./component/Header";

//named imports
import { Title } from "./component/Header";

import BodyComponent from "./component/Body";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./component/About";
import Error from "./component/Error";
import { RestaurantMenu } from "./component/RestaurantMenu";
import Contact from "./component/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 *
 * Header
 *  -Logo
 *  -nav items(right side)
 *  -cart
 * Body
 *  -search bar
 *  -restaurant List
 *      -resturant Card
 *          -Image
 *          -Name
 *          -rating
 *          -cuisines
 *
 * Footer
 *      -links
 *      -about
 */

const AppLayout = () => (
  <>
    <HeaderComponent />
    <Outlet />
    <FooterComponent />
  </>
);

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayout />,
//     errorElement:<Error/>,

//   },
//   {
//     path:"/about",
//     element:<About/>
//   },
// ]);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/contact",
        element:<Contact contact="123"/>
      },
    ],
  },
]);

const FooterComponent = () => {};

root.render(<RouterProvider router={appRouter} />);
