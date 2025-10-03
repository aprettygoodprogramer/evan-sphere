import React from "react";
import ReactDOM from "react-dom/client";
import "./cock.css";

const App = () => {
  return (
    <div className="portfolio">
      <header className="header">
        <div className="container">
          <div className="logo">ED</div>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#journey">Journey</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <span className="intro">Yo! My name's</span>
              <h1 className="hero-name">Evan Ducas</h1>
              <h2 className="hero-title">Locked-in Developer & Creator</h2>
              <p className="hero-description">
                I'm a passionate 15-year-old programmer who uses Arch (btw) and
                Windows. Yes, it's possible! Currently building cool stuff and
                a highschool freshmen.
              </p>
              <div className="hero-actions">
                <a
                  href="https://github.com/aprettygoodprogramer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Check My Code
                </a>
                <a
                  href="https://www.quizlitic.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  See Quizlitic
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="code-block">
                <div className="code-header">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="code-content">
                  <div className="code-line">
                    <span className="code-keyword">const</span>
                    <span className="code-variable"> name</span>
                    <span className="code-operator"> = </span>
                    <span className="code-string">"Evan"</span>
                  </div>
                  <div className="code-line">
                    <span className="code-keyword">console</span>
                    <span className="code-operator">.</span>
                    <span className="code-method">log</span>
                    <span className="code-operator">(</span>
                    <span className="code-string">"I'm " + name</span>
                    <span className="code-operator">)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <div className="section-header">
            <span className="section-number">01</span>
            <h2>About Me</h2>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate programmer who genuinely loves what I do. I run
                both Arch Linux on my Thinkpad, and windows on my desktop. I
                love programming, and I'm always looking for new challenges to
                tackle.
              </p>
              <p>
                Currently working on some exciting projects.
                 When I'm not coding, you'll find me gaming on
                Hypixel or CS2, but let's be real - I'm usually coding.
              </p>
              <div className="fun-facts">
                <h3>Quick Facts</h3>
                <ul>
                  <li>Uses Arch Linux (btw)</li>
                  <li>Plays Hypixel & CS2</li>
                  <li>Locked in</li>
                  <li>Starting high school 2025-2026</li>
                  <li>Been coding since age 8</li>
                </ul>
              </div>
            </div>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">6+</span>
                <span className="stat-label">Years Coding</span>
              </div>
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Languages</span>
              </div>
              <div className="stat">
                <span className="stat-number">∞</span>
                <span className="stat-label">Locked-in Level</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills" id="skills">
        <div className="container">
          <div className="section-header">
            <span className="section-number">02</span>
            <h2>Skills & Tech</h2>
          </div>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skill-tags">
                <span className="skill-tag">C#</span>
                <span className="skill-tag">C++</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Rust</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">TypeScript</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Web Development</h3>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Full Stack</span>
                <span className="skill-tag">HTML/CSS</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Other Specialties</h3>
              <div className="skill-tags">
                <span className="skill-tag">Robotics (FTC)</span>
                <span className="skill-tag">Game Development</span>
                <span className="skill-tag">Linux Systems</span>
                <span className="skill-tag">Windows Systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="container">
          <div className="section-header">
            <span className="section-number">03</span>
            <h2>Featured Projects</h2>
          </div>
          <div className="projects-grid">
            <div className="project-card featured">
              <div className="project-header">
                <h3>Quizlitic</h3>
                <span className="project-status">🔭 Currently Working On</span>
              </div>
              <p className="project-description">
                A comprehensive quiz platform with full-stack architecture.
                Features user authentication, quiz creation, and real-time
                scoring.
              </p>
              <div className="project-tech">
                <span>React</span>
                <span>TypeScript</span>
                <span>Rust Backend</span>
              </div>
              <div className="project-links">
                <a
                  href="https://www.quizlitic.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Live Site
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Evan Sphere</h3>
                <span className="project-status">🌐 Live</span>
              </div>
              <p className="project-description">
                My personal website and blog platform.
              </p>
              <div className="project-tech">
                <span>TypeScript</span>
                <span>Rust Backend</span>
                <span>Full Stack</span>
              </div>
              <div className="project-links">
                <a
                  href="https://www.evan-sphere.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Live Site
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>FTC Notes</h3>
                <span className="project-status">🤖 Robotics</span>
              </div>
              <p className="project-description">
                A note-taking and strategy platform for FIRST Tech Challenge
                teams. Helps teams organize match data and robot performance.
              </p>
              <div className="project-tech">
                <span>TypeScript</span>
                <span>Rust Backend</span>
                <span>Robotics</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/aprettygoodprogramer/FTCnotesBackend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Backend
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Epic Auto Clicker</h3>
                <span className="project-status">⚡ Utility</span>
              </div>
              <p className="project-description">
                A high-performance auto-clicker built in C++ with customizable
                settings.
              </p>
              <div className="project-tech">
                <span>C++</span>
                <span>Windows API</span>
                <span>GUI</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/aprettygoodprogramer/EpicAutoClicker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Code
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Command Helper</h3>
                <span className="project-status">🦀 CLI Tool</span>
              </div>
              <p className="project-description">
                A Rust-based command-line utility that uses AI to help generate
                bash commands for developers.
              </p>
              <div className="project-tech">
                <span>Rust</span>
                <span>CLI</span>
                <span>Terminal</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/aprettygoodprogramer/commandHelper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Code
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Simple Social Media</h3>
                <span className="project-status">💬 Social Platform</span>
              </div>
              <p className="project-description">
                A Reddit-like social media platform built in C# with user
                accounts, posts, comments. Built as a proof of concept for local
                social media platform.
              </p>
              <div className="project-tech">
                <span>C#</span>
                <span>Social Media</span>
                <span>Backend</span>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/aprettygoodprogramer/SimpleSoicalMedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Code
                </a>
              </div>
            </div>
          </div>

          <div className="more-projects">
            <p>
              Want to see more? Check out my GitHub for experiments and side
              projects!
            </p>
            <a
              href="https://github.com/aprettygoodprogramer"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>

      <section className="journey" id="journey">
        <div className="container">
          <div className="section-header">
            <span className="section-number">04</span>
            <h2>My Journey</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2017</div>
              <div className="timeline-content">
                <h3>Started Coding</h3>
                <p>
                  Began my programming journey at age 8. Started with basic
                  concepts and fell in love with problem-solving.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h3>Discovered Linux</h3>
                <p>Got into linux during covid, as it was my only laptop!</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                <h3>Robotics & FTC</h3>
                <p>
                  Started participating in FIRST Tech Challenge, combining
                  programming with real-world robotics.
                </p>
              </div>
            </div>
            <div className="timeline-item active">
              <div className="timeline-year">2025</div>
              <div className="timeline-content">
                <h3>Current Focus</h3>
                <p>
                  Working on Quizlitic, preparing for high school, and staying
                  locked in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer-content">
            <div className="footer-text">
              <h3>Let's Connect!</h3>
              <p>Always down to chat about code, tech, or gaming.</p>
              <div className="social-links">
                <a
                  href="https://github.com/aprettygoodprogramer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.evan-sphere.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Evan Sphere
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; 2025 Evan Ducas. Epic website made by no one in particular
              😉
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
