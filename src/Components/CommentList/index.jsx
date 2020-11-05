import React from 'react';
import { Avatar, Form, Button, Input } from 'antd';
import COMMENT from '../Comment';
const { TextArea } = Input;


export default function CommentList() {

    return (
        <div className="col-8 pt-5">
            <h2>Reviews</h2>
            <COMMENT />

            <div className="row">
                <div className="col-1 mt-3">
                <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                />
                </div>
                <div className="col-11 mt-3">
                <Form.Item>
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" type="primary">
                        Add Comment
                    </Button>
                </Form.Item>
                </div>
            </div>
        </div>
    );
}
