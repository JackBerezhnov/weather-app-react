import './Input.css';

const Input = (props) => {
    return (
        <div>
            {console.log(props)}
            <input 
                type="text"
                name="username"
                id="cityInput"
                placeholder="Enter city name for to know current weather..."
                onChange={e => props.onChange(e)}
            />
        </div>
    );
}

export default Input;