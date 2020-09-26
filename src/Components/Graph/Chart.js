import React from 'react';
import {Bar, Pie} from 'react-chartjs-2';


function Chart({info}) {
    
    
    return (
        <div className="app__Chart">

          <Bar
         data={{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [
              {
                label: 'cases',
                backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                data: [info.cases, info.recovered, info.deaths],
              },
            ],
          }}
          options={{
            legend: { display: false },
            title: { display: true, text: 'Total Covid Cases in  '   +info.country ,fontSize:15},
            gridLines: {
                display: false,
              }
          }}
          
        />
          &nbsp;&nbsp;
          &nbsp;&nbsp;
          &nbsp;&nbsp;
          &nbsp;&nbsp;
          &nbsp;&nbsp;
          &nbsp;&nbsp;
          &nbsp;&nbsp;
          &nbsp;&nbsp;
          &nbsp;&nbsp;
          &nbsp;&nbsp;
          &nbsp;&nbsp;
          &nbsp;&nbsp;
          &nbsp;&nbsp;
          &nbsp;&nbsp;
          <Pie
         data={{
            labels: ['Infected', 'Recovered', 'Deaths'],
            
            datasets: [
              {
                label: 'People',
                backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                data: [info.cases, info.recovered, info.deaths],
              },
            ],
          }}
          options={{
            legend: { display: true },
            
          }}
        height="130%"
        />
        
            

      
        </div>
    )
}


export default Chart;
