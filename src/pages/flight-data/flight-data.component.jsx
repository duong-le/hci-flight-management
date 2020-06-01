import React from 'react';

import CardList from '../../components/card-list/card-list.component';
import ChartList from '../../components/chart-list/chart-list.component';
import FlightList from '../../components/flight-list/flight-list.component';

import './flight-data.styles.scss';

const FlightDataPage = () => {
  return (
    <div className='flight-data-page'>
      <CardList />
      <ChartList />
      <FlightList />
    </div>
  );
};

export default FlightDataPage;
