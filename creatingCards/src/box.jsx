import Price from "./price.jsx";
import "./box.css";

function box({ title, idx }) {
  let oldPrice = ["1,499", "2,577", "1,888", "777"];
  let newPrice = ["1,200", "2,511", "1,400", "477"];
  let description = [
    ["Latest version", "12inch display"],
    ["2021 version","expandable"],
    ["Latest version","14 inch"],
    ["Build your own","affordable"],
  ];

  return (
    <div className="box">
      <h4>{title}</h4>
      <p>{description[idx][0]} </p>
      <p>{description[idx][1]} </p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>
  );
}

export default box;
