import { Link } from "react-router-dom";
import "./GameEmbed.css"; // Import the new stylesheet

const SpaceshipGame = () => {
  return (
    <div className="game-embed-page-container">
      <div className="game-embed-content">
        <h1 className="game-embed-title">Space Adventure</h1>

        {/* This container makes the iframe responsive */}
        <div className="iframe-container">
          <iframe
            src="https://itch.io/embed/2928092"
            title="Space Adventure by SlimyBridge on itch.io"
            allowFullScreen
          ></iframe>
        </div>

        <p className="game-description">
          Welcome! I made this game over the 2024 summer. The dev menu is open;
          if you don't want to use it, just press F7!
        </p>

        <Link to="/" className="form-button-king">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default SpaceshipGame;