import React, { Component } from 'react';
import Carousel from './carousel.component';
import { Breadcrumb, Row, Col, Input, Card, Select, DatePicker, Slider, InputNumber, Button, Descriptions } from 'antd';
import './flight-data.style.css';

export default class FlightDataPage extends Component {
  render() {
    const { Search } = Input;
    const { Option } = Select;
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Application Center</Breadcrumb.Item>
          <Breadcrumb.Item>Application List</Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Col xs={24} sm={24} md={24} lg={6} xl={6}>
            <Search placeholder="Search..." className="w-100" />

            <Card title="Filter">
              <Select defaultValue="drone" className="w-100">
                <Option value="drone">Drone ID</Option>
                <Option value="flight">Flight ID</Option>
              </Select>
              <Select defaultValue="author" className="w-100">
                <Option value="author">Author ID</Option>
                <Option value="flight">Flight ID</Option>
              </Select>
              <DatePicker className="w-100" />
              <Slider defaultValue={30} />
              <InputNumber min={1} max={10} defaultValue={3} />
            </Card>

            <Button block>Reset</Button>
            <Button type="primary" block>
              Download
            </Button>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Carousel />
          </Col>
          <Col xs={24} sm={24} md={24} lg={6} xl={6}>
            <Card title="Metadata">
              <Descriptions bordered column={1}>
                <Descriptions.Item label="Author">Elianora Vasilov</Descriptions.Item>
                <Descriptions.Item label="Drone ID">351-661-3252</Descriptions.Item>
                <Descriptions.Item label="Filename">DSC01234.PNG</Descriptions.Item>
                <Descriptions.Item label="File size">3.62 MB</Descriptions.Item>
                <Descriptions.Item label="Created at">17/05/2019 18:30:41</Descriptions.Item>
                <Descriptions.Item label="Dimension">1920 x 1080</Descriptions.Item>
                <Descriptions.Item label="Color mode">RGB</Descriptions.Item>
              </Descriptions>
            </Card>

            <Card title="Location">
              <img
                src={
                  'https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/connected_world_wuay.svg'
                }
                width={'100%'}
                alt="preview"
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
