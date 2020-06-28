import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import FlightImagesPage from './pages/flight-images/flight-images.component';
import FlightDataPage from './pages/flight-data/flight-data.component';

import Header from './components/header/header.component';
import NavBar from './components/nav-bar/nav-bar.component';

import './App.css';

import { Layout } from 'antd';
const { Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => setCollapsed(!collapsed);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={toggleCollapsed}
        theme='light'
        width={400}
      >
        <h1 className='logo'>HI04</h1>
        <NavBar />
      </Sider>
      <Layout style={{ borderLeft: '1px solid #edf2f9' }}>
        <Header />
        <Content className='content-layout'>
          <Switch>
            <Route
              exact
              path='/'
              render={() => <Redirect to='/flight-data' />}
            />
            <Route exact path='/flight-data' component={FlightDataPage} />
            <Route
              exact
              path='/flights/:flightId/images'
              component={FlightImagesPage}
            />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
