import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Table, Button, Input, message, Popconfirm } from 'antd';
import { approveRegistrationService, getPendingCourseService, rejectRegistrationService } from '../../../Axios/course';

const { Search } = Input;

export default function RegManagement(props) {
  const [state, setState] = useState({
    filterRegs: undefined,
  });
  const [isDisablesDel, setIsDisablesDel] = useState(true);
  const chosenRegs = useRef([]);
  useEffect(() => {
    getPendingCourseService(1)
      .then(res => {
        // return console.log(res.data)
        const registrations = res.data.registrations.map((Reg, index) => {
          const newReg = { ...Reg };
          newReg.key = index;
          return newReg;
        })
        setState({
          filterRegs: registrations,
        });
      })
      .catch(err => console.log(err));
  }, [])

  const onSearch = (keyword) => {
    // const result = state.totalCourses.filter((course) => {
    //   let resource = JSON.stringify(Object.values(course));
    //   keyword = nonAccentVietnamese(keyword);
    //   resource = nonAccentVietnamese(resource);
    //   return resource.includes(keyword);
    // });
    // //console.log(result);
    // setState({
    //   totalCourses: state.totalCourses,
    //   filterCourses: result,
    // });
  }

  const reject = (ids) => {
    console.log(ids)
    rejectRegistrationService({ "registationIds": ids })
      .then(res => {
        if (res.data.rejected_registrations.deletedCount !== ids.length) throw new Error("");
        message.success(`Reject successfully!!!`);
        const newState = [...state.filterRegs];

        ids.forEach(id => {
          const indexInState = newState.findIndex(reg => { return reg._id === id });
          indexInState !== -1 && newState.splice(indexInState, 1);
        })

        setState({
          filterRegs: newState
        })
      })
      .catch(err => {
        err.response && console.log(err.response.data);
        message.error('Delete Error!!!');
      })
  };

  const approve = (ids) => {
    console.log(ids)
    approveRegistrationService({ "registationIds": ids })
      .then(res => {
        message.success(`Approve successfully!!!`);
        const newState = [...state.filterRegs];

        ids.forEach(id => {
          const indexInState = newState.findIndex(reg => { return reg._id === id });
          indexInState !== -1 && newState.splice(indexInState, 1);
        })

        setState({
          filterRegs: newState
        })
      })
      .catch(err => {
        err.response && console.log(err.response.data);
        message.error('Delete Error!!!');
      })
  };


  const columns = [
    {
      title: 'Student',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Course title',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => (
        <NavLink to={'/admin/coursedetail/' + record.path}>
          {text}
        </NavLink>
      ),
    },
    {
      title: 'Create date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date) => new Date(date).toDateString()
    },
    {
      title: 'Approve',
      key: 'Approve',
      render: (record) => (
        <Popconfirm placement="bottom" title={"Are you sure?"} onConfirm={() => approve([record._id])} okText="Yes" cancelText="No">
          <Button type="primary">
            Approve
          </Button>
        </Popconfirm>
      ),
    },
    {
      title: 'Reject',
      key: 'reject',
      render: (record) => (
        <Popconfirm placement="bottom" title={"Are you sure?"} onConfirm={() => reject([record._id])} okText="Yes" cancelText="No">
          <Button type="primary" danger>
            Reject
          </Button>
        </Popconfirm>
      ),
    },
  ];

  let data = state.filterRegs;

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      if (selectedRows.length < 2) return setIsDisablesDel(true);
      chosenRegs.current = selectedRows.map(e => e._id);
      isDisablesDel && setIsDisablesDel(false);
    },
  };

  return (
    <>
      <div className="">
        <h1>Registration Management</h1>
        <Search placeholder="input search text" onSearch={onSearch} size="large" className="mb-3" />
        <Popconfirm disabled={isDisablesDel} placement="bottom" title={"Are you sure?"} onConfirm={() => reject(chosenRegs.current)} okText="Yes" cancelText="No">
          <button type="button" className="btn btn-danger mb-3">Reject</button>
        </Popconfirm>
      </div>
      <Table columns={columns}
        dataSource={data}
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
      />
    </>
  )
}
