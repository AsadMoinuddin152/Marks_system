import React from "react";
import { Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import '../styles/LoginPage.css'
import user from '../user.png';
import lock from '../padlock.png';

const Login = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
    navigate("/homepage");
  };
  return (
    <div className="login-page">
      <div className="login-back">
        <div className="login-text">LOGIN</div>
        <Form
          className='login-form'
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <div className="inputbox">
            <img className='logo' src={user} alt="user"/>
            <div
              name="email"
              rules={[{ required: true, message: "Please input your Email!" }]}
            >
              <input className="textbox" placeholder="enter username"/>
            </div>
          </div>
          <div className="inputbox">
            <img className='logo' src={lock} alt="lock"/>
            <div
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
                { min: 6, message: "Password must be minimum 6 characters." },
              ]}
            >
              <input type="password" className="textbox" placeholder="enter password"/>
            </div>
          </div>
            <button type="submit" className="login-button">SUBMIT</button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
