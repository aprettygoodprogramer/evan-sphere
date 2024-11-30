import React from "react";
import Text from "../comp/text";
import GitHubLink from "../landingPage/comp/GithubBut";
import { Outlet } from 'react-router-dom';
import './letterInput.css'
import TextField from "./comp/singleLetterInput";


function Console()
{
  console.warn("usertpyed letter");
}
function HangMan() {
  return (
    
    <a className="page-background">
      <Text size="large" weight="bold" color="white" className="h1">
Welcome To Hang Man!     </Text>

    <TextField  onSubmit={Console}/>
    <Outlet />
    </a>
    
  );
}

export default HangMan;