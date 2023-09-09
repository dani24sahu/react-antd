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
      sorter: (a, b) => a.name.localeCompare(b.name),   // localeCompare() compares two strings according to the current locale. It returns a number that indicates the relative order of the strings. The return value is 0 if the strings are equal, -1 if the first string is sorted before the second, and 1 if the first string is sorted after the second.
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "key",
      sorter: (a, b) => a.age - b.age, // sort by age ascending order, if a.age - b.age is negative, a is sorted before b, if positive, b is sorted before a, if 0, no change
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
