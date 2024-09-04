import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Components/ErrorPage/ErrorPage';
import MainLayOut from './Components/MainLayOut/MainLayOut';
import Home from './Components/Home/Home';
import Donation from './Components/Donation/Donation';
import Statistics from './Components/Statistics/Statistics';
import Card from './Components/Card/Card';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/card/:id",
        element: <Card></Card>,
        loader: () => fetch('/data.json')
      },
      {
        path:"/donation",
        element: <Donation></Donation>
      },
      {
        path:"/statistics",
        element: <Statistics></Statistics>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
