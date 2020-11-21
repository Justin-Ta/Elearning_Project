import React from 'react';
import { NavLink } from 'react-router-dom';
import Indicator from '../../../Components/Indicator';
import {backGround} from '../../../constant/linkSoure'
import {
  Form,
  Input,
  Checkbox,
} from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined} from '@ant-design/icons';
import axios from 'axios';
export default function SignUp(props) {
  const onFinish = values => {
    console.log('Received values of form: ', values);

  };
  return (
    <div className="signup">
      <div
        className="bg"
        style={{
          backgroundImage: `url(${
            backGround[Math.floor(Math.random() * 7)].src
          })`,
        }}
      >
        <div className="inputSignUp">
          <h2 className="text-center">SIGN IN</h2>
          <Form name="register" onFinish={onFinish} scrollToFirstError>
            {/* UserName */}
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your nickname!",
                  whitespace: true,
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Type your username"
              />
            </Form.Item>
            {/*Name  */}
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                  whitespace: true,
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Type your name"
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Type your email"
              />
            </Form.Item>
            {/* Password */}
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Type your password"
              />
            </Form.Item>
            {/* Confirm Password */}
            <Form.Item
              name="confirm"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      "The two passwords that you entered do not match!"
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Re-type your password"
              />
            </Form.Item>
            <Form.Item
              name="phoneNumber"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                  whitespace: true,
                },
              ]}
            >
              <Input
                prefix={<PhoneOutlined className="site-form-item-icon" />}
                placeholder="Type your phone number"
              />
            </Form.Item>
            <Form.Item
              // name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject("Should accept agreement"),
                },
              ]}
            >
              <Checkbox>
                I have read the{" "}
                <NavLink to="/term" target="_blank">
                  terms of service
                </NavLink>
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <button className="form-control btn-primary">Sign In</button>
            </Form.Item>
          </Form>
          <Indicator {...props} />
        </div>
      </div>
    </div>
  );
}
    