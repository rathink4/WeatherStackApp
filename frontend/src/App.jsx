import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [location, setLocation] = useState(
    "New York, United States of America"
  );
  const [temperature, setTemperature] = useState(24);
  const [wind, setWind] = useState(0);
  const [precip, setPrecip] = useState(0);
  const [pressure, setPressure] = useState(1000);
  const [weather, setWeather] = useState("Sunny");
  const [weatherIcon, setWeatherIcon] = useState(
    "https://weatherstack.com/site_images/weather_icon_full_sun.svg"
  );

  useEffect(() => {
    const fetchWeatherData = async () => {
      axios.defaults.baseURL = "http://localhost:8000/api";
      try {
        const response = await axios.get("/home/");
        const weatherData = response.data;
        const loc = `${weatherData.location.name}, ${weatherData.location.region}, ${weatherData.location.country}`;
        setLocation(loc);
        setTemperature(weatherData.current.temperature);
        setWind(weatherData.current.wind_speed);
        setPrecip(weatherData.current.precip);
        setPressure(weatherData.current.pressure);
        setWeather(weatherData.current.weather_descriptions[0]);
        setWeatherIcon(weatherData.current.weather_icons[0]);
      } catch (error) {
        console.log("Fetching data failed!");
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <>
      <div className="weather-container">
        <h2>{location}</h2>
        <div className="weather-info">
          <div className="main-info">
            <div className="icon-temp">
              <img src={weatherIcon} alt={weather} className="weather-icon" />
              <div className="temperature">
                <h1>{temperature}°C</h1>
              </div>
            </div>
            <div className="weather-description">
              <p>{weather}</p>
            </div>
            <div className="additional-info">
              <p>{wind} kmph</p>
              <p>{precip} mm</p>
              <p>{pressure} mb</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
