import { Button, Form, Input } from "antd";

import React from "react";

const Login = () => {
  return (
    <>
      <div className="loginForm">
        <Form>
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
