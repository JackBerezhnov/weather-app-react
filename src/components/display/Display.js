import Tempature from "../tempature/Tempature";
import WeatherDescription from "../weather-description/WeatherDescription";
import Weather from "../weather/Weather";

const Display = (props) => {

    if(!props.submited) {
        return (
            <div>
                <p>Wait Data from user</p>
            </div>
        )
    } else {
        return (
            <div>
                <h2>{props.data.name}</h2>
                <p>Country: {props.data.sys.country}</p>
                <Tempature temp={props.data.main.temp} />
                <WeatherDescription weather={props.data.weather} />
            </div>
        );
    }
}

export default Display;