// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  createHashRouter, RouterProvider,} from "react-router-dom"
import App from './App.jsx'
import Contacts from './components/contacts/ContactsPage.jsx'
import ShoppingPage from './components/shopping/ShoppingPage.jsx'
import Home from './components/HomePage.jsx'
import ErrorPage from './components/error/ErrorPage.jsx'
import CartContextProvider from './components/context/CartContext.jsx'
import CartPage from './components/shopping/CartPage.jsx'
import BillPage from './components/bill/BillPage.jsx'
import ProductInfo from './components/shopping/product/ProductInfo.jsx'
import './index.css'

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children:[
      { index: true, element: <Home /> },
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
  // <StrictMode>
  <CartContextProvider>
    <RouterProvider router={router} />
  </CartContextProvider>
  // </StrictMode>,
)
