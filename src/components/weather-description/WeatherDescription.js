const WeatherDescription = (props) => {
    function displayIcon(icon) {
        return (
            <div>
                <img src={"http://openweathermap.org/img/wn/" + icon + ".png"} alt="Weather Icon"/>
            </div>
        )
    }

    return(
        <div>
            {props.weather.map(info => {
                return(
                    <div>
                        <p>{info.description}</p>
                        <p>{info.main}</p>
                        {displayIcon(info.icon)}
                    </div>
                );
            })}
        </div>
    );
}

export default WeatherDescription;