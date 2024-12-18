import React from "react";
import Text from "../comp/text";
import GitHubLink from "./comp/GithubBut";
import BuyMeACoffeeButton from "./comp/buyMeAcoffeButton.tsx";
import "../App.css";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="page-background">
      <Text size="large" weight="bold" color="white" className="h1">
        Welcome To Evan-Sphere
      </Text>
      <Text size="medium" weight="bold" color="white" className="p1">
        Welcome To Evan-Sphere. This Website is Under Construction. It hosts all
        my projects. They are listed below.
      </Text>
      <GitHubLink />

      <button className="github-button">
        <Link to="/hangman">Play Hangman</Link>
      </button>
      <button className="github-button">
        <Link to="/SpaceShipGame">Play My Spaceship Game!</Link>
      </button>
      <button className="github-button">
        <Link to="/TowerDefence">Play My TowerDefence Game!</Link>
      </button>
      <button className="github-button">
        <Link to="/TimeManager">Use My Task Manager!</Link>
      </button>
      <button className="github-button">
        <Link to="/blog">Look At My Blog!!</Link>
      </button>
      <BuyMeACoffeeButton/>
      <Outlet />
    </div>
  );
}

export default App;
