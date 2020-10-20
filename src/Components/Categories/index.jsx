import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { categoryNames } from '../../constant/common';

export default class Categories extends Component {
    renderCategory() {
        return categoryNames.map((name, index) => {
            return (
                <Col xs={{ span: 12, offset: 0 }}
                    sm={{ span: 8, offset: 0 }}
                    lg={{ span: 4, offset: 0 }}
                    md={{ span: 6, offset: 0 }}
                    key={index}>
                    <Link to={"/categories/"+ name}>
                        <Card
                            hoverable
                            cover={<img alt="example" src={`./img/categories/category-${index}.jpg`} />}
                        >
                            <p>
                                <b>{name}</b>
                            </p>
                        </Card>
                    </Link>
                </Col>
            );
        });
    }

    render() {
        return (
            <div className="categories container">
                <Row gutter={[16, 16]}>
                    {this.renderCategory()}
                </Row>
            </div>
        )
    }
}
