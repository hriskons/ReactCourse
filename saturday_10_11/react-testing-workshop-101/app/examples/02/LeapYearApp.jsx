import React from "react";
import { isLeap } from "./isLeap";

const LeapYearApp = () => {
  const currentYear = (new Date()).getFullYear();
  const nextYear = (new Date(2019, 1, 1)).getFullYear();
  const _2020 = (new Date(2020, 1, 1)).getFullYear();

  return (
    <div>
      <h2>View leap years</h2>
      <p>This Year: <strong>{ isLeap(currentYear) ? <>✔</> : <>✖</> }</strong></p>
      <p>Next Year: <strong>{ isLeap(nextYear) ? <>✔</> : <>✖</> }</strong></p>
      <p>2020: <strong>{ isLeap(_2020) ? <>✔</> : <>✖</> }</strong></p>
    </div>
  );
};

export default LeapYearApp;
