import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Signup from "./pages/registers/Signup.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/signup",
        element:<Signup/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
