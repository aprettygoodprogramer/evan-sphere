import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./landingPage/App.tsx";
import About from "./about/About.tsx";
import Contact from "./contact/Contact.tsx";
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

const NotFound = () => (
  <div className="es-page">
    <div className="es-grid-static" />
    <div className="es-content">
      <h1 className="es-title">404</h1>
      <p className="es-subtitle">This page drifted off the grid.</p>
      <a href="/" className="es-link">← back home</a>
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
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
      <Suspense fallback={<div className="es-status">Loading…</div>}>
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
      <Suspense fallback={<div className="es-status">Loading…</div>}>
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
