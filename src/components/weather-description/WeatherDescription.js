const WeatherDescription = (props) => {
    return(
        <div>
            {props.weather.map(info => {
                return(
                    <div>
                        <p>{info.description}</p>
                        <p>{info.main}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default WeatherDescription;