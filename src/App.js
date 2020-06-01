import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/nav-bar/nav-bar.component';
import HomePage from './pages/homepage/homepage.component';
import FlightImagesPage from './pages/flight-images/flight-images.component';
import FlightDataPage from './pages/flight-data/flight-data.component';

import './App.css';

import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;

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
        width={300}
      >
        <div className='logo'>HI04</div>
        <NavBar />
      </Sider>
      <Layout>
        <Header className='header-layout'></Header>
        <Content className='content-layout'>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/flight-data' component={FlightDataPage} />
            <Route exact path='/flight/images' component={FlightImagesPage} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
