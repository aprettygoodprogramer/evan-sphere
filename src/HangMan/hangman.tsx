import React, { useState } from "react";
import Text from "../comp/text";
import { Outlet, Link } from "react-router-dom";
import TextField from "./comp/singleLetterInput";
import words from "./wordlist.json";
import "../App.css";

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
