import { Button, Form, Input, message, Select, Spin } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { createCourseService } from '../../../Axios/course';
import { categoryDisplayNames, message as Message, errorResp, errorRespTranslation } from '../../../constant/common';
import { debounce } from '../../../share/functions';

export default function CourseEdit() {
  const [PosterImg, setPosterImg] = useState("");
  const [form] = Form.useForm();
  const [Loading, setLoading] = useState(false);

  const renderCategoryOptions = () => {
    return Object.values(categoryDisplayNames).map((category, index) => {
      return {
        label: category,
        value: Object.keys(categoryDisplayNames)[index],
      }
    });
  }

  const onChangePosterLink = ($event) => {
    const link = $event.target.value
    setPosterImg(link)
  }

  const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };

  const onSubmit = (values) => {
    setLoading(true);
    createCourseService(values)
      .then(res => {
        //console.log(res);
        message.success(`Add course success!!!`);
      })
      .catch(err => {
        err.response && console.log(err.response.data);
        let errMess = 'Error!!!';
        if (err.response.data.code === 401) errMess = errorRespTranslation.existedCourseID;
        message.error(errMess);
      })
      .finally(() => setLoading(false))
  }

  const titleChange = debounce(() => {
    const path = encodeURIComponent(form.getFieldValue('title'));
    form.setFieldsValue({
      path: path
    })
  }, 500)

  return (
    <div className="CourseEdit row">
      <div className="col-lg-8 col-md-8 col-sm-12 form">
        <Spin tip="Loading..." spinning={Loading}>
          <Form
            {...layout}
            onFinish={onSubmit}
            initialValues={{
              author: [""],
              source: [""]
            }}
            form={form}
          >

            <Form.Item
              label="Course title"
              name="title"
              rules={[{ required: true, message: Message.required }]}
              onChange={titleChange}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Poster link"
              name="image"
              rules={[{ required: true, message: Message.required }]}
            >
              <Input onChange={($event) => { onChangePosterLink($event) }} />
            </Form.Item>

            <p>Videos</p>
            <Form.List
              label="Video"
              name="source"
              rules={[{ required: true, message: Message.required }]}
            >
              {(fields, { add, remove }) => {
                return (<>
                  {fields.map((field, index) => (
                    <Form.Item
                      required={false}
                      key={field.key}
                    >
                      <Form.Item
                        {...field}
                        validateTrigger={['onChange', 'onBlur']}
                        rules={[
                          {
                            required: true,
                            whitespace: true,
                            message: "Please input source of video or delete this field.",
                          },
                        ]}
                        noStyle
                      >
                        <Input placeholder="video source" style={{ maxWidth: '300px' }} />
                      </Form.Item>
                      {fields.length > 1 ? (
                        <MinusCircleOutlined
                          className="dynamic-delete-button ml-2"
                          onClick={() => remove(field.name)}
                        />
                      ) : null}
                    </Form.Item>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      style={{ maxWidth: '300px' }}
                      icon={<PlusOutlined />}
                    >
                      Add video source
                    </Button>
                    {/* <Form.ErrorList errors={errors} /> */}
                  </Form.Item>
                </>
                )
              }}
            </Form.List>

            <Form.Item
              label="Description"
              name="desc"
              rules={[{ required: true, message: Message.required }]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item
              label="Category"
              name="category"
              rules={[{ required: true, message: Message.required }]}
              className="mt-4"
            >
              <Select
                placeholder="Select category"
                options={renderCategoryOptions()}
              >
              </Select>
            </Form.Item>

            <p>Authors</p>
            <Form.List
              label="Author's username"
              name="author"
              rules={[{ required: true, message: Message.required }]}
            >
              {(fields, { add, remove }) => (
                <>
                  {fields.map((field, index) => (
                    <Form.Item
                      required={false}
                      key={field.key}
                    >
                      <Form.Item
                        {...field}
                        validateTrigger={['onChange', 'onBlur']}
                        rules={[
                          {
                            required: true,
                            whitespace: true,
                            message: "Please input author's name or delete this field.",
                          },
                        ]}
                        noStyle
                      >
                        <Input placeholder="Author name" style={{ maxWidth: '300px' }} />
                      </Form.Item>
                      {fields.length > 1 ? (
                        <MinusCircleOutlined
                          className="dynamic-delete-button ml-2"
                          onClick={() => remove(field.name)}
                        />
                      ) : null}
                    </Form.Item>
                  ))}
                  <Form.Item>
                    <Button
                      type="dashed"
                      onClick={() => add()}
                      style={{ maxWidth: '300px' }}
                      icon={<PlusOutlined />}
                    >
                      Add author
                    </Button>
                    {/* <Form.ErrorList errors={errors} /> */}
                  </Form.Item>
                </>
              )}
            </Form.List>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="ml-auto d-block" >
                Add course
              </Button>
            </Form.Item>
            <Button type="secondary" className="ml-auto d-block" onClick={() => form.resetFields()}>
              Reset
            </Button>
          </Form>
        </Spin>
      </div>
      <div className="poster col-lg-4 col-md-4 col-sm-12">
        <img src={PosterImg || "https://i.imgur.com/1T1ZHgG.jpg"} alt="poster" className="w-100" />
      </div>
    </div>
  )
}



