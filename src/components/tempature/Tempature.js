const Tempature = (props) => {
    function fromKelvinToFahrenheit(props) {
        let tempature = props.temp;
        let tempatureFahrenheit = (tempature - 273.15) * 9/5 + 32
        return Number((tempatureFahrenheit).toFixed(1));
    }

    return <p>Tempature: {fromKelvinToFahrenheit(props)}F</p>
}

export default Tempature;