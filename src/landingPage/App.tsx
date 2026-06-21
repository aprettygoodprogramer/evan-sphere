import { Link } from "react-router-dom";
import GithubIcon from "../components/GithubIcon";
import PageShell from "../components/PageShell";

const allPages = [
  { to: "/portfolio", title: "Portfolio", desc: "My skills, projects, and journey." },
  { to: "/blog", title: "Blog", desc: "Thoughts and articles on tech and dev." },
  { to: "/sortingAlg", title: "Sorting Visualizer", desc: "Bubble, insertion, quick & bogo sort." },
  { to: "/pathfinding", title: "Pathfinding Visualizer", desc: "BFS finds the shortest path." },
  { to: "/ProceduralContentGenerator", title: "Perlin Noise Generator", desc: "Generate procedural terrain maps." },
  { to: "/TimeManager", title: "Task Manager", desc: "A drag-and-drop kanban board." },
  { to: "/hangman", title: "Hangman", desc: "The classic word-guessing game." },
  { to: "/SpaceShipGame", title: "Spaceship Game", desc: "A strategy spaceship builder." },
  { to: "/Towerdefence", title: "Tower Defense", desc: "Defend against waves of enemies." },
 
];

function App() {
  return (
    <PageShell>
      <h1 className="es-title">Evan Ducas</h1>

      <p className="es-subtitle">
        Hey, I'm Evan. I'm a 15 year old programmer.
      </p>

      <nav className="es-nav">
        <Link to="/about" className="es-link">
          more about me
        </Link>
        <Link to="/portfolio" className="es-link">
          my portfolio
        </Link>
        <Link to="/contact" className="es-link">
          contact me
        </Link>
      </nav>

      <div className="es-icons">
        <a
          href="https://github.com/aprettygoodprogramer"
          target="_blank"
          rel="noopener noreferrer"
          className="es-icon"
          aria-label="GitHub"
        >
          <GithubIcon size={24} />
        </a>
      </div>

      <div className="es-prose" style={{ alignItems: "center", textAlign: "center" }}>
        <p style={{ textAlign: "center" }}>
          <a
            href="https://evan-sphere.com"
            target="_blank"
            rel="noopener noreferrer"
            className="es-link"
          >
            evan-sphere.com
          </a>
        </p>
        <p style={{ textAlign: "center" }}>
          <a
            href="https://quizlitic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="es-link"
          >
            quizlitic.com
          </a>
        </p>
      </div>

      <section className="es-explore" style={{ width: "100%", marginTop: "3rem" }}>
        <p className="es-eyebrow">explore</p>
        <h2 className="es-section-title">Everything on the site</h2>
        <div className="es-grid">
          {allPages.map((p) => (
            <Link key={p.to} to={p.to} className="es-card">
              <h3 className="es-card-title">{p.title}</h3>
              <p className="es-card-desc">{p.desc}</p>
              <span className="es-card-link">Open →</span>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

export default App;
