import "./App.css";
import Lottery from "./Lottery.jsx";
import { sum } from "./lotteryHelper.js";

function App() {
  let winningCondition = (Nticket) => {
    return sum(Nticket) === 15;
    // return ticket.every((num)=> num === ticket[0]);
    // return ticket[2] === 0;
  };

  return (
    <>
      <Lottery n={3} winningCondition={winningCondition} />
    </>
  );
}

export default App;
