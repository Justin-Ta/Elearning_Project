import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {getCourse} from '../../../constant/api';
import {getCourseInfo} from '../../../redux/actions/course';
import { NavLink } from 'react-router-dom';

export default function CourseManagement(props) {
    const state = Array.from(useSelector(state=> state.trendingCourses));
    const dispatch= useDispatch();
    useEffect(() => {
      axios.get(getCourse)
      .then(res=>{dispatch(getCourseInfo(res.data))})
      .catch(err=> console.log(err));
    },[dispatch])
    
   
    const renderCourse = () =>{
        return state?.map((course, index)=>{
          const {maKhoaHoc, tenKhoaHoc, soLuongHocVien}=course;
            return (
              <tr key={index}>
                <td>{maKhoaHoc}</td>
                <td>{tenKhoaHoc}</td>
                <td className="text-center">{soLuongHocVien}</td>
                <td className="text-center">
                  {2 > 0 ? <span className="text-danger">2</span> : 1}
                </td>
                <td className="text-left" style={{ width: "5%" }}>
                  <NavLink
                    className="btn btn-primary mx-2"
                    title="Detail course"
                    to={`/admin/coursedetail/${maKhoaHoc}`}
                  >
                    <i class="fa fa-search"></i>
                  </NavLink>
                </td>

                <td className="text-left" style={{ width: "5%" }}>
                  {" "}
                  <NavLink
                    to={{
                      pathname: "/admin/courseedit",
                      aboutProps: {
                        selectedidds: true,
                      },
                    }}
                    className="btn btn-warning mx-2"
                    title="Edit course"
                  >
                    <i class="fa fa-edit"></i>
                  </NavLink>
                </td>
                <td className="text-left" style={{ width: "5%" }}>
                  <button className="btn btn-danger mx-2" title="Delete course" onClick={()=>{
                    console.log("Selected course",tenKhoaHoc)
                  }}>
                    <i class="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            );
        })}
  return (
          <div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search Course..." ariaLabel="Search" ariaDescribedby="basic-addon1"/>
                <div>
                    <span>
                    <button className="btn btn-success">Search</button>
                    </span>
                </div>
            </div>
            <div className="from-group">
              <NavLink type="button" class="btn btn-primary mb-3" to ='/admin/courseedit'>Add Course</NavLink>
            </div>
            <table className="table">
                <thead className="bg-dark text-light font-weight-bold">
                    <tr>
                        <td>ID</td>
                        <td>Course Name</td>
                        <td className="text-center">Amount of User</td>
                        <td className="text-center">Pending User</td>
                        <td style={{width:"5%"}}></td>
                        <td style={{width:"5%"}}></td>
                        <td style={{width:"5%"}}></td>
                    </tr>
                </thead>
                <tbody className="table__content">
                {renderCourse()}
                </tbody>
            </table>
    </div>
  )
}
