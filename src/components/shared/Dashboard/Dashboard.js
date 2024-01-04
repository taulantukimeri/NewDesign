import React from 'react'
import history from '../../../assets/icons/history.svg'
import arrowsdash from '../../../assets/icons/arrows-header.svg'
import '../../../styles/Dashboard/Dashboard.scss'
import Tablist from '../../../components/shared/Dashboard/Tablist/TabList'

function Dashboard() {
  return (
    <div className='dashboard'>
        <div className='dashboard-header'>
            <div className='part-one'>
                <div className='dots-colored'>
                    <div className='dot-c'></div>
                    <div className='dot-c'></div>
                    <div className='dot-c'></div>
                </div>
                <img src={history}/>
                <img src = {arrowsdash} />
            </div>
            <div className='part-two'>
                <img src={history} />
                <div className='domain'>
                <img src={history} />
                <p>tameads.com</p>
                <img src={history}  className='imazhi-dy'/>
                </div>
            </div>
        </div>
        <Tablist />
    </div>
  )
}

export default Dashboard
