import { Button, Form, Input, message } from "antd";

import React from "react";

const Login = () => {
  const onFinish = (values) => {
    console.log(values); // values is an object with username and password

    setTimeout(() => {
      message.success("Login successful"); // function that displays a success message
      // message.error("Login failed"); // function that displays an error message
      // message.warning("Login failed"); // function that displays a warning message
    }, 1000);
  };

  return (
    <>
      <div className="loginForm">
        <Form onFinish={onFinish}>
          <Form.Item label="Username" name="username" required>
            <Input placeholder="Enter username"></Input>
          </Form.Item>
          <Form.Item label="Password" name="password" required>
            <Input.Password
              placeholder="Enter password"
              name="password"
            ></Input.Password>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Login;
