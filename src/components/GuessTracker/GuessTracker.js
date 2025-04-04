import React from "react";

import Guess from "../Guess/Guess";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

function GuessTracker({ guessedWords, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
        return <Guess value={guessedWords[num]} key={num} answer={answer} />;
      })}
    </div>
  );
}

export default GuessTracker;
