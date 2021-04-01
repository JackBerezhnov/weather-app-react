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
                {console.error("The data from weather", props.data)}
                <h2>{props.data.name}</h2>
                <p>{props.data.id}</p>
                <p>{props.data.sys.country}</p>
            </div>
        );
    }
}

export default Display;