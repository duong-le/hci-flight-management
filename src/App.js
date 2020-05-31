import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import FlightImagesPage from './pages/flight-images/flight-images.component';
import FlightDataPage from './pages/flight-data/flight-data.component';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/flight-data' component={FlightDataPage} />
        <Route exact path='/flight/images' component={FlightImagesPage} />
      </Switch>
    </div>
  );
}

export default App;
