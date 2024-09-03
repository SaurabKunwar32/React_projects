import { useState } from "react";

export default function ludo() {
  // we should make the same initial state for same process objests.
  let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });

  //   Now arrays and states updating arrays
  let [arr, setArr] = useState(["no moves"]);

  //   we can pass the values in different ways

  let updateBlue = () => {
    setMoves((preMoves) => {
      setArr([...arr, "blue moves"]);
      return { ...preMoves, blue: (preMoves.blue += 1) };
    });
  };

  function updateRed() {
    //we can pass the elements of object by spreading so re-rendering can we done.
    setMoves({ ...moves, red: (moves.red += 1) });
  }
  function updateYellow() {
    setMoves({ ...moves, yellow: (moves.yellow += 1) });
  }
  function updateGreen() {
    setMoves({ ...moves, green: (moves.green += 1) });
  }

  return (
    <div>
      <h1>Game begins !!</h1>
        <h3>Movements={arr}</h3>
      <div className="board">
        <p>Blue count ={moves.blue}</p>
        <button
          style={{ backgroundColor: "blue", color: "white" }}
          onClick={updateBlue}
        >
          +1
        </button>
        <p>Red count ={moves.red}</p>
        <button
          style={{ backgroundColor: "red", color: "white" }}
          onClick={updateRed}
        >
          +1
        </button>
        <p>Yellow count ={moves.yellow}</p>
        <button style={{ backgroundColor: "yellow" }} onClick={updateYellow}>
          +1
        </button>
        <p>Green count ={moves.green}</p>
        <button
          style={{ backgroundColor: "green", color: "white" }}
          onClick={updateGreen}
        >
          +1
        </button>
      </div>
    </div>
  );
}
