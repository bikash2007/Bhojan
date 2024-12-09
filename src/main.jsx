import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/HomePage/Home.jsx'
import Menu from './components/MenuPage/Menu.jsx'
import { ContactUs } from './components/ContactUsPage/ContactUs.jsx'
const router = createBrowserRouter([
  {
    element: <App />, path: '/', children: [
      { element: <Home />, path: '/' },
      { element: <Menu/>, path: '/menu' },
      { element: <ContactUs/>, path: '/contact-us' },
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    <App />
    </RouterProvider>
  </StrictMode>,
)
