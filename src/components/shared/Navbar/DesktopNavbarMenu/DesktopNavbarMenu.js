import React, { useState } from "react";
// import "./Navbar.css";
import NavLinks from "../NavLink/NavLinks";
// import iconss from "../iconss/Icon ionic-ios-sunny.png";
import "../../../../styles/Navbar/DesktopNavbarMenu/DesktopNavbarMenu.css";
import modalpic from '../../../../assets/icons/Image_shape.png'
import advlogo from '../../../../assets/icons/Group 40780.svg'
import evlogo from '../../../../assets/icons/Group 40781.svg'
import englogo from '../../../../assets/icons/Group 40781.svg'
import cologo from '../../../../assets/icons/Group 40783.svg'
import lelogo from '../../../../assets/icons/Group 40784.svg'
import  oflogo from '../../../../assets/icons/Group 40785.svg'
import publogo from '../../../../assets/icons/Group 40786.svg'
import selflogo from '../../../../assets/icons/Group 40787.svg'
import dirlogo from '../../../../assets/icons/Group 40788.svg'
import weblogo from '../../../../assets/icons/Group 40789.svg'
import prelogo from '../../../../assets/icons/Group 40790.svg'
import addlogo from '../../../../assets/icons/Group 40791.svg'
import aboutlogo from '../../../../assets/icons/Group 40792.svg'
import teamlogo from '../../../../assets/icons/Group 40793.svg'
import loclogo from '../../../../assets/icons/Group 40794.svg'
import carlogo from '../../../../assets/icons/Group 40795.svg'
import faqlogo from '../../../../assets/icons/Group 40796.svg'
import helplogo from '../../../../assets/icons/Group 40797.svg'
import trendlogo from '../../../../assets/icons/Group 40798.svg'
import thirdlogo from '../../../../assets/icons/Group 40800.svg'
import seasonlogo from '../../../../assets/icons/Group 40801.svg'
import monlogo from '../../../../assets/icons/Group 40802.svg'
import autologo from '../../../../assets/icons/Group 40803.svg'
import wordlogo from '../../../../assets/icons/Group 40804.svg'
import csvlogo from '../../../../assets/icons/Group 40805.svg'
import reflogo from '../../../../assets/icons/Group 40806.svg'






