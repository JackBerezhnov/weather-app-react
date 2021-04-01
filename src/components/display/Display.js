import Tempature from "../tempature/Tempature";
import WeatherDescription from "../weather-description/WeatherDescription";
import './Display.css';

const Display = (props) => {

    if(!props.submited) {
        return (
            <div>
                <p>Wait Data from user</p>
            </div>
        )
    } else {
        return (
            <div className="weather-description">
                <h2 className="cityName">{props.data.name}</h2>
                <p>Country: {props.data.sys.country}</p>
                <Tempature temp={props.data.main.temp} />
                <WeatherDescription weather={props.data.weather} />
            </div>
        );
    }
}

export default Display;