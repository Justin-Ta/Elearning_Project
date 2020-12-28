import { Button, Form, Input, Select, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { getCourseDetailService, updateCourseService } from '../../../Axios/course';
import { categoryDisplayNames, groupID, message as Message} from '../../../constant/common';
import Loading from '../../../Components/Loading';
import { Course } from '../../../Modals/course';

export default function CourseDetailForAdmin(props) {
    const id = props.match.params.id;
    const [state, setstate] = useState();
    const [poster, setPoster] = useState("https://i.imgur.com/1T1ZHgG.jpg");
    const [isEditable, setIsEditable] = useState(false);
    let updatedCourse;

    useEffect(() => {
        getCourseDetailService(id)
            .then(res => {
                const course = res.data;
                const newCourse = new Course(
                    course.maKhoaHoc,
                    course.biDanh,
                    course.tenKhoaHoc,
                    course.moTa,
                    course.luotXem,
                    0,
                    course.hinhAnh,
                    groupID,
                    course.ngayTao,
                    course.danhMucKhoaHoc.maDanhMucKhoahoc,
                    course.nguoiTao.taiKhoan,
                );

                setPoster(newCourse.hinhAnh);
                setstate(newCourse);
                console.log(newCourse);
            })
            .catch(err => {
                console.log(err);
            });
    }, [id])

    if (!state) return (<Loading />)

    const formRef = React.createRef();
    const renderCategoryOptions = () => {
        return Object.values(categoryDisplayNames).map((category, index) => {
            return {
                label: category,
                value: Object.keys(categoryDisplayNames)[index],
            }
        });
    }

    const onChangePoster = (event) => {
        let link = event.target.value;
        if (link === "") link = "https://i.imgur.com/1T1ZHgG.jpg";
        setPoster(link);
    }

    const onEdit = () => {
        setIsEditable(true);
    }

    const onCancel = () => {
        setIsEditable(false);
    }

    const submitUpdate = () => {
        console.log('submitUpdate', updatedCourse);
        updateCourseService(updatedCourse)
        .then(res => {
            console.log(res.data);
            setIsEditable(false);
            message.success({
                content: 'Update successfully',
                icon: <i className="fa fa-info-circle pr-2 text-success" aria-hidden="true"></i>
            });
        })
        .catch(err => {
            console.log(err.response.data);
            message.error({
                content: "Error happended",
                icon: <i className="fa fa-exclamation-circle pr-2 text-danger" aria-hidden="true"></i>
            });
        })
    }

    const onChangeForm = (changedFields) => {
        if (changedFields.length > 0) {
            const changedField = changedFields[0].name[0];
            if (updatedCourse === undefined) updatedCourse = {...state};
            updatedCourse[changedField] = changedFields[0].value;
        }
    }

    const layout = {
        labelCol: { span: 24 },
        wrapperCol: { span: 24 },
    };

    return (
        <div className="CourseDetailForAdmin">
            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12 form">
                    <Form
                        disabled={true}
                        {...layout}
                        ref={formRef}
                        initialValues={state}
                        onFinish={submitUpdate}
                        onFieldsChange={onChangeForm}
                    >
                        <div className="btnGroup row justify-content-end">
                            <Button type="primary" hidden={isEditable} onClick={onEdit}>
                                Edit
                            </Button>
                        </div>
                        <Form.Item
                            label="Course ID"
                            name="maKhoaHoc"
                            rules={[{ required: true, message: Message.required }]}
                        >
                            <Input readOnly = {true}
                            bordered = {false}/>
                        </Form.Item>

                        <Form.Item
                            label="Course title"
                            name="tenKhoaHoc"
                            rules={[{ required: true, message: Message.required }]}
                        >
                            <Input readOnly = {!isEditable}
                            bordered = {isEditable}/>
                        </Form.Item>

                        <Form.Item
                            label="Code name"
                            name="biDanh"
                            rules={[{ required: true, message: Message.required }]}
                        >
                            <Input readOnly = {!isEditable}
                            bordered = {isEditable}/>
                        </Form.Item>

                        <Form.Item
                            label="Poster link"
                            name="hinhAnh"
                            rules={[{ required: true, message: Message.required }]}
                        >
                            <Input onChange={($event) => onChangePoster($event)}
                            readOnly = {!isEditable}
                            bordered = {isEditable}/>
                        </Form.Item>

                        <Form.Item
                            label="Description"
                            name="moTa"
                            rules={[{ required: true, message: Message.required }]}
                        >
                            <Input.TextArea rows={4} 
                            readOnly = {!isEditable}
                            bordered = {isEditable}
                            />
                        </Form.Item>

                        <Form.Item
                            label="Category"
                            name="maDanhMucKhoaHoc"
                            rules={[{ required: true, message: Message.required }]}
                            initialValue={categoryDisplayNames[state.maDanhMucKhoahoc]}
                        >
                            <Select
                                placeholder="Select category"
                                options = {renderCategoryOptions()}
                                disabled = {!isEditable}
                            >
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="Views"
                            name="luotXem"
                            rules={[{ required: true, message: Message.required }]}
                        >
                            <Input readOnly = {!isEditable} bordered = {isEditable}/>
                        </Form.Item>

                        <Form.Item
                            label="Author's username"
                            name="taiKhoanNguoiTao"
                            rules={[{ required: true, message: Message.required }]}
                        >
                            <Input readOnly = {!isEditable}
                            bordered = {isEditable}/>
                        </Form.Item>

                        {/* <Form.Item
                            label="Author's name"
                            name="name"
                            rules={[{ required: true, message: message.required }]}
                            initialValue={state.nguoiTao.hoTen}
                        >
                            <Input readOnly={true} bordered = {false}/>
                        </Form.Item> */}

                        <Form.Item
                            label="Created date"
                            name="ngayTao"
                            rules={[{ required: true, message: Message.required }]}
                        >
                            <Input readOnly={true} bordered = {false}/>
                        </Form.Item>
                        <div className="btnGroup row justify-content-end">
                            <Button type="primary" htmlType="submit" hidden={!isEditable}>
                                Update
                            </Button>
                            <Button hidden={!isEditable} onClick={onCancel}>
                                Cancel
                            </Button>
                        </div>
                    </Form>
                </div>
                <div className="poster col-lg-4 col-md-4 col-sm-12">
                    <img src={poster} alt="poster" className="w-100" />
                </div>
            </div>
        </div>
    )
}



