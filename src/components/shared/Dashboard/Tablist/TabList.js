import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DashboardTad from '../DashboardTab/DashboardTad';
import Analytics from '../Analytics/Analytics';
import Newsletter from '../Newsletter/Newsletter';
import Message from '../Message/Message';
import Member from '../Members/Members';
import Help from '../Help/Help'
import Settings from '../Settings/Settings';
import history from '../../../../assets/icons/history.svg'
import '../../../../styles/TabList/TabList.scss'

const Tablist = () => {
  return (
    <div className='tables'>
    <Tabs>
    <div className='tablist-div'>
        <div className='dashboard-logo'>
            <img src={history} />
            <p>TameAds.</p>
        </div>
      <TabList>
        <p>Menu</p>
        <Tab>Dashboard</Tab>
        <Tab>Analytics</Tab>
        <Tab>Newsletter</Tab>
        <Tab>Message</Tab>
        <Tab>Members</Tab>
        <div className='line'></div>
        <p>General</p>
        <Tab>Help</Tab>
        <Tab>Settings</Tab>
      </TabList>
      <div className='nightmode'>
        <div className='dark'>
            <img src={history} />
            <p>Dark</p>
        </div>
        <div className='dark light'>
            <img src={history} />
            <p>Light</p>
        </div>
      </div>
    </div>
      <TabPanel>
        <DashboardTad />
      </TabPanel>
      <TabPanel>
        <Analytics />
      </TabPanel>
      <TabPanel>
        <Newsletter />
      </TabPanel>
      <TabPanel>
        <Message />
      </TabPanel>
      <TabPanel>
        <Member />
      </TabPanel>
      <TabPanel>
        <Help />
      </TabPanel>
      <TabPanel>
        <Settings />
      </TabPanel>
    </Tabs>
    </div>
  );
};

export default Tablist;
