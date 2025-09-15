import { Link } from "react-router-dom";

function SingleUser(props) {
    return(
        <div>
            <h2>{props.user.name}</h2>
            <p>Email: {props.user.email}</p>
            <p>Phone: {props.user.phone}</p>
            <Link to={`/users/${props.user.id}`}>
                {props.user.name} ({props.user.username})
            </Link>
        </div>
    )
}

export default SingleUser;