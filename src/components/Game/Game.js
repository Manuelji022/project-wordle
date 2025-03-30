import React from "react";
import GuessTracker from "../GuessTracker/GuessTracker";
import GuessInput from "../GuessInput/GuessInput";

import { sample } from "../../utils";

import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessedWords, setNewGuessedWords] = React.useState([]);
  return (
    <>
      <GuessTracker guessedWords={guessedWords} />
      <GuessInput
        guessedWords={guessedWords}
        setNewGuessedWords={setNewGuessedWords}
      />
    </>
  );
}

export default Game;
