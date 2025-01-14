import React, { useState } from "./react";
import { render } from "./react-dom";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(10);
  const [name, setName] = useState("Saurab");
  return (
    <div className="App">
      <h1
        style={{
          textAlign: "center",
          cursor: "pointer",
          userSelect: "none",
        }}
        onclick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </h1>
      <h1
        style={{
          textAlign: "center",
          cursor: "pointer",
          userSelect: "none",
        }}
        onclick={() => {
          setCount2(count2 + 10);
        }}
      >
        {count2}
      </h1>

      <h1
        style={{ textAlign: "center"}}
      >
        {name}
      </h1> 
      <div
        style={{textAlign: 'center'}}
      >
        <input
          type="text"
          onchange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      
    </div>
  );
}

render(<App></App>, document.getElementById("root"));

// function Card() {
//   return (
//     <div className="hello">
//       {"Saurab"}
//       <b className="hii">Kunwar</b>
//     </div>
//   )
// }

// render(<Card></Card>, document.getElementById("root"));
