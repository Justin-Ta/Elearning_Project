import React from 'react';
import { Form, Input, Checkbox, Statistic} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Indicator from '../../../Components/Indicator';
import {backGround} from '../../../constant/linkSoure'

export default function ForgotPassword(props) {
    
    const onFinish = values => {
    console.log('Received values of form: ', values);
  };
  const Countdown = Statistic.Countdown;
  const deadline = Date.now() + 300000; // Moment is also OK

const Done =()=>{
  window.location.reload()
}

    
  return (
    <div className="forgotPassword">
      <div
        className="bg"
        style={{
          backgroundImage: `url(${
            backGround[Math.floor(Math.random() * 7)].src
          })`,
        }}
      >
        <div className="inputForgot">
          <h2 className="text-center">FORGOT PASSWORD?</h2>
          <p className="text-center">You can reset your password here.</p>

          <Countdown
            value={deadline}
            onFinish={Done}
            format="mm:ss"
            className="text-center"
          />
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
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
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Type your email ..."
              />
            </Form.Item>
            <Form.Item
              name="code"
              rules={[{ required: true, message: "Please input your code!" }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Type your code..."
              />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>I'm not robot</Checkbox>
            </Form.Item>
            <Form.Item>
              <div className="row">
                <div className="col-6 form-group text-center mt-3">
                  <button className="btn btn-success form-control">
                    RESET PASSWORD
                  </button>
                </div>
                <div className="col-6 form-group text-center mt-3">
                  <button
                    className="btn btn-danger form-control"
                    onClick={Done}
                  >
                    REEDEM CODE
                  </button>
                </div>
              </div>
            </Form.Item>
          </Form>
          <Indicator {...props} />
        </div>
      </div>
    </div>
  );
}
