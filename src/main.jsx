import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  createBrowserRouter, RouterProvider,} from "react-router-dom"
import App from './App.jsx'
import Contacts from './components/contacts/ContactsPage.jsx'
import ShoppingPage from './components/shopping/ShoppingPage.jsx'
import Home from './components/HomePage.jsx'
import ErrorPage from './components/ErrorPage.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/Project-Shopping-Cart/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children:[
      { index: true, element: <Home /> },
      {
        path: "/Project-Shopping-Cart/home",
        element: <Home/>,
      },
      {
        path: "/Project-Shopping-Cart/contacts",
        element: <Contacts/>,
      },
      {
        path: "/Project-Shopping-Cart/shopping",
        element: <ShoppingPage/>,
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
