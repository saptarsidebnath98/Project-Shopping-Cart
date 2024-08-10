// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  createHashRouter, RouterProvider,} from "react-router-dom"
import App from './App.jsx'
import Contacts from './components/contacts/ContactsPage.jsx'
import ShoppingPage from './components/shopping/ShoppingPage.jsx'
import Home from './components/HomePage.jsx'
import ErrorPage from './components/error/ErrorPage.jsx'
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
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <RouterProvider router={router} />
  // </StrictMode>,
)
