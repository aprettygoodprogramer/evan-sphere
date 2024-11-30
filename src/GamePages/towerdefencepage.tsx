import "../App.css";
import Text from "../comp/text";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
const towerDefence = () => {
  return (
    <div className="page-background">
      <Outlet />
      <div className="game-container">
        <iframe
          src="/towerDefence/index.html"
          className="game-frame"
          title="Unity Game"
        />
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
