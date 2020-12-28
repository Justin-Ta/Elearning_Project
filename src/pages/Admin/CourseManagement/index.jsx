import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Table, Button, Input, Tooltip, message } from 'antd';
import { deleteCourseService, getCoursesService } from '../../../Axios/course';
import Loading from '../../../Components/Loading';
import { nonAccentVietnamese } from '../../../share/functions';
import { categoryDisplayNames } from '../../../constant/common';

const { Search } = Input;

export default function CourseManagement(props) {
  const [state, setState] = useState({
    totalCourses: undefined,
    filterCourses: undefined,
  });
  const [totalCourses, setTotalCourses] = useState();
  const [isDisablesDel, setIsDisablesDel] = useState(true);

  useEffect(() => {
    getCoursesService()
      .then(res => {
        const courses = res.data.map((course, index) => {
          const newCourse = { ...course };
          newCourse.key = index;
          newCourse.danhMucKhoaHoc.tenDanhMucKhoaHoc = categoryDisplayNames[course.danhMucKhoaHoc.maDanhMucKhoahoc];
          return newCourse;
        })
        setState({
          totalCourses: courses,
          filterCourses: courses,
        });
        //setTotalCourses(courses);
      })
      .catch(err => console.log(err));
  }, [])

  const onSearch = (keyword) => {
    const result = state.totalCourses.filter((course) => {
      let resource = JSON.stringify(Object.values(course));
      keyword = nonAccentVietnamese(keyword);
      resource = nonAccentVietnamese(resource);
      return resource.includes(keyword);
    });
    //console.log(result);
    setState({
      totalCourses: state.totalCourses,
      filterCourses: result,
    });
  }

  const deleteCourse = (id) => {
    const courseId = encodeURIComponent(id);
    deleteCourseService(id)
    .then(res=>{
        message.success(`Delete ${id} success!!!`);
        afterCallAPISuccess();
    })
    .catch(err=>{
        err.response && console.log(err.response.data);
        message.error('Delete Error!!!');
    })

    const afterCallAPISuccess = () => {
      const newTotalCourses = [...state.totalCourses];
      const indexInTotal = newTotalCourses.findIndex(course => { return course.maKhoaHoc === id });
      indexInTotal !== -1 && newTotalCourses.splice(indexInTotal, 1);
  
      const newState = [...state.filterCourses];
      const indexInState = newState.findIndex(course => { return course.maKhoaHoc === id });
      console.log('indexInState', indexInState);
      indexInTotal !== -1 && newState.splice(indexInState, 1);
      setState({
        totalCourses: newTotalCourses,
        filterCourses: newState,
      })
  
      console.log('state', state);
    }
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'maKhoaHoc',
      key: 'maKhoaHoc',
    },
    {
      title: 'Course title',
      dataIndex: 'tenKhoaHoc',
      key: 'tenKhoaHoc',
      render: (text, record) => (
        <NavLink to={'/admin/coursedetail/' + encodeURIComponent(record.maKhoaHoc)}>
          {text}
        </NavLink>
      ),
    },
    {
      title: 'Category',
      dataIndex: 'danhMucKhoaHoc',
      key: 'danhMucKhoaHoc',
      render: (danhMucKhoaHoc) => {
        return (
          <p>{danhMucKhoaHoc.tenDanhMucKhoaHoc}</p>
        )
      },
      filters: Object.values(categoryDisplayNames).map(category => {
        return {
          text: category,
          value: category,
        }
      }),
      onFilter: (value, record) => record.danhMucKhoaHoc.tenDanhMucKhoaHoc.indexOf(value) === 0,
    },
    {
      title: 'Authors',
      dataIndex: 'nguoiTao',
      key: 'nguoiTao',
      render: (nguoiTao) => {
        return (
          <p>{nguoiTao.hoTen}</p>
        )
      }
    },
    {
      title: 'Create date',
      dataIndex: 'ngayTao',
      key: 'ngayTao',
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <Tooltip title="Delete" color={"grey"}>
          <Button type="primary" danger onClick={() => deleteCourse(record.maKhoaHoc)}>
            <i className="fa fa-trash" aria-hidden="true"></i>
          </Button>
        </Tooltip>
      ),
    },
  ];

  let data = state.filterCourses;

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      if (selectedRows.length > 1) setIsDisablesDel(false);
      else setIsDisablesDel(true);
    },
  };

  if (!state.totalCourses) return <Loading />;
  return (
    <>
      <div className="">
        <Search placeholder="input search text" onSearch={onSearch} size="large" className="mb-3" />
        <NavLink type="button" className="btn btn-primary mb-3" to='/admin/courseedit'>Add Course</NavLink>
        <button type="button" className="btn btn-danger mb-3 ml-3" to='/admin/courseedit' disabled={isDisablesDel}>Delete Courses</button>
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
