import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';

const { Meta } = Card;

export default class Categories extends Component {
    renderCategory() {
        const categoryNames = ['Development', 'Marketing', 'Business', 'Design', 'Music', 'Personal development'];
        return categoryNames.map((name, index) => {
            return (
                <Col xs={{ span: 12, offset: 0 }}
                 sm={{ span: 8, offset: 0 }}
                 lg={{ span: 4, offset: 0 }}
                 md={{ span: 6, offset: 0 }}
                 key={index}>
                    <Card
                        hoverable
                        cover={<img alt="example" src={`./img/categories/category-${index}.jpg`} />}
                    >
                        <Meta title={name} />
                    </Card>
                </Col>
            );
        });
    }

    render() {
        return (
            <div className="container">
                <Row gutter={[16, 16]}>
                    {this.renderCategory()}
                </Row>
            </div>
        )
    }
}
