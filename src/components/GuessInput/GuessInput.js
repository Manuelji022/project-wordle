import React from "react";

function GuessInput() {
  const [guessWord, setNewGuessedWord] = React.useState("");

  function printGuessWord() {
    console.log(guessWord.toUpperCase());
    setNewGuessedWord("");
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        printGuessWord();
      }}
    >
      <label for="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        value={guessWord}
        pattern="^[a-zA-Z]{1,5}$"
        onChange={(event) => setNewGuessedWord(event.target.value)}
      ></input>
    </form>
  );
}

export default GuessInput;
