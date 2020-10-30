import React from 'react';
import Modal from './Modal';
export default function UserManagement() {
    const user=[
        {
            taiKhoan: "000",
            hoTen: "007 bond",
            email: "007@gmail.com",
            soDt: "5899",
            maLoaiNguoiDung: "HV"
          },
          {
            taiKhoan: "0000",
            hoTen: "0000",
            email: "0000@111.com",
            soDt: "0000",
            maLoaiNguoiDung: "GV"
          },
          {
            taiKhoan: "0001",
            hoTen: "111",
            email: "111@wwwewq.com",
            soDt: "111",
            maLoaiNguoiDung: "HV"
          },
          {
            taiKhoan: "0003",
            hoTen: "0003",
            email: "0003@111.com",
            soDt: "0003",
            maLoaiNguoiDung: "HV"}
    ]
    const renderUser = () =>{
        return user?.map((user, index)=>{
            return <tr key={index}>
                        <td>{user.maLoaiNguoiDung}</td>
                        <td >{user.taiKhoan}</td>
                        <td>{user.hoTen}</td>
                        <td>{user.email}</td>
                        <td>{user.soDt}</td>
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
            <button type="button" class="btn btn-primary mb-3" data-toggle="modal" data-target=".bd-example-modal-lg">Add User</button>
                  <Modal/>
            </div>
            <table className="table">
                <thead className="bg-dark text-light font-weight-bold">
                    <tr>
                        <td>User style</td>
                        <td>User Name</td>
                        <td>Name</td>
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