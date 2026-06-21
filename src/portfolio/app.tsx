import { Link } from "react-router-dom";
import GithubIcon from "../components/GithubIcon";
import PageShell from "../components/PageShell";
import "./cock.css";

const featuredProjects = [
  {
    title: "Quizlitic",
    status: "currently working on",
    description:
      "A comprehensive quiz platform with full-stack architecture. User auth, quiz creation, and real-time scoring.",
    tech: ["React", "TypeScript", "Rust"],
    href: "https://www.quizlitic.com/",
    link: "Live Site",
  },
  {
    title: "Evan Sphere",
    status: "live",
    description: "My personal website and blog platform.",
    tech: ["TypeScript", "Rust", "Full Stack"],
    href: "https://www.evan-sphere.com",
    link: "Live Site",
  },
  {
    title: "FTC Notes",
    status: "robotics",
    description:
      "A note-taking and strategy platform for FIRST Tech Challenge teams.",
    tech: ["TypeScript", "Rust", "Robotics"],
    href: "https://github.com/aprettygoodprogramer/FTCnotesBackend",
    link: "Backend",
  },
  {
    title: "Epic Auto Clicker",
    status: "utility",
    description:
      "A high-performance auto-clicker built in C++ with customizable settings.",
    tech: ["C++", "Windows API", "GUI"],
    href: "https://github.com/aprettygoodprogramer/EpicAutoClicker",
    link: "Code",
  },
  {
    title: "Command Helper",
    status: "cli tool",
    description:
      "A Rust CLI utility that uses AI to help generate bash commands.",
    tech: ["Rust", "CLI", "Terminal"],
    href: "https://github.com/aprettygoodprogramer/commandHelper",
    link: "Code",
  },
  {
    title: "Simple Social Media",
    status: "social platform",
    description:
      "A Reddit-like social platform in C# with accounts, posts, and comments.",
    tech: ["C#", "Social", "Backend"],
    href: "https://github.com/aprettygoodprogramer/SimpleSoicalMedia",
    link: "Code",
  },
];

const experiments = [
  { to: "/sortingAlg", title: "Sorting Visualizer", desc: "Bubble, insertion, quick & bogo sort in action." },
  { to: "/pathfinding", title: "Pathfinding Visualizer", desc: "BFS finds the shortest path across a grid." },
  { to: "/ProceduralContentGenerator", title: "Perlin Noise Generator", desc: "Generate 2D procedural terrain maps." },
  { to: "/TimeManager", title: "Task Manager", desc: "A drag-and-drop kanban for your tasks." },
  { to: "/blog", title: "My Blog", desc: "Thoughts and articles on tech and dev." },
  { to: "/hangman", title: "Hangman", desc: "The classic word-guessing game, on the web." },
  { to: "/SpaceShipGame", title: "Spaceship Game", desc: "A strategy spaceship builder (itch.io)." },
  { to: "/Towerdefence", title: "Tower Defense", desc: "Defend your base from waves of enemies." },
];

const skills = [
  {
    heading: "Languages",
    items: ["C#", "C++", "Python", "Rust", "Java", "TypeScript"],
  },
  {
    heading: "Web",
    items: ["React", "TypeScript", "Full Stack", "HTML/CSS"],
  },
  {
    heading: "Other",
    items: ["Robotics (FTC)", "Game Dev", "Linux", "Windows"],
  },
];

const timeline = [
  { year: "2017", title: "Started Coding", body: "Began at age 8. Fell in love with problem-solving." },
  { year: "2020", title: "Discovered Linux", body: "Got into Linux during covid on an old laptop." },
  { year: "2023", title: "Robotics & FTC", body: "Joined FIRST Tech Challenge, programming real robots." },
  { year: "2025", title: "Current Focus", body: "Building Quizlitic and preparing for high school." },
];

