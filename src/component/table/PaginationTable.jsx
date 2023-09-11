import { Table } from "antd";
import React, { useEffect, useState } from "react";

const PaginationTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const cols = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      key: "2",
      title: "User ID",
      dataIndex: "userId",
      sorter: (a, b) => a.userId - b.userId,
    },
    {
      key: "3",
      title: "Title",
      dataIndex: "title",
    },
    {
      key: "4",
      title: "Status",
      dataIndex: "completed",
      render: (completed) => {
        return completed ? "Completed" : "Pending";
      },
      sorter: (a, b) => a.completed - b.completed,
    },
  ];
  return (
    <>
      <div className="App-header">
        <Table columns={cols} dataSource={data} loading={loading} pagination={true}></Table>
      </div>
    </>
  );
};

export default PaginationTable;
