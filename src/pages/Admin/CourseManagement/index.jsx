import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Table, Button, Input, message, Popconfirm } from 'antd';
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
  const [isDisablesDel, setIsDisablesDel] = useState(true);
  const chosenCourses = useRef([]);
  useEffect(() => {
    getCoursesService()
      .then(res => {
        const courses = res.data.courses.map((course, index) => {
          const newCourse = { ...course };
          newCourse.key = index;
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

  const deleteCourse = (ids) => {
    // return console.log(id)
    deleteCourseService({ "courses": ids })
      .then(res => {
        if (res.data.deletedCount !== ids.length) throw new Error("");
        message.success(`Delete successfully!!!`);
        const newTotalCourses = [...state.totalCourses];
        const newState = [...state.filterCourses];

        ids.forEach(id => {
          const indexInTotal = newTotalCourses.findIndex(course => { return course._id === id });
          indexInTotal !== -1 && newTotalCourses.splice(indexInTotal, 1);

          const indexInState = newState.findIndex(course => { return course._id === id });
          indexInTotal !== -1 && newState.splice(indexInState, 1);
        })

        setState({
          totalCourses: newTotalCourses,
          filterCourses: newState,
        })
      })
      .catch(err => {
        err.response && console.log(err.response.data);
        message.error('Delete Error!!!');
      })
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'path',
      key: 'path',
    },
    {
      title: 'Course title',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => (
        <NavLink to={'/admin/coursedetail/' + encodeURIComponent(record.path)}>
          {text}
        </NavLink>
      ),
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (category) => {
        return (
          <p>{categoryDisplayNames[category]}</p>
        )
      },
      filters: Object.entries(categoryDisplayNames).map(([category, label]) => {
        return {
          text: label,
          value: category,
        }
      }),
      onFilter: (value, record) => value === record.category,
    },
    {
      title: 'Authors',
      dataIndex: 'author',
      key: 'author',
      render: (author) => {
        return (
          <p>{author.join(', ')}</p>
        )
      }
    },
    {
      title: 'Create date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date) => new Date(date).toDateString()
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <Popconfirm placement="bottom" title={"Are you sure to delete this course?"} onConfirm={() => deleteCourse([record._id])} okText="Yes" cancelText="No">
          <Button type="primary" danger>
            <i className="fa fa-trash" aria-hidden="true"></i>
          </Button>
        </Popconfirm>
      ),
    },
  ];

  let data = state.filterCourses;

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      if (selectedRows.length < 2) return setIsDisablesDel(true);
      chosenCourses.current = selectedRows.map(e => e._id);
      isDisablesDel && setIsDisablesDel(false);
    },
  };

  if (!state.totalCourses) return <Loading />;
  return (
    <>
      <div className="">
        <h1>Course Management</h1>
        <Search placeholder="input search text" onSearch={onSearch} size="large" className="mb-3" />
        <NavLink type="button" className="btn btn-primary mb-3" to='/admin/courseedit'>+ New course</NavLink>
        <Popconfirm disabled={isDisablesDel} placement="bottom" title={"Are you sure to delete these courses?"} onConfirm={() => deleteCourse(chosenCourses.current)} okText="Yes" cancelText="No">
          <button type="button" className="btn btn-danger mb-3 ml-3" to='/admin/courseedit'>Delete Courses</button>
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
