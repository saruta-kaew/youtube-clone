import "../styles/sidebar.css"
import homeIcon from "../assets/icons/sidebar/home.svg"
import subscriptionIcon from "../assets/icons/sidebar/subscriptions.svg"
import youtubeMusicIcon from "../assets/icons/sidebar/youtube-music.svg"
import youtubeMusicColorIcon from "../assets/icons/sidebar/youtube-music-color.svg"
import historyIcon from "../assets/icons/sidebar/history.svg"
import playlistIcon from "../assets/icons/sidebar/playlist.svg"
import userChannelIcon from "../assets/icons/sidebar/user-channel.svg"
import videoIcon from "../assets/icons/sidebar/video.svg"
import shortsIcon from "../assets/icons/sidebar/shorts.svg"
import watchLaterIcon from "../assets/icons/sidebar/watch-later.svg"
import likedVideoIcon from "../assets/icons/sidebar/liked-video.svg"
import downloadIcon from "../assets/icons/sidebar/download.svg"
import trendingIcon from "../assets/icons/sidebar/trending.svg"
import musicIcon from "../assets/icons/sidebar/music.svg"
import gamingIcon from "../assets/icons/sidebar/gaming.svg"
import newsIcon from "../assets/icons/sidebar/news.svg"
import sportIcon from "../assets/icons/sidebar/sport.svg"
import youtubeStudioIcon from "../assets/icons/sidebar/youtube-studio.svg"
import youtubeKidsIcon from "../assets/icons/sidebar/youtube-kids.svg"
import settingIcon from "../assets/icons/sidebar/setting.svg"
import reportHistoryIcon from "../assets/icons/sidebar/report-history.svg"
import helpIcon from "../assets/icons/sidebar/help.svg"
import feedbackIcon from "../assets/icons/sidebar/feedback.svg"
import allSubscriptionIcon from "../assets/icons/sidebar/all-subscription.svg"

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
                        <img src={shortsIcon} />
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
                        <img src={userChannelIcon} />
                        <div>Your channel</div>
                    </button>
                    <button className="sidebar-menu-button">
                        <img src={historyIcon} />
                        <div>History</div>
                    </button>
                    <button className="sidebar-menu-button">
                        <img src={playlistIcon} />
                        <div>Playlists</div>
                    </button>
                    <button className="sidebar-menu-button">
                        <img src={videoIcon} />
                        <div>Your videos</div>
                    </button>
                    <button className="sidebar-menu-button">
                        <img src={watchLaterIcon} />
                        <div>Watch later</div>
                    </button>
                    <button className="sidebar-menu-button">
                        <img src={likedVideoIcon} />
                        <div>Liked Videos</div>
                    </button>
                    <button className="sidebar-menu-button">
                        <img src={downloadIcon} />
                        <div>Downloads</div>
                    </button>

                </div>
                <div className="sidebar-box">
                    <div className="sidebar-menu-topic">Subscriptions</div>
                    <button className="sidebar-menu-button">
                        <img src={allSubscriptionIcon} />
                        <div>All subscriptions</div>
                    </button>
                </div>
                <div className="sidebar-box">
                    <div className="sidebar-menu-topic">Explore</div>
                    <button className="sidebar-menu-button">
                        <img src={trendingIcon} />
                        <div>Trending</div>
                    </button>
                    <button className="sidebar-menu-button">
                        <img src={musicIcon} />
                        <div>Music</div>
                    </button>
                    <button className="sidebar-menu-button">
                        <img src={gamingIcon} />
                        <div>Gaming</div>
                    </button>
                    <button className="sidebar-menu-button">
                        <img src={newsIcon} />
                        <div>News</div>
                    </button>
                    <button className="sidebar-menu-button">
                        <img src={sportIcon} />
                        <div>Sports</div>
                    </button>
                </div>
                <div className="sidebar-box">
                    <div className="sidebar-menu-topic">More from YouTube</div>
                    <button className="sidebar-menu-button">
                        <img src={youtubeStudioIcon} />
                        <div>YouTube Studio</div>
                    </button>
                    <button className="sidebar-menu-button">
                        <img src={youtubeMusicColorIcon} />
                        <div>YouTube Music</div>
                    </button>
                    <button className="sidebar-menu-button">
                        <img src={youtubeKidsIcon} />
                        <div>YouTube Kids</div>
                    </button>
                </div>
                <div className="sidebar-box">
                    <br />
                    <button className="sidebar-menu-button">
                        <img src={settingIcon} />
                        <div>Settings</div>
                    </button>
                    <button className="sidebar-menu-button">
                        <img src={reportHistoryIcon} />
                        <div>Report History</div>
                    </button>
                    <button className="sidebar-menu-button">
                        <img src={helpIcon} />
                        <div>Help</div>
                    </button>
                    <button className="sidebar-menu-button">
                        <img src={feedbackIcon} />
                        <div>Send feedback</div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar