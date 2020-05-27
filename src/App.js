import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import FlightsPage from './pages/flights/flights.component';
import FlightDataPage from './pages/flight-data/flight-data.component';
import FlightComponent from './pages/flight-data/flight/flight.component';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/flights' component={FlightsPage} />
        <Route exact path='/flight-data' component={FlightDataPage} />
        <Route exact path='/flight-data/flight' component={FlightComponent} />
      </Switch>
    </div>
  );
}

export default App;
