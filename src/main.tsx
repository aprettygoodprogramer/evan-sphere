import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import App from './landingPage/App.tsx'
import HangMan from './HangMan/hangman.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [

    ],
    errorElement: <div><h1>404 Not Found :(</h1></div>
  },
  {
    path: '/hangman',
    element: <HangMan />,

  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)