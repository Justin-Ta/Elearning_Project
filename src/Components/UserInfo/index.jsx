import React from 'react';
import { Input, Button, Form } from 'antd';
import { useState } from 'react';

export default function UserInfo() {
    const initialUserInfo = {
        First_name: "Thu",
        Last_name: "Vo Hoang Anh Thu",
        Gender: "Female",
        Career: "Student"
    }
    const [isNotEdited, setIsNotEdited] = useState(true);
    const [userInfo, setUserInfo] = useState(initialUserInfo);
    const [enableSaveBtn, setEnableSaveBtn] = useState(false);

    const EditProfile = () => {
        console.log('EditProfile');
        setIsNotEdited(false);
    }

    const onCancel = () => {
        console.log('onCancel');
        formRef.current.setFieldsValue(userInfo);
        setIsNotEdited(true);
      };

    const onSave = (values) => {
        console.log('onSave');
        setUserInfo(values)
        setIsNotEdited(true);
    }

    const onValueChange = (changedValues, allValues) => {
        console.log("changedValues");
        const oldValues = JSON.stringify(userInfo);
        const currentValues = JSON.stringify(allValues);

        if (oldValues === currentValues) return setEnableSaveBtn(false);
        return setEnableSaveBtn(true);
    }

    const formRef = React.createRef();

    return (
        <div className="userInfo px-3">
            <Form ref={formRef} name="control-ref" onFinish={onSave} onValuesChange={onValueChange}>
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <Form.Item name="First_name" rules={[{ required: true, whitespace: true }]} initialValue={userInfo.First_name}>
                            <Input size="large"
                                prefix={<><i className="fa fa-user" aria-hidden="true"></i> <span>First Name:</span></>}
                                bordered={!isNotEdited}
                                readOnly={isNotEdited}
                            />
                        </Form.Item>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <Form.Item name="Last_name" rules={[{ required: true, whitespace: true }]} initialValue={userInfo.Last_name}>
                            <Input size="large"
                                prefix={<><i className="fa fa-user" aria-hidden="true"></i><span>Last Name:</span></>}
                                bordered={!isNotEdited}
                                readOnly={isNotEdited}
                            />
                        </Form.Item>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <Form.Item name="Gender" rules={[{ required: true, whitespace: true }]} initialValue={userInfo.Gender}>
                            <Input size="large"
                                prefix={<><i className="fa fa-transgender" aria-hidden="true"></i><span>Gender:</span></>}
                                bordered={!isNotEdited}
                                readOnly={isNotEdited}
                            />
                        </Form.Item>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <Form.Item name="Career" rules={[{ required: true, whitespace: true }]} initialValue={userInfo.Career}>
                            <Input size="large"
                                prefix={<><i className="fa fa-briefcase" aria-hidden="true"></i><span>Career:</span></>}
                                bordered={!isNotEdited}
                                readOnly={isNotEdited}
                            />
                        </Form.Item>
                    </div>
                </div>
                <div className="ml-auto d-block" style={{ width: "max-content" }}>
                    {
                        isNotEdited ?
                            <Button onClick={EditProfile} danger className="userInfo_edit">
                                <i className="fa fa-pencil" aria-hidden="true"></i>
                                <span className="pl-2" >Edit my profile</span>
                            </Button >
                            :
                            <Form.Item >
                                <Button htmlType="submit" disabled={!enableSaveBtn} type="danger" shape="round" size="large" style={{ width: "100px" }}>
                                    Save
                                </Button>
                                <Button onClick={onCancel} size="large" danger className="ml-3" style={{ width: "100px" }}>
                                    Cancel
                                    </Button>
                            </Form.Item>
                    }
                </div>
            </Form>
        </div>
    )
}
