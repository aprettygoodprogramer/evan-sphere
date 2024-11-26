import React from "react";
import ListGroup from "./comp/ListGroup";
import DropDown from "./comp/dropdown";
import Text from "./comp/text";
import GithubButton from "./comp/GithubBut";
import "./app.css";

function App() {
  return (
    <div className="page-background">
      <Text size="large" weight="bold" color="white" className="h1">
        Welcome To Evan-Sphere
      </Text>
      <Text size="medium" weight="bold" color="white" className="p1">
        Welcome To Evan-Sphere. This Website is Under Construction.
      </Text>
      <GithubButton />
    </div>
  );
}

export default App;
