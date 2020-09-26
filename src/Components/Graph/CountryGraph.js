import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";

const options = {
  legend: {
    display: false,
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  title:{
    display: true,
    text:'New Cases data',
    fontSize:15
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
      label: function (tooltipItem, data) {
        return numeral(tooltipItem.value).format("+0,0");
      },
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value, index, values) {
            return numeral(value).format("0a");
          },
        },
      },
    ],
  },
};

const buildChartData = (data, casesType) => {
  let chartData = [];
  let lastDataPoint;
  for (let date in data.cases) {
    if (lastDataPoint) {
      let newDataPoint = {
        x: date,
        y: data[casesType][date] - lastDataPoint,
      };
      chartData.push(newDataPoint);
    }
    lastDataPoint = data[casesType][date];
  }
  return chartData;
};

function CountryGraph({ casesType, country}) {
  const [data, setData] = useState({});

  console.log(country);

  useEffect(() => {
    const fetchData = async () => {
      const myUrl =`https://disease.sh/v3/covid-19/historical/${country}?lastdays=210`
      await fetch(myUrl)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if(data.timeline)
          {
            let chartData = buildChartData(data.timeline, casesType);
            setData(chartData);
          }
          
        });
    };

    fetchData();
  }, [casesType, country]);


  return (
    <div>

      { casesType==="cases" && data?.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                backgroundColor: "rgba(204, 16, 52, 0.5)",
                borderColor: "#CC1034",
                data: data,
              },
            ],
          }}
          height={500}
          width={1000}
          options={options}
          
        />
      )}

    { casesType==="recovered" && data?.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                backgroundColor: "lightgreen",
                data: data,
              },
            ],
          }}
          height={500}
          width={1000}
          options={options}
        />
      )}

    { casesType==="deaths" && data?.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                backgroundColor: "rgba(204, 16, 52, 0.5)",
                borderColor: "#CC1034",
                data: data,
              },
            ],
            
          }}
          height={500}
          width={1000}
          options={options}
        />
      )}
    </div>
  );
}



export default CountryGraph;