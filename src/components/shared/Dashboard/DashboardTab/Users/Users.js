import React from 'react';
import profilelogo from '../../../../../assets/icons/Ellipse 1816.svg';
import threedots from '../../../../../assets/icons/vuesax-outline-more.svg';
import '../../../../../styles/Dashboard/DashboardTad/Users/Users.scss'


const userData = [
  { id: 1, name: 'Arabika', sold: '600+ sold per month' },
  { id: 2, name: 'Robusta', sold: '400+ sold per month' },
  { id: 3, name: 'Liberika', sold: '800+ sold per month' },
  { id: 4, name: 'Excelsa', sold: '300+ sold per month' },
  { id: 5, name: 'Jamaika', sold: '700+ sold per month' },
  { id: 6, name: 'Colombia', sold: '500+ sold per month' },
];

const TopCards = () => {
  return (
    <div className="top-cards">
      {userData.map((user) => (
        <div key={user.id} className="top-card">
          <img src={profilelogo} alt='profilelogo' className='user-logo' />
          <div className="top-card-text">
            <h5>{user.name}</h5>
            <p>{user.sold}</p>
          </div>
          <img src={threedots} alt="threedots" />
        </div>
      ))}
    </div>
  );
};

export default TopCards;
