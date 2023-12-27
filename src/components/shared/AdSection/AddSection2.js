import React from 'react';
import "../../../styles/AdSection/AdSection2.scss"
import foto from '../../../assets/icons/effortlessly.png'

function AdSection2(props) {
    return (
        <div className="ad-main2">
            <div className="ad-info2">
                <h1>Effortlessly repurpose social assets</h1>
                <p>We've perfected the art of native advertising, empowering publishers and advertisers to grow their brand presence and revenues.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, delectus!</p>
                <div className="btn2">
                    <div className="btn-sec2">
                        <button>Learn more <span>&#8594;</span></button>
                    </div>
                </div>
            </div>
            <div className="logo2">
                <img src={foto} alt=""/>
            </div>
        </div>
    );
}

export default AdSection2;