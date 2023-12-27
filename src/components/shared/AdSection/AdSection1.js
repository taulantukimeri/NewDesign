import React from 'react';
import "../../../styles/AdSection/AdSection1.scss"
import foto from '../../../assets/icons/delivering.png'

function AdSection1(props) {
    return (
        <div className="ad-main1">
            <div className="ad-info1">
                <div className="tabs">
                    <button>Awareness</button>
                    <button>Consideration</button>
                    <button>Traffic</button>
                    <button>Conversation</button>
                </div>
                <h1>Effortlessly repurpose social assets</h1>
                <p>We've perfected the art of native advertising, empowering publishers and advertisers to grow their
                    brand presence and revenues.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, delectus!</p>
                <div className="btn1">
                    <div className="btn-sec1">
                        <button>Learn more <span>&#8594;</span></button>
                    </div>
                </div>
                <div className="dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                <div className="arrow">
                    <span className="dot">&#x203A;</span>
                </div>
            </div>
            <div className="logo1">
                <img src={foto} alt=""/>
            </div>
        </div>
    );
}

export default AdSection1;