import "../App.css";
import Text from "../comp/text";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
const towerDefence = () => {
  return (
    <div className="page-background">
      <Outlet />
      <div className="game-container">
        <iframe src="https://itch.io/embed/2237383" width="552" height="167">
          <a href="https://slimybridge.itch.io/super-defender-td">
            Super Defender TD by SlimyBridge
          </a>
        </iframe>
      </div>

      <Text size="medium" weight="bold" color="white" className="game-text">
        Welcome To Spaceship Game! I made this over the 2023 summer. Tap on the
        units to upgrade them!!!
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

export default towerDefence;
