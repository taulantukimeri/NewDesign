import React from 'react';
import '../../../styles/Header/Header.scss'
import MainLogo from '../../../assets/icons/main-logo.svg'
import DarkLightLogo from '../../../assets/icons/sun-icon.svg'
import Navbar from "../Navbar/Navbar";
import contactbtn from '../../../assets/icons/contact-btn.svg'


function Header() {
    return (
        <div className="header-main">
            <div className="header-logo">
                <img src={MainLogo}/>
                <h3>Tame <span>Ads.</span></h3>
            </div>
            <Navbar/>

            <div className="header-buttons">

                <button className="contact-btn"><img  src={contactbtn}/>Contact</button>
                <button className="light-dark-btn">
                    <img src={DarkLightLogo} alt="sun-logo"/>
                </button>
                <div className="burger-btn">
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                </div>
                <button className="login-btn">Log In</button>
                <button className="signup-btn">Sign Up</button>
            </div>

        </div>
    );
}

export default Header;
