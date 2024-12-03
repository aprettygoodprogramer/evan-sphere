import React, { useState, useEffect } from "react";
import Text from "../comp/text";
import { Outlet, Link } from "react-router-dom";
import LetterInput from "./comp/singleLetterInput";
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
  const [word, setWord] = useState<string>(GetRandomWord());
  const [Hangindex, setHangindex] = useState<number>(1);
  const [currHang, setCurrHang] = useState<string>(hang1);
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  useEffect(() => {
    const hangImages = [hang1, hang2, hang3, hang4, hang5, hang6];
    setCurrHang(hangImages[Hangindex - 1] || hang1);
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
    setCurrHang(hang1);
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
