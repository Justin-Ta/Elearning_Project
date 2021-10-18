import React, { useState } from 'react';
import { Input, Form, Button, message } from 'antd';
import { useDispatch } from 'react-redux';
import { updateUserInfoAction } from '../../redux/actions/user';
import { errorResp, errorRespTranslation } from '../../constant/common';

export default function UserInfo(props) {
    const formRef = React.createRef();
    const dispatch = useDispatch();
    const initialUserInfor = props.userInfo;
    const { lastname, email, firstname, phone, role } = initialUserInfor;

    const [isEditable, setIsEditable] = useState(false);
    const [isChanged, setIsChanged] = useState(false);

    const editProfile = () => {
        setIsEditable(true);
    }

    const cancel = () => {
        formRef.current.setFieldsValue({
            firstname: firstname.charAt(0).toUpperCase() + firstname.slice(1),
            lastname: lastname.charAt(0).toUpperCase() + lastname.slice(1),
            role: role === "HV" ? "Student" : "Teacher",
            email,
            phone
        });
        setIsEditable(false);
    }

    const submit = (values) => {
        const submitData = {
            lastname: lastname,
            firstname: values.firstname,
            phone: values.phone,
        };
        const afterDipatch = () => {
            message.success({
                content: 'Update successfully',
                icon: <i className="fa fa-info-circle pr-2 text-success" aria-hidden="true"></i>
            });
            setIsEditable(false);
        }

        const afterCallAPIFailed = (err) => {
            let errorMess = String(err);
            if (err.response.data === errorResp.existedEmail) errorMess = errorRespTranslation.existedEmail;
            message.error({
                content: errorMess,
                icon: <i className="fa fa-exclamation-circle pr-2 text-danger" aria-hidden="true"></i>
            });
        }

        dispatch(updateUserInfoAction(submitData, afterDipatch, afterCallAPIFailed));
    }

    const onValueChange = (allValues) => {
        const oldValue = initialUserInfor;
        let currentValue = allValues;
        let breakFunction = false;

        Object.keys(currentValue).forEach(key => {
            if (currentValue[key] !== oldValue[key] && !isChanged) {
                setIsChanged(true);
                return breakFunction = true;
            }
            else if (currentValue[key] !== oldValue[key]) {
                return breakFunction = true;
            }
        });
        if (breakFunction) return;
        if (isChanged) setIsChanged(false);
    }

    return (
        <div className="userInfo">
            <Form ref={formRef} name="control-ref"
                onFinish={submit}
                onValuesChange={onValueChange}
                initialValues={{
                    firstname: firstname.charAt(0).toUpperCase() + firstname.slice(1),
                    lastname: lastname.charAt(0).toUpperCase() + lastname.slice(1),
                    role: role === "HV" ? "Student" : "Teacher",
                    email,
                    phone
                }}>
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <Form.Item name="firstname" rules={[
                            {
                                required: true,
                                message: 'Please input your first name!',
                                whitespace: true
                            },
                            {
                                pattern: '^[A-Za-z ]+$',
                                message: 'Please input only alphabetic character',
                            }
                        ]}>
                            <Input size="large"
                                prefix={<><i className="fa fa-user" aria-hidden="true"></i> <span>First name:</span></>}
                                bordered={isEditable}
                                readOnly={!isEditable}
                            />
                        </Form.Item>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <Form.Item name="lastname" rules={[{ required: true, whitespace: true }]}>
                            <Input size="large"
                                prefix={<><i className="fa fa-id-card" aria-hidden="true"></i><span>Last name:</span></>}
                                bordered={isEditable}
                                readOnly={!isEditable}
                            />
                        </Form.Item>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <Form.Item name="role" rules={[{ required: true, whitespace: true }]}>
                            <Input size="large"
                                prefix={<><i className="fa fa-lock" aria-hidden="true"></i><span>Role:</span></>}
                                bordered={false}
                                readOnly={!false}
                            />
                        </Form.Item>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <Form.Item name="email">
                            <Input size="large"
                                prefix={<><i className="fa fa-envelope" aria-hidden="true"></i><span>E-mail:</span></>}
                                bordered={false}
                                readOnly={true}
                            />
                        </Form.Item>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <Form.Item name="phone" rules={[
                            {
                                required: true,
                                message: 'Please input your phonenumber!',
                                whitespace: true
                            },
                            {
                                pattern: "^[0-9]*$",
                                message: 'Please input only number',
                            }
                        ]}>
                            <Input size="large"
                                prefix={<><i className="fa fa-briefcase" aria-hidden="true"></i><span>Phone number:</span></>}
                                bordered={isEditable}
                                readOnly={!isEditable}
                            />
                        </Form.Item>
                    </div>
                </div>
                <Form.Item>
                    <div className="d-flex justify-content-end">
                        <Button
                            danger
                            onClick={editProfile}
                            hidden={isEditable}
                        >Edit my profile</Button>
                        <Button type="primary"
                            hidden={!isEditable}
                            ghost
                            id="cancleBtn"
                            onClick={cancel}
                        >
                            Cancle
                        </Button>
                        <Button
                            type="primary" danger
                            hidden={!isEditable}
                            className="ml-3"
                            id="okBtn"
                            htmlType="submit"
                            disabled={!isChanged}
                        >
                            OK
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}
