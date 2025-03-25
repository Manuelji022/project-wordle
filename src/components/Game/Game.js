import React from "react";
import GuessTracker from "../GuessTracker/GuessTracker";
import GuessInput from "../GuessInput/GuessInput";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import { sample, range } from "../../utils";

import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessedWords, setNewGuessedWords] = React.useState([]);
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((_, index) => (
        <Guess key={index} />
      ))}
      {/*<GuessTracker guessedWords={guessedWords} />*/}
      <GuessInput
        guessedWords={guessedWords}
        setNewGuessedWords={setNewGuessedWords}
      />
    </div>
  );
}

export default Game;
