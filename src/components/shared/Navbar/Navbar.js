import React, {useState} from 'react';
import "../../../styles/Navbar/Navbar.scss"

function Navbar() {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };


    return (
        <div className="nav-main">
            <button className="nav-btn-1">Advertisers <span>&#8250;</span></button>
            <button className="nav-btn-2">Media Owners <span>&#8250;</span></button>
            <button className="nav-btn-3">About Us <span>&#8250;</span></button>
            <button className="nav-btn-4">Resources <span>&#8250;</span></button>
            <button className="nav-btn-5">AD Formats <span>&#8250;</span></button>
            <div className="navbar-buttons">
                <button className="contact-btn">Contact</button>
                <button className="login-btn">Log In</button>
                <button className="signup-btn">Sign Up</button>
            </div>
        </div>
    );
}

export default Navbar;