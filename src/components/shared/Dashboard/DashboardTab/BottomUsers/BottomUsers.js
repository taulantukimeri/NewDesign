import React from 'react';
import profilelogo from '../../../../../assets/icons/Ellipse 1816.svg';
import threedots from '../../../../../assets/icons/vuesax-outline-more.svg';


const userData = [
  { id: 1, name: 'Arabika', sold: 'The coffee is delicious with a tempting distinctive aroma that makes the mind fresher' },
  { id: 2, name: 'Kang Malik', sold: 'The coffee is delicious with a tempting distinctive aroma that makes the mind fresher' },
];

const BottomUsers = () => {
  return (
    <div className="top-cards">
      {userData.map((user) => (
        <div key={user.id} className="top-card">
          <img src={profilelogo} alt='profilelogo' className='user-logo' />
          <div className="top-card-text">
            <h5>{user.name}</h5>
            <p>{user.sold}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BottomUsers;
