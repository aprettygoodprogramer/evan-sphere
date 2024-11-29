import React from "react";
//import ListGroup from "./comp/ListGroup";
//import DropDown from "./comp/dropdown";
import Text from "./comp/text";
import GitHubLink from "./comp/GithubBut";
import "./App.css";
import ButtonLink from "./comp/linkingButton";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="page-background">
      <Text size="large" weight="bold" color="white" className="h1">
        Welcome To Evan-Sphere
      </Text>
      <Text size="medium" weight="bold" color="white" className="p1">
        Welcome To Evan-Sphere. This Website is Under Construction. It will inevitably Become a website to host all of my projects.
      </Text>
      <GitHubLink />
      <ButtonLink to="HangMan/index.html" text="Hangman"/>
 
    </div>
    </Router>
  );
}

export default App;