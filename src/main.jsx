import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import { Root } from 'postcss';
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Donation from './components/Donation/Donation';
import DonationDetails from './components/Donation/DonationDetails';
import Statistics from './components/Donation/Statistics';
import ErrorPage from './components/ErrorPage/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element:<Home/>,
        loader: () => fetch("/donation.json"),
      },
      {
        path: "/donations",
        element:<Donation/>,
      },
      {
        path: "/donation/:id",
        element:<DonationDetails/>,
        // loader: ({params}) => fetch(`/donation/${params.id}`),
        loader: () => fetch("/donation.json"),
      },
      {
        path: "/statistics",
        element:<Statistics/>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
