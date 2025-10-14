import { Outlet, Link } from "react-router-dom";
import "../App.css";

const projects = [
  {
    to: "/portfolio",
    title: "Developer Portfolio",
    description: "A professional showcase of my skills, projects, and journey.",
  },
  {
    to: "/sortingAlg",
    title: "Sorting Visualizer",
    description: "See classic sorting algorithms like Bubble Sort in action.",
  },
  {
    to: "/blog",
    title: "My Blog",
    description: "Read my thoughts and articles on tech and development.",
  },
  {
    to: "/ProceduralContentGenerator",
    title: "Perlin Noise Generator",
    description: "Generate and visualize 2D procedural noise maps.",
  },
  {
    to: "/TimeManager",
    title: "Task Manager",
    description:
      "A simple utility to organize your tasks and boost productivity.",
  },
  {
    to: "/SpaceShipGame",
    title: "Spaceship Game",
    description: "A fun strategy game where you build and manage a spaceship.",
  },
  {
    to: "/pathfinding",
    title: "Pathfinding Visualizer",
    description: "Watch algorithms like A* find the shortest path in a grid.",
  },
  {
    to: "/TowerDefence",
    title: "Tower Defence",
    description: "Defend your base from waves of enemies in this classic TD.",
  },
  {
    to: "/hangman",
    title: "Hangman",
    description: "The classic word-guessing game brought to the web.",
  },
];

function App() {
  return (
    <div className="app-shell">
      <div className="background-overlay"></div>
      <main className="container">
        <header className="hero">
          <h1 className="hero-title">
            <span className="gradient-text">Evan-Sphere</span>
          </h1>
          <p className="hero-subtitle">
            Welcome! This is my personal digital space where I host all my
            projects and experiments. Explore, play, and see what I've been
            building.
          </p>
          <a
            href="https://github.com/aprettygoodprogramer"
            className="hero-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View on GitHub</span>
          </a>
        </header>

        <section className="projects-section">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <Link
                to={project.to}
                key={project.to}
                className="project-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="project-card-glow"></div>
                <div className="project-card-content">
                  <div>
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-description">
                      {project.description}
                    </p>
                  </div>
                  <span className="project-card-link">View Project &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
