import React, { useReducer } from "react";
import CounterReducer from "./CounterReducer";
import Child from "./Child";

const Child2 = () => {
  let [state, dispatch] = useReducer(CounterReducer, 5);
  console.log(state);
  return (
    <div>
        <h1> This is the second child using Counter countext</h1>
      <h1>Value of reducer state is :{state}</h1>
      <button onClick={() => dispatch('INCREMENT')}> Increment Value in Reducer</button>
    </div>
  );
};

export default Child2;
