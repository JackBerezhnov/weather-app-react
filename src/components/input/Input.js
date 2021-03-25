const Input = (props) => {
    return (
        <div>
            {console.log(props)}
            <input 
                type="text"
                name="username"
                placeholder="Enter city name for to know current weather..."
                onChange={e => props.onChange(e)}
            />
        </div>
    );
}

export default Input;