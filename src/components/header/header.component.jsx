import React from 'react';
import { Link } from 'react-router-dom';

import { Menu } from 'antd';

const Header = () => (
  <div className='header'>
    <Menu mode='horizontal'>
      <Menu.Item key='home-page'>
        <Link to='/'>Trang chủ</Link>
      </Menu.Item>
      <Menu.SubMenu key='drone-manipulation' title='Điều khiển Drone'>
        <Menu.Item key='setting:1'>Điều khiển payload</Menu.Item>
        <Menu.Item key='setting:2'>Xem danh sách drone xung quanh</Menu.Item>
        <Menu.Item key='setting:3'>Thiết lập hành trình bay tự động</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key='drone-management' title='Quản lý Drone'>
        <Menu.Item key='setting:4'>
          <Link to='/flight-data'>Quản lý dữ liệu bay</Link>
        </Menu.Item>
        <Menu.Item key='setting:5'>
          <Link to='/flights'>Quản lý hành trình bay</Link>
        </Menu.Item>
        <Menu.Item key='setting:6'>Quản lý tổ đội bay</Menu.Item>
        <Menu.Item key='setting:7'>
          Quản lý các drone đang hoạt động trên bản đồ
        </Menu.Item>
        <Menu.Item key='setting:8'>
          Quản lý drone và trang thiết bị đính kèm
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key='risk-analysis' title='Phân tích nguy cơ'>
        <Menu.Item key='setting:9'>Danh sách thành phần lưới điện</Menu.Item>
        <Menu.Item key='setting:10'>
          Tiếp nhận thông tin cảnh báo, báo cáo
        </Menu.Item>
        <Menu.Item key='setting:11'>Gửi cảnh báo và yêu cầu kiểm tra</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key='monitor' title='Giám sát trung tâm'>
        <Menu.Item key='setting:12'>Quản lý thành phần lưới điện</Menu.Item>
        <Menu.Item key='setting:13'>
          Tiếp nhận thông tin cảnh báo , báo cáo
        </Menu.Item>
        <Menu.Item key='setting:14'>Danh sách các đợt kiểm tra</Menu.Item>
        <Menu.Item key='setting:15'>Tạo đợt kiểm tra thủ công</Menu.Item>
        <Menu.Item key='setting:16'>Tạo đợt kiểm tra tự động</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key='construction-management' title='Giám sát thi công'>
        <Menu.Item key='setting:17'>Danh sách công trình</Menu.Item>
        <Menu.Item key='setting:18'>Thống kê tiến độ</Menu.Item>
        <Menu.Item key='setting:19'>Tạo công trình</Menu.Item>
        <Menu.Item key='setting:20'>
          Tạo báo cáo kết quả tiến độ theo mẫu
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  </div>
);

export default Header;
