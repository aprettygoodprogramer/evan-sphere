import React, { useState } from "react";
import Text from "../comp/text";
import { Outlet, Link } from "react-router-dom";
import TextField from "./comp/singleLetterInput";
import words from "./wordlist.json";
import "../App.css";
import hang1 from "./HangManPic/Hang1.png";
import hang2 from "./HangManPic/Hang2.png";
import hang3 from "./HangManPic/Hang3.png";
import hang4 from "./HangManPic/Hang4.png";
import hang5 from "./HangManPic/Hang5.png";
import hang6 from "./HangManPic/Hang6.png";
function GetRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

function HangMan() {
  const [word, setWord] = useState<string>("");

  const handleWordSubmit = () => {
    const randomWord = GetRandomWord();
    setWord(randomWord);
  };

  return (
    <a className="page-background">
      <Text size="large" weight="bold" color="white" className="h1">
        {word || "Your Word Here"}
      </Text>

      <TextField onSubmit={handleWordSubmit} />
      <img src={hang1} alt="hang1" width={284} height={392} />
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
