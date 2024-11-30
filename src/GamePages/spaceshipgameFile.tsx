import "../App.css";
import Text from "../comp/text";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
const SpaceshipGamea = () => {
  return (
    <div className="page-background">
      <Outlet />
      <div className="game-container">
        <iframe src="https://itch.io/embed/2928092" width="552" height="167">
          <a href="https://slimybridge.itch.io/space-adventure">
            Space Adventure by SlimyBridge
          </a>
        </iframe>
      </div>

      <Text size="medium" weight="bold" color="white" className="game-text">
        Welcome To Spaceship Game! I made this over the 2024 summer. The dev
        menu is open; if you don't want to use it, just press F7!
      </Text>
      <div className="button-container">
        <button className="github-button">
          <Link to="/">back to home page</Link>
          <Outlet />
        </button>
      </div>
    </div>
  );
};

export default SpaceshipGamea;
