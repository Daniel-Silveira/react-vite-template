import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { ErrorPage, Home } from '../pages'

export const routerRoot = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{ path: '/', element: <Home /> }],
  },
])
