import { Table } from "antd";
import React from "react";

const AppTable = () => {
  const data = [
    {
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      key: "1",
    },
    {
      name: "David Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      key: "2",
    },
    {
      name: "Bob Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      key: "3",
    },
  ];

  const col = [
    {
      title: "Name",
      dataIndex: "name",
      key: "key",
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'key'
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'key'
    },
  ];
  return (
    <>
      <Table dataSource={data} columns={col}></Table>
    </>
  );
};

export default AppTable;
