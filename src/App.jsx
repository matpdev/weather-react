import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { api } from "./components/apiweather";
import { FaTemperatureHigh, FaWind } from "react-icons/fa";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

  async function handleGetWeather() {
    const response = await api.get(city);
    setWeather(response.data);
  }

  return (
    <div className="App">
      <header>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        ></input>
        <button onClick={async () => await handleGetWeather()}>enviar</button>
      </header>
      {weather && (
        <main>
          {" "}
          {/*<p>{JSON.stringify(weather)}</p>*/}
          <h1>{city}</h1>
          <section>
            <h2>Current Weather</h2>
            <p> {weather.description} </p>
            <p> {weather.temperature} </p>
          </section>
          <section>
            <h2>Próximos Dias</h2>
            {weather.forecast.map((day) => (
              <li>
                <div>
                  <p>
                    <FaTemperatureHigh /> {day.temperature}{" "}
                  </p>
                  <p>
                    <FaWind /> {day.wind}{" "}
                  </p>
                </div>
              </li>
            ))}{" "}
          </section>
        </main>
      )}{" "}
    </div>
  );
}

export default App;
