import React, { useEffect } from 'react';
import Modal from './Modal';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {getListUser} from '../../../constant/api'
import {getListOfUser} from '../../../redux/actions/user';
import { NavLink } from 'react-router-dom';

export default function UserManagement() {
    const state= Array.from(useSelector(state=>state.userReducer));
    const dispatch= useDispatch();
    useEffect(()=>{
      axios.get(getListUser)
      .then(res=>{dispatch(getListOfUser(res.data))})
      .catch(err=> console.log(err))
    },[dispatch]);
    console.log("mang User",state);
    const renderUser = () =>{
        return state?.map((user, index)=>{
        const {maLoaiNguoiDung=maLoaiNguoiDung, taiKhoan=taiKhoan, hoTen=hoTen, email=email, soDt=soDt }= user
            return <tr key={index}>
                        <td style={{width:"10%"}}>{maLoaiNguoiDung}</td>
                        <td style={{width:"15%"}}>{taiKhoan}</td>
                        <td style={{width:"15%"}}>{hoTen}</td>
                        <td style={{overflow:"inherit"}} title={`${email}`}>{email}</td>
                        <td>{soDt}</td>
                        <td className="text-left" style={{width:"5%"}}>
                          <button className="btn btn-primary mx-2" title="Detail co"><i class="fa fa-search"></i></button>                      
                        </td>
                        <td className="text-left" style={{width:"5%"}}>
                        <button className="btn btn-warning mx-2" title="Edit course"><i class="fa fa-edit"></i></button>       
                        </td>
                        <td className="text-left" style={{width:"5%"}}>
                        <button className="btn btn-danger mx-2" title="Delete course"><i class="fa fa-trash"></i></button>
                        </td>
                    </tr>
        })}
  
  return (
    <div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search User..." ariaLabel="Search" ariaDescribedby="basic-addon1"/>
                <div>
                    <span>
                    <button className="btn btn-success">Search</button>
                    </span>
                </div>
            </div>
            <div className="from-group">
            {/* <button type="button" class="btn btn-primary mb-3" data-toggle="modal" data-target=".bd-example-modal-lg">Add User</button>
                  <Modal/> */}
                  <NavLink type="button" class="btn btn-primary mb-3" to="/admin/useredit">Add User</NavLink>
            </div>
            <table className="table">
                <thead className="bg-dark text-light font-weight-bold">
                    <tr>
                        <td style={{width:"10%"}}>User style</td>
                        <td style={{width:"15%"}}>User Name</td>
                        <td style={{width:"15%"}}>Name</td>
                        <td>Email</td>
                        <td>Phone Number</td>
                        <td style={{width:"5%"}}></td>
                        <td style={{width:"5%"}}></td>
                        <td style={{width:"5%"}}></td>

                    </tr>
                </thead>
                <tbody className="table__content">
                    {renderUser()}
                </tbody>
            </table>
    </div>
  )
}