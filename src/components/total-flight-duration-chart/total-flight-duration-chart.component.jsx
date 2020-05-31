import React from 'react';

import ReactApexChart from 'react-apexcharts';

const TotalFlightDurationChart = () => {
  const series = [
    {
      name: 'Hours',
      data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
    }
  ];

  const options = {
    chart: {
      height: 350,
      type: 'line'
    },
    stroke: {
      width: 7,
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '1/11/2019',
        '2/11/2019',
        '3/11/2019',
        '4/11/2019',
        '5/11/2019',
        '6/11/2019',
        '7/11/2019',
        '8/11/2019',
        '9/11/2019',
        '10/11/2019',
        '11/11/2019',
        '12/11/2019',
        '1/11/2020',
        '2/11/2020',
        '3/11/2020',
        '4/11/2020',
        '5/11/2020',
        '6/11/2020'
      ]
    },
    title: {
      text: 'TOTAL FLIGHT DURATION',
      align: 'left',
      style: {
        fontSize: '20px',
        color: '#666'
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#FDD835'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100]
      }
    },
    markers: {
      size: 4,
      colors: ['#FFA41B'],
      strokeColors: '#fff',
      strokeWidth: 2,
      hover: {
        size: 7
      }
    },
    yaxis: {
      min: 0,
      max: 40,
      title: {
        text: 'Hours'
      }
    }
  };

  return (
    <ReactApexChart
      series={series}
      options={options}
      type='line'
      height={350}
      width={600}
    />
  );
};

export default TotalFlightDurationChart;
