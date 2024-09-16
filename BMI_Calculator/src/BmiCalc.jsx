import "./BmiCalc.css";
import { useState } from "react";

export default function Bmi() {
  let [weight, setWeight] = useState("");
  let [height, setheight] = useState("");
  let [bmi, setBmi] = useState("");
  let [message, setMessage] = useState("");

  let calculateBMI = (e) => {
    e.preventDefault();

    if (height === "0" || height === "" || weight === "0" || weight === "") {
      alert("Weight and height cannot be zero or empty!");
      return;
    }

    let bmi = (weight / (height * height)) * 703;
    setBmi(`Your BMI is : ${bmi.toFixed(1)}`); // this to fixed help us to fix the number after point
    if (bmi < 25) {
      setMessage("You are Underweight");
    } else if (bmi >= 25 && bmi <= 30) {
      setMessage("You are healthy");
    } else {
      setMessage("You are over weight");
    }

    setWeight("");

    setheight("");
  };

  //   for handling height and weight

  let handleweight = (event) => {
    setWeight(event.target.value);
  };

  let handleheight = (event) => {
    setheight(event.target.value);
  };

  return (
    <main>
      <h1>BMI calculator</h1>
      <form onSubmit={calculateBMI}>
        <div className="weight">
          <label htmlFor="weight">Weight in(lbs):</label>
          &nbsp;
          <input
            type="number"
            name="weight"
            id="weight"
            placeholder="Enter weight ..."
            value={weight}
            onChange={handleweight}
            step="any"
            required
          />
        </div>
        <br />
        <div className="height">
          <label htmlFor="height">Height in(in):</label>
          &nbsp;
          <input
            type="number"
            className="height"
            id="height"
            placeholder="Enter height ..."
            value={height}
            onChange={handleheight}
            step="any"
            required
          />
        </div>

        <br />
        <div className="butns">
          <button className="submit" type="submit">
            Submit
          </button>
        </div>

        <div className="message">
          <h2>{bmi}</h2>
          <p>{message}</p>
        </div>
      </form>
    </main>
  );
}
