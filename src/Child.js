import React, { useContext } from "react";
import counterContext from "./CounterContext";
const Child = (props) => {
  let counterValue = useContext(counterContext);
  console.log(counterValue);
  return (
    <div>
      <h1>This is the first Child</h1>
      <h1>CounterContext value is {counterValue[0]}</h1>
      <button
        onClick={() => {
          counterValue[1](++counterValue[0]);
        }}
      >
        {" "}
        Increment
      </button>
    </div>
  );
};

export default Child;
