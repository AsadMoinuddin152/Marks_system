import React from "react";
import { Form } from "antd";
import { useNavigate } from "react-router-dom";
import '../styles/LoginPage.css'
import user from '../user.png';
import lock from '../padlock.png';


export var isLoggedIn = false;
const Login = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    var userlog = document.getElementById("user").value;
    var passlog = document.getElementById("password").value;
    //get list of usernames and passwords from database here
    var user = "CSEfaculty";
    var pass = "Lords@312";

    if (userlog === user && passlog === pass) {
      console.log("Success:", values);
      isLoggedIn = true;
      navigate("/homepage");
    }
    else {
      alert("Username or Password is incorrect");
    }
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
              name="email"//change this email to user after making change in database
              rules={[{ required: true, message: "Please input your Email!" }]}
            >
              <input className="textbox" id="user" placeholder="enter username" required/>
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
              <input type="password" className="textbox" id="password" placeholder="enter password" required/>
            </div>
          </div>
            <button type="submit" className="login-button">SUBMIT</button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
