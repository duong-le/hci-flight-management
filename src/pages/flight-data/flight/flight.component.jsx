import React, { Component } from 'react';
import Carousel from './carousel.component';
import { Breadcrumb, Row, Col, Input, Card, Select, DatePicker, Slider, InputNumber, Button, Descriptions } from 'antd';
import './flight.style.css';

export default class FlightComponent extends Component {
  render() {
    const { Search } = Input;
    const { Option } = Select;
    return (
      <div>
        <div className="breadcrumb">
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Flight Data</Breadcrumb.Item>
            <Breadcrumb.Item>9715</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Row>
          <Col xs={24} sm={24} md={24} lg={6} xl={6}>
            <Card title="Filter">
              <Row gutter={[0, 24]}>
                <Col span={24}>
                  <Search placeholder="Search..." className="w-100" />
                </Col>
                <Col span={24}>
                  <Select defaultValue="drone" className="w-100">
                    <Option value="drone">Drone ID</Option>
                    <Option value="flight">Flight ID</Option>
                  </Select>
                </Col>
                <Col span={24}>
                  <Select defaultValue="author" className="w-100">
                    <Option value="author">Author ID</Option>
                    <Option value="flight">Flight ID</Option>
                  </Select>
                </Col>
                <Col span={24}>
                  <DatePicker className="w-100" />
                </Col>
                <Col span={24}>
                  <Slider defaultValue={30} />
                </Col>
                <Col span={24}>
                  <InputNumber min={1} max={10} defaultValue={3} />
                </Col>
              </Row>
            </Card>

            <Button block className="btn">
              {' '}
              Reset{' '}
            </Button>
            <Button type="primary" block className="btn">
              {' '}
              Download{' '}
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
