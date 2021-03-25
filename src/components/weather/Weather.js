import axios from 'axios';
import { useEffect, useState } from 'react';
import Input from '../input/Input';

function Weather() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false); 
    const [weather, setWeather] = useState([]);

    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const cityName = "San Diego";
    
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`)
            .then(response => response.json())
            .then((data) =>  {
                console.log(data);
                setIsLoaded(true); 
                setWeather(data);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );
    }, [])

    if(error) {
        return <div>Error: {error.message}</div>;
    } else if(!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <h1>Weather App</h1>
                
                {console.log("Weather", weather)}
                <Input/> 
            </div>
        ); 
    }
}

export default Weather;