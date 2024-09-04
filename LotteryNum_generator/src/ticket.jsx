import TicketNum from "./ticketNum.jsx";
import "./ticket.css";

export default function Ticket({ ticketBox }) {
  return (
    <div className="ticket">
      <p>Ticket</p>
      {ticketBox.map((num, idx) => (
        <TicketNum num={num} key={idx} />
      ))}
    </div>
  );
}
