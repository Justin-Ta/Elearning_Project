import { Button, message, Popconfirm, Table } from 'antd';
import Search from 'antd/lib/input/Search';
import React, { useEffect, useState } from 'react';
import { deleteUserService, getListUserService, signUpService } from '../../../Axios/user';
import { errorResp, errorRespTranslation } from '../../../constant/common';
import { nonAccentVietnamese } from '../../../share/functions';
import AddUserForm from '../AddUserForm';

export default function UserManagement() {
  const [state, setstate] = useState({
    totalUsers: undefined,
    filteredUsers: undefined,
  })

  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    getListUserService()
      .then(res => {
        //console.log(res.data);
        const users = res.data.map((user, index) => {
          user.key = index;
          return user;
        });

        //console.log(users);
        setstate({
          totalUsers: users,
          filteredUsers: users,
        });
      })
      .catch(err => {
        err.response ? console.log(err.response.data) : console.log(err);
      })
  }, []);

  const onSearch = (keyword) => {
    const result = state.totalUsers.filter((user) => {
      let resource = JSON.stringify(Object.values(user));
      keyword = nonAccentVietnamese(keyword);
      resource = nonAccentVietnamese(resource);
      return resource.includes(keyword);
    });
    //console.log(result);
    setstate({
      totalUsers: state.totalUsers,
      filteredUsers: result,
    });
  }

  const deleteUser = (taiKhoan) => {
    //console.log(taiKhoan);
    deleteUserService(taiKhoan)
    .then( res => {
      console.log(res.data);
      afterCallAPISuccess();
      message.success(`Delete ${taiKhoan} successfully!!!`);
    })
    .catch(err => {
      err.response? console.log(err.response.data): console.log(err);
      if (err.response.data === errorResp.userRegistedCourse) return message.error(errorRespTranslation.userRegistedCourse);
      message.error('Delete Error!!!');
    })

    const afterCallAPISuccess = () => {
      const newTotalUsers = [...state.totalUsers];
      const indexInTotal = newTotalUsers.findIndex(user => { return user.taiKhoan === taiKhoan });
      indexInTotal !== -1 && newTotalUsers.splice(indexInTotal, 1);

      const newState = [...state.filteredUsers];
      const indexInState = newState.findIndex(user => { return user.taiKhoan === taiKhoan });
      indexInTotal !== -1 && newState.splice(indexInState, 1);
      setstate({
        totalUsers: newTotalUsers,
        filterUsers: newState,
      })
    }
  }

  const showDrawer = (isVisible) => {
    setDrawer(isVisible);
  }

  const receiveNewUserData = (userData) => {
    //console.log('receiveNewUserData', userData);

    signUpService(userData)
    .then(res => {
      console.log(res.data);
      message.success({
        content: 'Create new account successfully',
        icon: <i className="fa fa-info-circle pr-2 text-success" aria-hidden="true"></i>
      });
      //Add user in UI
      const newTotalUser = [...state.totalUsers];
      const newUser = {...res.data};
      newUser.key = newTotalUser.length;
      newUser.maLoaiNguoiDung = "HV";
      newUser.soDt = newUser.soDT;
      delete newUser.soDT;
      newTotalUser.push(newUser);
      setstate({
        totalUsers: newTotalUser,
        filteredUsers: newTotalUser,
      })
      //-End add user in UI
    })
    .catch(err => {
      
      if (err.response) {
        message.error({
        content: `Error: ${err.response.data}`,
        icon: <i className="fa fa-exclamation-circle pr-2 text-danger" aria-hidden="true"></i>
        }); 
      }
      else {
        message.error({
          content: `Error happened`,
          icon: <i className="fa fa-exclamation-circle pr-2 text-danger" aria-hidden="true"></i>
          }); 
        console.log(err);
      }
      
    })
  }

  const columns = [
    {
      title: 'Username',
      dataIndex: 'taiKhoan',
      key: 'taiKhoan',
    },
    {
      title: 'Full name',
      dataIndex: 'hoTen',
      key: 'hoTen',
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone number',
      dataIndex: 'soDt',
      key: 'soDt',
    },
    {
      title: 'Role',
      dataIndex: 'maLoaiNguoiDung',
      key: 'maLoaiNguoiDung',
      render: text => {
        if (text === 'GV') return "Teacher";
        return "Student";
      },
      filters: [
        { text: 'Teacher', value: 'GV' },
        { text: 'Student', value: 'HV' },
      ],
      onFilter: (value, record) => record.maLoaiNguoiDung.includes(value),
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <>
        <Popconfirm placement="bottom" title={"Are you sure to delete this user?"} onConfirm={() => deleteUser(record.taiKhoan)} okText="Yes" cancelText="No">
          <Button type="primary" danger>
            <i className="fa fa-trash" aria-hidden="true"></i>
          </Button>
        </Popconfirm>
        </>
      ),
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };

  return (
    <>
      <div className="">
        <h1>User Management</h1>
        <Search placeholder="input search text" size="large" className="mb-3" onSearch={onSearch}/>
        <button type="button" className="btn btn-primary mb-3" onClick={() => showDrawer(true)}>+ New user</button>
      </div>
      <Table dataSource={state.filteredUsers}
        columns={columns}
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
      />

      <AddUserForm visible={drawer} showDrawer={showDrawer} newUserData={receiveNewUserData}/>
    </>
  );
}