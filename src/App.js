import React, { useState } from "react";
import { Message } from "./Message";
import { Message2 } from "./message2";
import "./App.css";
import Parent from "./Parent";
import counterContext from "./CounterContext";

export default function App() {
  // let [count,SetCount] =useState(30)
  let countState = useState(1);
  return (
    <counterContext.Provider value={countState}>
      <div>
        <Parent name="Abdul Azeem" />
      </div>
    </counterContext.Provider>
  );
}
// export default function App() {
//   let [count, setCount] = useState(1);
//   // setCount(2);
//   let [isMorning, setMorning] = useState(true);

//   return (
//     <div className={`box ${isMorning ? "dayLight" : ""}`}>
//       // className={`box ${isMorning ? "dayLight" : ""}`}>
//       <h1> Day Time = {isMorning ? "Morning " : "Night"}</h1>
//       <button onClick={() => setMorning(!isMorning)}> Counter Button </button>
//        <Message2 counter2={+count} />
//        <Message counter={count} />/<br></br>
//       <button onClick={() => setCount(++count)}> Counter Button </button>
//       <br></br>
//       <h2>Programming by Java Script</h2>;
//       <button className2 = {`small ${isMorning ? "dayMorning" : ""}`} onClick={() => setMorning(!isMorning)}> Update Day </button>
//     </div>
//   );
// }
// export function App() {
//   //  let [count,setCount]= useState
//   return <h1>Hello na World</h1>;
// }
// export default App;

// var count = 0;
// count = count + 1;
