import axios from 'axios';
import { useEffect, useState } from 'react';

function Weather() {
    const [person, setPerson] = useState(['']); 
    const [weather, setWeather] = useState([0]);

    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const cityName = "San Diego";
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`)
            .then(res => {
                console.log(res);
                const cityWeather = res.data;
                setWeather({cityWeather});
            })
    });

    return (
        <div>
            <h1>Weather App</h1>
        </div>
    );
}

export default Weather;