const Portfoli = () => {
  return (
    <PageShell centered={false} backTo="/" backLabel="home" show3D>
      <p className="es-eyebrow">portfolio</p>
      <h1 className="es-title">Evan Ducas</h1>
      <p className="es-subtitle">Locked-in Developer &amp; Creator</p>

      <div className="es-prose" style={{ textAlign: "center" }}>
        <p style={{ textAlign: "center" }}>
          I'm a passionate 15-year-old programmer who uses Arch (btw) and
          Windows. Currently building cool stuff and starting high school.
        </p>
      </div>

      <div className="es-nav" style={{ marginTop: "0.5rem" }}>
        <a
          href="https://github.com/aprettygoodprogramer"
          target="_blank"
          rel="noopener noreferrer"
          className="es-btn es-btn--solid"
        >
          <GithubIcon size={16} /> Check My Code
        </a>
        <a
          href="https://www.quizlitic.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="es-btn"
        >
          See Quizlitic
        </a>
      </div>

      {/* About */}
      <section className="portfolio-section">
        <p className="es-eyebrow">01 — about</p>
        <h2 className="es-section-title">About Me</h2>
        <div className="es-prose">
          <p>
            I'm a passionate programmer who genuinely loves what I do. I run
            Arch Linux on my Thinkpad and Windows on my desktop, and I'm always
            looking for new challenges.
          </p>
          <p>
            When I'm not coding, you'll find me gaming on Hypixel or CS2 — but
            let's be real, I'm usually coding.
          </p>
        </div>
        <div className="portfolio-stats">
          <div className="portfolio-stat"><span>6+</span><label>Years Coding</label></div>
          <div className="portfolio-stat"><span>10+</span><label>Languages</label></div>
          <div className="portfolio-stat"><span>∞</span><label>Locked-in</label></div>
        </div>
      </section>

      {/* Skills */}
      <section className="portfolio-section">
        <p className="es-eyebrow">02 — skills</p>
        <h2 className="es-section-title">Skills &amp; Tech</h2>
        <div className="portfolio-skills">
          {skills.map((s) => (
            <div key={s.heading} className="portfolio-skill">
              <h3>{s.heading}</h3>
              <div className="es-tags">
                {s.items.map((i) => (
                  <span key={i} className="es-tag">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="portfolio-section">
        <p className="es-eyebrow">03 — projects</p>
        <h2 className="es-section-title">Featured Projects</h2>
        <div className="es-grid">
          {featuredProjects.map((p) => (
            <article key={p.title} className="es-card">
              <div className="portfolio-card-head">
                <h3 className="es-card-title">{p.title}</h3>
                <span className="portfolio-status">{p.status}</span>
              </div>
              <p className="es-card-desc">{p.description}</p>
              <div className="es-tags">
                {p.tech.map((t) => (
                  <span key={t} className="es-tag">{t}</span>
                ))}
              </div>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="es-card-link"
              >
                {p.link} →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Experiments & Apps (sub-apps) */}
      <section className="portfolio-section">
        <p className="es-eyebrow">04 — experiments</p>
        <h2 className="es-section-title">Experiments &amp; Apps</h2>
        <p className="es-subtitle" style={{ marginBottom: "1.5rem" }}>
          Interactive things I've built and hosted here.
        </p>
        <div className="es-grid">
          {experiments.map((e) => (
            <Link key={e.to} to={e.to} className="es-card">
              <h3 className="es-card-title">{e.title}</h3>
              <p className="es-card-desc">{e.desc}</p>
              <span className="es-card-link">Open →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section className="portfolio-section">
        <p className="es-eyebrow">05 — journey</p>
        <h2 className="es-section-title">My Journey</h2>
        <div className="portfolio-timeline">
          {timeline.map((t) => (
            <div key={t.year} className="portfolio-timeline-item">
              <div className="portfolio-timeline-year">{t.year}</div>
              <div className="portfolio-timeline-body">
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="portfolio-section">
        <p className="es-eyebrow">06 — contact</p>
        <h2 className="es-section-title">Let's Connect</h2>
        <p className="es-subtitle" style={{ marginBottom: "1.5rem" }}>
          Always down to chat about code, tech, or gaming.
        </p>
        <div className="es-nav">
          <Link to="/contact" className="es-btn es-btn--solid">Contact Me</Link>
          <a
            href="https://github.com/aprettygoodprogramer"
            target="_blank"
            rel="noopener noreferrer"
            className="es-btn"
          >
            GitHub
          </a>
        </div>
        <p className="es-eyebrow" style={{ marginTop: "3rem", opacity: 0.4 }}>
          © 2026 Evan Ducas
        </p>
      </section>
    </PageShell>
  );
};

export default Portfoli;
