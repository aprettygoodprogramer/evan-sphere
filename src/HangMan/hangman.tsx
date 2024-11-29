import React from "react";
import Text from "../comp/text";
import GitHubLink from "../landingPage/comp/GithubBut";
import { Outlet } from 'react-router-dom';
import '../App.css'
function HangMan() {
  return (
    
    <div className="page-background">
      <Text size="large" weight="bold" color="white" className="h1">
Welcome To Hang Man!     </Text>


    <Outlet />
    </div>
    
  );
}

export default HangMan;