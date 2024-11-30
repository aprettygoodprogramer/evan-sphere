import React from "react";
import Text from "../comp/text";
import GitHubLink from "../landingPage/comp/GithubBut";
import { Outlet, Link } from "react-router-dom";
import "../App.css";
import TextField from "./comp/singleLetterInput";

function Console() {
  console.warn("usertpyed letter");
}
function HangMan() {
  return (
    <a className="page-background">
      <Text size="large" weight="bold" color="white" className="h1">
        Welcome To Hang Man!{" "}
      </Text>

      <TextField onSubmit={Console} />
      <div className="button-container">
        <button className="github-button">
          <Link to="/">back to home page</Link>
          <Outlet />
        </button>
      </div>
      <Outlet />
    </a>
  );
}

export default HangMan;
