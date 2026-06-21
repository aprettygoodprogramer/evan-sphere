import PageShell from "../components/PageShell";
import "./GameEmbed.css";

const SpaceshipGame = () => {
  return (
    <PageShell backTo="/" backLabel="home">
      <p className="es-eyebrow">game</p>
      <h1 className="es-title">Space Adventure</h1>

      <div className="game-embed-content">
        <div className="iframe-container">
          <iframe
            src="https://itch.io/embed/2928092"
            title="Space Adventure by SlimyBridge on itch.io"
            allowFullScreen
          ></iframe>
        </div>

        <p className="game-description">
          I made this game over the 2024 summer. The dev menu is open; if you
          don't want to use it, just press F7.
        </p>
      </div>
    </PageShell>
  );
};

export default SpaceshipGame;
