import { createBrowserRouter } from 'react-router-dom'
import { ErrorPage, Home } from '@/pages'
import App from '../App'

export const routerRoot = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{ path: '/', element: <Home /> }],
  },
])
