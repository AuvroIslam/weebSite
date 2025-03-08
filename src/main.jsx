import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './router/Router.jsx'
import AuthProvider from './provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      {/* we only did this so we can get RouterProvier as {children} in AuthProvider
      <authContext.provider> ja thakbe orai sob receive korbe stuff */}
    <RouterProvider router={Router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
