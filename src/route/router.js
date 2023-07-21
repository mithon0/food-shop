import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from '../LayOut/Main/Main';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import Profile from '../Pages/Profile/Profile';
import Dashboard from '../LayOut/Dashboard/Dashboard';
import Members from '../Pages/DashboardPage/Members';
import AllAdmin from '../Pages/DashboardPage/AllAdmin';


const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/profile',
          element:<Profile></Profile>
        },
        
      ]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'/dashboard',
          element:<Members></Members>,
          loader:()=>fetch('http://localhost:5000/users')
        },
        {
          path:'/dashboard/admin',
          element:<AllAdmin></AllAdmin>
        }
      ]

    }
  ]);


export default router;