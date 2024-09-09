import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ searchRes }) {
  let [city, setCity] = useState("");

  let [error, setError] = useState(false);

  const Url = "https://api.openweathermap.org/data/2.5/weather";
  // const Url = "http://api.openweathermap.org/geo/1.0/direct";
  const Key = "e9c7cbbc37a752db0b94324d77edf907";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(`${Url}?q=${city}&appid=${Key}`);
      let jsonResponse = await response.json();

      let results = {
        city: city,
        temp: jsonResponse.main.temp,
        humidity: jsonResponse.main.humidity,
        temp_min: jsonResponse.main.temp_min,
        temp_max: jsonResponse.main.temp_max,
        feels_like: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      return results;

    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
    // Reset error when user starts typing after displaying
    if (error) {
      setError(false);
    }
  };

  let onSubmit = async (e) => {
    e.preventDefault();
    try {
      setCity("");
      let Sresult = await getWeatherInfo();
      searchRes(Sresult);
    } catch (e) {
      setError(true);
    }
  };

  return (
    <div className="searchBox">
      <form onSubmit={onSubmit}>
        <TextField
          id="city"
          label="city name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        <br />
        {error && (
          <p style={{ color: "red" }}>No such place exits in out API</p>
        )}
      </form>
    </div>
  );
}
