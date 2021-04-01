const Tempature = (props) => {
    function fromKelvinToFahrenheit(props) {
        let tempature = props.temp;
        let tempatureFahrenheit = (tempature - 273.15) * 9/5 + 32
        return tempatureFahrenheit;
    }

    return <p>Tempature: {fromKelvinToFahrenheit(props)}</p>
}

export default Tempature;