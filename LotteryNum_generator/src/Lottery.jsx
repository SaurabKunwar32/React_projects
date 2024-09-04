import { useState } from "react";
import { randomNumgen } from "./lotteryHelper.js";
import Ticket from "./ticket.jsx";

export default function lottery({ n, winningCondition }) {
  let [ticket, setTicket] = useState(randomNumgen(n));

  let isWinning = winningCondition(ticket);

  let buyTicket = () => {
    setTicket(randomNumgen(n));
  };

  return (
    <div>
      <h1>Lottery Game</h1>

      <Ticket ticketBox={ticket} />

      <h2>{isWinning && "Congratulation you won!!"}</h2>
      <button onClick={buyTicket}>Buy new Ticket</button>
    </div>
  );
}
