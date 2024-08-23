import "../styles/sidebar.css"
import homeIcon from "../assets/icons/home.svg"
import subscriptionIcon from "../assets/icons/subscriptions.svg"
import youtubeMusicIcon from "../assets/icons/youtube-music.svg"
import youtubeMusicIcon2 from "../assets/icons/youtube-music-2.svg"
import history from "../assets/icons/history.svg"

function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <div className="sidebar-box">
                    <button className="sidebar-menu-button">
                        <img src={homeIcon} />
                        <div>Home</div>
                    </button>
                    <button className="sidebar-menu-button">
                        <img src={youtubeMusicIcon} />
                        <div>Shorts</div>
                    </button>
                    <button className="sidebar-menu-button">
                        <img src={subscriptionIcon} />
                        <div>Subscriptions</div>
                    </button>
                    <button className="sidebar-menu-button">
                        <img src={youtubeMusicIcon} />
                        <div>YouTube Music</div>
                    </button>
                </div>
                <div className="sidebar-box">
                    <div className="sidebar-menu-topic">You</div>
                    <button className="sidebar-menu-button">
                        <img src={youtubeMusicIcon} />
                        <div>Your channel</div>
                    </button>
                    <button className="sidebar-menu-button">
                        <img src={history} />
                        <div>History</div>
                    </button>
                    <button className="sidebar-menu-button">
                        <img src={youtubeMusicIcon} />
                        <div>Playlists</div>
                    </button>
                    <button className="sidebar-menu-button">
                        <img src={youtubeMusicIcon} />
                        <div>Your videos</div>
                    </button>
                    <button className="sidebar-menu-button">
                        <img src={youtubeMusicIcon} />
                        <div>Watch later</div>
                    </button>
                    <button className="sidebar-menu-button">
                        <img src={youtubeMusicIcon} />
                        <div>Liked Videos</div>
                    </button>
                    <button className="sidebar-menu-button">
                        <img src={youtubeMusicIcon} />
                        <div>Downloads</div>
                    </button>

                </div>
                <div className="sidebar-box">
                    <div className="sidebar-menu-topic">Subscriptions</div>
                </div>
                <div className="sidebar-box">
                    <div className="sidebar-menu-topic">Explore</div>
                    <button className="sidebar-menu-button">
                        <img src={youtubeMusicIcon} />
                        <div>Trending</div>
                    </button>
                    <button className="sidebar-menu-button">
                        <img src={youtubeMusicIcon} />
                        <div>Music</div>
                    </button>
                    <button className="sidebar-menu-button">
                        <img src={youtubeMusicIcon} />
                        <div>Gaming</div>
                    </button>
                    <button className="sidebar-menu-button">
                        <img src={youtubeMusicIcon} />
                        <div>News</div>
                    </button>
                    <button className="sidebar-menu-button">
                        <img src={youtubeMusicIcon} />
                        <div>Sports</div>
                    </button>
                </div>
                <div className="sidebar-box">
                    <div className="sidebar-menu-topic">More from YouTube</div>
                    <button className="sidebar-menu-button">
                        <img src={youtubeMusicIcon} />
                        <div>YouTube Studio</div>
                    </button>
                    <button className="sidebar-menu-button">
                        <img src={youtubeMusicIcon2} />
                        <div>YouTube Music</div>
                    </button>
                    <button className="sidebar-menu-button">
                        <img src={youtubeMusicIcon} />
                        <div>YouTube Kids</div>
                    </button>
                </div>
                <div className="sidebar-box">
                    <button className="sidebar-menu-button">
                        <div>Settings</div>
                    </button>
                    <button className="sidebar-menu-button">
                        <div>Report History</div>
                    </button>
                    <button className="sidebar-menu-button">
                        <div>Help</div>
                    </button>
                    <button className="sidebar-menu-button">
                        <div>Send feedback</div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar