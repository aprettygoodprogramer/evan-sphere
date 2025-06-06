import React, { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import "./hangman.css"; 

import words from "./wordlist.json";


const hangImages = [
  "https://i.imgur.com/pm1lAxA.png", // 0 wrong guesses
  "https://i.imgur.com/Sa9eHw4.png", // 1
  "https://i.imgur.com/zyPruez.png", // 2
  "https://i.imgur.com/NBqB0YF.png", // 3
  "https://i.imgur.com/Z8pqLp9.png", // 4
  "https://i.imgur.com/XslnI6Q.png", // 5 (Game Over)
];
const MAX_WRONG_GUESSES = hangImages.length - 1;

// --- Helper Functions ---
const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex].toUpperCase();
};

// --- Component ---
function HangMan() {
  const [word, setWord] = useState<string>(getRandomWord());
  const [guessedLetters, setGuessedLetters] = useState<Set<string>>(new Set());
  const [wrongGuesses, setWrongGuesses] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");

  const isWin = word.split("").every((letter) => guessedLetters.has(letter));
  const isLoss = wrongGuesses >= MAX_WRONG_GUESSES;
  const isGameOver = isWin || isLoss;

  const handleGuess = (letter: string) => {
    const upperCaseLetter = letter.toUpperCase();
    if (isGameOver || guessedLetters.has(upperCaseLetter)) return;

    setGuessedLetters((prev) => new Set(prev).add(upperCaseLetter));

    if (!word.includes(upperCaseLetter)) {
      setWrongGuesses((prev) => prev + 1);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.match(/^[a-zA-Z]$/)) {
      handleGuess(inputValue);
    }
    setInputValue("");
  };

  const restartGame = () => {
    setWord(getRandomWord());
    setGuessedLetters(new Set());
    setWrongGuesses(0);
    setInputValue("");
  };

  const displayedWord = word
    .split("")
    .map((char) => (guessedLetters.has(char) ? char : "_"))
    .join(" ");

  return (
    <div className="hangman-container">
      <div className="game-area">
        <img
          src={hangImages[wrongGuesses]}
          alt={`Hangman state with ${wrongGuesses} wrong guesses`}
          className="hangman-image"
        />
        <div className="game-info">
          <p className="game-status">
            {isGameOver
              ? isWin
                ? "Congratulations, You Won!"
                : "Game Over!"
              : "Guess the word:"}
          </p>
          <h1
            className={`word-display ${isWin ? "win" : ""} ${
              isLoss ? "loss" : ""
            }`}
          >
            {isLoss ? word : displayedWord}
          </h1>

          {!isGameOver && (
            <form onSubmit={handleSubmit} className="guess-form">
              <input
                type="text"
                maxLength={1}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="letter-input"
                autoFocus
              />
              <button type="submit" className="form-button-king">
                Guess
              </button>
            </form>
          )}

          <div className="guessed-letters">
            <p>Guessed:</p>
            <div className="letter-chips">
              {[...guessedLetters].sort().map((letter) => (
                <span key={letter} className="letter-chip">
                  {letter}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="game-controls">
        <button onClick={restartGame} className="form-button-king primary">
          New Game
        </button>
        <Link to="/" className="form-button-king">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default HangMan;