import { Mail } from "lucide-react";
import GithubIcon from "../components/GithubIcon";
import PageShell from "../components/PageShell";

function Contact() {
  return (
    <PageShell backTo="/" backLabel="home" show3D>
      <p className="es-eyebrow">contact</p>
      <h1 className="es-title">Let's connect</h1>
      <p className="es-subtitle">
        Always down to chat about code, tech, or gaming.
      </p>

      <div className="es-icons" style={{ marginTop: "1rem" }}>
        <a
          href="https://github.com/aprettygoodprogramer"
          target="_blank"
          rel="noopener noreferrer"
          className="es-icon"
          aria-label="GitHub"
        >
          <GithubIcon size={24} />
        </a>
        <a
          href="mailto:hello@evan-sphere.com"
          className="es-icon"
          aria-label="Email"
        >
          <Mail size={24} />
        </a>
      </div>

      <div className="es-prose" style={{ textAlign: "center", alignItems: "center" }}>
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
    </PageShell>
  );
}

export default Contact;
