import React, { useState } from 'react';
import { Input, Form, Button, message } from 'antd';
import { useDispatch } from 'react-redux';
import { updateUserInfoAction } from '../../redux/actions/user';
import { groupID, errorResp, errorRespTranslation } from '../../constant/common';

export default function UserInfo(props) {
    const formRef = React.createRef();
    //console.log("userInfo", props.userInfo);
    const dispatch = useDispatch();
    const initialUserInfor = props.userInfo;
    const { taiKhoan, email, hoTen, soDT, maLoaiNguoiDung } = initialUserInfor;

    const [isEditable, setIsEditable] = useState(false);
    const [isChanged, setIsChanged] = useState(false);

    const editProfile = () => {
        setIsEditable(true);
    }

    const cancel = () => {
        initialUserInfor.maLoaiNguoiDung = (initialUserInfor.maLoaiNguoiDung === 'GV'? 'Teacher' : 'Student');
        formRef.current.setFieldsValue(initialUserInfor);
        setIsEditable(false);
    }

    const submit = (values) => {
        let newMaLoaiNguoiDung = (values.maLoaiNguoiDung === 'Teacher'? 'GV' : 'HV');
        const submitData = {
            taiKhoan: taiKhoan,
            matKhau: initialUserInfor.matKhau,
            maLoaiNguoiDung: newMaLoaiNguoiDung,
            maNhom: groupID,
            hoTen: values.hoTen,
            soDT: values.soDT,
            email: values.email,
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
            if ( err.response.data === errorResp.existedEmail) errorMess = errorRespTranslation.existedEmail;
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

        Object.keys(currentValue).forEach( key => {
            if ( currentValue[key] !== oldValue[key] && !isChanged ) {
                setIsChanged(true);
                return breakFunction = true;
            }
            else if (currentValue[key] !== oldValue[key]){
                return breakFunction = true;
            }
        });
        if (breakFunction) return;
        if (isChanged) setIsChanged(false);
    }

    return (
        <div className="userInfo">
            <Form ref={formRef} name="control-ref" onFinish={submit} onValuesChange={onValueChange}>
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <Form.Item name="taiKhoan" rules={[{ required: true, whitespace: true }]} initialValue={taiKhoan}>
                            <Input size="large"
                                prefix={<><i className="fa fa-id-card" aria-hidden="true"></i><span>Username:</span></>}
                                bordered={false}
                                readOnly={true}
                            />
                        </Form.Item>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <Form.Item name="maLoaiNguoiDung" rules={[{ required: true, whitespace: true }]} initialValue={maLoaiNguoiDung === "HV" ? "Student" : "Teacher"}>
                            <Input size="large"
                                prefix={<><i className="fa fa-lock" aria-hidden="true"></i><span>Role:</span></>}
                                bordered={false}
                                readOnly={!false}
                            />
                        </Form.Item>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <Form.Item name="email" rules={[
                            { 
                                required: true,
                                message: 'Please input your email!',
                                whitespace: true 
                            },
                            {
                                pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
                                message: 'Invalid e-mail',
                            }
                            ]} 
                            initialValue={email}>
                            <Input size="large"
                                prefix={<><i className="fa fa-envelope" aria-hidden="true"></i><span>E-mail:</span></>}
                                bordered={isEditable}
                                readOnly={!isEditable}
                            />
                        </Form.Item>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <Form.Item name="hoTen" rules={[
                            { 
                                required: true,
                                message: 'Please input your name!',
                                whitespace: true 
                            },
                            {
                                pattern: '^[A-Za-z ]+$',
                                message: 'Please input only alphabetic character',
                            }
                            ]} initialValue={hoTen}>
                            <Input size="large"
                                prefix={<><i className="fa fa-user" aria-hidden="true"></i> <span>Name:</span></>}
                                bordered={isEditable}
                                readOnly={!isEditable}
                            />
                        </Form.Item>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <Form.Item name="soDT" rules={[
                            { 
                                required: true,
                                message: 'Please input your phonenumber!',
                                whitespace: true 
                            },
                            {
                                pattern: "^[0-9]*$",
                                message: 'Please input only number',
                            }
                            ]} 
                            initialValue={soDT}>
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
