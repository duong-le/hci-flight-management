import React, { Component } from 'react';
import './flight-data.style.css';
import { Table, Tag, Space } from 'antd';
import { Link } from 'react-router-dom';

export default class FlightDataPage extends Component {
  render() {
    const { Column } = Table;
    return (
      <Table dataSource={data}>
        <Column title="Flight ID" key="flightId" render={(record) => <Link to="/flight-data/flight">{record.flightId}</Link>} />
        <Column title="Pilot" dataIndex="pilot" key="pilot" />
        <Column title="Drone" dataIndex="drone" key="drone" />
        <Column title="Location" dataIndex="location" key="location" />
        <Column title="Date" dataIndex="date" key="date" />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={(tags) => (
            <>
              {tags.map((tag) => (
                <Tag color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={() => (
            <Space size="middle">
              <a>Edit</a>
              <a>Delete</a>
            </Space>
          )}
        />
      </Table>
    );
  }
}

const data = [
  {
    key: '1',
    flightId: 1532,
    pilot: 'John Brown',
    drone: 'F-150',
    location: 'New York',
    date: '10-03-2019',
    tags: ['ground', 'air']
  },
  {
    key: '2',
    flightId: 267,
    pilot: 'Steven Bay',
    drone: 'F-145',
    location: 'London',
    date: '15-07-2019',
    tags: ['smoke']
  },
  {
    key: '3',
    flightId: 390,
    pilot: 'Richard Dean',
    drone: 'F-99',
    location: 'Sidney',
    date: '22-01-2020',
    tags: ['tree', 'sky']
  },
  {
    key: '4',
    flightId: 1011,
    pilot: 'Ken Tran',
    drone: 'F-22',
    location: 'Tokyo',
    date: '03-12-2019',
    tags: ['fire']
  },
  {
    key: '5',
    flightId: 967,
    pilot: 'Steward Le',
    drone: 'F-17',
    location: 'Denver',
    date: '19-03-2020',
    tags: ['water', 'cloud']
  }
];
