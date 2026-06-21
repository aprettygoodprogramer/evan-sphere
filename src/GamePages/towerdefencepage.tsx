import PageShell from "../components/PageShell";
import "./GameEmbed.css";

const TowerDefence = () => {
  return (
    <PageShell backTo="/" backLabel="home">
      <p className="es-eyebrow">game</p>
      <h1 className="es-title">Super Defender TD</h1>

      <div className="game-embed-content">
        <div className="iframe-container">
          <iframe
            src="https://itch.io/embed/2237383"
            title="Super Defender TD by SlimyBridge on itch.io"
            allowFullScreen
          ></iframe>
        </div>

        <p className="game-description">
          I made this game over the 2023 summer. Tap on the units to upgrade
          them.
        </p>
      </div>
    </PageShell>
  );
};

export default TowerDefence;
