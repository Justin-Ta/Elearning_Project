import React from 'react';
import {
    Form,
    Select,
    Button,
    Upload,
    Row,
    Col,
    Input
  } from 'antd';
  import { UploadOutlined, BookOutlined, MailOutlined, LockOutlined, PhoneOutlined } from '@ant-design/icons';
  const { Option } = Select;
  const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

export default function UserEdit(props) {
  console.log("EditTile:", props.location.aboutProps)
  // const [signUpForm] = Form.useForm();
  // const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    // setLoading(true);
    // const { name, email, password, username } = values;
    // let userInfo = {
    //   "taiKhoan": username,
    //   "matKhau": password,
    //   "hoTen": name,
    //   "soDT": "",
    //   "maNhom": "GP11",
    //   "email": email
    // }
    // console.log('sent data', userInfo, setLoading);
    // sigUpAction(userInfo, signUpForm, setLoading);
  };
  
    return (
      <Form name="validate_other" onFinish={onFinish}>
        <Row justify="space-around">
          <Col span={24}>
            <Form.Item>
              {(!props.location.aboutProps)?<span className="ant-form-text">ADD USER</span>:<span className="ant-form-text">EDIT USER</span>}
            </Form.Item>
          </Col>

          <Col span={7}>
            <Form.Item
              name="select"
              hasFeedback
              value="GV"
              rules={[
                {
                  required: true,
                  message: "Please select kind of user",
                },
              ]}
            >
              <Select placeholder="Kind of user">
                <Option value="GV">Teacher</Option>
                <Option value="HV">Student</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={7}>
            <Form.Item
              name="userName"
              rules={[{ required: true, message: "Please input user name" }]}
            >
              <Input
                prefix={<BookOutlined className="site-form-item-icon" />}
                placeholder="User Name"
               
              />
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please input name" }]}
            >
              <Input
                prefix={<BookOutlined className="site-form-item-icon" />}
                placeholder="Name"
              />
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input user's password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Type your password"
              />
            </Form.Item>
          </Col>

          <Col span={7}>
          <Form.Item
        name="phone"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          prefix={<PhoneOutlined className="site-form-item-icon" />}
          placeholder="Type user's phone number"
        />
      </Form.Item>
          </Col>

          <Col span={7}>
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input user's E-mail!",
                },
              ]}
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Type user's email"
              />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name="upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          extra=""
          wrapperCol={{
            span: 10,
            offset: 1,
          }}
        >
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>
              Click to upload Course Image
            </Button>
          </Upload>
        </Form.Item>



        <Form.Item
          wrapperCol={{
            span: 12,
            offset: 6,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
}