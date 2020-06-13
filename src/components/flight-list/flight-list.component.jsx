import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Table, Tag, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import FLIGHTS_DATA from '../../data/flights.data';

import './flight-list.styles.scss';

const FlightList = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type='primary'
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size='small'
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size='small'
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText('');
  };

  const columns = [
    {
      title: 'Flight ID',
      dataIndex: 'flightId',
      key: 'flightId',
      render: id => <Link to={`/flights/${id}/images`}>{id}</Link>,
      sorter: (a, b) => a.flightId - b.flightId,
      ...getColumnSearchProps('flightId')
    },
    {
      title: 'Pilot',
      dataIndex: 'pilot',
      key: 'pilot',
      sorter: (a, b) => a.pilot.localeCompare(b.pilot),
      ...getColumnSearchProps('pilot')
    },
    {
      title: 'Drone',
      dataIndex: 'drone',
      key: 'drone',
      sorter: (a, b) =>
        a.drone.localeCompare(b.drone, undefined, { numeric: true }),
      ...getColumnSearchProps('drone')
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      sorter: (a, b) => a.location.localeCompare(b.location),
      ...getColumnSearchProps('location')
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      sorter: (a, b) => new Date(a.date) - new Date(b.date),
      ...getColumnSearchProps('date')
    },
    {
      title: 'Tags',
      dataIndex: 'tags',
      key: 'tags',
      render: tags => (
        <>
          {tags.map(tag => (
            <Tag color='blue' key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      )
    }
  ];

  return <Table columns={columns} dataSource={FLIGHTS_DATA} />;
};

export default FlightList;
