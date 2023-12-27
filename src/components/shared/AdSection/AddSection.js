import React from 'react';
import "../../../styles/AdSection/AdSection.scss"
import foto from '../../../assets/icons/foto.png'

function AdSection(props) {
    return (
        <div className="ad-main">
            <div className="ad-info">
                <h1>TameAds is technology company powering the discovery feeds on your favorite media.</h1>
                <p>We've perfected the art of native advertising, empowering publishers and advertisers to grow their brand presence and revenues.</p>
                <div className="cards">
                    <div className="card">
                        <h3>344B</h3>
                        <p>Monthly Recommendations</p>
                    </div>
                    <div className="card">
                        <h3>55+</h3>
                        <p>Countries in the Network</p>
                    </div>
                </div>
                <div className="btn">
                    <div className="btn-sec">
                        <button>Learn more <span>&#8594;</span></button>
                    </div>
                </div>
            </div>
            <div className="logo">
                <img src={foto} alt=""/>
            </div>
        </div>
    );
}

export default AdSection;