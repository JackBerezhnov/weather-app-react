import { useEffect, useState } from 'react';
import Input from '../input/Input';

function Weather() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false); 
    const [weather, setWeather] = useState([]);
    const [userInput, setUserInput] = useState("");

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

    function handleChange(e) {
        console.log("It happens", e.target.value);
        setUserInput(e.target.value);
    }

    if(error) {
        return <div>Error: {error.message}</div>;
    } else if(!isLoaded) {
        return <div>Loading...</div>;
    } else {

        return (
            <div>
                <h1>Weather App</h1>
                
                {console.log("Weather", weather)}
                <Input onChange={handleChange}/> 
                <p>{userInput}</p>
            </div>
        ); 
    }
}

export default Weather;