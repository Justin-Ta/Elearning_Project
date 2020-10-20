import React, { Component } from 'react'

export default class CourseDetail extends Component {
    rederStart(){

    }
    render() {
        return (
            <div className="courseDetail">
            <div className="courseDetail_header">
                <div className="container">
                    <div className="row">
                        <div className="col-8 my-5">
                            <h2>Front End Developer</h2>
                            <p>Rating: <span><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half"></i></span></p>
                            <button className="btn btn-success">Register</button>
                        </div>
                        <div className="col-4 my-5">
                            <img src="./img/Course/course_1.png" alt="" className="courseImg img-fluid"/>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="courseDetail__content mt-5">
                <div className="container">
                    <h2>Description</h2>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, officiis incidunt hic soluta beatae voluptatum quidem odit vel natus libero doloremque quae, veniam numquam. Pariatur repudiandae, consectetur reprehenderit quae, corrupti, consequatur fuga repellat possimus explicabo quisquam asperiores expedita nobis nihil nostrum quis dolorem hic incidunt. Iste nam neque blanditiis aliquam!
                </div>
            </div>
        </div>
        )
    }
}


