import React from "react";
import "../../../styles/AdSection/AdSection4.scss";
import foto1 from "../../../assets/icons/news.png";
import foto2 from "../../../assets/icons/news2.png";
import foto3 from "../../../assets/icons/news3.png";
// import SwiperFour from '../../Section4Swiper/SwipperFour'
import ImageSlider from "../AdSection/AdSlider4";
import { useState } from "react";
// import {setCurrentIndex, slideIndex} from '../AdSection/AdSlider4'

function AdSection4(props) {
  const slides = [
    {
      pic: foto1,
      header: "Banner Ads",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ratione, voluptatibus. Aliquam aliquid repudiandae veniam!",
    },
    {
      pic: foto2,
      header: "Native Ads",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ratione, voluptatibus. Aliquam aliquid repudiandae veniam!",
    },
    {
      pic: foto3,
      header: "Natuve Interstitials",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ratione, voluptatibus. Aliquam aliquid repudiandae veniam!",
    },
    {
      pic: foto1,
      header: "Video Pre-Roll",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ratione, voluptatibus. Aliquam aliquid repudiandae veniam!",
    },
    {
      pic: foto3,
      header: "Popunder",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ratione, voluptatibus. Aliquam aliquid repudiandae veniam!",
    },
  ];

  const tabNames = [
    "Banner Ads",
    "Native Ads",
    "Native Interstitials",
    "Video Pre-Roll",
    "popunder",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  const goToCurrent = () => {
    setCurrentIndex(currentIndex);
};

  const handleTabClick = (index) => {
    setCurrentIndex(index);
    // <ImageSlider slides={slides} currentIndex={currentIndex} goToCurrent={index}/>
  };



  return (
    <div className="ad-main4">
      <h2>TameAds Ad Formats</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        asperiores debitis deleniti ducimus ea eius eligendi eveniet id iure
        magnam molestiae nisi nobis, non nulla obcaecati omnis optio quae?
        Maiores!
      </p>
      <div className="tabs4">
        {tabNames.map((tabName, index) => (
          <div
            key={tabName}
            className={currentIndex === index ? 'activeTab' : ''}
            onClick={() => {
              handleTabClick(index); // Change currentIndex on tab click
            }}
          >
            {tabName}
          </div>
        ))}
      </div>

      {/* Render ImageSlider with updated currentIndex */}
      <div className="slider" style={containerStyles}>
      <ImageSlider slides={slides} currentIndex={currentIndex} goToCurrent={handleTabClick} />

      </div>

      <div className="btn4">
        <div className="btn-sec4">
          <button>
            See All Ad Formats <span>&#8594;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdSection4;
