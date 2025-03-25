import React from "react";

function GuessInput({ guessedWords, setNewGuessedWords }) {
  const [guessWord, setNewGuessedWord] = React.useState("");

  function printGuessWord() {
    console.log(guessWord);
    setNewGuessedWord("");
  }

  function addGuessedWord(newWord) {
    const newGuessedWords = [...guessedWords, newWord];
    setNewGuessedWords(newGuessedWords);
    setNewGuessedWord("");
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        addGuessedWord(guessWord);
        printGuessWord();
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        value={guessWord}
        pattern="^[a-zA-Z]{1,5}$"
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setNewGuessedWord(nextGuess);
        }}
      ></input>
    </form>
  );
}

export default GuessInput;
