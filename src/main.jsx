import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/login',
          element: <Login></Login>
        }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='container mx-auto'>
    <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
