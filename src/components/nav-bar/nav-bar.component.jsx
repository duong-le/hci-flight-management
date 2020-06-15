import React from 'react';
import { Link } from 'react-router-dom';

import { Menu } from 'antd';
import {
  HomeOutlined,
  AreaChartOutlined,
  ControlOutlined,
  WarningOutlined,
  LineChartOutlined,
  SlidersOutlined
} from '@ant-design/icons';

import './nav-bar.styles.scss';

const NavBar = () => (
  <div className='nav-bar'>
    <Menu mode='inline'>
      <Menu.Item key='home-page' icon={<HomeOutlined />}>
        <Link to='/'>Home</Link>
      </Menu.Item>
      <Menu.SubMenu
        key='drone-manipulation'
        title='Drone Manipulation'
        icon={<AreaChartOutlined />}
        disabled
      >
        <Menu.Item key='setting:1'>Payload control</Menu.Item>
        <Menu.Item key='setting:2'>Drone arround</Menu.Item>
        <Menu.Item key='setting:3'>Set up automatic flight itinerary</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        key='drone-management'
        title='Drone Management'
        icon={<ControlOutlined />}
      >
        <Menu.Item key='setting:4'>
          <Link to='/flight-data'>Flight data management</Link>
        </Menu.Item>
        <Menu.Item key='setting:6' disabled>
          Crew management
        </Menu.Item>
        <Menu.Item key='setting:7' disabled>
          Operating drone management
        </Menu.Item>
        <Menu.Item key='setting:8' disabled>
          Drone equipment management
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        key='risk-analysis'
        title='Risk Analysis'
        icon={<WarningOutlined />}
        disabled
      >
        <Menu.Item key='setting:9'>Electrical grid components</Menu.Item>
        <Menu.Item key='setting:10'>Receive warning and report</Menu.Item>
        <Menu.Item key='setting:11'>
          Send warnings and test requirement
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        key='monitor'
        title='Center Monitor'
        icon={<LineChartOutlined />}
        disabled
      >
        <Menu.Item key='setting:12'>Electrical corridor management</Menu.Item>
        <Menu.Item key='setting:14'>Inspection list</Menu.Item>
        <Menu.Item key='setting:15'>Create new inspection manually</Menu.Item>
        <Menu.Item key='setting:16'>
          Create new inspection automatically
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        key='construction-management'
        title='Construction Management'
        icon={<SlidersOutlined />}
        disabled
      >
        <Menu.Item key='setting:17'>Construction list</Menu.Item>
        <Menu.Item key='setting:18'>Progress statistics</Menu.Item>
        <Menu.Item key='setting:19'>Create new construction</Menu.Item>
        <Menu.Item key='setting:20'>Create new progress report</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  </div>
);

export default NavBar;
