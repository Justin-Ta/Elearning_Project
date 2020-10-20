import React from 'react';
import './App.scss';
import 'antd/dist/antd.css';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import Home from './pages/Home'

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Search from './pages/Search';
import CategoryDetail from './pages/CategoryDetail';
import CourseManagement from './pages/CourseManagement';
import UserManagement from './pages/UserManagement';
import CourseDetail from './pages/CourseDetail';
import PageNotFound from './pages/PageNotFound';

import {HomeTemplate} from './templates/homeTemplate'
import { AdminTemplate } from './templates/AdminTemplate';




function App() {

  return (
    <BrowserRouter>
    <Switch>
    <HomeTemplate exact path='/' Component={Home}/>
      <HomeTemplate exact path='/home' Component={Home}/>
      <Route exact path='/signup' component={SignUp}/>
      <Route exact path='/login' component={Login}/>
      {/* <HomeTemplate exact path='/coursedetail/:id' Component={CourseDetail}/> */}
      <HomeTemplate exact path='/coursedetail' Component={CourseDetail}/>
      <AdminTemplate exact path='/admin/coursesmanagement' Component={CourseManagement}/>
      <AdminTemplate exact path='/admin/usersmanagement' Component={UserManagement}/>
      <HomeTemplate exact path='/search' Component={Search}/>
      <HomeTemplate exact path='/categories/:name' Component={CategoryDetail}/>
      <HomeTemplate exact path='*' Component={PageNotFound}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;