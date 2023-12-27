import React from 'react';
import "../../../styles/MainBanner/MainBanner.scss"
// import Icon from "../Icon/Icon";
import Icon1 from '../../../assets/icons/play-video.svg';
import plane1 from '../../../assets/icons/yellowplane.svg';
import plane2 from '../../../assets/icons/blueplane.svg';
import sponsor1 from '../../../assets/icons/msn.svg';
import sponsor2 from '../../../assets/icons/bloomberg.svg';
import sponsor3 from '../../../assets/icons/cbs.svg';
import sponsor4 from '../../../assets/icons/fox-tv.svg';
import sponsor5 from '../../../assets/icons/nbc.svg';
import sponsor6 from '../../../assets/icons/usa-today.svg';
import sponsor7 from '../../../assets/icons/business-insider.svg';
import foto from '../../../assets/icons/foto.png'
import CardSlider from "../CardSwipper/CardSlider";
import AddSection from "../AdSection/AddSection";
import AddSection1 from "../AdSection/AdSection1";
import AddSection2 from "../AdSection/AddSection2";
import AddSection3 from "../AdSection/AddSection3";
import AddSection4 from "../AdSection/AdSection4";
import Footer from "../Footer/Footer";

function MainBanner(props) {
    return (
        <div className="main-banner">
            <div className="banner-info">
                <h1>Better Ads For <span style={{fontWeight: "bold"}}>Better Results.</span></h1>
                <p>Drive marketing results faster with TameAds global advertising platform for media buyers, affiliates,
                    ad networks and publishers.</p>

                <div className="banner-txt-btns">
                    <button>Get Started</button>
                    <button>
                        <img src={Icon1} alt="play-video"/>
                        Play Video
                        {/*<Icon name="play-video" link={"icons"} icon={"play-video"} ext={"svg"}/>*/}
                    </button>
                </div>
            </div>
            <div className="dashboard-section">

            </div>

            <div className="sponsor-section">
                <img src={sponsor1} alt="sponsor-1"/>
                <img src={sponsor2} alt="sponsor-2"/>
                <img src={sponsor3} alt="sponsor-3"/>
                <img src={sponsor4} alt="sponsor-4"/>
                <img src={sponsor5} alt="sponsor-5"/>
                <img src={sponsor6} alt="sponsor-6"/>
                <img src={sponsor7} alt="sponsor-7"/>
            </div>

            <img src={plane1} alt="" className="plane-one"/>
            <img src={plane2} alt="" className="plane-two"/>

            <AddSection/>

            <div className="advertise">
                <div className="add-logo">
                    <img src={foto} alt=""/>
                </div>
                <div className="ad-info">
                    <h1>Our Vision</h1>
                    <p>We've perfected the art of native advertising, empowering publishers and advertisers to grow
                        their brand presence and revenues.</p>
                    <div className="btn">
                        <div className="btn-sec">
                            <button>Learn more <span>&#8594;</span></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="other-section">
                <h2>Delivering across the marketing funnel</h2>
            </div>

            <AddSection1/>
            <AddSection2/>
            <AddSection3/>
            <AddSection4/>
            <Footer/>

        </div>
    );
}

export default MainBanner;