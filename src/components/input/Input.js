const Input = (props) => {
    return (
        <div>
            {console.log(props)}
            <input 
                type="text"
                name="username"
                onChange={e => props.onChange(e)}
            />
        </div>
    );
}

export default Input;