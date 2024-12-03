import React, { useState } from "react";
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

  React.useEffect(() => {
    const hangImages = [hang1, hang2, hang3, hang4, hang5, hang6];
    setCurrHang(hangImages[Hangindex - 1] || hang1);
  }, [Hangindex]);

  const handleGuess = (letter: string) => {
    if (guessedLetters.has(letter)) return;
    setGuessedLetters((prev) => new Set(prev).add(letter));

    if (!word.includes(letter)) {
      setHangindex((prev) => (prev < 6 ? prev + 1 : prev));
    }

    setHangindex((prev) => {
      const newIndex = prev + 1;
      if (newIndex >= 6) {
        setCurrHang(hang6);
        alert("Game Over!");
      }
      return newIndex < 6 ? newIndex : prev;
    });
    //TODO add a resart button and call it in the resart button
  };

  return (
    <a className="page-background">
      <Text size="large" weight="bold" color="white" className="h1">
        {word
          .split("")
          .map((char) => (guessedLetters.has(char) ? char : "_"))
          .join(" ")}
      </Text>

      <LetterInput onSubmit={(letter) => handleGuess(letter)} />

      <img
        src={currHang}
        alt={`hang${Hangindex}`}
        width={284}
        height={392}
        style={{ marginTop: "20px" }}
      />

      <div className="button-container">
        <button className="github-button">
          <Link to="/">back to home page</Link>
          <Outlet />
        </button>
      </div>

      <div className="restart-contanter">
        <button className="github-button">
          Restart
          <Outlet />
        </button>
      </div>
      <Outlet />
    </a>
  );
}

export default HangMan;
