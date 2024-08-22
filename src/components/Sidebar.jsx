import "../styles/sidebar.css"
import homeIcon from "../assets/icons/home.svg"
import exploreIcon from "../assets/icons/explore.svg"
import subscriptionIcon from "../assets/icons/subscriptions.svg"
import originalIcon from "../assets/icons/originals.svg"
import youtubeMusicIcon from "../assets/icons/youtube-music.svg"
import libraryIcon from "../assets/icons/library.svg"

function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <div className="sidebar-link">
                    <img src={homeIcon} />
                    <div>Home</div>
                </div>
                <div className="sidebar-link">
                    <img src={exploreIcon} />
                    <div>Explore</div>
                </div>
                <div className="sidebar-link">
                    <img src={subscriptionIcon} />
                    <div>Subscriptions</div>
                </div>
                <div className="sidebar-link">
                    <img src={originalIcon} />
                    <div>Originals</div>
                </div>
                <div className="sidebar-link">
                    <img src={youtubeMusicIcon} />
                    <div>YouTube Music
                    </div>
                </div>
                <div className="sidebar-link">
                    <img src={libraryIcon} />
                    <div>Library</div>
                </div>
            </div>
        </>
    )
}

export default Sidebar