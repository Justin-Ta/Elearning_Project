import React, { useState } from 'react';
import { Form, Input, Checkbox, Spin, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import Indicator from '../../../Components/Indicator';
import { backGround } from '../../../constant/linkSoure'
import { useHistory } from "react-router-dom";
import { TOKEN, USERID } from '../../../constant/common';
import { logInAction } from '../../../redux/actions/user';

export default function Login(props) {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const onFinish = values => {
    const { password, email } = values;
    let data = {
      "email": email.trim(),
      "password": password.trim()
    };
    setLoading(true);
    const afterCallAPISuccess = (data) => {
      localStorage.setItem(TOKEN, data.token);
      localStorage.setItem(USERID, data.userId);
      history.push("/");
    };

    const afterCallAPIFailed = () => {
      setLoading(false);
      message.error({
        content: "Username or password is incorrect",
        icon: <i className="fa fa-exclamation-circle pr-2 text-danger" aria-hidden="true"></i>
      });
    };

    logInAction(data, afterCallAPISuccess, afterCallAPIFailed);
  };

  return (
    <div className="login">
      <div
        className="bg"
        style={{
          backgroundImage: `url(${backGround[Math.floor(Math.random() * 7)].src
            })`,
        }}
      >
        <Spin spinning={loading} 
        indicator={<img src="img/icon/blueSpining.gif" alt="blueSpining"></img>}
        size="large"
        >
          <div className="bg_darkOverlay">
            <div className="inputLogin">
              <h2 className="text-center">LOGIN</h2>

              <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Type your email..."
                  />
                </Form.Item>

                <Form.Item
                  name="password"
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
                  <NavLink to="/signup"> Sign up</NavLink>
                  </div>
                </Form.Item>
              </Form>
              <Indicator {...props} />
            </div>
          </div>
        </Spin>
      </div>
    </div>
  );
}