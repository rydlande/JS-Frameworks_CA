import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home, Specific, Cart, Products, Contact, CheckoutSuccess } from './routes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'shop',
        element: <Products />,
      },
       {
        path: 'shop/:id',
        element: <Specific />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'cart/success',
        element: <CheckoutSuccess />,
      },
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
