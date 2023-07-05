import React from 'react';
import Home from './pages/Home';
import Loginpage from './pages/Loginpage';
import Signuppage from './pages/Signuppage';

import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/signup",
    element: <Signuppage/>,
  },
  {
    path: "/login",
    element: <Loginpage/>,
  },
  {
    path: "/cart",
    element: <CartPage/>,
  },
  {
    path: "/checkout",
    element: <CheckoutPage/>,
  },
]);

function App() {
  return (
    <div >
   <RouterProvider router={router} />
    </div>
  );
}

export default App;
