import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Breadcrumb, Row, Col, Card, Descriptions } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import ImageCarousel from '../../components/image-carousel/image-carousel.component';
import World from '../../assets/images/world.svg';

import './flight-images.styles.scss';

const FlightImagesPage = () => {
  const { flightId } = useParams();

  return (
    <div className="flight-images">
      <div className="breadcrumb">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>
            <Link to="/">
              <HomeOutlined /> Home
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/flight-data">Flight Data Management</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{flightId}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Row>
        <Col xs={24} sm={24} md={24} lg={6} xl={6}>
          <Descriptions title="Metadata" bordered column={1}>
            <Descriptions.Item label="Author">Elianora Vasilov</Descriptions.Item>
            <Descriptions.Item label="Drone ID">351-661-3252</Descriptions.Item>
            <Descriptions.Item label="Filename">DSC01234.PNG</Descriptions.Item>
            <Descriptions.Item label="File size">3.62 MB</Descriptions.Item>
            <Descriptions.Item label="Created at">17/05/2019 18:30:41</Descriptions.Item>
            <Descriptions.Item label="Dimension">1920 x 1080</Descriptions.Item>
            <Descriptions.Item label="Color mode">RGB</Descriptions.Item>
          </Descriptions>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <ImageCarousel />
        </Col>

        <Col xs={24} sm={24} md={24} lg={6} xl={6}>
          <Card title="Location">
            <img src={World} width={'100%'} alt="preview" />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default FlightImagesPage;
