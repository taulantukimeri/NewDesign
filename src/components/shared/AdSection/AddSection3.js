import React from 'react';
import "../../../styles/AdSection/AddSection3.scss"
import foto from '../../../assets/icons/Deep.png'

function AdSection3(props) {
    return (
        <div className="ad-main3">
            <div className="ad-info3">
                <h1>Effortlessly repurpose social assets</h1>
                <p>We've perfected the art of native advertising, empowering publishers and advertisers to grow their brand presence and revenues.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, delectus!</p>
                <div className="btn3">
                    <div className="btn-sec3">
                        <button>Learn more <span>&#8594;</span></button>
                    </div>
                </div>
            </div>
            <div className="logo3">
                <img src={foto} alt=""/>
            </div>
        </div>
    );
}

export default AdSection3;