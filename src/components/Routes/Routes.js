import React from 'react';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import Layout from '../Layout/Layout';

const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
]);

const TemplateRoutes = () => <RouterProvider router={routerConfig} />;

export default TemplateRoutes;
