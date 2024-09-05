import { useState, useEffect } from "react";

export default function facts() {
  const url = "https://catfact.ninja/fact";

  let [fact, setFact] = useState([]);

  let getNewFact = async () => {
    let response = await fetch(url);
    let jsonResponse = await response.json();
    setFact({ fact: jsonResponse.fact });
  };

  useEffect(() => {
    async function firstOne() {
      let response = await fetch(url);
      let jsonResponse = await response.json();
      setFact({ fact: jsonResponse.fact });
    }
    firstOne();
  }, []);

  return (
    <div>
      <h2>Random facts !!</h2>
      <h3>{fact.fact}</h3>
      <br />
      <br />
      <button onClick={getNewFact}>Generate</button>
    </div>
  );
}
