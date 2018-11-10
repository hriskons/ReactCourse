import React from "react";
import { wordCount } from "./wordCount";

const WordCountApp = () => {
  const text = "The below paragraph contains 6 words!";

  return (
    <div>
      <p><strong>{ wordCount(text) }</strong></p>
      <p>{ text }</p>
    </div>
  );
};

export default WordCountApp;
