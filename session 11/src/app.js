import React, { lazy, Suspense } from "react";
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
import Shimmer from "./component/Shimmer";

const root = ReactDOM.createRoot(document.getElementById("root"));

//chunking
//code splitting
//dynamic bundling
//lazy loading
//on demand loading

const Instamart = lazy(() => import("./component/Instamart"));
// when loading compoent in demand react try to suspend it and load it slower later
// to solve this we wrap this inside <Suspense>

const AppLayout = () => (
  <>
    <HeaderComponent />
    <Outlet />
    <FooterComponent />
  </>
);

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
        element: <Contact contact="123" />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const FooterComponent = () => {};

root.render(<RouterProvider router={appRouter} />);
