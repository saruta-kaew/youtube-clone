import "../styles/video.css"
import coveredPic1 from "../assets/image/pretty_slowly.jpg"
import videoProfilePic from "../assets/image/channels4_profile.jpg"

function Video() {
    return (
        <>
            <div className="video-preview">
                <div className="covered-row">
                    <img className="covered-pic" src={coveredPic1} />
                    <div className="video-time">
                        4:21
                    </div>
                </div>
                <div className="video-info-grid">
                    <div>
                        <img className="profile-pic" src={videoProfilePic} />
                    </div>
                    <div className="video-info">
                        <p className="video-title">Benson Boone - Pretty Slowly (Official Music Video)</p>
                        <p className="video-author">Benson Boone</p>
                        <p className="video-stats">701K views &#183; 6 days ago</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Video