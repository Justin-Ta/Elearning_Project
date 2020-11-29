import React from 'react';
import { NavLink } from 'react-router-dom';
import Indicator from '../../../Components/Indicator';
import {backGround} from '../../../constant/linkSoure';
import {
  Form,
  Input,
  Checkbox,
} from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined} from '@ant-design/icons';
import {SignUpAPI} from '../../../redux/actions/user'
import axios from 'axios';
export default function SignUp(props) {
  const onFinish = values => {
    values={...values, maNhom: "GP01"}
    delete values.nhapLaiMatKhau
    console.log('Received values of form: ', values);
    SignUpAPI(values).then(res=>{console.log(res)}).catch(err=>{console.log(err)})
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
              name="taiKhoan"
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
              name="hoTen"
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
              name="matKhau"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
                {
                  max: 20,
                  min: 6,
                  message: "Your password must be between 6 and 20 characters.",
                }
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
              name="nhapLaiMatKhau"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue("matKhau") === value) {
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
              name="soDT"
              rules={[
                {
                  
                  required: true,
                  message: "Please input your phone number!",
                  whitespace: true,
                },
                {
                  max: 10| 11,
                  message: "Phone number contains only 10 or 11 digits"
                }

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
    