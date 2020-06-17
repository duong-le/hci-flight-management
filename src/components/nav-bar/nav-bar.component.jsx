import React from 'react';
import { Link } from 'react-router-dom';

import { Menu } from 'antd';
import {
  HomeOutlined,
  EyeOutlined,
  VideoCameraOutlined,
  WarningOutlined,
  FileDoneOutlined,
  ClusterOutlined,
  ProjectOutlined
} from '@ant-design/icons';

import './nav-bar.styles.scss';

const NavBar = () => (
  <div className="nav-bar">
    <Menu mode="inline">
      <Menu.Item key="home-page" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.SubMenu key="drone-manipulation" title="Điều khiển drone" icon={<EyeOutlined />}>
        <Menu.Item key="setting:1">
          <a href="https://www.figma.com/proto/vtNY9oE4CgxBhNfIQ83mGY/20192?node-id=1%3A2&amp;scaling=scale-down">Điều khiển payload</a>
        </Menu.Item>
        <Menu.Item key="setting:2">
          <a href="https://nguyenvd27.github.io/HI_template/admin/taotrinhbay.html">Thiết lập hành trình bay tự động</a>
        </Menu.Item>
        <Menu.Item key="setting:3">
          <a href="https://nguyenvd27.github.io/HI_template/admin/dungbando.html">Dựng bản đồ bay</a>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="drone-management" title="Quản lý drone" icon={<VideoCameraOutlined />}>
        <Menu.Item key="setting:4">
          <Link to="/flight-data">Quản lý dữ liệu bay</Link>
        </Menu.Item>
        <Menu.Item key="setting:6">
          <a href="https://sleepy-lowlands-11196.herokuapp.com/drone-management/data-analy">Phân tích dữ liệu từ drone</a>
        </Menu.Item>
        <Menu.Item key="setting:7">
          <a href="https://nguyenvd27.github.io/HI_template/admin/xemdanhsachtrinhbay.html">Quản lý các hành trình bay</a>
        </Menu.Item>
        <Menu.Item key="setting:8">
          <a href="https://sleepy-lowlands-11196.herokuapp.com/drone-management/location">Quản lý các drone đang hoạt động trên bản đồ</a>
        </Menu.Item>
        <Menu.Item key="setting:9">
          <a href="https://sleepy-lowlands-11196.herokuapp.com/drone-management/drones">Quản lý thiết bị drone và thiết bị đi kèm</a>
        </Menu.Item>
        <Menu.Item key="setting:10">
          <a href="https://sleepy-lowlands-11196.herokuapp.com/drone-management/members">Quản lý tổ đội bay</a>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="risk-analysis" title="Phân tích nguy cơ" icon={<WarningOutlined />}>
        <Menu.Item key="setting:11">
          <a href="https://nnhhai.github.io">Xem danh sách thành phần lưới điện</a>
        </Menu.Item>
        <Menu.Item key="setting:12">
          <a href="https://nguyenvd27.github.io/HI_template/admin/xemcanhbao.html">Xem danh sách các nguy cơ tiềm ẩn</a>
        </Menu.Item>
        <Menu.Item key="setting:13">
          <a href="http://100.26.57.128/#/analysis/detail">Gửi cảnh báo và yêu cầu kiểm tra</a>
        </Menu.Item>
        <Menu.Item key="setting:14">
          <a href="http://100.26.57.128/#/analysis">Quản lý phân tích sự cố</a>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="report" title="Báo cáo kiểm tra" icon={<FileDoneOutlined />}>
        <Menu.SubMenu key="report-1" title="Xem danh sách các báo cáo kết quả kiểm tra">
          <Menu.Item key="setting:15">
            <a href="https://electric-report-a846b.web.app/datatable.html">BC Kiểm tra mạng lưới điện</a>
          </Menu.Item>
          <Menu.Item key="setting:16">
            <a href="https://ti-amo.github.io/HIreport-app">BC Kiểm tra thành phần lưới điện</a>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="setting:17">
          <a href="https://electric-report-a846b.web.app/compose.html">So sánh hình ảnh các đợt kiểm tra</a>
        </Menu.Item>
        <Menu.SubMenu key="report-2" title="Tạo báo cáo kết quả kiểm tra">
          <Menu.Item key="setting:18">
            <a href="https://electric-report-a846b.web.app/forms.html">KQ kiểm tra về mạng lưới điện</a>
          </Menu.Item>
          <Menu.SubMenu key="report-3" title="KQ kiểm tra về thành phần lưới điện">
            <Menu.Item key="setting:19">
              <a href="https://ti-amo.github.io/HIreport-app">Đường dây điện</a>
            </Menu.Item>
            <Menu.Item key="setting:20">
              <a href="https://ti-amo.github.io/HIreport-app">Cột điện</a>
            </Menu.Item>
            <Menu.Item key="setting:21">
              <a href="https://ti-amo.github.io/HIreport-app">Hành lang tuyến</a>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.SubMenu key="monitor" title="Giám sát trung tâm" icon={<ClusterOutlined />}>
        <Menu.Item key="setting:22">
          <a href="https://hi02-qlgs-foradmin.web.app/alert">Tiếp nhận thông tin cảnh báo, báo cáo</a>
        </Menu.Item>
        <Menu.Item key="setting:23">
          <a href="https://hi02-qlgs-foradmin.web.app/checklist">Xem danh sách toàn bộ các đợt kiểm tra</a>
        </Menu.Item>
        <Menu.Item key="setting:24">
          <a href="https://hi02-qlgs-foradmin.web.app/addcheck">Tạo đợt kiểm tra</a>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="construction-management" title="Giám sát thi công" icon={<ProjectOutlined />}>
        <Menu.Item key="setting:25">
          <a href="https://hi01-efd.web.app/construction-list">Xem danh sách công trình</a>
        </Menu.Item>
        <Menu.Item key="setting:26">
          <a href="https://hi01-efd.web.app/construction-add">Tạo công trình</a>
        </Menu.Item>
        <Menu.Item key="setting:27">
          <a href="https://hi01-efd.web.app/choose-report">Tạo báo cáo kết quả tiến độ theo mẫu</a>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  </div>
);

export default NavBar;
