import React from 'react';
import "../../../styles/CardSwipper/CardSwipper.scss"

function Card({ icon, imageUrl, title, description }) {
    return (
        <div className='card-swipper'>
            <div className='card-swipper-content'>
                <img src={icon} alt="Icon" style={{width: '50px', height: '50px'}} />
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <img src={imageUrl} alt={title} className='card-swipper-image' />
        </div>
    );
}

export default Card;