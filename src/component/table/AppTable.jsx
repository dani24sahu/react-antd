import { Table } from "antd";
import React from "react";

const AppTable = () => {
  const data = [
    {
      name: "John Brown",
      age: 22,
      address: "New York No. 1 Lake Park",
      key: "1",
    },
    {
      name: "David Brown",
      age: 16,
      address: "New York No. 2 Lake Park",
      key: "2",
    },
    {
      name: "Bob Brown",
      age: 25,
      address: "New York No. 3 Lake Park",
      key: "3",
    },
  ];

  const col = [
    {
      title: "Name",
      dataIndex: "name",
      key: "key",
      render: (name) => <a>{name}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "key",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "key",
    },
    {
      title: "Graduated?",
      key: "key",
      render: payload => {
        return payload.age > 22 ? "Yes" : "No";
      }
    },
  ];
  return (
    <>
      <Table dataSource={data} columns={col}></Table>
    </>
  );
};

export default AppTable;
