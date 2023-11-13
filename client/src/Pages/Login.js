import React, { useState } from 'react'
import axios from 'axios';
//import { Link, useNavigate } from 'react-router-dom';
import { Form, Input, message } from 'antd';

const Login = () => {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  //const navigate = useNavigate();

  const handleSubmit = async (values) => {
    console.log(values);    
    //try {

      //const res = await axios.post('/api/v1/user/login', values);
      //window.location.reload();
      
      //if (res.data.success) {
      //    localStorage.setItem('token', res.data.token);
        //  message.success('Login Successfully');
         // navigate('/HomePage');
      //} else {
        //  message.error(res.data.message);
      //}
  //} catch (error) {
      //console.log(error);
      //message.error('something went wrong');
  }
    
  
  return (
    <div>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="Email">Email</label>
            <input type="Email" name="Email" onChange={e => setEmail(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={e => setPassword(e.target.value)}/>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login