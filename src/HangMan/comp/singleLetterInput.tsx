import React, { useState, ChangeEvent, FormEvent } from "react";
import "./letterInput.css";

interface LetterInputProps {
  onSubmit: (letter: string) => void;
}

const LetterInput: React.FC<LetterInputProps> = ({ onSubmit }) => {
  const [letter, setLetter] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (input.length <= 1 && /^[a-zA-Z]*$/.test(input)) {
      setLetter(input.toLowerCase());
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (letter) {
      onSubmit(letter);
      setLetter("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="centered-container">
      <input
        type="text"
        className="styled-input"
        value={letter}
        onChange={handleInputChange}
        placeholder="A"
        maxLength={1}
      />
      <button type="submit" className="styled-button">
        Submit
      </button>
    </form>
  );
};

export default LetterInput;
