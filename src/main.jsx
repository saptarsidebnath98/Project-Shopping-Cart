/* eslint-disable react-refresh/only-export-components */
// import { StrictMode } from 'react'
import { lazy } from 'react'
import { createRoot } from 'react-dom/client'
import {  createHashRouter, RouterProvider,} from "react-router-dom"
import App from './App.jsx'
import Home from './components/home/HomePage.jsx'
import ErrorPage from './components/error/ErrorPage.jsx'
import CartContextProvider from './components/context/CartContext.jsx'
import './index.css'

//applying Lazy Loading
const ShoppingPage = lazy(()=> import('./components/shopping/ShoppingPage.jsx'));
const Contacts = lazy(()=> import('./components/contacts/ContactsPage.jsx'));
const CartPage = lazy(()=> import('./components/Cart/CartPage.jsx'));
const ProductInfo = lazy(()=> import('./components/shopping/product/ProductInfo.jsx'));
const BillPage = lazy(()=> import('./components/bill/BillPage.jsx'));

//creating routes
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children:[
      { index: true, element: <Home /> }, //the default component that will be displayed
      {
        path: "/home",
        element: <Home/>,
      },
      {
        path: "/contacts",
        element: <Contacts/>,
      },
      {
        path: "/shopping",
        element: <ShoppingPage/>,
      },
      {
        path: "/productInfo/:id",
        element: <ProductInfo/>,
      },
      {
        path: "/cart",
        element: <CartPage/>,
      },
      {
        path: "/billing",
        element: <BillPage/>,
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <CartContextProvider>
    <RouterProvider router={router} />
  </CartContextProvider>
)
