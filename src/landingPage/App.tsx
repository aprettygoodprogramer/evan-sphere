import React from "react";
import Text from "../comp/text";
import GitHubLink from "./comp/GithubBut";
import "../App.css";
import { Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";
function App() {
  return (
    
    <div className="page-background">
      <Text size="large" weight="bold" color="white" className="h1">
        Welcome To Evan-Sphere
      </Text>
      <Text size="medium" weight="bold" color="white" className="p1">
        Welcome To Evan-Sphere. This Website is Under Construction. It will inevitably Become a website to host all of my projects.
      </Text>
      <GitHubLink />
      
      <button className="github-button">
  <Link to="/hangman">Play Hangman</Link>
</button> 

    <Outlet />
    </div>
    
  );
}

export default App;