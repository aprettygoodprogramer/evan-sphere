import React, { useState, useEffect } from "react";
import Text from "../comp/text";
import { Outlet, Link } from "react-router-dom";
import LetterInput from "./comp/singleLetterInput";
import words from "./wordlist.json";
import "../App.css";

const hangImages = [
  "https://i.imgur.com/pm1lAxA.png", // Hang 1
  "https://i.imgur.com/Sa9eHw4.png", // Hang 2
  "https://i.imgur.com/zyPruez.png", // Hang 3
  "https://i.imgur.com/NBqB0YF.png", // Hang 4
  "https://i.imgur.com/Z8pqLp9.png", // Hang 5
  "https://i.imgur.com/XslnI6Q.png", // Hang 6
];

function GetRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

function HangMan() {
  const [word, setWord] = useState<string>(GetRandomWord());
  const [Hangindex, setHangindex] = useState<number>(1);
  const [currHang, setCurrHang] = useState<string>(hangImages[0]);
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  useEffect(() => {
    setCurrHang(hangImages[Hangindex - 1] || hangImages[0]);
    if (Hangindex >= 6) {
      setIsGameOver(true);
    }
  }, [Hangindex]);

  const handleGuess = (letter: string) => {
    if (isGameOver || guessedLetters.has(letter)) return;
    setGuessedLetters((prev) => new Set(prev).add(letter));

    if (!word.includes(letter)) {
      setHangindex((prev) => (prev < 6 ? prev + 1 : prev));
    }
  };

  function restart() {
    setWord(GetRandomWord());
    setHangindex(1);
    setCurrHang(hangImages[0]);
    setGuessedLetters(new Set());
    setIsGameOver(false);
  }

  return (
    <a className="page-background">
      <Text size="large" weight="bold" color="white" className="h1">
        {isGameOver
          ? `Game Over! The word was: ${word}`
          : word
              .split("")
              .map((char) => (guessedLetters.has(char) ? char : "_"))
              .join(" ")}
      </Text>

      {!isGameOver && <LetterInput onSubmit={handleGuess} />}

      <img
        src={currHang}
        alt={`hang${Hangindex}`}
        width={284}
        height={392}
        style={{ marginTop: "20px" }}
      />

      <div className="button-container">
        <button className="github-button">
          <Link to="/">Back to Home Page</Link>
          <Outlet />
        </button>
      </div>

      <div className="restart-container">
        <button className="github-button" onClick={restart}>
          Restart
          <Outlet />
        </button>
      </div>
      <Outlet />
    </a>
  );
}

export default HangMan;
