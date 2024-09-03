import { useState } from "react";

export default function counter() {
  let [count, setCount] = useState(0);

  function incCount() {
    setCount(count + 1);
  }

  function decCount() {
    setCount(count - 1);
  }

  let styles={
    marginRight:"1rem"
  }

  let sty={
    marginBottom:"2rem"
  }

  return (
    <div style={sty}>
      <h2>Count Number={count}</h2>
      <button onClick={decCount} style={styles}>Decrease</button>
      <button onClick={incCount}>Increase</button>
    </div>
  );
}
