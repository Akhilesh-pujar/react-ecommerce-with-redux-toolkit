import React from 'react';
import Home from './pages/Home';
import Loginpage from './pages/Loginpage';
import Signuppage from './pages/Signuppage';

import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


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
]);

function App() {
  return (
    <div >
   <RouterProvider router={router} />
    </div>
  );
}

export default App;
