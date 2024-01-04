import React from 'react';
import {Chart as ChartJS} from 'chart.js/auto';
// import { Chart as ChartJS } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Data from '../Charts/DataJson/Data.json'
import '../../../../../styles/Dashboard/DashboardTad/Charts/Charts.scss'
import Rectangle from '../../../../../assets/icons/Rectangle.png'
import Arrow from '../../../../../assets/icons/Vector.svg'

function Chart() {
  return (
    <div className='chartss'>
       
      <Bar 
        data = {{
          labels: Data.map((data) => data.label),
          datasets: [
            {
              data: Data.map((data) => data.value),
              borderRadius: 25,
            },
          ]
        }}
      />
    </div>
  )
}

export default Chart;
