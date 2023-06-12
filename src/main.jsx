import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Shared/Home/Home/Home';
import Nevber from './Component/Nevber/Nevber';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='md:max-w-screen-lg justify-center items-center	mx-auto'>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
