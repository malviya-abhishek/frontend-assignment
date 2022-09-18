

function VideoCard( {description, thumbnail, videoId} ){
    return (
        <a href= {"https://www.youtube.com/watch?v=" + videoId }>
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={thumbnail} alt="card" />
                <div className="card-body">
                <p className="card-text">{description}</p>
                </div>
            </div>
        </a>
    );
}


export default VideoCard;