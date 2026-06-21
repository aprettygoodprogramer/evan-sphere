import { useState, FormEvent } from "react";
import PageShell from "../components/PageShell";
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

const getRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex].toUpperCase();
};

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
    <PageShell backTo="/" backLabel="home">
      <p className="es-eyebrow">game</p>
      <h1 className="es-title">Hangman</h1>

      <div className="hangman-game">
        <img
          src={hangImages[wrongGuesses]}
          alt={`Hangman state with ${wrongGuesses} wrong guesses`}
          className="hangman-image"
        />

        <div className="hangman-info">
          <p className="hangman-status">
            {isGameOver
              ? isWin
                ? "Congratulations, you won!"
                : "Game over!"
              : "Guess the word:"}
          </p>
          <p
            className={`hangman-word ${isWin ? "is-win" : ""} ${
              isLoss ? "is-loss" : ""
            }`}
          >
            {isLoss ? word : displayedWord}
          </p>

          {!isGameOver && (
            <form onSubmit={handleSubmit} className="hangman-form">
              <input
                type="text"
                maxLength={1}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="es-input hangman-letter"
                autoFocus
              />
              <button type="submit" className="es-btn es-btn--solid">
                Guess
              </button>
            </form>
          )}

          <div className="hangman-guessed">
            <p>Guessed:</p>
            <div className="hangman-chips">
              {[...guessedLetters].sort().map((letter) => (
                <span key={letter} className="es-tag">
                  {letter}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button onClick={restartGame} className="es-btn es-btn--solid">
        New Game
      </button>
    </PageShell>
  );
}

export default HangMan;
