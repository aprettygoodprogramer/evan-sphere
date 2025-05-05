import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./landingPage/App.tsx";
import HangMan from "./HangMan/hangman.tsx";
import SpaceshipGamea from "./GamePages/spaceshipgameFile.tsx";
import TowerDefence from "./GamePages/towerdefencepage.tsx";
import Blogy from "./blog/blogy.tsx";
import Posts from "./blog/Posts.tsx";
import PostPage from "./blog/PostPage.tsx";
import SortingVisualizer from "./sortingAlg/sortingAlg.tsx";
import Home from "./JournalingApp/home.tsx";
import Portfoli from "./portfolio/app.tsx";
import ProceduralContent from "./ProceduralContentGenerator/ProceduralContent.tsx";

const TimeManager = lazy(() => import("./TimeManager/TimeManagerPage.tsx"));
const DrawingGrid = lazy(() => import("./pathfinding/DrawingGrid.tsx"));

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
    element: (
      <Suspense fallback={<div>Loading Time Manager...</div>}>
        <TimeManager />
      </Suspense>
    ),
  },
  {
    path: "/blog",
    element: <Blogy />,
    children: [
      { index: true, element: <Posts /> },
      { path: ":slug", element: <PostPage /> },
    ],
  },
  {
    path: "/sortingAlg",
    element: <SortingVisualizer />,
  },
  {
    path: "/Journoling",
    element: <Home />,
  },
  {
    path: "/portfolio",
    element: <Portfoli />,
  },
  {
    path: "/ProceduralContentGenerator",
    element: <ProceduralContent />,
  },
  {
    path: "/pathfinding",
    element: (
      <Suspense fallback={<div>Loading Drawing Grid...</div>}>
        <DrawingGrid />
      </Suspense>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
