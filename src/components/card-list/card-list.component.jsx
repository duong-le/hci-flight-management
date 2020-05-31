import React from 'react';

import { Card } from 'antd';

import FlightIcon from '../../assets/icons/flight.png';
import DroneIcon from '../../assets/icons/drone.png';
import ImageIcon from '../../assets/icons/image.png';

import './card-list.styles.scss';

const CardList = () => (
  <div className='card-list'>
    <Card style={{ width: 300 }}>
      <Card.Meta
        avatar={
          <img src={FlightIcon} alt='drone-icon' style={{ height: 50 }} />
        }
        title='TOTAL FLIGHTS'
        description='211 324'
      />
    </Card>
    <Card style={{ width: 300 }}>
      <Card.Meta
        avatar={<img src={DroneIcon} alt='drone-icon' style={{ height: 50 }} />}
        title='TOTAL DRONES'
        description='10 000'
      />
    </Card>
    <Card style={{ width: 300 }}>
      <Card.Meta
        avatar={
          <img src={ImageIcon} alt='images-icon' style={{ height: 50 }} />
        }
        title='TOTAL IMAGES'
        description='2 652 234'
      />
    </Card>
  </div>
);

export default CardList;
