import { Button, Drawer, Input, Form } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import React from 'react';
import { groupID, message as Message } from '../../../constant/common';


export default function AddUserForm(props) {
  const [form] = useForm();

  const onClose = () => {
    props.showDrawer(false);
  }

  const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };

  const passData = () => {
    //console.log(form.getFieldValue());
    const userData = form.getFieldValue();
    userData.maNhom = groupID;
    props.newUserData(userData);
  }
  return (
    <div className="addUserForm">
      <Drawer
        title="Create a new account"
        width={720}
        onClose={onClose}
        visible={props.visible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: 'right',
            }}
          >
            <Button onClick={onClose} style={{ marginRight: 8 }}>
              Cancel
              </Button>
            <Button type="primary" onClick={passData}>
              Submit
          </Button>
          </div>
        }
      >
        <Form
          {...layout}
          form={form}
        >
          <Form.Item
            label="Username"
            name="taiKhoan"
            rules={[
              { required: true, message: Message.required },
              {
                pattern: '^[A-Za-z0-9]+$',
                message: 'Please input only alphabetic character or number',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="matKhau"
            rules={[{ required: true, message: Message.required }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Full name"
            name="hoTen"
            rules={[{ required: true, message: Message.required }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone number"
            name="soDT"
            rules={[{ required: true, message: Message.required }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="E-mail"
            name="email"
            rules={[
              { required: true, message: Message.required },
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  )
}
