import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import App from './landingPage/App.tsx';
import HangMan from './HangMan/hangman.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SpaceshipGamea from './GamePages/spaceshipgameFile.tsx'; // 
import TowerDefence from './GamePages/towerdefencepage.tsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div><h1>404 Not Found :(</h1></div>,
  },
  {
    path: '/hangman',
    element: <HangMan />,
  },
  {
    path: '/SpaceShipGame',
    element: <SpaceshipGamea />, 
  },
  {
    path: '/Towerdefence',
    element: <TowerDefence />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);