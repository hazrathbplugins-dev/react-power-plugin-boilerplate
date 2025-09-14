function SingleUser(props) {
    return(
        <div>
            <h2>{props.user.name}</h2>
            <p>Email: {props.user.email}</p>
            <p>Phone: {props.user.phone}</p>
        </div>
    )
}

export default SingleUser;