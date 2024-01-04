import React from "react";
import "../../../../styles/Navbar/LinkModal/LinkModal.css";
import leftarrow from "../../../../assets/icons/Group 40777.svg";
import rightarrow from "../../../../assets/icons/Group 40778.svg";
import Swiper from "../NavSlider/Swiper";
import { useSwiper } from 'swiper/react';
import { useState } from "react";
import YourComponent from "../NavSlider/Swiper";

function LinkModal({ primary, secondary }) {

  return (
    <div className="link-modal">
      <div className="inside-modal">
        <div className="left-side-modal">
          <div className="top">
            <p>{primary.title}</p>
          </div>
          <div
            className={
              primary.links.length / 3 === 2 ? "grid-2-cols" : "grid-3-cols"
            }
          >
            {primary.links.map((link, index) => (
              <div className="mid">
                <img src={link.icon} />
                <div className="icon-span">
                  <p>{link.title}</p>
                  <p>{link.description}</p>
                </div>
              </div>
            ))}
            <div className="view-all">
              <p>View All</p>
              <img src={rightarrow} />
            </div>
          </div>
        </div>
        <div className="right-side-modal">
          <YourComponent swiperObject={secondary} />
        </div>
      </div>
    </div>
  );
}

export default LinkModal;
