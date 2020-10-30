import React from 'react';
import { Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

export default function Login() {
   let backGround=[
        {src: './img/E-learning-and-education-bg.jpeg'},
        {src: './img/bgLoginPage/bg_2.png'},
        {src: './img/bgLoginPage/bg_3.jpg'},
        {src: './img/bgLoginPage/bg_4.png'},
        {src: './img/bgLoginPage/bg_5.png'},
        {src: './img/bgLoginPage/bg_6.png'},
        {src: './img/bgLoginPage/bg_7.png'},
    ]
    const onFinish = values => {
    console.log('Received values of form: ', values);
  };
    return (
        <div className="login">
            <div className="bg" style={{backgroundImage: `url(${backGround[Math.floor(Math.random()*7)].src})`}}>
            
            <div className="inputLogin">
            <h2 className="text-center">LOGIN</h2>

            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Type your username..."
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Type your password..."
                />
              </Form.Item>
              
              <div className="form-group text-center">
                <button className="btn btn-success form-control">Login</button>
            </div>
            
              
              <Form.Item className="text-center">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <NavLink  className="login-form-forgot" to='/forgotpassword'> Forgot password</NavLink>
                
                <p className="text-center">Don't have an account? <NavLink to="/signup">Sign in</NavLink></p>
              </Form.Item>

              
            </Form>

            
            </div>
        </div>
        </div>
        
        
    )
}
