import { Outlet, Link } from "react-router-dom";
import {
  FaGithub,
  FaUserSecret,
  FaGamepad,
  FaTasks,
  FaRocket,
  FaBlog,
  FaSortAmountUp,
  FaDiceD6,
  FaRoute,
  FaAddressCard,
} from "react-icons/fa";
import "../App.css";

// Storing projects in an array makes the code cleaner and easier to update.
const projects = [
  {
    to: "/portfolio",
    title: "Developer Portfolio",
    Icon: FaAddressCard,
    description: "A professional showcase of my skills, projects, and journey.",
  },
  {
    to: "/pathfinding",
    title: "Pathfinding Visualizer",
    Icon: FaRoute,
    description: "Watch algorithms like A* find the shortest path in a grid.",
  },
  {
    to: "/sortingAlg",
    title: "Sorting Visualizer",
    Icon: FaSortAmountUp,
    description: "See classic sorting algorithms like Bubble Sort in action.",
  },
  {
    to: "/SpaceShipGame",
    title: "Spaceship Game",
    Icon: FaRocket,
    description: "A fun arcade-style game. Dodge the asteroids and survive!",
  },
  {
    to: "/TowerDefence",
    title: "Tower Defence",
    Icon: FaGamepad,
    description: "Defend your base from waves of enemies in this classic TD.",
  },
  {
    to: "/ProceduralContentGenerator",
    title: "Perlin Noise Generator",
    Icon: FaDiceD6,
    description: "Generate and visualize 2D procedural noise maps.",
  },
  {
    to: "/hangman",
    title: "Hangman",
    Icon: FaUserSecret,
    description: "The classic word-guessing game brought to the web.",
  },
  {
    to: "/TimeManager",
    title: "Task Manager",
    Icon: FaTasks,
    description: "A simple utility to organize your tasks and boost productivity.",
  },
  {
    to: "/blog",
    title: "My Blog",
    Icon: FaBlog,
    description: "Read my thoughts and articles on tech and development.",
  },
];

function App() {
  return (
    <div className="app-shell">
      <main className="container">
        <header className="hero">
          <h1 className="hero-title">Evan-Sphere</h1>
          <p className="hero-subtitle">
            Welcome! This is my personal digital space where I host all my
            projects and experiments. Explore, play, and see what I've been
            building.
          </p>
          <a
            href="https://github.com/aprettygoodprogramer" // <-- TODO: Add your GitHub username here
            className="hero-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> View on GitHub
          </a>
        </header>

        <section className="projects-section">
          <div className="projects-grid">
            {projects.map((project) => (
              <Link
                to={project.to}
                key={project.to}
                className="project-card"
              >
                <div className="project-card-icon">
                  <project.Icon />
                </div>
                <div>
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-description">
                    {project.description}
                  </p>
                </div>
                <span className="project-card-link">View Project &rarr;</span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* The Outlet will render your specific project pages below the grid */}
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;