import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import App from "./landingPage/App.tsx";
import HangMan from "./HangMan/hangman.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SpaceshipGamea from "./GamePages/spaceshipgameFile.tsx"; //
import TowerDefence from "./GamePages/towerdefencepage.tsx";
import TimeManager from "./TimeManager/TimeManagerPage.tsx";
import Blogy from "./blog/blogy.tsx";
import PhisicsEngineBlog from "./blog/physicsEngineBlog.tsx";
import Hoykeypractice from "./minecraftHotkeyPractice/hotkeypractice.tsx";
import SortingVisualizer from "./sortingAlg/sortingAlg.tsx";
import Home from "./JournalingApp/home.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <div>
        <h1>404 Not Found :(</h1>
      </div>
    ),
  },
  {
    path: "/hangman",
    element: <HangMan />,
  },
  {
    path: "/SpaceShipGame",
    element: <SpaceshipGamea />,
  },
  {
    path: "/Towerdefence",
    element: <TowerDefence />,
  },
  {
    path: "/TimeManager",
    element: <TimeManager />,
  },
  {
    path: "/blog",
    element: <Blogy />,
  },
  {
    path: "blog/physicsEngine",
    element: <PhisicsEngineBlog />,
  },
  {
    path: "/hotkeypractice",
    element: <Hoykeypractice />,
  },
  {
    path: "/sortingAlg",
    element: <SortingVisualizer />,

  },
  {
    path: "/Journoling",
    element: <Home />,

  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
