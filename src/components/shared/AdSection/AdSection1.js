// import React from "react";
// import "../../../styles/AdSection/AdSection1.scss";
// import foto from "../../../assets/icons/delivering.png";
// // import adslider1 from '../AdSection/'

// function AdSection1(props) {
//   return (
//     <div className="ad-main1">
//       <div className="ad-info1">
//         <div className="tabs">
//           <button>Awareness</button>
//           <button>Consideration</button>
//           <button>Traffic</button>
//           <button>Conversation</button>
//         </div>
//         <h1>Effortlessly repurpose social assets</h1>
//         <p>
//           We've perfected the art of native advertising, empowering publishers
//           and advertisers to grow their brand presence and revenues. Lorem ipsum
//           dolor sit amet, consectetur adipisicing elit. Assumenda, delectus!
//         </p>
//         <div className="btn1">
//           <div className="btn-sec1">
//             <button>
//               Learn more <span>&#8594;</span>
//             </button>
//           </div>
//         </div>
//         <div className="dots">
//           <div className="dot"></div>
//           <div className="dot"></div>
//           <div className="dot"></div>
//           <div className="dot"></div>
//         </div>
//         <div class="controls">
//           <button class="prev" onclick="prevSlide()">
//             Prev
//           </button>
//           <button class="next" onclick="nextSlide()">
//             Next
//           </button>
//         </div>
//       </div>
//       <div className="logo1">
//         <img src={foto} alt="" />
//       </div>
//     </div>
//   );
// }

// export default AdSection1;

import React, { useState } from "react";
import "../../../styles/AdSection/AdSection1.scss";
import foto from "../../../assets/icons/delivering.png";

function AdSection1(props) {
  const slides = [
    { title: "Awareness", header: "Designed to drive high quality attention", content: "TameAds delivers ad experiences that are built for attention which is at the root of driving brand lift and awareness. We can drive up to 40% greater lift in ad recall in our optimized units versus the original creative."},
    { title: "Consideration",  header: "Enabling effective consideration strategies", content: "TameAds considers user mindset and the buying journey to serve ads at the right time and context. Our platform ensures maximum relevance and helps in influencing consideration effectively."},
    { title: "Traffic", header: "Driving traffic through targeted strategies", content: "TameAds directs high-quality traffic to your platform by deploying targeted strategies that resonate with your audience. We focus on reaching the right audience segments to maximize your traffic."},
    { title: "Conversation", header: "Fostering meaningful conversations", content: "TameAds initiates conversations that matter. Our engagement strategies focus on fostering meaningful interactions that lead to valuable conversions and deeper connections with your audience."},
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <div className="ad-main1">
      <div className="ad-info1">
        {/* Iterate through each slide */}
        {slides.map((slide, index) => (
          <div key={index} className={`slide ${index === currentSlide ? "active" : ""}`}>
            <h1>{slide.title}</h1>
            <h2>{slide.header}</h2>
            <p>{slide.content}</p>
          </div>
        ))}

        {/* Navigation buttons */}
        <div className="controls">
          <button className="prev" onClick={prevSlide} disabled={currentSlide === 0}>
            Prev
          </button>
          <button
            className="next"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
          >
            Next
          </button>
        </div>

        {/* Dots for navigation */}
        <div className="dots">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
      </div>

      {/* This is your logo */}
      <div className="logo1">
        <img src={foto} alt="" />
      </div>
    </div>
  );
}

export default AdSection1;
