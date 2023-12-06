import React from "react";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { username, password } = values; // Update these field names to match your form

    try {
      const response = await axios.post("/api/v1/faculty/login", {
        username,
        password,
      });

      if (response.data.success) {
        console.log("Login successful:", response.data);
        navigate("/homepage");
      } else {
        alert("Username or Password is incorrect");
      }
    } catch (error) {
      console.error("Login error:", error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <div>
      <Form name="basic" onFinish={onFinish}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
