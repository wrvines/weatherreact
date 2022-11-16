import React from "react";
import axios from "axios";
import "./Weather.css";

function Weather() {
  //get zipcode
  const [zipcode, setZipcode] = React.useState("");
  const [forecast, setForecast] = React.useState();
  const [image, setImage] = React.useState();
  const endpoint =
    "https://api.openweathermap.org/data/2.5/weather?appid=12ea3c9f921a4ca10f046151c2b64c99&units=imperial&zip=";

  //get image for weather
  // http://openweathermap.org/img/wn/
  const icon = "http://openweathermap.org/img/wn/";

  //get infor from the API
  const fetchWeather = (event) => {
    event.preventDefault();
    //set up url to include zipcode
    let url = `${endpoint}${zipcode}`;
    console.log(url);
    axios.get(url).then((response) => {
      // console.log(response.data);
      setForecast(response.data);
    });
    setZipcode("");
  };

  const fetchIcon = () => {
    let imageIcon = `${icon}${forecast?.weather[0].icon}`;
    setImage(imageIcon);
  };

  // }
  // get info from input box
  const handleTextBox = (event) => {
    // console.log("input");
    // console.log(event.target.value);
    setZipcode(event.target.value);
  };
  return (
    <div className="container">
      <form onSubmit={fetchWeather} className="form">
        <input
          type="number"
          placeholder="Enter Zipcode"
          onChange={handleTextBox}
          value={zipcode}
        ></input>
        <button>Submit</button>
      </form>
      <div>
        <h1>Showing Weather for {forecast?.name}</h1>
        <p className="temperature">Temperature: {forecast?.main.temp}&deg; F</p>
        <p className="conditions">
          Conditions: {forecast?.weather[0].description}
        </p>
        <p>Wind: {forecast?.wind.speed} mph</p>
        <div>{image}</div>
      </div>
    </div>
  );
}

export default Weather;
