import React from 'react';
import { Card } from 'antd';

import TotalFlightDurationChart from '../total-flight-duration-chart/total-flight-duration-chart.component';
import TopLocationChart from '../top-location-chart/top-location-chart.component';

import './chart-list.styles.scss';

const ChartList = () => (
  <div className="chart-list">
    <Card>
      <TotalFlightDurationChart />
    </Card>
    <Card>
      <TopLocationChart />
    </Card>
  </div>
);

export default ChartList;
