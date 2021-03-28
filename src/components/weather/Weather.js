import { useEffect, useState } from 'react';
import Input from '../input/Input';

function Weather() { 
    const [weather, setWeather] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [city, setCity] = useState("");

    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    function getWeatherData(city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            .then(response => response.json())
            .then((data) =>  {
                setWeather(data);
            }
        );
    }

    function handleChange(e) {
        console.log("It happens", e.target.value);
        setUserInput(e.target.value);
    }

    function submitUserData() {
        setCity(userInput);
        console.log("City Name", city);
        getWeatherData(city);
    }



        return (
            <div>
                <h1>Weather App</h1>
                {console.log("Weather", weather)}
                <Input onChange={handleChange}/>
                <button value="Send" onClick={submitUserData}>Send</button> 
                <p>{userInput}</p>
            </div>
        ); 
}

export default Weather;