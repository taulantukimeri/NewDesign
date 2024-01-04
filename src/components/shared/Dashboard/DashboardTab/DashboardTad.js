import React from 'react'
import '../../../../styles/Dashboard/DashboardTad/DashboardTad.scss'
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Chart as ChartJS } from 'chart.js';
import logo1 from '../../../../assets/icons/card1.svg'
import logo2 from '../../../../assets/icons/card2.svg'
import logo3 from '../../../../assets/icons/Frame 427321391.svg'
import Chart from '../DashboardTab/Charts/charts'
import Arrow from '../../../../assets/icons/Vector.svg'
import searchicon from '../../../../assets/icons/search.svg'
import notification from '../../../../assets/icons/notification.svg'
import profilelogo from '../../../../assets/icons/Ellipse 1816.svg'
import dropdownarrow from '../../../../assets/icons/down-arrow.svg'
import greenicon from '../../../../assets/icons/green-icon.svg'
// import DashTable from '../../../../styles/Dashboard/DashboardTad/DashTable/DashTable.scss'
// import Users from '../../../../styles/Dashboard/DashboardTad/Users/Users.scss'
import BottomUsers from '../DashboardTab/BottomUsers/BottomUsers'
import ficon from '../../../../assets/icons/Button.svg'
import DashTable from '../DashboardTab/DashTable/DashTable'
import Users from '../DashboardTab/Users/Users'
import Charts from '../DashboardTab/Charts/charts'

    const cardData = [
      {
        id: 1,
        header: {
          logo: logo1,
          chip: {
            icon: greenicon,
            percentage: '25%',
          },
        },
        body: {
          count: '3.4K',
          description: 'Newsletters',
        },
      },
      {
        id: 2,
        header: {
          logo: logo2,
          chip: {
            icon: greenicon,
            percentage: '25%',
          },
        },
        body: {
          count: '5.2K',
          description: 'Revenue Performance',
        },
      },
      {
        id: 3,
        header: {
          logo: logo3,
          chip: {
            icon: greenicon,
            percentage: '25%',
          },
        },
        body: {
          count: '150',
          description: 'Subscribers',
        },
      },
      
    ];
    
    
    const DashboardTad = () =>  {
        
      return (
        <div className="dash-link">
            <div className="dashlink-header">
              <div className="header-left-side">
                <h2>Dashboard</h2>
              </div>
              <div className="header-right-side">
                <div  className="header-search" >
                  <img src = {searchicon} />
                <input type="text" placeholder="Search..."/>
                <img src = {ficon} />
                </div>
                <img src={notification} alt="notifitacion-icon" className="noti-img"/>
                <div className="profile-section">
                  <img src={profilelogo} alt="profile-logo" />
                  <div className="name-section">
                    <h5>Waluyo Subekti</h5>
                    <p>Admin 1</p>
                  </div>
                  <img src={dropdownarrow} alt='dropdownarrow' />
                </div>
              </div>
            </div>
          <div className="main-section">
            <div className="main-left-side">
              <div className="overview-section">
                <div className="overview-header">
                  <div className="overview-text">
                    <h3>Overview</h3>
                    <p>Some improvement progress</p>
                  </div>
                  <div className="monthly"><h4>Monthly </h4><img src={dropdownarrow} />
                  </div>
                </div>
                <div className="cards-section">
                {cardData.map((card) => (
                  <div key= {card.id} className="card">
                    <div className="card-header">
                      <img src={card.header.logo} alt="logo1" />
                      <div className="chip"><img src={card.header.chip.icon} /> <p>{card.header.chip.percentage}</p></div>
                    </div>
                    <div className="card-body">
                      <h2>{card.body.count}</h2>
                      <p>{card.body.description}</p>
                    </div>
                  </div>
                ))}
                </div>
              </div>
              <div className="activity-section">
                <div className="activity-header">
                  <div className="activity-left">
                    <h5>Activity</h5>
                    <p>Drive growth with newsletter sponsorship at scale.</p>
                  </div>
                  <div className="activity-right">
                    <div className="activity-performance">
                      <span></span>
                      <h4>Performance </h4>
                      <img src={dropdownarrow} />
                    </div>
                    <div className="monthly"><h4>Monthly </h4>
                    <img src={dropdownarrow} />
                    </div>
                  </div>
                </div>
                  <Chart />
              </div>
              <div className="purchase-section">
              <div className="purchase-header">
                  <h3>Purchase History</h3>
                  <div className="monthly"><h4>Weekly</h4><img src={dropdownarrow} />
                  </div>
                </div>
                <DashTable />
              </div>
            </div>
            <div className="main-right-side">
              <div className="top-section">
                <h3>Popular Menu</h3>
                <div className="top-cards">
                  <Users />
                </div>
              </div>
              <hr></hr>
              <div className="bottom-section">
                <h3>Menu item feedback</h3>
                <div className="arabica">
                  <h4>Arabica</h4>
                  <img src={dropdownarrow} />
                  </div>
                  <BottomUsers />
              </div>
            </div>
            </div>
        </div>
      )
    }
    

export default DashboardTad;
