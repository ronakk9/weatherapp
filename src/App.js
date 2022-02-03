import logo from './logo.svg';
import './App.css';
import TaskForm from './Components/TaskForm';
import { useState } from 'react';

function App() {

  const api = {
    key: "9777cb2c188bfdc40ae4624c4c085b23",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  const [weather,setWeather] = useState("");
  const [city,setCity] = useState("");

  function handleChange(event){
    setCity(event.target.value);
  }
  function handleTemp(){
    fetch(`${api.base}weather?q=${city}&units=metric&appid=${api.key}`).then((data) => data = data.json())
    .then((info) => setWeather(info))
    console.log(weather);
    document.getElementById("smthng").innerHTML = weather.main.temp;
  }
  

  return (
    <div className="App">
      <div className="weather-app">
      <input placeholder='Enter city name...' value={city} onChange={handleChange}></input>
      <button onClick={handleTemp}>SUBMIT</button>

      <h2 id="smthng"></h2>
    </div>
    </div>
  );
}

export default App;
