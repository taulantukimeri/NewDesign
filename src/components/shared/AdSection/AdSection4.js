import React from 'react';
import "../../../styles/AdSection/AdSection4.scss"
import foto1 from "../../../assets/icons/news.png"
import foto2 from "../../../assets/icons/news2.png"
import foto3 from "../../../assets/icons/news3.png"

function AdSection4(props) {
    return (
        <div className="ad-main4">
            <h2>TameAds Ad Formats</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores debitis deleniti ducimus ea
                eius eligendi eveniet id iure magnam molestiae nisi nobis, non nulla obcaecati omnis optio quae?
                Maiores!</p>
            <div className="tabs4">
                <button>Banner Ads</button>
                <button>Native Ads</button>
                <button>Native Interstitials</button>
                <button>Video Pre-Roll</button>
                <button>popunder</button>
            </div>

            <div className="slider">
                <span className="btn-left">&#x2039;</span>
                <span className="btn-right">&#x203A;</span>
                <div className="slides-left">
                    <img src={foto1} alt=""/>
                </div>
                <div className="slide-main">
                    <img src={foto3} alt=""/>
                    <h4>Native Ads</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ratione, voluptatibus. Aliquam
                        aliquid repudiandae veniam!</p>
                    <button>Learn more <span>&#8594;</span></button>
                </div>
                <div className="slides-right">
                    <img src={foto2} alt=""/>
                </div>
            </div>

            <div className="btn4">
                <div className="btn-sec4">
                    <button>See All Ad Formats <span>&#8594;</span></button>
                </div>
            </div>
        </div>
    );
}

export default AdSection4;