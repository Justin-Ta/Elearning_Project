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
  import { UploadOutlined, BookOutlined } from '@ant-design/icons';
  const { TextArea } = Input;
  const { Option } = Select;
  const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

export default function CourseEdit(props) {
  const onFinish = (values) => {
    props.history.push("/admin/coursesmanagement");
    console.log('Received values of form: ', values);
  };
  
    return (
      <Form name="validate_other" onFinish={onFinish}>
        <Row justify="space-around">
          <Col span={10}>
            <Form.Item>
              <span className="ant-form-text">ADD COURSE</span>
            </Form.Item>
          </Col>

          <Col span={10}>
            <Form.Item label="Course Id">
              <span className="ant-form-text">55151</span>
            </Form.Item>
          </Col>

          <Col span={10}>
            <Form.Item
              name="select"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please select kind of course!",
                },
              ]}
            >
              <Select placeholder="Kind of Course">
                <Option value="frontEnd">Front End</Option>
                <Option value="backEnd">Back End</Option>
                <Option value="fullStack">Full Stack</Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={10}>
            <Form.Item
              name="courseName"
              rules={[{ required: true, message: "Please input course name!" }]}
            >
              <Input
                prefix={<BookOutlined className="site-form-item-icon" />}
                placeholder="Course Name"
              />
            </Form.Item>
          </Col>
          <Col span={22}>
            <Form.Item
              name="description"
              rules={[
                { required: true, message: "Please type course description!" },
              ]}
            >
              <TextArea
                placeholder="Course Description"
                autoSize={{ minRows: 4, maxRows: 10 }}
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