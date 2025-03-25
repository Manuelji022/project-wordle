import React from "react";
import { range } from "../../utils";

function Guess() {
  return (
    <p class="guess">
      {range(5).map((_, index) => (
        <span className="cell" key={index}></span>
      ))}
    </p>
  );
}

export default Guess;
