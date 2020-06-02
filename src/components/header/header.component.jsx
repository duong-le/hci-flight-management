import React from 'react';

import { Layout, Menu, Dropdown, Button } from 'antd';
import { UserOutlined, SearchOutlined, BellOutlined } from '@ant-design/icons';

import './header.styles.scss';

const Header = () => {
  const menu = (
    <Menu>
      <Menu.Item>Profile</Menu.Item>
      <Menu.Item>Sign out</Menu.Item>
    </Menu>
  );

  return (
    <Layout.Header className='header'>
      <div className='icon'>
        <SearchOutlined />
      </div>
      <div className='icon'>
        <BellOutlined />
      </div>
      <Dropdown overlay={menu} trigger={['click']}>
        <Button shape='circle' icon={<UserOutlined />} />
      </Dropdown>
    </Layout.Header>
  );
};

export default Header;
