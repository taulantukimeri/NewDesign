import React, { useState } from "react";
import "../../../../styles/Navbar/MobileNavbarMenu/MobileNavbarMenu.css";
import MobileNavbarLinks from "../MobileNavbarLinks/MobileNavbarLinks";

function MobileNavbarMenu() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const links = [
    {
      title: "Advertisers",
      body: [
        "Advertisers",
        "Events",
        "Engineering Blog",
        "Coupons",
        "Lexicon",
        "Offices",
      ],
    },
    {
      title: "Media Owners",
      body: [
        "Publishers Support",
        "Self Serve Platform",
        "Direct Advertising",
        "Webinars",
        "Premium Publishers",
        "AdMarket",
      ],
    },
    {
      title: "About Us",
      body: [
        "About TameAds",
        "Team",
        "Our Locations",
        "Career",
        "FAQ",
        "Help Centre",
      ],
    },
    {
      title: "Resources",
      body: [
        "Referral Program",
        "Trends",
        "Ads Format,",
        "3rd Part",
        "Monetize",
        "WordPress",
        "Seasonal Calendar",
        "Auto Optimization",
        "CSV Mapper",
      ],
    },
    {
      title: "Ad Formats",
    },
  ];
  return (
    <div className={`burger-menu ${showSidebar ? "show" : ""}`}>
      {showSidebar && (
        <div className="side-bar">
          <div className="sidebar-links">
            {links.map((L) => (
              <MobileNavbarLinks key={L.title} title={L.title} body={L.body} />
            ))}
          </div>
          <div className="sidebar-buttons">
          </div>
        </div>
      )}

      <div className="burger-menu" onClick={toggleSidebar}>
        <div className="line1"></div>
        <div className="line1"></div>
        <div className="line1"></div>
      </div>
    </div>
  );
}

export default MobileNavbarMenu;
