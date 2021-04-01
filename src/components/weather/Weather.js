import { useEffect, useState } from 'react';
import Input from '../input/Input';
import Display from '../display/Display';

function Weather() { 
    const [weather, setWeather] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [city, setCity] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    useEffect(() => {
        async function fetchMyAPI() { 
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            response = await response.json()
            setWeather(response)

            if(response.cod === 200) {
                setIsSubmitted(true);
            }
        }

        fetchMyAPI();
    }, [city]);

    function handleChange(e) {
        setUserInput(e.target.value);
    }

    function submitUserData() {
        setCity(userInput);
    }
    
    return (
        <div>
            <h1>Weather App</h1>
            <Input onChange={handleChange}/>
            <button value="Send" onClick={submitUserData}>Send</button>
            <Display data={weather} submited={isSubmitted}/>
        </div>
    );
}

export default Weather;