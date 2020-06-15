import React from 'react';

import { Card, Avatar } from 'antd';
import DroneIcon from '../../assets/icons/drone.png';
import './card-list.styles.scss';

const CardList = () => (
  <div className="card-list">
    <Card style={{ width: 300 }}>
      <div className="flex align-items-center">
        <Avatar size={60} style={{ backgroundColor: '#fff9e6', color: '#ffc107' }} icon={<span className="material-icons">flight</span>} />
        <div className="m-l-15">
          <h2 className="m-b-0">211,324</h2>
          <p className="m-b-0 text-muted">Flights</p>
        </div>
      </div>
    </Card>
    <Card style={{ width: 300 }}>
      <div className="flex align-items-center">
        <Avatar size={60} style={{ backgroundColor: '#ebf3fe' }} icon={<img src={DroneIcon} alt="drone" style={{ objectFit: 'none' }} />} />
        <div className="m-l-15">
          <h2 className="m-b-0">9,848</h2>
          <p className="m-b-0 text-muted">Drones</p>
        </div>
      </div>
    </Card>
    <Card style={{ width: 300 }}>
      <div className="flex align-items-center">
        <Avatar size={60} style={{ backgroundColor: '#e5f9f6', color: '#00c9a7' }} icon={<span className="material-icons">photo</span>} />
        <div className="m-l-15">
          <h2 className="m-b-0">2,652,234</h2>
          <p className="m-b-0 text-muted">Images</p>
        </div>
      </div>
    </Card>
    <Card style={{ width: 300 }}>
      <div className="flex align-items-center">
        <Avatar size={60} style={{ backgroundColor: '#f3f0ff', color: '#886cff' }} icon={<span className="material-icons">person</span>} />
        <div className="m-l-15">
          <h2 className="m-b-0">1,138</h2>
          <p className="m-b-0 text-muted">Pilots</p>
        </div>
      </div>
    </Card>
  </div>
);

export default CardList;
