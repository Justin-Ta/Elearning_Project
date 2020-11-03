import React from 'react';
import RatingStars from '../../Components/RatingStars';
import { Card, Button } from 'antd';
import { Rate } from 'antd';
import CommentList from '../../Components/CommentList';

export default function CourseDetail() {
        return (
            <div className="courseDetail">
                <div className="courseDetail_header">
                    <div className="container">
                        <div className="row">
                            <div className="col-8 my-5">
                                <h2>Front End Developer</h2>
                                <h2><RatingStars score={3.4} /></h2>
                                <h4>Created by: ddddcd dsc</h4>
                            </div>
                            <div className="col-4 my-5">
                                <Card
                                    style={{ width: "100%", textAlign: "center" }}
                                    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                                >
                                    <h3>$132.344</h3>
                                    <Button type="primary w-100 mb-3" danger size={"large"}>
                                        Register
                                    </Button>
                                    <h6>How do you feel?</h6>
                                    <Rate allowHalf defaultValue={0} />
                                </Card>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="courseDetail__content mt-5">
                    <div className="container">
                        <div className="description col-8">
                            <h2>Description</h2>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, officiis incidunt hic soluta beatae voluptatum quidem odit vel natus libero doloremque quae, veniam numquam. Pariatur repudiandae, consectetur reprehenderit quae, corrupti, consequatur fuga repellat possimus explicabo quisquam asperiores expedita nobis nihil nostrum quis dolorem hic incidunt. Iste nam neque blanditiis aliquam!
                        </div>
                        <div className="studentComment">
                            <CommentList />
                        </div>
                    </div>
                </div>
            </div>
        )
}


