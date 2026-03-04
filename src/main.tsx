import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Dashboard } from './Dashboard.tsx'
import { About } from './About.tsx'
import { Notfoundpage } from './NotFoundPage.tsx'
import { DashboardElement } from './DashboardElement.tsx'

const route = createBrowserRouter([
  {
    path: '/', element: <App />
  },
  {
    path: '/dashboard', element: <Dashboard />
  },
  {
    path: '/about', element: <About />
  },
  {
    path: '*', element: <Notfoundpage />
  },
  {
    path: '/dashboard/:id', element: <DashboardElement />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={route}/>
  </StrictMode>
)
