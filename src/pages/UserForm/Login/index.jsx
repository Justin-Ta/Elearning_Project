import React from 'react';
import { Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import Indicator from '../../../Components/Indicator';

export default function Login(props) {
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
        <div
          className="bg"
          style={{
            backgroundImage: `url(${
              backGround[Math.floor(Math.random() * 7)].src
            })`,
          }}
        >
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

              <Form.Item
                className="text-center"
                name="remember"
                valuePropName="checked"
                noStyle
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item className="form-group text-center mt-3">
                <button className="btn btn-success form-control">Login</button>
              </Form.Item>

              <Form.Item className="text-center">
                <NavLink className="login-form-forgot" to="/forgotpassword">
                  Forgot password
                </NavLink>
                <div>
                  Don't have an account?
                  <NavLink to="/signup"> Sign in</NavLink>
                </div>
              </Form.Item>
            </Form>
            <Indicator {...props} />
          </div>
        </div>
      </div>
    );
}