import { useState, useEffect } from "react";

export default function joke() {
  const url = "https://official-joke-api.appspot.com/random_joke";

  let [jokesetup, setJokeSetup] = useState({});

  let getNewJoke = async () => {
    try {
      let response = await fetch(url);
      let jsonResponse = await response.json();
      setJokeSetup({
        setup: jsonResponse.setup,
        punchline: jsonResponse.punchline,
      });
    } catch (error) {
      console.error("Error fetching fact:", error);
    }
  };

  useEffect(() => {
    getNewJoke();
  }, []);

  return (
    <div>
      <h2>Random Jokes !!</h2>
      <br />
      {/* <h3>{jokesetup}</h3>     */}
      <h3>{jokesetup.setup}</h3>
      <h3>{jokesetup.punchline}</h3>
      <br />
      <br />
      <button onClick={getNewJoke}>Get New Joke</button>
    </div>
  );
}
