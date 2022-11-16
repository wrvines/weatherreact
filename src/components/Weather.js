import React from "react";
import axios from "axios";
import "./Weather.css";

function Weather() {
  //get zipcode
  const [zipcode, setZipcode] = React.useState("");
  const [forecast, setForecast] = React.useState();

  const endpoint =
    "https://api.openweathermap.org/data/2.5/weather?appid=12ea3c9f921a4ca10f046151c2b64c99&units=imperial&zip=";

  //get infor from the API
  const fetchWeather = () => {
    //set up url to include zipcode
    let url = `${endpoint}${zipcode}`;
    console.log(url);
    axios.get(url).then((response) => {
      // console.log(response.data);
      setForecast(response.data);
    });
    setZipcode("");
  };
  // React.useEffect(() => {}, []);

  // get info from input box
  const handleTextBox = (event) => {
    // console.log("input");
    // console.log(event.target.value);
    setZipcode(event.target.value);
  };
  return (
    <div className="container">
      <input
        type="number"
        placeholder="Enter Zipcode"
        onChange={handleTextBox}
        value={zipcode}
      ></input>
      <button type="submit" onClick={fetchWeather}>
        Submit
      </button>
      <div>
        <h1>Showing Weather for {forecast?.name}</h1>
        <p>Temperature: {forecast?.main.temp}&deg; F</p>
        <p className="conditions">
          Conditions: {forecast?.weather[0].description}
        </p>
        <p>Wind: {forecast?.wind.speed} mph</p>
      </div>
    </div>
  );
}

export default Weather;
