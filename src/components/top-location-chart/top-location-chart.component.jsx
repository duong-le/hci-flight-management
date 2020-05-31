import React from 'react';

import ReactApexChart from 'react-apexcharts';

const TopLocationChart = () => {
  const series = [44, 55, 41, 37, 35];

  const options = {
    chart: {
      type: 'donut'
    },
    labels: ['New York', 'London', 'Sydney', 'Tokyo', 'Denver'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 400
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    ],
    title: {
      text: 'TOP LOCATION',
      align: 'left',
      style: {
        fontSize: '20px',
        color: '#666'
      }
    }
  };

  return (
    <ReactApexChart
      series={series}
      options={options}
      type='donut'
      height={350}
      width={400}
    />
  );
};

export default TopLocationChart;
