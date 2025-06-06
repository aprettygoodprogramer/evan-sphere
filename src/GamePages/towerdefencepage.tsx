import { Link } from "react-router-dom";
import "./GameEmbed.css"; // Reuse the same stylesheet from the last step!

const TowerDefence = () => {
  return (
    <div className="game-embed-page-container">
      <div className="game-embed-content">
        <h1 className="game-embed-title">Super Defender TD</h1>

        {/* The same responsive iframe container */}
        <div className="iframe-container">
          <iframe
            src="https://itch.io/embed/2237383"
            title="Super Defender TD by SlimyBridge on itch.io"
            allowFullScreen
          ></iframe>
        </div>

        <p className="game-description">
          Welcome! I made this game over the 2023 summer. Tap on the units to
          upgrade them!
        </p>

        <Link to="/" className="form-button-king">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default TowerDefence;