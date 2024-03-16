import { Table } from 'antd';
import React from 'react'

const Record = () => {
  const [tableParams, setTableParams] = React.useState({
    current: 1,
    pazesize: 2,
    total: 155,
  });
  const handlePaginationChange = (paginationData) => {
    setTableParams({
      current: paginationData?.current,
      pazesize: paginationData?.pazesize,

    });
  }
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },

    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '3',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '4',
      name: 'Jhony',
      age: 40,
      address: '10 Downing Street',
    },
    {
      key: '5',
      name: 'Jon',
      age: 33,
      address: '10 Downing Street',
    },
  ];
  const columns = [

    {
      title: "SN",
      render: (text, Record, index) => {
        return (
          <div>
            {(tableParams?.current - 1) * tableParams?.pazesize + (index + 1)}
          </div>
        )
      }
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  return (
    <div>
      <Table dataSource={dataSource}
        rowKey={"key"}
        columns={columns}
        pagination={{
          current: tableParams.current,
          pageSize: tableParams.pazesize,
          total: tableParams.total,
          showQuickJumper: true,
          showLessItems: true,
        }}
        onChange={handlePaginationChange}
      />
      ;
    </div>
  )
}

export default Record