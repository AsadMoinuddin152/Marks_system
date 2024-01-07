import React from "react";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/LoginPage.css"
import lock from "../padlock.png"
import user from "../user.png"

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
    <div className="login-page">
      <div className="login-back">
        <div className="login-text">
          LOGIN
        </div>
        <Form name="basic" onFinish={onFinish} className="login-form">
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
            className="inputbox"
          >
            <img src={user} alt="user Icon" className="logo"/>
            <Input className="textbox" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
            className="inputbox"
          >
            <Input.Password className="textbox" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-button">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
