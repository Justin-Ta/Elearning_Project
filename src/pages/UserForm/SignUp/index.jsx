import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Indicator from '../../../Components/Indicator';
import { backGround } from '../../../constant/linkSoure'
import {
  Form,
  Input,
  Checkbox,
  Spin,
  message
} from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { signUpAction } from '../../../redux/actions/user';
import { errorResp, errorRespTranslation, groupID } from '../../../constant/common';

export default function SignUp(props) {
  const [signUpForm] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = values => {
    setLoading(true);
    const { name, email, password, username } = values;
    let userInfo = {
      "taiKhoan": username,
      "matKhau": password,
      "hoTen": name,
      "soDT": "",
      "maNhom": groupID,
      "email": email
    }
    //console.log('sent data', userInfo, setLoading);
    const aftercallAPISuccess = () => {
      setLoading(false);
      message.success({
        content: 'Sign up successfully',
        icon: <i className="fa fa-check-circle pr-2 text-success" aria-hidden="true"></i>
      });
      signUpForm.resetFields();
    }

    const afterCallAPIFailed = (err) => {
      setLoading(false);
      const errResp = err.response.data;
      const {existedEmail, existedUsername} = errorResp;
      let finalErrMess = 'Sign up unsuccessfully';
      if (errResp === existedEmail) finalErrMess = errorRespTranslation.existedEmail;
      else if (errResp === existedUsername) finalErrMess = errorRespTranslation.existedUsername;
      
      return message.error({
        content: finalErrMess,
        icon: <i className="fa fa-exclamation-circle pr-2 text-danger" aria-hidden="true"></i>
      });
    }
    signUpAction(userInfo, aftercallAPISuccess, afterCallAPIFailed);
  };

  return (
    <div className="signup">
      <div
        className="bg"
        style={{
          backgroundImage: `url(${backGround[Math.floor(Math.random() * 7)].src})`,
        }}
      >
        <Spin spinning={loading}
          indicator={<img src="img/icon/blueSpining.gif" alt="blueSpining"></img>}
          size="large"
        >
          <div className="bg_darkOverlay">
            <div className="inputSignUp">
              <h2 className="text-center">SIGN UP</h2>
              <Form name="register" form={signUpForm} onFinish={onFinish} scrollToFirstError>
                {/* UserName */}
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                      whitespace: true,
                    },
                    {
                      pattern: '^[A-Za-z0-9]+$',
                      message: 'Please input only alphabetic character or number',
                    }
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
                  name="agreement"
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
                  <button className="form-control btn-primary">Sign Up</button>
                </Form.Item>
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                  Already have an account?
              <NavLink to={"/login"}> Log In</NavLink>
                </div>
              </Form>
              <Indicator {...props} />
            </div>
          </div>
        </Spin>
      </div>
    </div>
  );
}
