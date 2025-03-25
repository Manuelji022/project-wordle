import React from "react";

function GuessTracker({ guessedWord }) {
  return (
    <div className="guess-results">
      {guessedWord.map((word, index) => {
        return (
          <p className="guess" key={index}>
            {word}
          </p>
        );
      })}
    </div>
  );
}

export default GuessTracker;
