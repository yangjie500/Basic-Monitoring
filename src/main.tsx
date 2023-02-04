import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import Home, { loader as homeLoader } from './pages/Home'
import './index.css' 


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    loader: homeLoader
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider resetCSS={true}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
)
//sgp