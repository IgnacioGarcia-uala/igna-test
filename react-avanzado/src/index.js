import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './Pages/Home';
import { Error } from './Pages/Error';
import { Country } from './Pages/Country';
import { CountryList } from './Pages/CountryList';
import { About } from './Pages/About';

const router = createBrowserRouter([
  {
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <CountryList />,
      },
      {
        path: "/country/:countryId",
        element: <Country />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);
