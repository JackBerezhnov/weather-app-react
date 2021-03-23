import axios from 'axios';
import { useEffect, useState } from 'react';

function Weather() {
    const [person, setPerson] = useState(['']); 


    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                const persons = res.data;
                setPerson(persons);
            })
    });

    return (
        <div>
            <h1>Weather App</h1>
            <ul>
                {person.map(per => <li>{per.name}</li>)}
            </ul>
        </div>
    );
}

export default Weather;