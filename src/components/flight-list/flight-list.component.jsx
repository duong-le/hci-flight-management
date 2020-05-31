import React from 'react';

import { Table, Tag } from 'antd';
import { Link } from 'react-router-dom';

import FLIGHTS_DATA from '../../data/flights.data';

import './flight-list.styles.scss';

const FlightList = () => {
  const { Column } = Table;

  return (
    <Table dataSource={FLIGHTS_DATA}>
      <Column
        title='Flight ID'
        key='flightId'
        render={record => <Link to={`/flight/images`}>{record.flightId}</Link>}
      />
      <Column title='Pilot' dataIndex='pilot' key='pilot' />
      <Column title='Drone' dataIndex='drone' key='drone' />
      <Column title='Location' dataIndex='location' key='location' />
      <Column title='Date' dataIndex='date' key='date' />
      <Column
        title='Tags'
        dataIndex='tags'
        key='tags'
        render={tags => (
          <>
            {tags.map(tag => (
              <Tag color='blue' key={tag}>
                {tag}
              </Tag>
            ))}
          </>
        )}
      />
    </Table>
  );
};

export default FlightList;
