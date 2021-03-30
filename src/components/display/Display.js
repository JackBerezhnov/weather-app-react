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
                {console.log("The data from weather", props.data)}
                <h2>{props.data.name}</h2>
            </div>
        );
    }
}

export default Display;