function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  const links = [
    {
      title: "Advertisers",
      isToggle: true,
      primary: {
        title: "Advertisers",
        links: [
          {
            title: "Advertisers",
            description: "Advertisers Overview",
            icon: advlogo,
          },
          {
            title: "Coupons",
            description: "Coupons Products",
            icon: cologo,
          },
          {
            title: "Events",
            description: "Industry Events",
            icon: evlogo,
          },
          {
            title: "Lexicon",
            description: "Lexicon List",
            icon: lelogo,
          },
          {
            title: "Engineering Blog",
            description: "View Engineering Blog",
            icon: englogo,
          },
          {
            title: "Offices",
            description: "See The Offices",
            icon: oflogo,
          },
        ],
      },
      secondary: {
        title: "Advertisers Blog",
        images: [
          {
            title: "Tameads Is The Technology Company ",
            description: "Powering The Discovery Feeds On Your Favorite Media.",
            url: modalpic,
          },
          {
            title: "Tameads Is The Technology Company ",
            description: "Powering The Discovery Feeds On Your Favorite Media.",
            url: modalpic,
          },
          {
            title: "Tameads Is The Technology Company ",
            description: "Powering The Discovery Feeds On Your Favorite Media.",
            url: modalpic,
          }
         
        ],
      },
    },
    {
      title: "Media Owners",
      isToggle: true,
      primary: {
        title: "Advertisers",
        links: [
          {
            title: "Advertisers",
            description: "Advertisers Overview",
            icon: publogo,
          },
          {
            title: "Advertisers",
            description: "Advertisers Overview",
            icon: weblogo,
          },
          {
            title: "Advertisers",
            description: "Advertisers Overview",
            icon: selflogo,
          },
          {
            title: "Advertisers",
            description: "Advertisers Overview",
            icon: prelogo,
          },
          {
            title: "Advertisers",
            description: "Advertisers Overview",
            icon: dirlogo,
          },
          {
            title: "Advertisers",
            description: "Advertisers Overview",
            icon: addlogo,
          }
        ],
      },
      secondary: {
        title: "Advertisers Blog",
        images: [
          {
            title: "Tameads Is The Technology Company ",
            description: "Powering The Discovery Feeds On Your Favorite Media.",
            url: modalpic,
          },
          {
            title: "Tameads Is The Technology Company ",
            description: "Powering The Discovery Feeds On Your Favorite Media.",
            url: modalpic,
          },
          {
            title: "Tameads Is The Technology Company ",
            description: "Powering The Discovery Feeds On Your Favorite Media.",
            url: modalpic,
          },

        ],
      },
    },
    {
      title: "About Us",
      isToggle: true,
      primary: {
        title: "Advertisers",
        links: [
          {
            title: "Advertisers",
            description: "Advertisers Overview",
            icon: aboutlogo,
          },
          {
            title: "Advertisers",
            description: "Advertisers Overview",
            icon: carlogo,
          },
          {
            title: "Advertisers",
            description: "Advertisers Overview",
            icon: teamlogo,
          },
          {
            title: "Advertisers",
            description: "Advertisers Overview",
            icon: faqlogo,
          },
          {
            title: "Advertisers",
            description: "Advertisers Overview",
            icon: loclogo,
          },
          {
            title: "Advertisers",
            description: "Advertisers Overview",
            icon: helplogo,
          },
        ],
      },
      secondary: {
        title: "Advertisers Blog",
        images: [
          {
            title: "Tameads Is The Technology Company ",
            description: "Powering The Discovery Feeds On Your Favorite Media.",
            url: modalpic,
          },
          {
            title: "Tameads Is The Technology Company ",
            description: "Powering The Discovery Feeds On Your Favorite Media.",
            url: modalpic,
          },
          {
            title: "Tameads Is The Technology Company ",
            description: "Powering The Discovery Feeds On Your Favorite Media.",
            url: modalpic,
          },

        ],
      },
    },
    {
      title: "Resources",
      isToggle: true,
      primary: {
        title: "Resources",
        links: [
          {
            title: "Advertisers",
            description: "Advertisers Overview",
            icon: reflogo,
          },
          {
            title: "Advertisers",
            description: "Advertisers Overview",
            icon: thirdlogo,
          },
          {
            title: "Advertisers",
            description: "Advertisers Overview",
            icon: seasonlogo,
          },
          {
            title: "Advertisers",
            description: "Advertisers Overview",
            icon: trendlogo,
          },
          {
            title: "Advertisers",
            description: "Advertisers Overview",
            icon: monlogo,
          },
          {
            title: "Advertisers",
            description: "Advertisers Overview",
            icon: autologo,
          },
          {
            title: "Advertisers",
            description: "Advertisers Overview",
            icon: addlogo,
          },
          {
            title: "Advertisers",
            description: "Advertisers Overview",
            icon: wordlogo,
          },
          {
            title: "Advertisers",
            description: "Advertisers Overview",
            icon: csvlogo,
          },
        ],
      },
      secondary: {
        title: "Latest News",
        images: [
          {
            title: "Tameads Is The Technology Company ",
            description: "Powering The Discovery Feeds On Your Favorite Media.",
            url: modalpic,
          },
          {
            title: "Tameads Is The Technology Company ",
            description: "Powering The Discovery Feeds On Your Favorite Media.",
            url: modalpic,
          },
          {
            title: "Tameads Is The Technology Company ",
            description: "Powering The Discovery Feeds On Your Favorite Media.",
            url: modalpic,
          },
        ],
      },
    },
    {
      title: "Ad Formats",
      isToggle: false,
    },
  ];

  return (
    <div className="desktop-navbar">
      <div className={`nav-links ${isDropdownOpen ? "open" : ""}`}>
        {links.map((link, index) => (
          <div className="navbar-catch">
            <NavLinks key={index} link={link} />
          </div>
        ))}
      </div>
      <div className="right-side">

        <span className="sun"></span>


      </div>
    </div>
  );
}

export default Navbar;
