import React from 'react';
import "../../../styles/CardSwipper/CardSwipper.scss"

function CardSwipper({ imageUrl, title, description, cardicon }) {
    return (
    <div className='card-swipper'>
        <div className='card-swipper-content'>
        <img src={cardicon} />
      <h3>{title}</h3>
      <p>{description}</p>
      </div>
      <img src={imageUrl} alt={title} className='card-swipper-image'/>
    </div>
  );
// };
}

export default CardSwipper;