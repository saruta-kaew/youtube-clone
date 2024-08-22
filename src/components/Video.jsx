import "../styles/video.css"
import thumbnail1 from "../assets/thumbnail-1.webp"
import channel1 from "../assets/channel-1.jpeg"

function Video() {
    return (
        <>
            <div className="video-preview">
                <div className="covered-row">
                    <img className="covered-pic" src={thumbnail1} />
                    <div className="video-time">
                        14:20
                    </div>
                </div>
                <div className="video-info-grid">
                    <div>
                        <img className="profile-pic" src={channel1} />
                    </div>
                    <div className="video-info">
                        <p className="video-title">Talking Tech and AI with Google CEO Sundar Pichai!</p>
                        <p className="video-author">Marques Brownlee</p>
                        <p className="video-stats">3.4M views &#183; 6 months ago</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Video