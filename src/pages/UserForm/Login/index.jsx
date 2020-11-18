import React from 'react';
import { useDispatch } from 'react-redux'
import { Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { NavLink, useHistory } from 'react-router-dom';
import Indicator from '../../../Components/Indicator';
import {backGround} from '../../../constant/linkSoure'
import {LogIn} from '../../../redux/actions/user'
export default function Login(props) {
    const dispatch = useDispatch();
    const history= useHistory();
    const onFinish = values  => {
    dispatch(LogIn(values,history));
    props.history.goBack();
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
                name="userName"
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
                name="passWord"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Type your password"
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