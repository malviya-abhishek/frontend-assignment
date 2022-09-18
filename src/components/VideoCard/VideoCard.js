

function VideoCard( {description, thumbnail} ){
    return (
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={thumbnail} alt="Card image cap" />
            <div className="card-body">
            <p className="card-text">{description}</p>
            </div>
        </div>
    );
}


export default VideoCard;