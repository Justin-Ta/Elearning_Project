import { Button, Form, Input, message, Select } from 'antd';
import React, { useState } from 'react';
import { createCourseService } from '../../../Axios/course';
import { categoryDisplayNames, groupID, message as Message, errorResp, errorRespTranslation } from '../../../constant/common';
import { Course } from '../../../Modals/course';

export default function CourseEdit() {
  const [PosterImg, setPosterImg] = useState("");
  const renderCategoryOptions = () => {
    return Object.values(categoryDisplayNames).map((category, index) => {
        return {
            label: category,
            value: Object.keys(categoryDisplayNames)[index],
        }
    });
}

  const onChangePosterLink = ($event) => {
    setPosterImg($event.target.value);
  }

  const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };

  const onSubmit = (values) => {
    const data = new Course(
      values.maKhoaHoc,
      values.tenKhoaHoc.split(" ").join("-"),
      values.tenKhoaHoc,
      values.moTa,
      0,
      0,
      values.hinhAnh,
      groupID,
      values.ngayTao,
      values.maDanhMucKhoaHoc,
      values.taiKhoanNguoiTao
    )
    

    createCourseService(data)
    .then(res => {
      //console.log(res);
      message.success(`Add course success!!!`);
    })
    .catch(err => {
      err.response && console.log(err.response.data);
      let errMess = 'Error!!!';
      if (err.response.data === errorResp.existedCourseID) errMess = errorRespTranslation.existedCourseID;
      message.error(errMess);
    })
  }

  return (
    <div className="CourseEdit row">
      <div className="col-lg-8 col-md-8 col-sm-12 form">
        <Form
          {...layout}
          onFinish={onSubmit}
        >
          <Form.Item
            label="Course ID"
            name="maKhoaHoc"
            rules={[{ required: true, message: Message.required }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Course title"
            name="tenKhoaHoc"
            rules={[{ required: true, message: Message.required }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Poster link"
            name="hinhAnh"
            rules={[{ required: true, message: Message.required }]}
          >
            <Input onChange={($event) => { onChangePosterLink($event) }} />
          </Form.Item>

          <Form.Item
            label="Description"
            name="moTa"
            rules={[{ required: true, message: Message.required }]}
          >
            <Input.TextArea rows={4}/>
          </Form.Item>

          <Form.Item
            label="Category"
            name="maDanhMucKhoaHoc"
            rules={[{ required: true, message: Message.required }]}
          >
            <Select
              placeholder="Select category"
              options = {renderCategoryOptions()}
            >
            </Select>
          </Form.Item>

          <Form.Item
            label="Author's username"
            name="taiKhoanNguoiTao"
            rules={[{ required: true, message: Message.required }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Created date"
            name="ngayTao"
            rules={[{ required: true, message: Message.required }]}
            initialValue={[
              new Date().getDate(),
              new Date().getMonth() + 1,
              new Date().getFullYear(),
            ].join("/")
            }
          >
            <Input disabled={true} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="ml-auto d-block">
              Add course
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="poster col-lg-4 col-md-4 col-sm-12">
        <img src={PosterImg || "https://i.imgur.com/1T1ZHgG.jpg"} alt="poster" className="w-100" />
      </div>
    </div>
  )
}



