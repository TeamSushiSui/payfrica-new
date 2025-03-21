import { RxHamburgerMenu } from "react-icons/rx";
import { BsBell } from "react-icons/bs";
import ProfileDP from '@/app/assets/images/Profile DP.jpg';
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav>
            <div className="nav-left-container">
                <RxHamburgerMenu className="hamburger-menu" />
                <div className="greetings">
                    <p className="top-greeting">Good Morning, 404</p>
                    <p className="bottom-greeting">How e be nah?</p>
                </div>
            </div>
            <div className="nav-right-container">
                <BsBell className="notis-logo" />
                <img src={ProfileDP.src} className="dp-img" alt="Profile Image" />
                <div className="profile-section">
                    <p className='profile-name'>@4our0ero4our</p>
                    <FaChevronDown />
                </div>
            </div>
        </nav>
    )
}

export default Navbar