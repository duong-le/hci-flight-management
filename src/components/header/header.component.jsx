import React from 'react';

import { Layout, Card, Menu, List, Input, Badge, Dropdown, Button } from 'antd';
import {
  UserOutlined,
  SearchOutlined,
  BellOutlined,
  SettingOutlined,
  ProjectOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import NOTIFICATIONS from '../../data/notifications.data';

import './header.styles.scss';

const Header = () => {
  const UserMenu = (
    <Card style={{ width: 200 }}>
      <Menu>
        <Menu.SubMenu icon={<UserOutlined />} title='Profile'></Menu.SubMenu>
        <Menu.SubMenu icon={<SettingOutlined />} title='Setting'></Menu.SubMenu>
        <Menu.SubMenu icon={<ProjectOutlined />} title='Project'></Menu.SubMenu>
        <Menu.SubMenu icon={<LogoutOutlined />} title='Sign Out'></Menu.SubMenu>
      </Menu>
    </Card>
  );

  const NotificationMenu = (
    <Card style={{ width: 300 }}>
      <List
        itemLayout='horizontal'
        dataSource={NOTIFICATIONS}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={item.icon}
              title={item.title}
              description={item.time + ' ago'}
            />
          </List.Item>
        )}
      />
    </Card>
  );

  return (
    <Layout.Header className='header' style={{ lineHeight: 0 }}>
      <div className='header-left'>
        <Input
          placeholder='Input search text'
          prefix={<SearchOutlined />}
          style={{ border: 0 }}
          size='large'
        />
      </div>
      <div className='header-right'>
        <Dropdown overlay={NotificationMenu} trigger={['click']}>
          <div className='p-r-15'>
            <Badge dot>
              <BellOutlined className='icon' />
            </Badge>
          </div>
        </Dropdown>
        <Dropdown overlay={UserMenu} trigger={['click']}>
          <Button
            shape='circle'
            icon={<UserOutlined style={{ color: '#87d068' }} />}
          />
        </Dropdown>
      </div>
    </Layout.Header>
  );
};

export default Header;
