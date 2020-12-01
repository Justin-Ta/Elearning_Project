import React from 'react';
import { Input, Form } from 'antd';

export default function UserInfo(props) {
    const formRef = React.createRef();
    return (
        <div className="userInfo px-3">
            <Form ref={formRef} name="control-ref">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <Form.Item name="name" rules={[{ required: true, whitespace: true }]} initialValue = {props.userInfo.name}>
                            <Input size="large"
                                prefix={<><i className="fa fa-user" aria-hidden="true"></i> <span>Name:</span></>}
                                bordered={!true}
                                readOnly={true}
                            />
                        </Form.Item>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <Form.Item name="Gender" rules={[{ required: true, whitespace: true }]} initialValue={props.userInfo.gender}>
                            <Input size="large"
                                prefix={<><i className="fa fa-transgender" aria-hidden="true"></i><span>Gender:</span></>}
                                bordered={!true}
                                readOnly={true}
                            />
                        </Form.Item>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <Form.Item name="Career" rules={[{ required: true, whitespace: true }]} initialValue={props.userInfo.career}>
                            <Input size="large"
                                prefix={<><i className="fa fa-briefcase" aria-hidden="true"></i><span>Career:</span></>}
                                bordered={!true}
                                readOnly={true}
                            />
                        </Form.Item>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <Form.Item name="phonenumber" rules={[{ required: true, whitespace: true }]} initialValue={props.userInfo.phonenumber}>
                            <Input size="large"
                                prefix={<><i className="fa fa-briefcase" aria-hidden="true"></i><span>Phone number:</span></>}
                                bordered={!true}
                                readOnly={true}
                            />
                        </Form.Item>
                    </div>
                </div>
            </Form>
        </div>
    )
}
