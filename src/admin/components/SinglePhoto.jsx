function SinglePhoto(props) {
    console.log(props);
    
    return(
        <img src={props.photo.thumbnailUrl} alt={props.photo.title} />
    )
}

export default SinglePhoto;