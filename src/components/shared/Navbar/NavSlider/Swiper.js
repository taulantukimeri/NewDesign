import React, { useState } from "react";
import SwiperCore from "swiper";
import { useSwiper } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "../../../../styles/Navbar/Swiper/swiper.css";
import "../../../../styles/Navbar/LinkModal/LinkModal.css";
import "swiper/css/navigation";
import "swiper/css/pagination"; 
import leftarrow from "../../../../assets/icons/Group 40777.svg";
import rightarrow from "../../../../assets/icons/Group 40778.svg";



SwiperCore.use([Navigation, Pagination]);

const YourComponent = ({ swiperObject }) => {
  const [swiperi, setSwiper] = useState(null);

  const slides = swiperObject.images;
  const [activeIndex, setActiveIndex] = useState(0);

  const swiper = useSwiper();

  const handlePrevSlide = () => {
    console.log(swiper);
    if (swiper !== null) {
      swiper.slidePrev();
      setActiveIndex(Swiper.activeIndex);
    }
  };

  const handleNextSlide = () => {
    console.log(swiper);
    if (swiper !== null) {
      swiper.slideNext(); 
      setActiveIndex(Swiper.activeIndex);
    }
  };

  return (
    <div className="my-swipper-class">
      <div className="top-right-side">
        <p>{swiperObject.title}</p>
        <div className="top-right-side-arrows">
          <button onClick={handlePrevSlide}>
            <img src={leftarrow} />
          </button>
          <button onClick={handleNextSlide}>
            <img src={rightarrow} />
          </button>
        </div>
      </div>
      <hr className="line-hr"></hr>
      <div className="mid-right-side">
        <Swiper
          modules={[Navigation, Pagination]}
          onSwiper={setSwiper}
          navigation={true}
          pagination={{ clickable: true }}
          className="swiper-container"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="swiper-slide-image">
                <img src={slide.url} alt={`Photo ${slide.id}`} />
              </div>
              <div className="slider-content">
                <p>{slide.title}</p>
                <p>{slide.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default YourComponent;
