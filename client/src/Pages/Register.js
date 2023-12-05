import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";

const Register = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    try {
      setLoading(true);

      const response = await axios.post("/api/v1/faculty/register", values, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data.success) {
        console.log("Registration successful:", response.data);
        // Redirect to login page or perform any other action
      } else {
        console.error("Registration failed:", response.data.message);
        // Handle the registration failure
      }
    } catch (error) {
      console.error("Registration error:", error);
      // Handle other errors (e.g., network issues)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Form name="basic" onFinish={onFinish}>
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: "Please input your First Name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: "Please input your Last Name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="ID"
          name="id"
          rules={[{ required: true, message: "Please input your ID!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Please input your Password!" },
            { min: 6, message: "Password must be minimum 6 characters." },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          rules={[
            { required: true, message: "Please confirm your Password!" },
            { min: 6, message: "Password must be minimum 6 characters." },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject("The two passwords do not match!");
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
