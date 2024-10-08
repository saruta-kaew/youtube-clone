import "../styles/header.css"
import hamburgerMenu from "../assets/icons/header/hamburger-menu.svg"
import youtubeLogo from "../assets/icons/header/YouTube_Premium_logo.svg"
import searchIcon from "../assets/icons/header/search.svg"
import voiceSearchIcon from "../assets/icons/header/voice-search-icon.svg"
import uploadIcon from "../assets/icons/header/upload.svg"
import notificationIcon from "../assets/icons/header/notifications.svg"
import userPicture from "../assets/image/user_picture.jpg"

function Header() {
    return (
        <>
            <div className="header">
                <div className="left-section">
                    <img className="hamburger-menu" src={hamburgerMenu} />
                    <div className="youtube-logo-container">
                        <img className="youtube-logo" src={youtubeLogo} />
                        <div className="youtube-logo-th">TH</div>
                    </div>
                </div>
                <div className="middle-section">
                    <input className="search-bar" type="text" placeholder="Search"></input>
                    <button className="search-button">
                        <img className="search-icon" src={searchIcon} />
                        <div className="tooltip">Search</div>
                    </button>
                    <button className="voice-search-button">
                        <img className="voice-search-icon" src={voiceSearchIcon} />
                        <div className="tooltip">Search with your voice</div>
                    </button>
                </div>
                <div className="right-section">
                    <div className="upload-icon-container">
                        <img className="upload-icon" src={uploadIcon} />
                        <div className="tooltip">Create</div>
                    </div>
                    <div className="notification-icon-container">
                        <img className="notification-icon" src={notificationIcon} />
                        <div className="notification-count">9+</div>
                    </div>
                    <img className="user-picture" src={userPicture} />
                </div>
            </div>
        </>
    )
}

export default Header