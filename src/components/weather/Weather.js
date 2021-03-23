import axios from 'axios';
import { useEffect, useState } from 'react';
import Input from '../input/Input';

function Weather() {
    const [person, setPerson] = useState(['']); 
    const [weather, setWeather] = useState([0]);

    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const cityName = "San Diego";
    let dataWeather = {};
    
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`)
            .then(response => response.json())

            .then(data =>  {
                console.log(data)
                return dataWeather = data;
                //const cityWeather = data;
                //setWeather({cityWeather});
            });
    });

    function setDataWeather() {
        setWeather(dataWeather);
        console.log("It is our data", weather);
    }

    return (
        <div>
            {setDataWeather}
            <h1>Weather App</h1>
            <Input/> 
        </div>
    );
}

export default Weather;